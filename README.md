# Event Tracker Project - using REST APIs

## Weekend Project for Skill Distillery: SD33 cohort

### Learning Objectives

* Create a JPA Project
  * Create a Java entity class POJO that models database table. This project is set up with a single database table.
  * Map POJO using JPA.

* Configure a Spring Boot app to publish REST APIs.
  * Use Spring REST annotations.
  * Use Spring Data JPA to perform all CRUD operations.
       * Implement operations including: Create, Read (show list of all & show a record by its id), Update, Delete.
  * Send and receive JSON.

### Project Overview

  This event tracker project is an exercise in keeping track of information over time and persisting information to a database.

  This weekend project is intentionally limited in scope. The main goal is to gain hands on experience implementing REST APIs utilizing Spring Data JPA
  and Spring Boot.

### My Project Implementation - Personal Water Tracker

   For my weekend project, I decided to create a personal water tracker to log water intake over time.

   I created a single SQL table in MySQL Workbench. Then, I created a Java entity to map to my SQL table. I then implemented a Spring JPA Repository,
   Service, ServiceImpl and Controller.

   I implemented CRUD operations in this project - each of which mapped to REST controller routes. I tested my API routes using Postman, and confirmed that
   JSON data sent / received and persisted data to my local database.

   When returning for the second weekend, I implemented Javascript and an HTML index page for a front end.

### Entity Code Snippet

#### Water entity code snippet to show data fields used


```
@Table(name = "water_tracker")
@Entity
public class Water {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name = "amount_in_ounces")
	private Double amountInOunces;
	@Column(name = "is_sparkling")
	private Boolean isSparklingWater;
	@Column(name = "water_log_comment")
	private String waterLogComment;
	@Column(name = "created_at")
	@CreationTimestamp
	private LocalDateTime createdAt;
	@Column(name = "updated_at")
	@UpdateTimestamp
	private LocalDateTime updatedAt;
  ```

### How to Run
   * Project now has a front end and can be tested via link to project domain name on my AWS EC2 server, which I'll post here:

   * For reference, here are the backend controller routes:

   | Return Type     | Route          | Functionality    |
   |-----------------|-----------------|-----------------|
   | `List<Water>` | `GET api/water` | READ Operation to show list of all water log entries.  |
   | Water object    | `GET api/water/{id}`  | READ Operation to show a water log entry by its id.  |
   | Water object     | `POST api/water`  | CREATE Operation to create a new water log entry.  |
   | Water object     | `PATCH api/water/{id}`   | UPDATE Operation to update an existing water log entry by its id.  |
   | Boolean     | `DELETE api/water/{id}`   | DELETE Operation to delete a water log entry by its id.  |

   * For testing on the front end now using the index page, you will see a table at the top left of the page containing a list of all current log entries.
   * You can click on any row of this index table to dynamically display a detail view of that specific record. The detail view will dynamically generate in
   a div section below. This is controlled by code in the Javascript file.
   * With the detail view open, you have the ability to delete that specific record by clicking the `Delete This Entry` button. That log entry will be deleted
   from the database, and the table view and detail view will reload to reflect the change.
   * Also, when in the detail view, you will see that that entries values have been loaded to the `Add A New Water Log Entry` at the right side of the window.
   This was implemented for reusability of the existing form and for a slightly simpler implementation. From the form, you can edit / update this specific entry.
   Hit the `Update Selected Entry` button.
   * Additionally, you can `create` a new log entry using the `Add A New Water Log Entry` and hitting the `Add Water Log` button.

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

### Lessons Learned
   * Gained hands on experience performing CRUD operations using Spring Data JPA and Jpa Repository + Service / ServiceImpl and Controller - this was
   an adjustment, but also an upgrade from previous projects utilizing DAO and DAOImpl.
   * Gained hands on experience sending and receiving data via `JSON` and seeing data persist to local database.
   * The biggest challenges on the Javascript side were related to DOM traversal and dynamic DOM manipulation.
