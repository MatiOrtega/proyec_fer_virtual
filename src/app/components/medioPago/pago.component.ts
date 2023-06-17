import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-MedioPago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.scss']
})
export class MedioPagoComponent implements OnInit {
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