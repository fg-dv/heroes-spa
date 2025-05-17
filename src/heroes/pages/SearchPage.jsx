import { HeroCard } from "../components/HeroCard";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import { getHeroByName } from "../helpers/getHeroByName";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search)
  const heroes = getHeroByName(q)

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q
  })

  const onSearchSubmit = (event) => {
    event.preventDefault();

    navigate(`?q=${searchText}`);
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">

        <div className="col-2">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search for a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>
        <div className="col-10">
          <h4>Results</h4>
          <hr />

          {/* {
            ( q === '' )
              ? <div className="alert alert-primary">Search a hero</div>
              : ( heroes.length === 0 ) 
              && <div className="alert alert-danger">No hero with <b>{ q }</b> found</div>
          } */}

          <div className="alert alert-primary" style={{ display: showSearch ? '' : 'none' }}>
            Search a hero
          </div>

          <div className="alert alert-danger" style={{ display: showError ? '' : 'none' }}>
            No hero with <b>{q}</b> found
          </div>

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>
    </>
  )
}