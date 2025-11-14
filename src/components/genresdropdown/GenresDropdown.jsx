import { useState, useEffect } from "react";
import { Link } from "react-router";
import useFetchSolution from "../../customhook/hook/useFetchSolution";
import "./Genres.css";

export default function GenresDropdown() {
  const [genres, setGenres] = useState(null);
  const initialUrl =
    "https://api.rawg.io/api/genres?key=d3d33cd5a7714af7b5a951f8c6f3ea7b&dates=2024-01-01,2024-12-31&page=1";
  const { error } = useFetchSolution(initialUrl);

  const load = async () => {
    try {
      const response = await fetch(initialUrl);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const json = await response.json();
      setGenres(json);
    } catch (error) {
      error.message;
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <>
      <details className="dropdown">
        <summary className="btn btn-dark w-100 rounded-5 fw-bold">
          Seleziona Genere <i className="fa-solid fa-arrow-turn-down"></i>
        </summary>
        {error && <small>{error}</small>}
        <div>
          <ul className="list-unstyled mt-2 p-2 rounded-1">
            {genres &&
              genres.results.map((genre) => (
                <li key={genre?.id}>
                  <div className="background-personalized rounded-4 mt-2">
                  <Link
                    to={`/games/${genre.slug}`}
                    className="text-decoration-none text-light "
                  >
                    {genre.name}
                  </Link>
                  </div>
                </li>
              ))}
          </ul>
        </div>

        {/* <ul>
          {genres &&
            genres.results.map((genre) => (
              <li key={genre?.id}>
                <Link to={"/games/${genre/slug}"}>{genre}</Link>
              </li>
            ))}
        </ul> */}
      </details>
    </>
  );
}
