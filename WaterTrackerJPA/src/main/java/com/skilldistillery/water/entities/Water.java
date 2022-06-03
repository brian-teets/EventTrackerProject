package com.skilldistillery.water.entities;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "water_tracker") 
@Entity
public class Water {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private double quantity;
	
	
	public Water() {}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public double getQuantity() {
		return quantity;
	}


	public void setQuantity(double quantity) {
		this.quantity = quantity;
	}


	@Override
	public String toString() {
		return "Water [id=" + id + ", quantity=" + quantity + "]";
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
