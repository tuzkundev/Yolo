import "./assets/boxicons-2.0.7/css/boxicons.min.css";

import "./App.scss";

import { Route, BrowserRouter } from "react-router-dom";

import ProductViewModal from "./components/ProductViewModal/ProductViewModal";

import Header from "./components/Header/Header";
import Routes from "./routes/Routes";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div>
            <Header {...props} />

            <div className="container">
              <div className="main">
                <Routes />
              </div>
            </div>

            <Footer />
            <ProductViewModal />
          </div>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
