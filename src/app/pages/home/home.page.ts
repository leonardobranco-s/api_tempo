import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromHomeActions from './state/home.actions';



@Component({
  selector: 'jv-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  searchControl: Formcontrol;

  constructor(private store: Store) {
   }

  ngOnInit(): void {
    this.searchControl = new FormControl(' ', Validators.required);
  }

  doSearch() {
    const text = this.searchControl.value;
    this.store.dispatch(fromHomeActions.changeText({ text: }));
  }

}
