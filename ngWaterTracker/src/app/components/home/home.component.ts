import { WaterService } from './../../services/water.service';
import { Component, OnInit } from '@angular/core';
import { Water } from 'src/app/models/water';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  waterLog: Water[] = [];

  constructor(
    private waterSvc: WaterService
  ) { }

  ngOnInit(): void {
    this.reload();
  }

  reload(){
    this.waterSvc.index().subscribe({
      next: (listAll)=>{
        this.waterLog = listAll;
      },
      error: (fail)=>{
        console.log('HomeComponent.reload: error loading list');
        console.log(fail);
      }
    });
  }

  getNumOfWaterLogEntries(){
    return this.waterLog.length;
  }

  newWaterLog: Water = new Water();
  selected: null | Water = null;

  displayWaterLogDetail(water: Water){
    this.selected = water;
  }

  displayTable(){
    this.selected = null;
  }

  addWaterLog(water: Water){
    this.waterSvc.create(water).subscribe({
      next: (newWaterLog) =>{
        this.newWaterLog = new Water();
        this.reload();
      },
      error: (fail) => {
        console.error('HomeComponent.addWaterLog(): error creating water log:');
        console.error(fail);
      },
    });
  }

  deleteWaterLogEntry(id: number): void {
    this.waterSvc.destroy(id).subscribe({
      next: () =>{
        this.newWaterLog = new Water();
        this.reload();
      },
      error: (zap) => {
        console.error('HomeHttpComponent.deleteWaterLogEntry(): error deleting water log entry:');
        console.error(zap);
      },
    });
  }

  editWaterLogEntry: null | Water = null;

  setEditWaterLogEntry(){
    this.editWaterLogEntry = Object.assign({}, this.selected);
    this.reload();
  }

  updateWaterLogEntry(id: number, water: Water, setSelected: boolean = true): void {
    this.waterSvc.update(id, water).subscribe({
      next: (updated) =>{
        if(setSelected){
          this.selected = updated; // back to detail view
        }
        this.editWaterLogEntry = null; // back to list table view
        this.reload();
    },
      error: (nojoy) => {
        console.error('HomeHttpComponent.updateWaterLogEntry(): error updating water log entry:');
        console.error(nojoy);
      },
    });
  }


}
