import { Alert } from "react-bootstrap";

const Alerta = (props) => {

    return(
    <Alert className="alert" variant={props.color}>{props.text}</Alert>
    )
}

export default Alerta