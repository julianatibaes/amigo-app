import { Component, OnInit } from '@angular/core';
import { AmigoService } from './../amigo-service';

@Component({
  selector: 'app-amigo-list',
  templateUrl: './amigo-list.component.html',
  styleUrls: ['./amigo-list.component.css']
})
export class AmigoListComponent implements OnInit {


  public amigos = [];
  public errorMsg;

  constructor(private amigoService: AmigoService) { }

  ngOnInit() {
    console.log('entrou em amigo list component');
    this.amigoService.getAmigos()
      .subscribe(data => this.amigos = data,
                error => this.errorMsg = error);

  }

}
