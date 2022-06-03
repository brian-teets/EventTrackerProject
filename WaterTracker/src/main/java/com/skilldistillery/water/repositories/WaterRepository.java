package com.skilldistillery.water.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.water.entities.Water;

public interface WaterRepository extends JpaRepository<Water, Integer>{
	
	

}
