import { ShowHeros } from '../components/ShowHeros';

export default function Home({ heros }) {
  return (
    <>
      <h2 className="text-center">Superhero Identity Manager</h2>
      <ShowHeros heros={heros} />
    </>
  );
}

export const getStaticProps = async () => {
  const API_ENDPOINT = process.env.API_ENDPOINT;
  const res = await fetch(`${API_ENDPOINT}/heros`);
  const heros = await res.json();

  return {
    props: {
      heros: heros?.data || []
    }
  };
};
