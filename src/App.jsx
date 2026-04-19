import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import AppRouter from "./routes/AppRouter";
import WhatsAppButton from "./components/ui/WhatsAppButton/WhatsAppButton";

function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;