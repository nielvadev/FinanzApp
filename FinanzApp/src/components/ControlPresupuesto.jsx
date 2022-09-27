import { useState, useEffect } from "react";

const ControlPresupuesto = ({gastos, presupuesto}) => {

    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);


    useEffect(() => {
        const totalGastado = gastos.reduce((acc, gasto) => acc + gasto.cantidad, 0);
        setGastado(totalGastado);
        setDisponible(presupuesto - totalGastado);
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
                <span>Disponible: </span> {formatearCantidad(disponible)}
            </p>
            <p>
                <span>Gastado: </span> {formatearCantidad(gastado)}
            </p>
        </div>
    </div>
  )
}
export default ControlPresupuesto