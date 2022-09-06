import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Adicional } from 'src/app/Modelo/adicional';
import { AdicionalService } from 'src/app/servicios/adicional.service';

@Component({
  selector: 'app-edit-adicional',
  templateUrl: './edit-adicional.component.html',
  styleUrls: ['./edit-adicional.component.css']
})
export class EditAdicionalComponent implements OnInit {
  adicional!: Adicional;

  constructor(private adicionalService: AdicionalService, private activatedRouted: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouted.snapshot.params['id'];
    this.adicionalService.detail(id).subscribe(
      data => {
        this.adicional = data;
      }, err => {
        alert("Error al modificar educación");
        
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRouted.snapshot.params['id'];
    this.adicionalService.update(id, this.adicional).subscribe(
      data => {
        alert("Modificado con éxito");
        this.router.navigate(['/carta']);
        
      }, err => {
        alert("Error al modificar");
        
      }
    )
  }

}
