import logo from "./logo.svg";
import "./App.css";
import Header from "components/header/Header";
import Home from "pages/Home";
import Footer from "components/footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Home />
        <Footer />
      </header>
    </div>
  );
}

export default App;
