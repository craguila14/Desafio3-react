import './App.css'
import { BaseColaboradores } from '../datos/BaseColaboradores'
import 'bootstrap/dist/css/bootstrap.min.css';
import Listado from '../components/Listado';
import Formulario from '../components/Formulario';
import Buscador from '../components/Buscador';
import { useEffect, useState } from 'react';
function App() {


  const [nuevoNombre, setNombre] = useState("")
    const [nuevoCorreo, setCorreo] = useState("")
    const [nuevaEdad, setEdad] = useState("")
    const [nuevoCargo, setCargo] = useState("")
    const [nuevoTelefono, setTelefono] = useState("")
    const [error, setError] = useState(false)
    const [noError, setNoError] = useState(false)
    const [busqueda, setBusqueda] = useState("")     

    const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)

    const enviarFormulario = (e) => {
        e.preventDefault()
       
        if(nuevoNombre === '' || nuevoCorreo === '' || nuevaEdad === '' || nuevoCargo === '' || nuevoTelefono === "") {
            alert("todos los campos son obligatorios")
            setError(true)
            return
        }

        setListaColaboradores([...listaColaboradores, {id: listaColaboradores.length + 1, nombre: nuevoNombre, correo: nuevoCorreo, edad: nuevaEdad, cargo: nuevoCargo, telefono: nuevoTelefono}])
        setNombre("")
        setCorreo("")
        setEdad("")
        setCargo("")
        setTelefono("") 
        setError(false) 
        setNoError(true)

        
    }

    useEffect(()=>{
      if(error){
        const timer = setTimeout(() => {
          setError(false)
        }, 3000);
        return () => clearTimeout(timer)
      }
    })

    useEffect(()=>{
      if(noError){
        const timer = setTimeout(() => {
          setNoError(false)
        }, 3000);
        return () => clearTimeout(timer)
      }
    })

    const captarInputNombre = (e) => {
        setNombre(e.target.value)
    }

    const captarInputCorreo = (e) => {
        setCorreo(e.target.value)
    }

    const captarInputEdad = (e) => {
        setEdad(e.target.value)
    }

    const captarInputCargo = (e) => {
        setCargo(e.target.value)
    }

    const captarInputTelefono = (e) => {
        setTelefono(e.target.value)
    }

    const eliminarColaborador = (colaborador) => {
        const listaFiltrada = listaColaboradores.filter(el => el.nombre !==
        colaborador.nombre)
        setListaColaboradores(listaFiltrada)
        }
        

        const handleBusqueda = (e) => {
            setBusqueda(e.target.value);
        };
    
        const colaboradoresFiltrados = listaColaboradores.filter(colaborador => {
            return Object.values(colaborador).some(value =>
                value.toString().toLowerCase().includes(busqueda.toLowerCase())
            );
        });
 
  

  return (
    <>
  <div className='container-fluid'>
  <div className='row'>
    <div className='col-md-9'>
      
        <h3 className='titulo'>Lista de colaboradores</h3>
        
        <Buscador
          handleBusqueda={handleBusqueda}
          busqueda={busqueda}
        />
        <div className='caja lista'>
        <Listado
          colaboradoresFiltrados={colaboradoresFiltrados}
          eliminarColaborador={eliminarColaborador}        
        /> 
      </div>
    </div>
    <div className='col-md-3'>
      <div className='caja formulario'>
        <Formulario
          enviarFormulario={enviarFormulario}
          captarInputNombre={captarInputNombre}
          nuevoNombre={nuevoNombre}
          captarInputCorreo={captarInputCorreo}
          nuevoCorreo={nuevoCorreo}
          captarInputEdad={captarInputEdad}
          nuevaEdad={nuevaEdad}
          captarInputCargo={captarInputCargo}
          nuevoCargo={nuevoCargo}
          captarInputTelefono={captarInputTelefono}
          nuevoTelefono={nuevoTelefono}
          error={error}
          noError={noError}
        />
      </div>
    </div>
  </div>
</div>
    
    </>
  )
}

export default App
