import NuevoPresupuesto from "./NuevoPresupuesto"

const Header = ({
    presupuesto, 
    setPresupuesto, 
    isValidPresupuesto, 
    setIsValidPresupuesto}) => {

    return (
        <header>
            <a href="localhost"><img id="logo" src="src\img\FinanzAppB.png"></img></a>
            <a href="https://github.com/nielvadev"><img id="git" src="src\img\gitLogo.png"></img></a>
            <h1>Planificador de gastos</h1>

        <nav class="barra">
            <button id="menu">Presupuesto</button>
            <button id="menu">Inicio</button>
            <button id="menu">Balances</button>
            
        </nav>
            {isValidPresupuesto ? (
                <p>Control Presupuesto</p>
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