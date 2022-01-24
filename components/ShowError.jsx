export const ShowError = ({ error }) => {
  return <>{error && <label className="text-danger">{error}</label>}</>;
};
