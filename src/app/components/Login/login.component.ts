import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class loginComponent implements OnInit {
    constructor (){}

    ngOnInit() {
        
    }

  viewCart: boolean = false;
  myCart$ = this.storeService.myCart$;




  constructor(private storeService: StoreService) { }

  onToggleCart() {
    this.viewCart = !this.viewCart

  };


}