import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-Em',
  templateUrl: './em.component.html',
  styleUrls: ['./em.component.scss']
})
export class EmprendedoresComponent implements OnInit {
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