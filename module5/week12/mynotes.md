## **Notes Week 12**
[Markdown Cheetsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) & [Shortcut Keys](../../shortcuts.md)

---------------------------------------------------

## **Normalizing**

1NF - First normal form
- no columns with variable amounts of values 
  - one and only one value per column
  - no commas and multiple values 
- no repeating group

---------------------------------------------------

## **SQL Basics**

FK - always going on the many side

* Use snake_case for table and column names.
* Pluralize tables names, column names should be singular.
* Call your primary key id.
* For most foreign keys use `<table>_id`

https://www.postgresql.org/docs/9.3/datatype.html

numeric types: SMALLINT, INTEGER, BIGINT, DECIMAL, NUMERIC, REAL, DOUBLE, SMALLSERIAL, SERIAL, BIGSERIAL

```
INSERT INTO users (id, birth_year)
VALUES (1, 2019);
```

* SELECT: get data from tables.
* INSERT: add rows to a table.
* UPDATE: update rows within a table.
* DELETE: delete rows from a table.

---------------------------------------------------

## **Alter Table SQL**

```
ALTER TABLE table_name action;
```

To add a new column to a table, you use ALTER TABLE ADD COLUMN statement:
```
ALTER TABLE table_name 
ADD COLUMN column_name datatype column_constraint;
```

To drop a column from a table, you use ALTER TABLE DROP COLUMN statement:
```
ALTER TABLE table_name 
DROP COLUMN column_name;
```

To rename a column, you use the ALTER TABLE RENAME COLUMN TO statement:
```
ALTER TABLE table_name 
RENAME COLUMN column_name 
TO new_column_name;
```

To change the type of a column
```
ALTER TABLE assets 
    ALTER COLUMN location TYPE VARCHAR,
    ALTER COLUMN description TYPE VARCHAR;
```

To change a default value of the column, you use ALTER TABLE ALTER COLUMN SET DEFAULT or  DROP DEFAULT:
```
ALTER TABLE table_name 
ALTER COLUMN column_name 
[SET DEFAULT value | DROP DEFAULT];;
```

To change the NOT NULL constraint, you use ALTER TABLE ALTER COLUMN statement:
```
ALTER TABLE table_name 
ALTER COLUMN column_name 
[SET NOT NULL| DROP NOT NULL];
```

To add a CHECK constraint, you use ALTER TABLE ADD CHECK statement:
```
ALTER TABLE table_name 
ADD CHECK expression;

ALTER TABLE links 
ADD CHECK (target IN ('_self', '_blank', '_parent', '_top'));
```

Generailly, to add a constraint to a table, you use ALTER TABLE ADD CONSTRAINT statement:
```
ALTER TABLE table_name 
ADD CONSTRAINT constraint_name constraint_definition;

ALTER TABLE links 
ADD CONSTRAINT unique_url UNIQUE ( url );
```

To rename a table you use ALTER TABLE RENAME TO statement:
```
ALTER TABLE table_name 
RENAME TO new_table_name;
```

---------------------------------------------------

## **Drop Table SQL**

`DROP TABLE IF EXISTS links;` - links being table name

`DROP TABLE links;`

`DROP TABLE links CASCADE;` - If we have multiple tables in our database, CASCADE will make sure that all records from other tables that depend on this table will also be deleted.

`DROP TABLE IF EXISTS users CASCADE;` - And to avoid any SQL errors, it's good to make sure the table exists before dropping it.

---------------------------------------------------

## **Create Default Values**
```
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  birth_year SMALLINT NOT NULL,
  member_since TIMESTAMP NOT NULL DEFAULT Now()
);

INSERT INTO users (name, birth_year)
VALUES ('Susan Hudson', 2000),
('Malloy Jenkins', 1000);
```
---------------------------------------------------

## **Postgres SQL - Serial Incrementing**

`id SERIAL PRIMARY KEY` - SERIAL is a pseudo-type that sets the column to be a NOT NULL INTEGER that's value will automatically increment.

---------------------------------------------------

## **Postgres SQL - Quick Reference**

* Primary key column:
  * Use the name id and then SERIAL PRIMARY KEY.
* Foreign key columns:
  * Add _id to the singular name of the column you are referencing.
  * If the primary key is SERIAL, then the foreign key should be INTEGER.
  * You also should create the foreign key with REFERENCES table_name(id) ON DELETE CASCADE.
* Names, emails, usernames and passwords can all be stored as VARCHAR(255). Students to cohorts would be cohort_id. The type would be INTEGER .
* Dates would use the DATE type. If we needed date and time, use TIMESTAMP.
* Numbers:
  * We will use INTEGER to represent most numbers. There are other sizes of integers as well.
  * SMALLINT -32,768 to 32,767 (thirty-two thousand)
  * INTEGER -2,147,483,648 to 2,147,483,647 (two billion)
  * BIGINT -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 (nine quintillion)
  * SERIAL 1 to 2,147,483,647 (auto incrementing)
* Dates, Phone Numbers & Currency
  * Become familiar with the ISO 8601 date formatting standard. The string '2018-02-12' uses this format to represent 'February 12th, 2018'. Year, month and then day. Dates should be stored consistently. Apply timezones and formatting when displayed to the user.
  * Store phone numbers as VARCHAR, there are so many possible formats. The number 214 748 3647 hits our INTEGER limit.
  * Store currency as an integer representing cents. Use a BIGINT if you need values over $21 million dollars.

---------------------------------------------------

## **INSERT INTO**
```
INSERT INTO TABLE_NAME (column1, column2, column3,...columnN)  
VALUES (value1, value2, value3,...valueN);

INSERT INTO CUSTOMERS (ID,NAME,AGE,ADDRESS,SALARY)
VALUES (1, 'Ramesh', 32, 'Ahmedabad', 2000.00 );
```

```
INSERT INTO TABLE_NAME VALUES (value1,value2,value3,...valueN);

INSERT INTO CUSTOMERS 
VALUES (7, 'Muffy', 24, 'Indore', 10000.00 );
```
```
INSERT INTO first_table_name [(column1, column2, ... columnN)] 
   SELECT column1, column2, ...columnN 
   FROM second_table_name
   [WHERE condition];
```

---------------------------------------------------

## **DELETE**

`DELETE FROM users WHERE id = 1;`

You can combine N number of conditions using AND or OR operators.

If you want to DELETE all the records from the CUSTOMERS table, you do not need to use the WHERE clause

`DELETE FROM CUSTOMERS;`

---------------------------------------------------

## **UPDATE**

```
UPDATE table_name
SET column1 = value1, column2 = value2...., columnN = valueN
WHERE [condition];
```

```
UPDATE CUSTOMERS
SET ADDRESS = 'Pune'
WHERE ID = 6;
```

If you want to modify all the ADDRESS and the SALARY column values in the CUSTOMERS table, you do not need to use the WHERE clause as the UPDATE query would be enough as shown in the following code block.
```
UPDATE CUSTOMERS
SET ADDRESS = 'Pune', SALARY = 1000.00;
```

---------------------------------------------------
