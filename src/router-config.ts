import UpdateCustomer from "./components/customers/UpdateCustomer";
import CustomerList from "./components/customers/CustomerList";
import CreateCustomer from "./components/customers/CreateCustomer";
import Login from "./components/auth/Login";
import UpdateProduct from "./components/products/UpdateProduct";
import ProductList from "./components/products/ProductList";
import CreateProduct from "./components/products/CreateProduct";
import UpdateProvider from "./components/providers/UpdateProvider";
import ProviderList from "./components/providers/ProviderList";
import CreateProvider from "./components/providers/CreateProvider";
import UpdateUser from "./components/users/UpdateUser";
import UserList from "./components/users/UserList";
import CreateUser from "./components/users/CreateUser";
import SaleDetail from "./components/sales/SaleDetail";
import CreateSale from "./components/sales/CreateSale";
import SaleList from "./components/sales/SaleList";


const routes = 
    [
        {
            path: '/', element: Login
        },
        {
            path: '/usuario/registrar', element: CreateUser
        },
        {
            path: '/usuario/listar', element: UserList
        },
        {
            path: '/usuario/actualizar', element: UpdateUser
        },
        {
            path: '/producto/actualizar', element: UpdateProduct
        },
        {
            path: '/producto/registrar', element: CreateProduct
        },
        {
            path: '/producto/listar', element: ProductList
        },
        {
            path: '/cliente/actualizar', element: UpdateCustomer
        },
        {
            path: '/cliente/registrar', element: CreateCustomer
        },
        {
            path: '/cliente/listar', element: CustomerList
        },
        {
            path: '/proveedor/listar', element: ProviderList
        },
        {
            path: '/proveedor/registrar', element: CreateProvider
        },
        {
            path: '/proveedor/actualizar', element: UpdateProvider
        },
        {
            path: '/venta/nuevaventa', element: CreateSale
        },
        {
            path: '/venta/ventas', element: SaleList
        },
        {
            path: '/venta/detalle', element: SaleDetail
        }
    ];

export default routes;

