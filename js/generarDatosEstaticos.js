import * as Presupuesto from './gestionPresupuesto.js'
import * as UI from './gestionPresupuestoWeb.js'

Presupuesto.actualizarPresupuesto(1500)

let gastos = [
  new Presupuesto.crearGasto("Compra carne", 23.44, "2021-10-06", "casa", "comida"),
  new Presupuesto.crearGasto("Compra fruta y verdura", 14.25, "2021-09-06", "supermercado", "comida"),
  new Presupuesto.crearGasto("Bonobús", 18.60, "2020-05-26", "transporte"),
  new Presupuesto.crearGasto("Gasolina", 60.42, "2021-10-08", "transporte", "gasolina"),
  new Presupuesto.crearGasto("Seguro hogar", 206.45, "2021-09-26", "casa", "seguros"),
  new Presupuesto.crearGasto("Seguro coche", 195.78, "2021-10-06", "transporte", "seguros")
]

gastos.forEach(g => Presupuesto.anyadirGasto(g))
UI.iniciar()
 