import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import {products} from ''

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

// export class ProductAlertsComponent {
//   @Input() product;
//   @Output() notify = new EventEmitter();
// }

  export class ProductAlertsComponent implements OnInit {
    @Input() product;
    @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
   }

}