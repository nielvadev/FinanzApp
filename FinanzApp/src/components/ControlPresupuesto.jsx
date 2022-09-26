import { useEffect } from "react";

const ControlPresupuesto = ({gastos, presupuesto}) => {

    useEffect(() => {

    }, [gastos])
    
    const formatearCantidad = (cantidad) => {
        var formateo = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          });
        return formateo.format(cantidad)
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            <p>Gráfica aquí</p>
        </div>

        <div className="contenido-presupuesto">
            <p>
                <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
            </p>
            <p>
                <span>Disponible: </span> {formatearCantidad(0)}
            </p>
            <p>
                <span>Gastado: </span> {formatearCantidad(0)}
            </p>
        </div>
    </div>
  )
}
export default ControlPresupuesto