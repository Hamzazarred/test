import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conception',
  templateUrl: './conception.component.html',
  styleUrls: ['./conception.component.scss']
})
export class ConceptionComponent implements OnInit {
  tailles: string='Large' ;
  seasons: Array<any> = [{ taille:'Large', discription : 'De grandes images sont meilleures pour les produits où chaque détail est une partie de la valeur du produit.'},{ taille:'Moyen', discription : 'Une option bien équilibrée qui fonctionne avec la majorité des produits.'},{ taille:'Petite', discription : "Des images compactes révèlent moins de détails ,mais permettent d'afficher plus de produits sur l'écran."}];
  


l:string='Carré 1:1';
  seasonss: Array<any> = [{ taille:'Carré 1:1', discription : "[{x:'1',y:'1'}]"},{ taille:'Paysage de 4:3', discription : "[{x:'4',y:'3'}]"},{ taille:'Paysage de 2:3', discription : "[{x:'2',y:'3'}]"},{ taille:'Portrait 3:4', discription : "[{x:'3',y:'4'}]"},{ taille:'Portrait 2:3', discription : "[{x:'4',y:'3'}]"}];
  
  constructor() {console.log("vvvvvvvvvvvv") }

  ngOnInit(): void {
  }

}
