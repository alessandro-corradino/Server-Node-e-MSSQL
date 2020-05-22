
export class Icon { //Commenta qui: creiamo la classe icon in cui verrà creato un oggetto di tipo scaledSize per le dimensioni delle icone
    public scaledSize:ScaledSize;
    constructor(public url: string, size: number){
        this.scaledSize = new ScaledSize(size,size);
    }

    setSize(size: number) { //Commenta qui: questo metodo ci permette di impostare le dimensioni delle icone
        this.scaledSize = new ScaledSize(size,size);
    }
}

export class ScaledSize { //Commenta qui: la classe ScaledSize ci permette di scalare l'immagine
    constructor(
    public width:  number,
    public height: number){}
}
