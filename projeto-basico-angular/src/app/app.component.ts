import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jéssika Aguiar';

  dados = [
    {nome:'Ana',     endereco:'Manaus',     telefone:'222222222'},
    {nome:'Bruno' ,  endereco:'PF',         telefone:'98775597795'},
    {nome:"Carlos",  endereco:'Manacapuru', telefone:'000000000'}

  ];
  
  ngOnInit() {
    console.log(this.dados);
    
  }

}
