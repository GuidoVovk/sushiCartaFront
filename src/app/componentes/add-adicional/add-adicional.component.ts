import { Component, OnInit } from '@angular/core';
import { Adicional } from 'src/app/Modelo/adicional';
import { AdicionalService } from 'src/app/servicios/adicional.service';

@Component({
  selector: 'app-add-adicional',
  templateUrl: './add-adicional.component.html',
  styleUrls: ['./add-adicional.component.css']
})
export class AddAdicionalComponent implements OnInit {
  nombreA: string = '';
  precioA: string = '';
  precioB: string = '';
  precioEnvio: string = '';
  precioEnvioDos: string = '';

  constructor(private adicionalService: AdicionalService ) { }

  ngOnInit(): void {
  }

  onCreateA(): void{
    const adicional = new Adicional(this.nombreA, this.precioA, this.precioB, this.precioEnvio, this.precioEnvioDos);
    this.adicionalService.save(adicional).subscribe(data=>{
      alert ("Añadido con éxito");
      window.location.reload();
    }, err => {
      alert("No se pudo añadir");
    })
  }

}
