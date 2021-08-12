import logo from "./logo.svg";
import "./App.css";
import Head from "./Head";
import Home from "./Home";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Head />
        <Home />
        <Footer />
      </header>
    </div>
  );
}

export default App;
