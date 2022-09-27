import { useState, useEffect } from "react";
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ({
    gastos, 
    setGastos,
    presupuesto,
    setPresupuesto,
    setIsValidPresupuesto,
}) => {

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

    const handleResetApp = () => {
        const resultado = window.confirm('¿Estás seguro de querer reiniciar la aplicación?');
        if (resultado) {
            setPresupuesto(0);
            setGastos([]);
            setIsValidPresupuesto(false);
        }
        
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
            textColor: porcentaje > 100 ? "#DC2626" : "#fff",
            pathColor: porcentaje > 100 ? "#DC2626" : "#fff",
            trailColor: "transparent"
        })}
            />
        </div>

        <div className="contenido-presupuesto">
            <button 
            className="reset-app"
            type="button"
            onClick={() => {handleResetApp()}}

            >
                Resetear App
            </button>
            <p>
                <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
            </p>
            <p className={`${disponible < 0 ? 'negativo' : ''}`}>
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