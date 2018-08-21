import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AmigoService } from './amigo-service';
import { IAmigo } from './IAmigo';


@Component({
  selector: 'app-amigo-page',
  templateUrl: './amigo-page.component.html',
  styleUrls: ['./amigo-page.component.css']
})
export class AmigoPageComponent implements OnInit {

  public errorMsg;
  public amigoList: IAmigo[];


  constructor(private amigoService: AmigoService) { }

  ngOnInit() {
    this.getRestItems();
  }

  // Read all REST Items
  getRestItems(): void {
    this.amigoService.getAmigos()
    .subscribe(data => this.amigoList = data,
              error => this.errorMsg = error);
  }

  saveAmigo() {
    const amigo: IAmigo = {nome: 'Diego'};
    this.amigoService.postAmigo(amigo).subscribe(res => {
         const amigo_: IAmigo = res.body;
         console.log(amigo_.nome);
         console.log(res.headers.get('Content-Type'));
       },
 (err: HttpErrorResponse) => {
         if (err.error instanceof Error) {
           console.log('An error occurred:', err.error.message);
         } else {
           console.log('Backend returned status code: ', err.status);
           console.log('Response body:', err.error);
         }
       }
    );
  }
}
