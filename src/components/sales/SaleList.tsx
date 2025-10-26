import ListHeader from "../shared/lists/ListHeader";
import SaleTableHead from "../shared/lists/SaleTableHead";
import SaleDetailTableRow from "../shared/lists/SaleDetailTableRow";
import Navigation from "../shared/navigation/Navigation";

export default function ComponenteVentas() {
  return (
    <div>
            
      <Navigation></Navigation>
      <div className="container p-3 border mt-2">
        <ListHeader
          rutaReg="/venta/nuevaventa"
          entidad="venta"
        ></ListHeader>
        <div className="table-responsive py-4">
          <table className="table table-striped">
            <SaleTableHead
              lista={["ID", "Cliente", "Total", "F.Creacion"]}
            ></SaleTableHead>
            <tbody>
              <SaleDetailTableRow
                ruta="/venta/detalle"
                datos={[
                  "1",
                  "José Martines Rodriguez",
                  "1500.00",
                  "20/08/2022",
                ]}
              ></SaleDetailTableRow>
              <SaleDetailTableRow
                ruta="/venta/detalle"
                datos={[
                  "2",
                  "Valery Castillo Bermudez",
                  "500.00",
                  "20/08/2022",
                ]}
              ></SaleDetailTableRow>
              <SaleDetailTableRow
                ruta="/venta/detalle"
                datos={["3", "Angel Nieto Guerra", "3500.00", "20/08/2022"]}
              ></SaleDetailTableRow>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
