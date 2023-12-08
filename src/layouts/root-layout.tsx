import { Header } from "../components/header";
import { Footer } from "../components/footer";
import AppRouter from "../router";

export const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </>
  );
};
