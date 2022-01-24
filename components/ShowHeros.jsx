import { Card } from "./Card";

export const ShowHeros = ({ heros }) => {
  return (
    <div className="d-flex flex-wrap gap-4">
      {heros.map(({ _id, name }) => (
        <Card key={_id} id={_id} title={name} />
      ))}
    </div>
  );
};
