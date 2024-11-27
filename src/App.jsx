import { Home, About, Careers, Location } from "./pages";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </Layout>
  );
};

export default App;
