import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-productrow',
  templateUrl: './productrow.component.html',
  styleUrls: ['./productrow.component.css']
})
export class ProductrowComponent implements OnInit {
      @Input() columns: any;
      @Input() title: any; 

  constructor(private route: ActivatedRoute){ 
  }
   
  ngOnInit(): void {
   
    
  }

}
