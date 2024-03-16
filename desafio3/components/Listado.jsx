import React from 'react'
import Table from 'react-bootstrap/Table';

const Listado = (props) => {

    return(
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Telefono</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {props.colaboradoresFiltrados.map(colaborador => (
            <tr key={colaborador.id}>
                <td>{colaborador.nombre}</td>
                <td>{colaborador.correo}</td>
                <td>{colaborador.edad}</td>
                <td>{colaborador.cargo}</td>
                <td>{colaborador.telefono}</td>
                <td>
                  <button onClick={() => props.eliminarColaborador(colaborador)}> Eliminar</button>
                </td>
            </tr>
        ))}
        
      </tbody>
    </Table>
    )
}
export default Listado