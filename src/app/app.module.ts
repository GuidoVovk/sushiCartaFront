import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CartaComponent } from './componentes/carta/carta.component';
import { BarraNavComponent } from './componentes/barra-nav/barra-nav.component';
import { BannerComponent } from './componentes/banner/banner.component'
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { AddMenuComponent } from './componentes/add-menu/add-menu.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import  {MatButtonToggleModule } from '@angular/material/button-toggle';
import { AddCartaExtraComponent } from './componentes/add-carta-extra/add-carta-extra.component';
import { AddAdicionalComponent } from './componentes/add-adicional/add-adicional.component';
import { EditAdicionalComponent } from './componentes/edit-adicional/edit-adicional.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartaComponent,
    BarraNavComponent,
    BannerComponent,
    AddMenuComponent,
    AddCartaExtraComponent,
    AddAdicionalComponent,
    EditAdicionalComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
