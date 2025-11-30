## Expected Format
| Description | Input | Output |
| --- | --- | --- |
| Simple increment of a month starting | 01-01-2021 | 02-01-2021 |
| Simple increment of a normal day | 15-03-2021 | 16-03-2021 |
|  End date of month which has 30 days | 30-03-2021 | 01-04-2021 |
|  End date of month which has 31 days | 31-07-2021 | 01-08-2021 |
|  End date of consecutive months which has 31 days | 31-08-2021 | 01-09-2021 |
| Second last date which has 31 days give end date of month | 30-01-2021 | 31-01-2021 |
| increment after month ending which have 28 days | 28-02-2021 | 01-03-2021 |
| End date of the year | 31-12-2021 | 01-01-2022 |
| increment at the end of the century | 31-12-1999 | 01-01-2000 |
| if date extends 31 in month that has 31 days | 32-08-2022 | "Invalid Date" |
| if date extends 30 in month that has 30 days | 31-04-2022 | "Invalid Date" |
| if month extends 12  | 31-13-2022 | "Invalid Date" |
| if is a 2024(leap year) | 28-02-2024 | 29-02-2024 |
| if is a 2024(leap year) | 29-02-2024 | 01-03-2024 |
| if is a 1900(leap year) not divided by 400 | 28-02-1900 | 29-02-1900 |
| if is a 2023( not leap year) | 29-02-2023 | "Invalid Date"|