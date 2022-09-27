import { useState, useEffect } from "react";
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ({gastos, presupuesto}) => {

    const [porcentaje, setPorcentaje] = useState(0);
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);


    useEffect(() => {
        const totalGastado = gastos.reduce((acc, gasto) => acc + gasto.cantidad, 0);
        const totalDisponible = presupuesto - totalGastado;

        //calculamos el porcentaje
        const porcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(1);

        setGastado(totalGastado);
        setDisponible(presupuesto - totalGastado);
        setTimeout(() => {
            setPorcentaje(porcentaje);
        }, 800)

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
            <CircularProgressbar 
                value={porcentaje}
                text={`${porcentaje}% Gastado`}
            background
            backgroundPadding={6}
            styles={buildStyles({
            backgroundColor: "#020357",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent"
        })}
            />
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