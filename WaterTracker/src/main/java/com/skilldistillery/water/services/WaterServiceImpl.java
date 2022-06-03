package com.skilldistillery.water.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.water.entities.Water;
import com.skilldistillery.water.repositories.WaterRepository;

@Service
public class WaterServiceImpl implements WaterService {
	
	@Autowired
	private WaterRepository waterRepo;

	@Override
	public List<Water> index() {
		return waterRepo.findAll(); 
	}

}
