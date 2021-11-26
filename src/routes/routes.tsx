import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../views/home/home";
import Login from "../views/login/login";
import NotFound from "../views/not-found/not-found";

const RouteProvider = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default RouteProvider;
