import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"

const Header = ({
    gastos,
    setGastos,
    presupuesto, 
    setPresupuesto, 
    isValidPresupuesto, 
    setIsValidPresupuesto,}) => {

    return (
        <header>
            <a href="localhost"><img id="logo" src="src\img\FinanzAppB.png"></img></a>
            <a href="https://github.com/nielvadev"><img id="git" src="src\img\gitLogo.png"></img></a>
            <h1>Planificador de gastos</h1>


            {isValidPresupuesto ? (
                <ControlPresupuesto
                    gastos = {gastos} 
                    setGastos = {setGastos}
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                />
            ):(
                <NuevoPresupuesto 
                    presupuesto = {presupuesto}
                    setPresupuesto = {setPresupuesto}
                    setIsValidPresupuesto = {setIsValidPresupuesto}
                />
            )}
        </header>
    )
}
export default Header