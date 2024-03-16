import Alerta from './Alert';


const Formulario = (props) => {
   
    return(
        <>
        <div className='formulario'>
        <h4>Agregar colaborador</h4>
    
         <form onSubmit={props.enviarFormulario}>            
            <div className='form-group'>
                <input
                    type='text'
                    name='nombre'
                    className='form-control'
                    placeholder='Nombre del colaborador' 
                    onChange={props.captarInputNombre}
                    value={props.nuevoNombre}  
                />
            </div>
                <input
                    type='text'
                    name='correo'
                    className='form-control'
                    placeholder='Email del colaborador'
                    onChange={props.captarInputCorreo}
                    value={props.nuevoCorreo}
                />
            <div>

            </div>
                <input
                    type='number'
                    name='edad'
                    className='form-control'
                    placeholder='Edad del colaborador'
                    onChange={props.captarInputEdad}
                    value={props.nuevaEdad}
                />
            <div>

            </div>
                <input
                    type='text'
                    name='cargo'
                    className='form-control'
                    placeholder='Cargo del colaborador'
                    onChange={props.captarInputCargo}
                    value={props.nuevoCargo}
                />
            <div>

            </div>
                <input
                    type='number'
                    name='telefono'
                    className='form-control'
                    placeholder='Telefono del colaborador'
                    onChange={props.captarInputTelefono}
                    value={props.nuevoTelefono}
                />
            <div>

            <button type='submit'>Agregar colaborador</button>

            </div>
            {props.error ? <Alerta color="danger" text="Formulario no válido"/> : null}
            {props.noError ? <Alerta color="success" text="Formulario enviado correctamente"/> : null}

            
        </form>
        </div>
       </>
    )
}
export default Formulario