import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Iproduct } from '../iproducts';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit{
  constructor(private _ProductsService:ProductsService){

  }
  Products:Iproduct[]=[]

  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({
      next:(res)=>{
        this.Products=res
        

      },
      error:(err)=>{
        console.log(err)


      }
    })
    

    
  }
}
