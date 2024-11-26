'use strinct'

var bicicleta= {
    color: "azul",
    ruedas: 'Max',
    suspension: 'Fox',
    Modelo: 'Scoot',
    frenos: 'disco',
    velocidadMaxima: '60km',
    cambiaColor: function(color){
        this.color = color;
    }
}

bicicleta.cambiaColor("negro")

console.log(bicicleta)

