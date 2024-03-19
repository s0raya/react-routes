import { useState, useEffect } from 'react';

function UseEffect() {
    const [name, setName] = useState('');
    const [nameList, setNameList] = useState([]);

    useEffect(() => {
     console.log('Lista cambiada', nameList)   
    }, [nameList]);

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleAddName = () => {
        setNameList([...nameList, name])
    }

    return (
        <>
            <h1>Use Effect</h1>
            <input type='text' value={name} onChange={handleNameChange} placeholder='Introduce el nombre' />
            <button onClick={handleAddName}>Añadir nombre</button>
            <ul>
                {nameList.map((name, index) => (
                    <li key={index}>
                        {name}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default UseEffect