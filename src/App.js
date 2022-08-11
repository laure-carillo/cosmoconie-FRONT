import { useRoutes } from "react-router-dom";
import Kalevala from "./screens/Kalevala";
import "./App.css";

function App() {
  let element = useRoutes([
    // { path: "/", element: <Home /> },
    { path: "/kalevala", element: <Kalevala /> },
    // { path: "/shop", element: <ShopList /> },
    // { path: "/shop/:id", element: <Shop /> },
    // { path: "/events", element: <EventList /> },
    // { path: "/events/:id", element: <Event /> },
    // { path: "/about", element: <About /> },
  ]);
  return <div className="App">{element}</div>;
}

export default App;
