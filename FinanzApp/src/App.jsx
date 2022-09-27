import { useState, useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal';
import ListadoGastos from './components/ListadoGastos';
import { generarId } from './components/helpers';
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {
     
    const [gastos, setGastos] = useState([
        ...(JSON.parse(localStorage.getItem("gastos")) ?? [])
     ]);
    const [presupuesto, setPresupuesto] = useState(
        Number(localStorage.getItem('presupuesto')) ?? 0
    );
    const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

    const [modal, setModal] = useState(false)
    const [animarModal, setAnimarModal] = useState(false)

    const [gastoEditar, setGastoEditar] = useState({})

    useEffect(() => {
        if (Object.keys(gastoEditar).length !== 0) {
            setModal(true);

        setTimeout(() => {
            setAnimarModal(true)
        }, 400)
    }
    }, [gastoEditar])

    // Almacenamiento en Local Storage de Presupuesto ↓
    useEffect(() => {
        localStorage.setItem('presupuesto', presupuesto ?? 0);
    }, [presupuesto])
    
    useEffect(() => {
        const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0;
        if (presupuestoLS !== 0) {
            setIsValidPresupuesto(true)
        }
    }, [])
    
    // Almacenamiento en Local Storage de Gastos ↓
    useEffect(() => {
        localStorage.setItem('gastos', JSON.stringify(gastos));
    }, [gastos])



    const handleNuevoGasto = () => {
        setModal(true);
        setGastoEditar({});

        setTimeout(() => {
            setAnimarModal(true)
        }, 400)
    }

    const guardarGasto = gasto => {
        if (gasto.id) {
            //Editar gasto
            const gastosActualizados = gastos.map(gastoState => gastoState.id === 
                    gasto.id ? gasto : gastoState)
                    setGastos(gastosActualizados);
                    setGastoEditar({});
                } else {
                    //Nuevo gasto
                    gasto.id = generarId();
                    gasto.fecha = Date.now();
                    setGastos([...gastos, gasto])
                }
                setAnimarModal(false);
                setTimeout(() =>{
                    setModal(false)
            }, 500);
        }
    
    const eliminarGasto = id => {
        setGastos(gastos.filter(gasto => gasto.id !== id))
    }

    return (
        <div className={modal ? 'fijar' : ''}>
            <Header 
                gastos = {gastos} 
                presupuesto = {presupuesto}
                setPresupuesto = {setPresupuesto}
                isValidPresupuesto = {isValidPresupuesto}
                setIsValidPresupuesto = {setIsValidPresupuesto}
                
                />
            
            {isValidPresupuesto && (
            <>
                <main>
                    <ListadoGastos 
                        gastos={gastos}
                        setGastoEditar={setGastoEditar}
                        eliminarGasto={eliminarGasto}
                    />
                </main>
                <div className='nuevo-gasto'>
                    <img
                        src={IconoNuevoGasto}
                        alt="Ícono nuevo gasto"  
                        onClick={handleNuevoGasto}
                    />
                </div>
            </>
            )}

            {modal && <Modal 
                        setModal={setModal}
                        animarModal={animarModal}
                        setAnimarModal={setAnimarModal}
                        guardarGasto={guardarGasto}
                        gastoEditar = {gastoEditar}
                        setGastoEditar = {setGastoEditar}
                      />}


        </div>
    )

}
export default App
