import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FarmacoService } from '../../services/farmaco.service';
import { Farmaco } from '../../interfaces/Farmaco';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-farmaco',
  templateUrl: './farmaco.component.html',
  styleUrls: ['./farmaco.component.css']
})
export class FarmacoComponent implements OnInit {

  farmaco: Farmaco[] = [];

  constructor(private farmacoService: FarmacoService, private router: Router) { }

  ngOnInit() {
    this.farmacoService.getFarmaco()
      .subscribe(
        res => {
          this.farmaco = res;
        },
        err => console.log(err)
      )
  }

  createFarmaco(unidad: HTMLInputElement, descripcion: HTMLTextAreaElement, telefono: HTMLInputElement) {
    this.farmacoService.createFarmaco(unidad.value, descripcion.value, telefono.value)
      .subscribe(
        res => {
          console.log(res)
        },
        err => console.log(err)
      )
      return false;
  }

  deleteFarmaco(id: string) {
    this.farmacoService.deleteFarmaco(id)
      .subscribe(
        res => {
          console.log(res)
        })
  }

}
