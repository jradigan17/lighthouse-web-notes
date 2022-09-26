## **Notes Week 11**
[Markdown Cheetsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) & [Shortcut Keys](../../shortcuts.md)

---------------------------------------------------

## **SQL Data Bases**

SQL - Structured Query Language

PK - Primary Key    
FK - Foreign Key

CRUD is going to be our guiding force here, too. A database needs to be able to be CRUD-like:

* Grow with new information (creating new rows/tables)
* Return requested information (retrieving rows/tables)
* Change existing data (updating rows/tables)
* Destroy data (deleting rows/tables).

This is the job of Relational Database Management Systems (RDBMS).

---------------------------------------------------

## **SQL Syntax**

```
CREATE DATABASE development;

CREATE TABLE users (
  full_name VARCHAR(100),
  username VARCHAR(100)
);

INSERT INTO users (full_name, username)
VALUES ("Boris Hadjur", "_DreamLead");

SELECT text, created_at FROM tweets WHERE username="_DreamLead";

UPDATE users
SET full_name="Boris H"
WHERE username="_DreamLead";

DELETE FROM users
WHERE username="_DreamLead";
```

Value types
* Integer
* Text
* VARCHAR
* INTERGER PRIMARY KEY
* NUMERIC

---------------------------------------------------

## **SQL Items - Databases**

https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m05w11/activities/700?journey_step=41

* ER Diagram (Entity Relationship Diagrahm)
  * Entities
    * Person, Place, Thing
      * Each occurence is an instance of the entity (rows)
    * Entity is the table
  * Attibutes
    * Describes characteristics of the entities (columns)
    * Can be unique or not
  * Primary Keys
    * Attribute that uniquely  identifies an instance of the entity (must be unique)
    * Some times need a composite key
  * Relationships
    * Describes how one or more entity interact with each other
  * Cardinality
    * The count of instances that are allowed or are necessary between entity relationships
    * Minimum & Maximum
    * Crow's foot notation
      * one - mandatory
      * many - mandatory
      * one - optional
      * many - optional

Rules
* Cannot have a many to many relationship
  * Must create a bridge table with one to many and many-optional to one 
* Composite Primary Key 
  * Using two keys to create the primary keys

IN - multiple OR statements   
'' - single quote - row     
"" - double quote - column name

---------------------------------------------------

## **PostgreSQl**

`psql`  
`CREATE DATABASE test_db;`  
`\c test_db;` 

Observe how the psql shell allows us to type commands across multiple lines. The semicolon ; at the end of a given command is what makes that command execute on the PG server.

`\i migrations/students_cohorts.sql` - add tables to database   
`\dt` - display tables    
`wget https://bit.ly/2Z0fN4t -O seeds/students.sql`
`\i seeds/cohorts.sql`    


---------------------------------------------------

## **SQL Tutorial**

https://www.khanacademy.org/computing/computer-programming/sql

```
CREATE TABLE pet_supplies (id INTEGER, item TEXT, type TEXT, inventory NUMERIC, price NUMERIC);
INSERT INTO pet_supplies VALUES (01, 'dog dish', 'essentials', 5, 15);
INSERT INTO pet_supplies VALUES (02, 'squeaky', 'toys', 8, 10);
INSERT INTO pet_supplies VALUES (03, 'freeze dried beef', 'food', 2, 30);
INSERT INTO pet_supplies VALUES (04, 'rabbit nuggets', 'treats', 35, 2);
INSERT INTO pet_supplies VALUES (05, 'kool kanine kollar', 'essentials', 6, 8);
INSERT INTO pet_supplies VALUES (06, 'dog bowl', 'essentials', 1, 12);
INSERT INTO pet_supplies VALUES (07, 'bear', 'toys', 3, 18);
INSERT INTO pet_supplies VALUES (08, 'freeze dried rabbit', 'food', 6, 38);
INSERT INTO pet_supplies VALUES (09, 'sweet potato duck', 'treats', 17, 9);
INSERT INTO pet_supplies VALUES (10, 'toads', 'treats', 5, 19);
INSERT INTO pet_supplies VALUES (11, 'brush', 'essentials', 3, 13);
INSERT INTO pet_supplies VALUES (12, 'squirrel', 'toys', 4, 10);
INSERT INTO pet_supplies VALUES (13, 'freeze dried lamb', 'food', 7, 32);
INSERT INTO pet_supplies VALUES (14, 'greenies', 'treats', 13, 13);
INSERT INTO pet_supplies VALUES (15, 'power bites', 'treats', 2, 9);

SELECT sum(inventory) FROM pet_supplies;
SELECT sum(inventory*price) FROM pet_supplies;
SELECT type, sum(inventory), sum(price) FROM pet_supplies GROUP BY type; 
SELECT * FROM pet_supplies ORDER BY price;
SELECT item FROM pet_supplies
```
---------------------------------------------------

## **Sample SQL Syntax**

https://sqlzoo.net/wiki/SQL_Tutorial
https://sqlzoo.net/wiki/Self_join
https://github.com/shaosh/SQLZoo/blob/master/SQL%20Exercise/Self%20Join.sql 

`INSERT INTO groceries VALUES (2, 'peanut butter", 1);`   
`SELECT * FROM groceries;`    
`SELECT name FROM groceries;`   
`SELECT * FROM groceries ORDER BY aisle;`   
`SELECT * FROM groceries WHERE aisle > 5 ORDER BY aisle;`   
`SELECT population FROM world WHERE name = 'France'`    
`SELECT name, population FROM world WHERE name IN ('Sweden', 'Norway', 'Denmark');`   
`SELECT name, area FROM world WHERE area BETWEEN 200000 AND 250000`   
`SELECT name, population FROM world WHERE name LIKE "Al%"`    
`SELECT name, population FROM world WHERE population BETWEEN 1000000 AND 1250000`   
`SELECT name, population FROM world WHERE name LIKE "Al%"`    
`SELECT name FROM world WHERE name LIKE '%a' OR name LIKE '%l'`   
`SELECT name,length(name) FROM world WHERE length(name)=5 and region='Europe'`    
`SELECT name, area*2 FROM world WHERE population = 64000`   
`SELECT name, area, population FROM world WHERE area > 50000 AND population < 10000000`   
`SELECT name, population/area FROM world WHERE name IN ('China', 'Nigeria', 'France', 'Australia')`   
`SELECT name, population, area FROM world WHERE area > 3000000 AND population < 250000000 OR  population > 250000000 AND area < 3000000`    
`SELECT name, ROUND(population/1000000, 2), ROUND(GDP/1000000000, 2) FROM world WHERE continent = 'South America'`    
`SELECT name, capital FROM world WHERE LEFT(name, 1) = LEFT(capital, 1) AND name <> capital`    
`SELECT name FROM world WHERE name LIKE 'B%' AND name NOT LIKE '%a%'`   
`SELECT name FROM world WHERE name LIKE '%a%a%a%'`    
`SELECT name FROM world WHERE name LIKE '_n%' ORDER BY name`    
`SELECT name FROM world  WHERE name LIKE '%o__o%'`    
`SELECT name FROM world WHERE capital =  concat(name, ' city')`   
`SELECT capital, name FROM world WHERE capital LIKE concat('%', name, '%')`   
`SELECT name, REPLACE(capital, name, ' ') FROM world WHERE capital LIKE concat(name, '%') AND capital <> name`    
`SELECT * FROM nobel WHERE winner LIKE 'EUGENE O''Neill'`   
`SELECT winner, yr, subject FROM nobel WHERE winner LIKE 'Sir%' ORDER BY 'yr'  DESC, 'winner'`    
`SELECT winner, subject FROM nobel WHERE yr=1984 ORDER BY CASE WHEN subject IN ('physics','chemistry') THEN 1 ELSE 0 END, subject, winner`    
`SELECT COUNT(DISTINCT yr) FROM nobel WHERE yr NOT IN (SELECT DISTINCT yr FROM nobel WHERE subject = 'Medicine')`   
`SELECT yr FROM nobel WHERE yr NOT IN(SELECT yr FROM nobel WHERE subject IN ('Chemistry','Physics'))`   
`SELECT DISTINCT yr FROM nobel WHERE subject='Medicine' AND yr NOT IN(SELECT yr FROM nobel WHERE subject='Literature') AND yr NOT IN (SELECT yr FROM nobel WHERE subject='Peace')`    
`SELECT continent, MIN(name) FROM world GROUP BY continent`   
`SELECT DISTINCT continent FROM world`    

Max, min, sum, average - aggregate functions    
`SELECT sum(quantity) FROM groceries`   
`SELECT sum(quantity) FROM groceries GROUP BY aisle`    
`SELECT aisle, sum(quantity) FROM groceries GROUP BY aisle`   
`SELECT type, sum(inventory), sum(price) FROM pet_supplies GROUP BY type;`    
`SELECT sum(inventory*price) FROM pet_supplies;`    

```
SELECT name FROM world
  WHERE population >
     (SELECT population FROM world
      WHERE name='Russia')
```

```
SELECT name
  FROM world
 WHERE population >= ALL(SELECT population
                           FROM world
                          WHERE population>0)
```

```
SELECT continent, name, area FROM world x
  WHERE area >= ALL
    (SELECT area FROM world y
        WHERE y.continent=x.continent
          AND area>0)
```

```
SELECT name, continent, population
  FROM world x
 WHERE 25000000 >= ALL
    (SELECT population FROM world y
        WHERE y.continent=x.continent
          AND area>0)
```
```
SELECT name, continent
FROM world x
WHERE population/3 > ALL (
  SELECT y.population
  FROM world y
  WHERE x.continent = y.continent
  AND x.name != y.name);
```
```
SELECT students.name as student_name, email, cohorts.name as cohort_name
FROM students JOIN cohorts ON cohort_id = cohorts.id;
```
An INNER JOIN will only give us rows where there is a match between the two tables. Any students with a cohort_id of NULL will not appear in the results of this kind of join.

```
SELECT students.name as student_name, email, cohorts.name as cohort_name
FROM students OUTER JOIN cohorts ON cohorts.id = cohort_id;
```

The LEFT OUTER JOIN will return all of the students, even ones without a cohort_id

The RIGHT OUTER JOIN will return all cohorts, even ones without any students enrolled.

The FULL OUTER JOIN will return all cohorts and all students, even when there is no match.

An OUTER JOIN will join the tables similarly to an INNER JOIN but will return all results for one of the tables, even when the join condition is not met. For any row where the condition was not met, a row is added with NULL data.

```
SELECT * FROM TableA
LEFT OUTER JOIN TableB
ON TableA.name = TableB.name
WHERE TableB.id IS null
```
```
SELECT * FROM TableA
FULL OUTER JOIN TableB
ON TableA.name = TableB.name
WHERE TableA.id IS null
OR TableB.id IS null
```

cross-join `SELECT * FROM student_grades, students;` is bad bad practice and will create a massive duplicated table

Self Join Tables
```
SELECT students.first_name, students.last_name, buddies.email as buddy_email
    FROM students
    JOIN students buddies
    ON students.buddy_id = buddies.id;
```
```
SELECT a.fullname, b.fullname 
FROM friends
JOIN persons a ON friends.person1_id = a.id
JOIN persons b ON friends.person2_id = b.id
```

```
SELECT a.company, a.num
FROM route a
JOIN route b ON a.num = b.num
JOIN stops x ON x.id = a.stop
JOIN stops y ON y.id = b.stop
WHERE x.name LIKE ('Craiglockhart') AND y.name LIKE 'Tollcross'
GROUP BY a.num, a.company
```
---------------------------------------------------
