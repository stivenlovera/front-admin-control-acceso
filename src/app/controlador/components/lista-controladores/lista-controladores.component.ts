import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ModalControladorComponent } from '../modal-controlador/modal-controlador.component';
@Component({
  selector: 'app-lista-controladores',
  templateUrl: './lista-controladores.component.html',
  styleUrls: ['./lista-controladores.component.css']
})
export class ListaControladoresComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(ModalControladorComponent);
  }
}
