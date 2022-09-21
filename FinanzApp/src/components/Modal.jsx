import CerrarBtn from '../img/cerrar.svg'


const Modal = ({setModal, animarModal, setAnimarModal}) => {
  
    const ocultarModal=() => {
        setModal(false);
        setAnimarModal(false);

        setTimeout(() =>{
            setModal(false)
        }, 500)
    }
  
    return (
    <div className="modal">
        <div className="modal">
            <div className="cerrar-modal">
                <img
                    src={CerrarBtn}
                    alt="Cerrar Modal"
                    onClick={ocultarModal}
                />
            </div>

        </div>
        <form className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
            <legend>Nuevo Gasto</legend>
        </form>
    </div>
    )
}
export default Modal