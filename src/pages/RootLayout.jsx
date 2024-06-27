import { Outlet } from "react-router-dom";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <>
      <Hero />
      <main className="bg-themeColor">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
