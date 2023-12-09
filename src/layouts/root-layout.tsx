import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { Outlet } from "react-router-dom";

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
