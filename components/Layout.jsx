import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <>
      <div className="container d-flex flex-column">
        <Navbar />
        <main className="flex-grow-1 py-5">{children}</main>
        <Footer />
      </div>
    </>
  );
};
