//iterfaz

interface CamisetaBase {
    setColor(color);
    getColor();
}


//Decorador

function estampar(logo:string){
    return function(target: Function){
        target.prototype.estampacion = function(): void{
            console.log("Camiseta estampada" +logo)
        }
    }
}
// clase (molde del objeto)
@estampar('Gucci gang')
class Camiseta implements CamisetaBase{
//Proiedades (caracteristicas del objeto)
    public color: string;
    public modelo: string;
    public marca: string;
    public precio: number;

//metodos
    constructor(color, modelo,marca,precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.precio = precio;

    }
public camibiarColor(color){
    this.color = color;
}
public setColor(color){
    this.color = color;
}
public getColor(){
    return this.color;
}
}


//clase hija

class Sudadera extends Camiseta {
    public capucha: boolean;

    setCapucha(capucha: boolean){
        this.capucha = capucha
    }
}

var camiseta = new Camiseta("rojo","larga","nike",50);

camiseta.camibiarColor("azul");

console.log(camiseta);

var sudadera_nike = new Sudadera("red","boom","Nike",50);
