import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import AppRouter from "../router";

export const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <AppRouter />
      </main>
      <Footer />
    </>
  );
};
