import "./App.css";
import ProductPage from "./pages/ProductPage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <ProductPage />
      </div>
    </>
  );
}

export default App;
