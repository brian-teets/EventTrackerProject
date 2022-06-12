package com.skilldistillery.water.services;

import java.util.List;
import java.util.Optional;

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

	@Override
	public Water showLogById(int id) {
		Optional<Water> waterOpt = waterRepo.findById(id);
		Water waterLog = null;
		if (waterOpt.isPresent()) {
			waterLog = waterOpt.get();
		}
		return waterLog;
	}

	@Override
	public Water createNewWaterLog(Water water) {
		double DEFAULT_AMOUNT_IN_OUNCES = 12.00;
		Boolean DEFAULT_IS_SPARKLING_WATER = false;
		String DEFAULT_WATERLOG_COMMENT = "Default water log comment.";
		if (water.getAmountInOunces() == null) {
			water.setAmountInOunces(DEFAULT_AMOUNT_IN_OUNCES);
		}
		if (water.getIsSparklingWater() == null) {
			water.setIsSparklingWater(DEFAULT_IS_SPARKLING_WATER); 
		}
		if (water.getWaterLogComment() == null) {
			water.setWaterLogComment(DEFAULT_WATERLOG_COMMENT); 
		}
		return waterRepo.saveAndFlush(water); 
	}

	@Override
	public Water updateWaterLog(Water water, int id) {
		Water existingLog = showLogById(id);

		existingLog.setAmountInOunces(water.getAmountInOunces());
		existingLog.setIsSparklingWater(water.getIsSparklingWater());
		existingLog.setWaterLogComment(water.getWaterLogComment()); 
		return waterRepo.saveAndFlush(existingLog);
	}

	@Override
	public Boolean deleteWaterLogEntry(int id) {
		waterRepo.deleteById(id);
		return !waterRepo.existsById(id); 
		
	} 

}
