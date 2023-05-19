import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypesSelector } from "../hooks/useTypesSelector";
const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");

  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypesSelector(
    (state) => state.repositories
  );
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // dispatch(actionCreators.searchRepositories(term) as any);
    searchRepositories(term);
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name} </div>)}
    </div>
  );
};

export default RepositoriesList;
