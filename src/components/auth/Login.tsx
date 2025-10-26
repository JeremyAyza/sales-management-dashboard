import "../../styles/login.css";
import FormButton from "../shared/forms/FormButton";
import FormGroup from "../shared/forms/FormGroup";
export default function ComponenteLogin(){
    return(
        <div className="container py-3">
            <main className="form-signin w-100 m-auto text-center pt-3 m5">
            <form>
                <img className="mb-4 bg-primary rounded-circle" src={require("../img/2.png")} alt="" style={{maxWidth:"200px", maxHeight:"200px"}} />
                <h1 className="h2 mb-3 font-weight-normal">Sistema de Ventas JCUBA</h1>                    
                <FormGroup valor="Correo" type="text" entidad="usuario"></FormGroup>
                <FormGroup valor="Contraseña" type="password" entidad="usuario"></FormGroup>

                <FormButton ruta="usuario/listar" /> 

                <p className="my-1  text-dark">&copy;  2022 - JCUBA</p>
            </form>
            </main>

        </div>
        
    );
}