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
    })
  }

}
