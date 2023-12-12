import { Footer } from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

export const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
