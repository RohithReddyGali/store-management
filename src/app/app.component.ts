import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { displayAction } from './store-data/product.actions';
import { productDisplayState } from './store-data/product.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'store-management';
  display! : boolean;

  constructor(private store:Store<any>) {}

  ngOnInit() {
    this.store.select(productDisplayState).subscribe((displayState:boolean)=> {
      this.display = displayState
    })
  }

  changeState() {
    this.store.dispatch(displayAction())
  }
}
