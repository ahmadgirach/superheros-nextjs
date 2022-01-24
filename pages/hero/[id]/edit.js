import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import { useRouter } from "next/router";
import { useState } from "react";

const EditHero = ({ hero }) => {
    const { _id, name, realName } = hero;
    const [form, setForm] = useState({
        name,
        realName
    });
    const router = useRouter();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleForm = async (e) => {
        e.preventDefault();

        try {
            const URL = `${process.env.API_ENDPOINT}/heros/${_id}`;
            const PARAMS = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            };
            await fetch(URL, PARAMS);
            await router.push("/");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <h3 className="text-center">Update Superhero Identity</h3>
            <form method="post" onSubmit={handleForm}>
                <MDBInput
                    onChange={handleChange}
                    label="Superhero"
                    type="text"
                    name="name"
                    value={form?.name}
                    required
                />
                <MDBInput
                    onChange={handleChange}
                    label="Real Name"
                    type="text"
                    name="realName"
                    className="my-3"
                    value={form?.realName}
                    required
                />
                <MDBBtn>Update Hero</MDBBtn>
            </form>
        </>
    );
};

export const getServerSideProps = async ({ params }) => {
    const { id } = params;
    const API_ENDPOINT = process.env.API_ENDPOINT;
    const res = await fetch(`${API_ENDPOINT}/heros/${id}`);
    const hero = await res.json();

    return {
        props: {
            hero: hero?.data || {}
        }
    };
};

export default EditHero;