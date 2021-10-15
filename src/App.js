import logo from './logo.svg';
import './App.css';
import NavHeader from './components/header/NavHeader';
import Content from './components/content/Content';
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavHeader/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
