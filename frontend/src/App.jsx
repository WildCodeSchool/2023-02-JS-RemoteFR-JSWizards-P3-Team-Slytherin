import Header from "./components/Header";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="bg-winebg bg-cover bg-center">
        <div className="bg-[black] h-screen opacity-70">
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
