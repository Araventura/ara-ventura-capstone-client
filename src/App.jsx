import "./App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div id="app__body">
        <Header />
        <Routes></Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
