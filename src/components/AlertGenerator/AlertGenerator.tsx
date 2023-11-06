import {useState} from 'react'

import AlertMessage from '../AlertMessage/AlertMessage';

const AlertGenerator = () => {
    const [inputValue,setInputValue] = useState('');
    const [message,setMessage] = useState('')
    const [showAlert,setShowAlert] = useState(false)

    const handleClick = () => {
        if (inputValue.trim() !== '') {
            setShowAlert(true);
            setMessage(inputValue);
        } else {
            setShowAlert(false);
        }
    }


  return (
    <div className='m-3'>
        <h2>Ejemplo 2</h2>
        <input type='text' value={inputValue} onChange={(e)=>{
            setInputValue(e.target.value)
        }}/>
        <button onClick={handleClick}>Enviar</button>
        {
            showAlert &&
            <AlertMessage message={message}/>
        }
    </div>
  )
}

export default AlertGenerator