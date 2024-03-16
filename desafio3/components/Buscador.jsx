import React from 'react'

const Buscador = (props) => {
    return(
        <>
            <input
                className='text-md-start buscador'
                type='search'
                placeholder='Buscar un colaborador'
                onChange={props.handleBusqueda}
                value={props.busqueda}    
            />
        </>
    )
}

export default Buscador