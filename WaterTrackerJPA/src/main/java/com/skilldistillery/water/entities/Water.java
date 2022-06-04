package com.skilldistillery.water.entities;

import java.time.LocalDateTime;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Table(name = "water_tracker") 
@Entity
public class Water {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name = "amount_in_ounces")
	private double amountInOunces;
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
	
	
	public Water() {}


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	

	public double getAmountInOunces() {
		return amountInOunces;
	}


	public void setAmountInOunces(double amountInOunces) {
		this.amountInOunces = amountInOunces;
	}


	public Boolean getIsSparklingWater() {
		return isSparklingWater;
	}


	public void setIsSparklingWater(Boolean isSparklingWater) {
		this.isSparklingWater = isSparklingWater;
	}


	public String getWaterLogComment() {
		return waterLogComment;
	}


	public void setWaterLogComment(String waterLogComment) {
		this.waterLogComment = waterLogComment;
	}


	public LocalDateTime getCreatedAt() {
		return createdAt;
	}


	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}


	public LocalDateTime getUpdatedAt() {
		return updatedAt;
	}


	public void setUpdatedAt(LocalDateTime updatedAt) {
		this.updatedAt = updatedAt;
	}
	


	@Override
	public String toString() {
		return "Water [id=" + id + ", amountInOunces=" + amountInOunces + ", isSparklingWater=" + isSparklingWater
				+ ", waterLogComment=" + waterLogComment + ", createdAt=" + createdAt + ", updatedAt=" + updatedAt
				+ "]";
	}


	@Override
	public int hashCode() {
		return Objects.hash(id);
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Water other = (Water) obj;
		return id == other.id;
	} 

}
