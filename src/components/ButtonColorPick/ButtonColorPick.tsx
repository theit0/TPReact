import {useState} from 'react'
import ModalColorPick from '../ModalColorPick/ModalColorPick';
import {Button} from 'react-bootstrap'

const ButtonColorPick = () => {
    const [buttonColor,setButtonColor] = useState("#3d7c40");

    const [showModal,setShowModal] = useState(false);

    const handleColorChange = (color:string ) => {
        setButtonColor(color);
    }

    const handleShowModal = () => {
        setShowModal(true);    
    }

  return (
    <div className='m-3'>
        <Button variant="primary" style={{backgroundColor:buttonColor}}
        onClick={handleShowModal}>Cambiar color</Button>

        {
            showModal &&
            <ModalColorPick 
                show = {showModal}
                onHide = {()=> setShowModal(false)}
                handleColorChange = {handleColorChange}
            />
        }
    </div>
  )
}

export default ButtonColorPick