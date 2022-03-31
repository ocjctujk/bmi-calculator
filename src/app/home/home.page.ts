import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  bmi= 0;
  kgMode = 'kg/m';
  poundMode = 'lbs/in';
  mode = '';
  color = '';
  weightText = '';
  constructor() {}
  onSelect(event) {
    this.mode = event.detail.value;
    console.log(this.mode);
  }
  ngOnInit(): void {
    this.mode = this.kgMode;
  }

  onCalculateBMI(weight: any,height: any){
    if(weight<=0 || weight>500 || height<=0 || height>80){
      alert("Please type valid weight/height");
      return;
    }
    if(this.mode===this.kgMode){
      this.bmi = weight/(height*height);
    }
    else{
      this.bmi = 703*weight/(height*height);
    }
    console.log(this.bmi);
    if(this.bmi<20){
      this.weightText='underweight';
      this.color='warning'
    }else if(this.bmi<25){
      this.weightText='normal';
      this.color='success'
    }else if(this.bmi>25 && this.bmi<30){
      this.weightText='overweight';
      this.color='warning'
    }else if(this.bmi>30){
      this.weightText='obese';
      this.color = 'danger'
    }
  }

}
