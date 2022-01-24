import { Card } from "../../../components/Card";

const Hero = ({ hero }) => {
    const { _id, name, realName } = hero;
    return (
        <Card id={_id} title={name} description={realName} />
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

export default Hero;