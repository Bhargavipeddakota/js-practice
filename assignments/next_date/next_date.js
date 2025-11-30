function padWithZero(text, length) {
  return `${text}`.padStart(length, "0");
}

function formatDate(day, month, year) {
  const newday = padWithZero(day, 2);
  const newMonth = padWithZero(month, 2);
  const newYear = padWithZero(year, 4);

  return `${newday}-${newMonth}-${newYear}`;
}

function isleapYear(year) {
  const isDivisibleBy4 = year % 4 === 0;
  const isDivisibleBy100 = year % 100 === 0;
  const isDivisibleBy400 = year % 400 === 0;
  const isDivisibleBy4ButNot100 = (isDivisibleBy4 && !isDivisibleBy100);

  return year !== 0 && (isDivisibleBy4ButNot100 || isDivisibleBy400);
}

function isEvenRow(month) {
  return month % 2 === 0;
}

function is30DaysMonth(month) {
  return isEvenRow(month) && month < 7 || !isEvenRow(month) && month > 7;
}

function endDateOfMonth(month, year) {
  if (month === 2) {
    return isleapYear(year) ? 29 : 28;
  }

  if (is30DaysMonth(month)) {

    return 30;
  }

  return 31;
}

function isEndDateOfMonth(day, month, year) {
  return day === endDateOfMonth(month, year);
}

function isEndOfYear(day, month) {
  return day === 31 && month === 12;
}

function isValidDate(day, month) {
  return day > 0 && month > 0 && month <= 12;
}

function calculateNextDate(day, month, year) {
  if (day < endDateOfMonth(month, year) && isValidDate(day, month)) {
    return formatDate(day + 1, month, year);
  }

  if (isEndOfYear(day, month)) {
    return formatDate(1, 1, year + 1);
  }

  if (isEndDateOfMonth(day, month, year)) {
    return formatDate(1, month + 1, year);
  }

  return "Invalid Date";
}

function nextDate(date) {
  const day = parseInt(date.slice(0, 2));
  const month = parseInt(date.slice(3, 5));
  const year = parseInt(date.slice(6, date.length));

  return calculateNextDate(day, month, year);

}

function generateEmoji(actual, expected) {
  return actual === expected ? "✅" : "❌";
}

function composeMsg(description, date, actual, expected) {
  const icon = generateEmoji(actual, expected);
  let message = `\t${icon} ${description}`;
  if (actual !== expected) {
    message += `\n\t   | Input    : ${date} \n`;
    message += `\t   | Actual   : ${actual}\n`;
    message += `\t   | Expected : ${expected}\n`;
  }

  return message;
}

function testNextDate(description, date, expected) {
  const actual = nextDate(date);
  console.log(composeMsg(description, date, actual, expected));
}

function testAllNextDate() {
  testNextDate("simple increment", "01-01-2000", "02-01-2000");
  testNextDate("jan 31 ", "31-01-2000", "01-02-2000");
  testNextDate("oct 30", "30-10-1999", "31-10-1999");
  testNextDate("july 31", "31-07-2024", "01-08-2024");
  testNextDate("aug 31", "31-08-2021", "01-09-2021");
  testNextDate("jan 30", "30-01-2000", "31-01-2000");
  testNextDate("feb 28 (non leap year)", "28-02-2023", "01-03-2023");
  testNextDate("End date of the year", "31-12-1999", "01-01-2000");
  testNextDate("if is a 2024(leap year) ", "28-02-2024", "29-02-2024");
  testNextDate("date extendes the endDate", "31-04-2023", "Invalid Date");
  testNextDate("if is a 2023( not leap year)", "29-02-2023", "Invalid Date");
  testNextDate("month extends 12", "31-13-2022", "Invalid Date");
  testNextDate("0000 is not leapYear", "29-02-0000", "Invalid Date");
  testNextDate("9999 is not leapYear", "28-02-9999", "01-03-9999");
  testNextDate("end of 0000", "31-12-0000", "01-01-0001");
  testNextDate("date is 0", "0-12-0000", "Invalid Date");
  testNextDate("0th month", "01-00-0000", "Invalid Date");
  testNextDate("0th month", "29-13-2004", "Invalid Date");
  testNextDate("Day out of bound", "42-01-2004", "Invalid Date");
}

testAllNextDate();