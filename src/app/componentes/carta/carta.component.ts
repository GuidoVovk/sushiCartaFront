import { Component, OnInit } from '@angular/core';
import { Adicional } from 'src/app/Modelo/adicional';
import { Carta } from 'src/app/Modelo/carta';
import { CartaExtra } from 'src/app/Modelo/cartaExtra';
import { AdicionalService } from 'src/app/servicios/adicional.service';
import { CartaExtraService } from 'src/app/servicios/carta-extra.service';
import { CartaService } from 'src/app/servicios/carta.service';



@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  carta: Carta[] =[];
  cartaExtra: CartaExtra[] = [];
  adicional: Adicional[] = [];
  showForm:boolean = false;
  showForm2:boolean = false;
  showEditOp: boolean = false;
  
  

  constructor(private cartaService: CartaService, private cartaExtraService: CartaExtraService, private adicionalService: AdicionalService) { }

  ngOnInit(): void {
    this.cargarCarta();
    this.cargarCartaExtra();
    this.cargarAdicional();
    
}

cargarCarta():void{
  this.cartaService.lista().subscribe(
    data =>{
      this.carta = data;
    }, err => {
      alert("No se pudo cargar");
    }
  )
}

cargarCartaExtra():void{
  this.cartaExtraService.lista().subscribe(
    data =>{
      this.cartaExtra = data;
    }, err => {
      alert("No se pudo cargar");
    }
  )
}

cargarAdicional():void{
  this.adicionalService.lista().subscribe(
    data =>{
      this.adicional = data;
    }, err => {
      alert("No se pudo cargar");
    }
  )
}

show(){
  this.showForm = !this.showForm;
}

show2(){
  this.showForm2 = !this.showForm2;
}

showEdit(){
  this.showEditOp = !this.showEditOp;
}



onDelete(id?:number){
  if(id != undefined){
    this.cartaService.delete(id).subscribe(
      data => {
        alert("Producto eliminado");
        this.cargarCarta();
      }, err => {
        alert("No se pudo borrar el producto");
      }
    )
  }
}

onDeleteExtra(id?:number){
  if(id != undefined){
    this.cartaExtraService.delete(id).subscribe(
      data => {
        alert("Producto eliminado");
        this.cargarCarta();
      }, err => {
        alert("No se pudo borrar el producto");
      }
    )
  }
}


}

