import FormButton from "../shared/forms/FormButton";
import FormSelect from "../shared/forms/FormSelect";
import FormGroup from "../shared/forms/FormGroup";
import FormHeader from "../shared/forms/FormHeader";
import Navigation from "../shared/navigation/Navigation";

export default function ComponenteRegistrarProducto() {
  return (
    <>
    <Navigation/>
    <div className="container border my-3 py-2 mt-2">
      <FormHeader caso="Registro" entidad="producto"></FormHeader>
      <form>

        <FormGroup valor="Codigo" type="text"  entidad="producto"></FormGroup>
        <FormGroup valor="Nombre" type="text" entidad="producto"></FormGroup>
        <FormGroup valor="Stock" type="number" entidad="producto"></FormGroup>
        <FormGroup valor="Precio" type="number" entidad="producto"></FormGroup>
        <FormSelect></FormSelect>
        <FormButton ruta="/producto/listar" />
      </form>
    </div>
    </>
  );
}