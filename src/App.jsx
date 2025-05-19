import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MusicPage from "./components/MusicPage";
import Welcome from "./components/Welcome";
import { Route, Routes } from "react-router";
import ScrollToTop from "./utilities/ScollUpFunction";

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="music" element={<MusicPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
