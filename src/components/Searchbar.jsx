import { useState } from "react";
import { useNavigate } from "react-router";

export default function SearchBar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [ariaInvalid, setAriaInvalid] = useState(null);

  const handleSearch = (event) => {
    event.preventDefault();
    if (typeof search === "string" && search.trim().length !== 0) {
      navigate(`/search?query=${search}`);
      setSearch("");
    } else {
      setAriaInvalid(true);
    }
  };

  return (
    <>
        <div className="container-fluid searchbar mt-3">
          <div className="row">
            <form onSubmit={handleSearch}>
              <fieldset role="group">
                <label htmlFor="search" className="form-label text-white fw-bold" >
                  Ricerca Gioco
                </label>
                <input
                  type="text"
                  name="search"
                  placeholder={
                    ariaInvalid
                      ? "Devi cercare qualcosa"
                      : "Che gioco stai cercando?"
                  }
                  onChange={(event) => setSearch(event.target.value)}
                  value={search}
                  aria-invalid={ariaInvalid}
                  id="search"
                  className="form-control w-100 text-center justify-content-center"
                />
                <input type="submit" value="cerca" className="btn btn-danger mt-1" />
              </fieldset>
            </form>
          </div>
        </div>
    </>
  );
}
