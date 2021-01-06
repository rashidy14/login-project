import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products} from './products';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    }
  
  products : Products[] = [new Products(1,"iPhone",103212131,"USA",'01/01/2020',1500),
                           new Products(2,"Sony",155313515,"China","30/09/2019",800),
                          new Products(3,"Samsung",198895234,"North Korea","02/09/2018",900)];
  readonlyFlag : boolean = true;
  logoutAction(){ 

  
    this.router.navigate(['login']);
    
}
save(){
  for(let product of this.products){
    console.log(product.getDescription())
    this.readonlyFlag = true
  }
}
update(){
  this.readonlyFlag = false
}                       
  
}


