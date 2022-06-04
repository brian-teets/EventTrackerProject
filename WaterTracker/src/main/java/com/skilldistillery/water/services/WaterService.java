package com.skilldistillery.water.services;

import java.util.List;

import com.skilldistillery.water.entities.Water;

public interface WaterService {
	
	List<Water> index(); // show all water log entries
	Water showLogById(int id); // show a single water log entry by its id
	Water createNewWaterLog(Water water); // creates a new water log entry
	Water updateWaterLog(Water water, int id); // update an existing water log entry
	Boolean deleteWaterLogEntry(int id); // delete a water log entry by its id  
	
}
