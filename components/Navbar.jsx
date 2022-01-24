import { MDBBtn } from "mdb-react-ui-kit";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="container navbar">
      <Link href="/">
        <a className="navbar-brand">Superhero Identity</a>
      </Link>

      {/* `passHref` error occurs if not passed, check here: https://nextjs.org/docs/messages/link-passhref */}
      <Link href="/hero/add" passHref>
        <MDBBtn>New Identity</MDBBtn>
      </Link>
    </nav>
  );
};
