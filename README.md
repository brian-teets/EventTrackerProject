# Event Tracker Project - using REST APIs

## Weekend Project for Skill Distillery: Cohort SD33

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
   * Project will have been deployed to my AWS EC2 server.
   * Project does not have a front-end implemented. `Routes can be tested using Postman. See table below which includes route information.`

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

### Lessons Learned
   * Gained hands on experience performing CRUD operations using Spring Data JPA and Jpa Repository + Service / ServiceImpl and Controller - this was
   an adjustment, but also an upgrade from previous projects utilizing DAO and DAOImpl.
   * Gained hands on experience sending and receiving data via `JSON` and seeing data persist to local database.
