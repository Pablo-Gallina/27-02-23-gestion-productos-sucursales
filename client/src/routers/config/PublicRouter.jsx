// import { Navigate } from "react-router-dom";

// Children es una prop que simpre esta, los hijos de este componente
const PublicRouter = ({ children }) => {
  // const user = true; // useSelector(selectUser);

  // Si no esta autenticado, retorna el children (componente hijo)
  // return !user ? children : <Navigate to="/app" />;
  return children;
};

export default PublicRouter;
