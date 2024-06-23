import { Outlet } from "react-router-dom";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <>
      <Hero />
      <main className="bg-[#13161F]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
