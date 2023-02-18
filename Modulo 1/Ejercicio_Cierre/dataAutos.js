let autosImportados = require("./autos");
let personaImportadas = require("./personas")

let concesionaria = {
   autos: autosImportados,
   //buscarAuto recibe el string patente y devuelve un objeto auto al cual le corresponde esa patente. En caso de no encontrar el mismo, retorna null.
   buscarAuto: function (patenteBuscada) {
      const vehiculo = this.autos.find(auto => auto.patente == patenteBuscada);
      if (vehiculo) {
         return vehiculo;
      }
      return null;
   },
   //venderAuto recibe el string patente, lo busca en la lista autos y en caso de encontrar al automóvil, le asigna el estado de vendido, en caso contrario devuelve null
   venderAuto: function (patenteBuscada) {
      const vehiculo = this.buscarAuto(patenteBuscada);
      if (vehiculo) {
         vehiculo.vendido = true;
         return vehiculo
      }
      return null;
   },
   //autosParaLaVenta no recibe parametros y devuelve una lista de autos que no fueron vendidos
   autosParaLaVenta: function () {
      return this.autos.filter(auto => auto.vendido == false);
   },
   //autosNuevos no recibe parametros y devuelve una lista de autos que estan a la venta, pero quea ademas tienen menos de 100km
   autosNuevos: function () {
      return this.autosParaLaVenta().filter(auto => auto.km < 100);
   },
   //listaDeVentas no recibe parametros y que devuelve un array que contiene el precio de venta de cada auto vendido
   listaDeVentas: function () {
      let vendidos = this.autos.filter(auto => auto.vendido == true);
      return vendidos.map(auto => auto.precio);
   },
   //totalDeVentas no recibe parametros y devuelve la sumatoria del valor de todas las ventas realizadas
   totalDeVentas: function () {
      if (this.listaDeVentas().length > 0) {
         return this.listaDeVentas().reduce((acum, precio) => acum + precio)
      }
      return 0;
   },
   //puedeComprar recibe por parámetro un objeto auto y un objeto persona y devuelva true si la persona puede comprar el auto
   puedeComprar: function (auto, persona) {
      if (auto.precio > persona.capacidadDePagoTotal) {
         return false;
      }
      if (persona.capacidadDePagoEnCuotas < (auto.precio / auto.cuotas)) {
         return false;
      }
      return true;
   },
   // autosQuePuedeComprar recibe un objeto persona y devuelve una array de autos que la persona puede comprar
   autosQuePuedeComprar: function (persona) {
      let autosPermitidoComprar = []
      let autosEnVenta = this.autosParaLaVenta();
      autosEnVenta.filter(auto => {
         if (this.puedeComprar(auto, persona)) {
            autosPermitidoComprar.push(auto);
         }
      })
      return autosPermitidoComprar;
   }
}

let persona = personaImportadas;

console.log(concesionaria.autosQuePuedeComprar(persona))