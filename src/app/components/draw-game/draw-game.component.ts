import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-draw-game',
  templateUrl: './draw-game.component.html',
  styleUrls: ['./draw-game.component.css']
})
export class DrawGameComponent implements OnInit {
  form!: FormGroup

  constructor(
    private formbuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.InitForm()
  }
  InitForm():void {
    this.form = this.formbuilder.group({
      number: [null, [Validators.required, Validators.pattern(/^(100|[1-9][0-9]|[1-9])$/)]]
    })
  }
  OnSubmit(): void {
    if(this.form.invalid){
      return
    }
    const navigateExtras: NavigationExtras = {
      state: this.form.value
    }
    this.router.navigate([
      '/result'
    ], navigateExtras)
  }
}
