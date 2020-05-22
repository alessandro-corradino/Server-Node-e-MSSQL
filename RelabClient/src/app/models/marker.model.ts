import { Icon } from './icon.model';

export class Marker {
    icon = {}
   //Quando creo un nuovo marker e verifico quale label viene passata al costruttore, se contiene il testo
   //“Gas naturale” o “Energia elettrica” (abbreviati in Gas e Elettrica) imposto l’icona e cancello
   //l’etichetta
    constructor(public lat: number, public lng: number, public label?: string)
    {

        //importa icon e  dichiara la proprietà (icon : Icon;) dentro la classe Marker
        if (this.label.includes("naturale")) {
          this.icon = new Icon ( './assets/img/gas-32.ico', 24 ); //da modificare per ogni icona
          this.label = "";
          return;
        }


        if(this.label.includes("elettrica")){
          this.icon = new Icon ( './assets/img/electricity-32.ico', 24 ); //da modificare per ogni icona
          this.label = "";
          return;
        }


        if(this.label.includes("solide"))
        {
          this.icon = new Icon ( './assets/img/tree-50-32.ico', 24 ); //da modificare per ogni icona
          this.label = "";
          return;
        }

        if(this.label.includes("Olio"))
        {
          this.icon = new Icon ( './assets/img/water-32.ico', 24 ); //da modificare per ogni icona
          this.label = "";
          return;
        }

        if(this.label.includes("Teleriscaldamento"))
        {
          this.icon = new Icon ( './assets/img/power-32.ico', 24 ); //da modificare per ogni icona
          this.label = "";
          return;
        }

        if(this.label.includes("RSU"))
        {
            this.icon = new Icon ( './assets/img/trash-9-32.ico', 24 ); //da modificare per ogni icona
            this.label = "";
            return;
        }

        if(this.label.includes("liquide"))
        {
            this.icon = new Icon ( './assets/img/toxic-32.ico', 24 ); //da modificare per ogni icona
            this.label = "";
            return;
        }
        if(this.label.includes("NULL"))
        {
            this.icon = new Icon ( './assets/img/question-mark-32.ico', 24 ); //da modificare per ogni icona
            this.label = "";
            return;
        }
        if(this.label.includes("GPL"))
        {
            this.icon = new Icon ( './assets/img/gas-pump-32.ico', 24 ); //da modificare per ogni icona
            this.label = "";
            return;
        }

        if(this.label.includes("Gasolio"))
        {
            this.icon = new Icon ( './assets/img/warning-22-32.ico', 24 ); //da modificare per ogni icona
            this.label = "";
            return;
        }
  }
}

