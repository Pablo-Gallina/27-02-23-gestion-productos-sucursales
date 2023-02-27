import { Toaster } from "react-hot-toast";
import Rutas from "./routers/routes";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <Rutas />
    </>
  );
}

export default App;
