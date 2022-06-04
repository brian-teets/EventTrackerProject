# Event Tracker Project - using REST APIs

## Weekend Project for Skill Distillery: Cohort SD33

### Project Overview

`Event Tracker is a broad term for anything that keeps track of information over time. Examples of these applications are 'Mint' (financial tracking)
and 'MyFitnessPal' (diet and exercise tracker). These are very involved applications with a huge feature set.`

`This is a weekend project that is limited in scope. Examples of limited scope would be 'Gas Tracker' (keep track of your fill ups and total mileage
to determine dollar/gallon in your car) or 'Timesheet' (track time in and time out to calculate total hours at some rate of pay).`

### Learning Objectives

* Create a JPA Project
  * Create a Java entity class POJO that models your database table. This is set up as a single table project.
  * Map your POJO using JPA.

* Configure a Spring Boot app to publish a REST API.
  * Use Spring REST annotations.
  * Use Spring Data JPA to perform all CRUD operations.
       * Implement operations including: Create, Read `(show list of all & show a record by its id)`, Update, Delete.
  * Send and receive JSON.

### How to Run
   * Project will have been deployed to my AWS EC2 server.
   * Project does not have a front-end implemented, so the `routes can be tested using Postman. See table below which includes route information.`

   | Return Type      | Route           | Functionality     |
   | :----:             |    :----:       |          :----:     |
   | List<Water>      | GET api/water | READ Operation to show list of all water log entries  |
   | Water object     | GET api/water/{id}   | READ Operation to show a water log entry by its id  |
   | Water object     | POST api/water  | CREATE Operation to create a new water log entry  |
   | Water object     | PATCH api/water/{id}   | UPDATE Operation to update an existing water log entry by its id  |
   | Boolean     | DELETE api/water/{id}   | DELETE Operation to delete a water log entry by its id  |

### Technologies Used
   * Java
   * Spring Data JPA
   * Spring Boot
   * Jpa Repository
   * SQL
   * REST
   * Postman
   * git
   * AWS EC2

### Lessons Learned
   * Gained hands on experience performing CRUD operations using Spring Data JPA and Jpa Repository - this was an adjustment from previous projects utilizing
   DAO and DAOImpl.
   * Gained hands on experience sending and receiving data via JSON and seeing data persist to local database.
