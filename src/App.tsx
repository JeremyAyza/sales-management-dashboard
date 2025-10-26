
import "./App.css";
import { Routes, Route } from "react-router-dom";
import routes from "./router-config";

const MapeoRutas = routes.map(elem => <Route key={elem.path} path={elem.path} element={<elem.element/>} />)

function App() {
  return (
    <div>
      <div className=''>
        <Routes>
          {MapeoRutas}
        </Routes>
      </div>
    </div>
  )
}
export default App;
