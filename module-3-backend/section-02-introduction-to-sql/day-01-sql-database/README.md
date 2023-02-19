# Day 1 - Contents: 

* What is and what are the `types` of `databases`; 
* `SQL` (Structured Query Language) is the `most used` language to `create`, `search`, `extract` and also `manipulate` data within a `relational database`; 
* How is the `information` (tables) `stored`; 
* `All searches` carried out within a `database` are done in `tables`, where `lines` represent an example, or instance, of what you want to represent, while `columns` describe some aspect of the represented entity; 
* Installing `MySQL Server` with `Docker🐋`: 
```js
docker container run --name container-mysql -e MYSQL_ROOT_PASSWORD=senha-mysql -d -p 3306:3306 mysql:5.7
```
* Stopping the container with the command: 
```js
docker container stop container-mysql
```
* Starting the container with the command: 
```js
docker container start container-mysql
```
* Removing the container with the command: 
```js
docker container rm container-mysql
```
* `MySQL` on the `Command Line`: 
* - After following the `previous steps`, you will now be able to `access your server` from the command line. To view which `databases` are `available`, through `docker's interactive` mode, you must access the `container-mysql` terminal with the command: 
```js
docker exec -it container-mysql bash
```
* - Then access `mysql inside the container`. Remember to `use the same password` used when creating the container: 
```js
mysql -u root -p
```
* - You can `see all databases` that are `currently installed` by typing the following command. `Don't forget the semicolon :)`: 
```js
SHOW DATABASES;
```
* - The `USE` command is used to define the `database reference` that will be `used` in the `query`, for example: 
```js
USE name_of_database_that_want_connect;
-- EX: USE trybe;
```
* - `Another way` to do reference to the database, without having to run the `USE` is in the `database_database.table` format, example: 
```js
SELECT * FROM database.table;
-- EX: SELECT * FROM trybe.students;
```
* - To return `all` initialized `tables` on your server `SHOW TABLES`; 
* - To view the `structure of a table`, use the command `DESCRIBE name_of_the_table`, example: `DESCRIBE students`; 
* - To `create a database` we use the command `CREATE DATABASE name_of_database`, example: `CREATE DATABASE trybe`; 
* Installing a `graphic interface` (`MySQL Workbench`); 
* Restoring the `sakila` practice database; 
* Using the `main features` of the `workbench` (`Crash course of the workbench`); 
* Constraints, `primary keys` and `foreign keys`; 
* As the `constraints are applied` to `columns` of tables, it is possible to `ensure` that the `data` inserted in them will be `consistent` according to the `defined rules`; 
* Some `types` of constraints: 
* - `NOT NULL` - If there is no default value (DEFAULT) defined, it will always be necessary to pass a `value` to that `field` when `inserting or changing` data;  
* - `UNIQUE`(VALUE) - There cannot be `another equal value` for this `column` registered in this `table`; 
* - `PRIMARY KEY` - The `column` that has this `constraint` is a `unique identifier` and by definition it is also `NOT NULL` and `UNIQUE`; 
* - `FOREIGN KEY`(VALUE) - He does reference to the primary key (PRIMARY KEY) of `another table`, allowing a `relationship between tables`; 
* - `DEFAULT` - If `no value` is inserted in the column (or if the `user` enters a `null value`), the `constraint` will place the `default value` passed to it; 
* - Database `entities` refers to a `table` that represents some `real-world concept` you want to `describe` (person, events, what will happen) and its `properties` (time, event time, event name), example: 
```js
Entity: Person.
Properties: Height, Weight, Age.
```
* The `entity` is our table inside a database and the `properties` are part of that table; 
* Types of relationships: `One to One`(1:1), `One to Many`(1:N), `Many to One`(N:1) and `Many to Many`(N:N); 
* - `(1:1)` `A row in Table 1` must only have `a corresponding row in Table 2` or vice versa, example: 
```js
Table 1 -> Employee      <------->      Table 2 -> Payment
   `EmployeeId`                             `PaymentId`
      `Name`                              `MonthlySalary`
    `Lastname`
    `PaymentId`
```
* - `(1:N)` and `(N:1)` `A row in table 1` can have `several matching rows in table 2`, but `a row in table 2` can only have `one matching row in table 1`, example: 
```js
Table 1 -> Book      <------->      Table 2 -> Category
     `Id`                               `CategoryId`
    `Name`                                 `Name`
 `CategoryId`
```
* - `(N:N)` `A row in table 1` can have `many corresponding rows in table 2` and vice versa, example: 
```js
Table 1 -> Actor      <------->      Table 2 -> Film_Actor      <------->      Table 3 -> Film
   `ActorId`                               `ActorId`                              `FilmId`
  `First_Name`                              `FilmId`                               `Title`
     `...`                                   `...`                                  `...`
```
