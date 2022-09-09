import NuevoPresupuesto from "./NuevoPresupuesto"

const Header = () => {

  return (
    <>
        <header>
            <a href="localhost"><img id="logo" src="src\img\FinanzAppB.png"></img></a>
            <a href="https://github.com/nielvadev"><img id="git" src="src\img\gitLogo.png"></img></a>
            <h1>planificador de gastos</h1>
        </header>
        <nav class="barra">
            <button id="menu">Presupuesto</button>
            <button id="menu">Inicio</button>
            <button id="menu">Balances</button>
            
        </nav>
        <header>
            <NuevoPresupuesto />
        </header>
       
            
    </>
  )
}
export default Header