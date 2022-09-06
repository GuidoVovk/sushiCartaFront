import { Component, OnInit } from '@angular/core';
import { CartaExtra } from 'src/app/Modelo/cartaExtra';
import { CartaExtraService } from 'src/app/servicios/carta-extra.service';

@Component({
  selector: 'app-add-carta-extra',
  templateUrl: './add-carta-extra.component.html',
  styleUrls: ['./add-carta-extra.component.css']
})
export class AddCartaExtraComponent implements OnInit {
  nombreCombo = '';
  cantidad = '';
  nombreRolls = '';
  precioCombo = '';

  constructor(private cartaExtraService: CartaExtraService) { }

  ngOnInit(): void {
  }

  
  onCreate(): void{
    const cartaExtra = new CartaExtra(this.nombreCombo, this.cantidad, this.nombreRolls, this.precioCombo);
    this.cartaExtraService.save(cartaExtra).subscribe(data=>{
      alert ("Añadido con éxtito");
      window.location.reload();
    }, err => {
      alert("No se pudo añadir");
    })
  }

}
