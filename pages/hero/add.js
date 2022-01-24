import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import { useRouter } from "next/router";
import { useState } from "react";
import { ShowError } from "../../components/ShowError";

const AddNewHero = () => {
    const [form, setForm] = useState({
        name: "",
        realName: ""
    });
    const [error, setError] = useState("");
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
            const URL = `${process.env.API_ENDPOINT}/heros`;
            const PARAMS = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            };
            const response = await fetch(URL, PARAMS);
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
        <>
            <h3 className="text-center">Add a new Superhero Identity</h3>
            <form method="post" onSubmit={handleForm}>
                <MDBInput
                    onChange={handleChange}
                    label="Superhero"
                    type="text"
                    name="name"
                    required
                />
                <MDBInput
                    onChange={handleChange}
                    label="Real Name"
                    type="text"
                    name="realName"
                    className="my-3"
                    required
                />
                <MDBBtn>Add new Hero</MDBBtn>
            </form>
            <ShowError error={error} />
        </>
    );
};

export default AddNewHero;