import ListHeader from "../shared/lists/ListHeader"
import TableHead from "../shared/lists/TableHead";
import TableRow from "../shared/lists/TableRow";
import Navigation from "../shared/navigation/Navigation";

export default function ComponenteListarCliente() {
  return (


    <>
    <Navigation></Navigation>
    <div className="container p-3 border mt-2">
      
      <ListHeader rutaReg="/cliente/registrar" entidad="cliente"></ListHeader>
      <div className="table-responsive py-4">
        <table className="table table-striped">
          <TableHead lista={["ID","DNI","Nombre","Télefono", "Dirección", "Razón", "F.Creación"]} ></TableHead>
          <tbody>
            <TableRow ruta="/cliente/actualizar" datos={["1","64531245","José Martines Rodriguez","984563123","Lima-SJL","Venta","19/08/2022"]} ></TableRow>
            <TableRow ruta="/cliente/actualizar" datos={["2","50714479","Joshua ramirez porras","956786932","Lima-SMP","Venta","19/08/2022"]} ></TableRow>
            <TableRow ruta="/cliente/actualizar" datos={["3","24657645","Ulises Cabanillas meza","976734564","Lima-SJM","Venta","20/08/2022"]} ></TableRow>
            <TableRow ruta="/cliente/actualizar" datos={["4","65886234","Valery Castillo Bermudez","936334564","Lima-SJM","Venta","22/08/2022"]} ></TableRow>
            <TableRow ruta="/cliente/actualizar" datos={["5","75967723","Angel Nieto Guerra","970734216","Lima-ATE","Venta","23/08/2022"]} ></TableRow>
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}
