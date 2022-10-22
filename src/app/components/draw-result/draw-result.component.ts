import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface IDataForm{
  number: string
}

@Component({
  selector: 'app-draw-result',
  templateUrl: './draw-result.component.html',
  styleUrls: ['./draw-result.component.css']
})
export class DrawResultComponent implements OnInit {

  number!: number
  randNumber!: number


  constructor(
    private router: Router
  ) {
    const navigation = this.router.getCurrentNavigation()
    const state = navigation?.extras.state as IDataForm

    if(!state?.number){
      this.router.navigate(['/home'])
      return
    }
    this.number = parseInt(state.number)

   }

  ngOnInit(): void {
    this.randNumber = this.randomNumber(1, 100)
  }

  randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  get result(){
    return this.number === this.randNumber
  }
}
