# Event Tracker Project - Using Angular Framework

## Weekend Project for Skill Distillery: SD33 cohort

### Learning Objectives

* Configure an Angular application
  * Use:
       * Components
       * Services
       * Directives
  * Send and receive JSON
  * Send asynchronous request to Java controller with http

### Project Overview

  This event tracker project is an exercise in keeping track of information over time and persisting information to a database.

  This projects takes an iterative approach. Build a backend using Java, SQL, and testing in Postman. Then, create a dynamic front end
  using plain Javascript and HTML to interact with the backend and take advantage of the CRUD operations. Then, build a more modular, easier to
  use frontend using the Angular framework to replace the plan Javascript and HTML from the previous weekend.

### My Project Implementation - Personal Water Tracker

   For my project, I decided to create a personal water tracker to log water intake.

   For this iteration of the project, I created an Angular frontend.

### How to Run
   * Project has a front end and can be viewed via link to project domain name on my AWS EC2 server: http://52.8.112.153:8080/WaterTracker/

   * For reference, here are the backend controller routes:

   | Return Type     | Route          | Functionality    |
   |-----------------|-----------------|-----------------|
   | `List<Water>` | `GET api/water` | READ Operation to show list of all water log entries.  |
   | Water object    | `GET api/water/{id}`  | READ Operation to show a water log entry by its id.  |
   | Water object     | `POST api/water`  | CREATE Operation to create a new water log entry.  |
   | Water object     | `PATCH api/water/{id}`   | UPDATE Operation to update an existing water log entry by its id.  |
   | Boolean     | `DELETE api/water/{id}`   | DELETE Operation to delete a water log entry by its id.  |


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
   * Javascript
   * HTML
   * Angular

### Lessons Learned
   * Gained hands on experience creating and configuring an Angular project using the Angular CLI.
   * Gained experience using the Angular DatePipe to transform the presentation of date / timestamps in the browser.
   * Learned a lesson on where it's best to place a click event.
