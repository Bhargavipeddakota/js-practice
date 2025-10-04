function isleapYear(year) {

  if (year === 0) {
    return false;
  }
  const isDivisibleByFour = year % 4 === 0;
  const isDivisibleByHundred = year % 100 === 0;
  const isDivisibleByFourHundred = year % 400 === 0;
  const isLeapYear = (isDivisibleByFour && (!isDivisibleByHundred)) || isDivisibleByFourHundred;

  return isLeapYear;
}

function monthEndchecking(month, year) {

  if (month === 2 && isleapYear(year)) {
    return 29;
  }
  if (month === 2 && (!isleapYear(year))) {
    return 28;
  }
  if (month % 2 === 0 && month < 7) {
    return 30;
  }
  if (month % 2 !== 0 && month > 7) {
    return 30;
  }
  return 31;
}

function changeDate(date) {

  let nextDate = date;
  const monthAndYear = date.slice(2, date.length);
  const month = parseInt(date.slice(3, 5));
  const day = parseInt(date.slice(0, 2));
  const year = parseInt(date.slice(6, date.length));
  const monthAndDate = date.slice(0, 6);
  const endDate = monthEndchecking(month, year);

  if (day < endDate) {
    nextDate = (day + 1) + monthAndYear;
    return nextDate;
  }
  if (monthAndDate === "31-12-") {
    nextDate = "01-01-" + (year + 1);
    return nextDate;
  }
  if (day === endDate) {
    nextDate = "01-" + (month + 1 + '').padStart(2, '0') + date.slice(5, date.length);
    return nextDate;
  }

  return "Invalid Date";

}

function nextDate(date) {

  if (date === "31-12-9999") {
    return "Invalid Date";
  }
  let futureDate = "";
  futureDate = changeDate(date);
  return futureDate;

}

function testNextDate(discription, date, expected) {
  const actual = nextDate(date);
  const isPass = actual === expected;
  const icon = isPass ? "✅" : "❌";
  let message = `\t${icon} ${discription}\n`;

  message += isPass ? "" : `\t   | Input    : ${date} \n`;
  message += isPass ? "" : `\t   | Actual   : ${actual}`;
  message += isPass ? "" : `\n\t   | Expected : ${expected}\n`;

  console.log(message);
}
testNextDate("simple increment", "01-01-2000", "2-01-2000");
testNextDate("End date of month which has 31 days", "31-01-2000", "01-02-2000");
testNextDate("End date of month which has 30 days", "30-10-1999", "31-10-1999");
testNextDate("End date of 7th month which has 31 days", "31-07-2021", "01-08-2021");
testNextDate("End date of 8th month which has 31 days", "31-08-2021", "01-09-2021");
testNextDate("Second last date which has 31 days", "30-01-2000", "31-01-2000");
testNextDate("increment after month ending which have 28 days", "28-02-2023", "01-03-2023");
testNextDate("End date of the year", "31-12-1999", "01-01-2000");
testNextDate(" if is a 2024(leap year) ", "28-02-2024", "29-02-2024");
testNextDate("if is a 1900(leap year) not divided by 400", "28-02-1900", "01-03-1900");
testNextDate("date extendes the endDate", "30-02-2023", "Invalid Date");
testNextDate("if is a 2023( not leap year)", "29-02-2023", "Invalid Date");
testNextDate("month extends 12", "31-13-2022", "Invalid Date");
testNextDate("0000 is not leapYear", "28-02-0000", "01-03-0000");
testNextDate("9999 is not leapYear", "28-02-9999", "01-03-9999");
testNextDate("end of 9999", "31-12-9999", "Invalid Date");
