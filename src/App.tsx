import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./routes";
import { CartProvider } from "./contexts/cartcontext/cartctxt";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routers />
      </Router>
    </CartProvider>
  );
}

export default App;
