import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Directors from "./pages/about/Directors";
import KMP from "./pages/about/Kmp";
import Operations from "./pages/about/Operations";
import Achievements from "./pages/about/Achievements";
import Exibitions from "./pages/about/Exibitions";
import Committee from "./pages/about/Exibitions";
import Product from "./pages/product/Product";
import Dealer from "./pages/product/Dealer"
import Facilities from "./pages/facility/Facilities";
import Investors from "./pages/investor/Investor";
import Event from "./pages/event/Event";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/directors" element={<Directors />} />
          <Route path="/kmp" element={<KMP />} />
          <Route path="/operations" element={<Operations />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/exhibitions" element={<Exibitions />} />
          <Route path="/committees" element={<Committee />} />
          <Route path="/product" element={<Product />} />
          <Route path="/dealer" element={<Dealer />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/event" element={<Event />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
