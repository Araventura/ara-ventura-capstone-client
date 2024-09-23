import "./App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import JobsList from "./components/JobsList/JobsList";
import JobDetails from "./components/JobDetails/JobDetails";
import Offices from "./components/OfficesList/OfficesList";
import Footer from "./components/Footer/Footer";
import PostJob from "./components/PostJob/PostJob";

function App() {
  return (
    <BrowserRouter>
      <div id="app__body">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JobsList />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/offices/:id" element={<Offices />} />
          <Route path="/offices/:id/post" element={<PostJob />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
