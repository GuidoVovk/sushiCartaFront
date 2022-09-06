import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carta } from 'src/app/Modelo/carta';
import { CartaService } from 'src/app/servicios/carta.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {
  nombre: string = '';
  descripcion: string = '';
  img: string = '';
  precio: string = '';

  constructor(private cartaService: CartaService, private router: Router) { }

  ngOnInit(): void {
  }


  onCreate(): void{
    const carta = new Carta(this.nombre, this.descripcion, this.img, this.precio);
    this.cartaService.save(carta).subscribe(data=>{
      alert ("Producto añadido");
      window.location.reload();
    }, err => {
      alert("No se pudo añadir");
    })
  }



}
