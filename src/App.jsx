import "./App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import JobsList from "./components/JobsList/JobsList";
import JobDetails from "./components/JobDetails/JobDetails";
import Professionals from "./components/ProfessionalsList/ProfessionalsList";
import ProfessionalDetails from "./components/ProfessionalDetails/ProfessionalDetails";
import Offices from "./components/OfficesList/OfficesList";
import OfficeDetails from "./components/OfficeDetails/OfficeDetails";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div id="app__body">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JobsList />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/professionals" element={<Professionals />} />
          <Route path="/professionals/:id" element={<ProfessionalDetails />} />
          <Route path="/offices" element={<Offices />} />
          <Route path="/offices/:id" element={<OfficeDetails />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
