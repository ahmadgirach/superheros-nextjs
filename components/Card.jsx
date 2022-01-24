import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { ShowError } from "./ShowError";

export const Card = ({ id, title, description }) => {
  const HERO_URL = `/hero/${id}`;
  const router = useRouter();

  const [error, setError] = useState("");

  const handleDelete = async () => {
    try {
      const URL = `${process.env.API_ENDPOINT}/heros/${id}`;
      const response = await fetch(URL, {
        method: "delete",
      });
      if (response.ok) {
        await router.push("/");
      } else {
        setError("Something went wrong while deleting Hero..");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MDBCard className="border border-2 my-4" style={{ maxWidth: "22rem" }}>
      <MDBCardBody>
        <MDBCardTitle>{title}</MDBCardTitle>
        <MDBCardText>{description || "Reveal Identity"}</MDBCardText>
        {!description && (
          <>
            <Link href={HERO_URL} passHref>
              <MDBBtn className="mx-2">View Hero</MDBBtn>
            </Link>
            <Link href={`${HERO_URL}/edit`} passHref>
              <MDBBtn>Edit Hero</MDBBtn>
            </Link>
          </>
        )}
        {description && (
          <MDBBtn className="btn btn-danger" onClick={handleDelete}>
            Delete Hero
          </MDBBtn>
        )}
        <ShowError error={error} />
      </MDBCardBody>
    </MDBCard>
  );
};
