import { useParams } from "react-router";
import { useState, useEffect } from "react";
import CardGame from "../../components/CardGame";
import useFetchSolution from "../../customhook/hook/useFetchSolution";

export default function GenrePage() {
  const { genre } = useParams();
  const initialUrl = `https://api.rawg.io/api/games?key=d3d33cd5a7714af7b5a951f8c6f3ea7b&genres=${genre}&page=1`;
  const { data, error } = useFetchSolution(initialUrl);


  return (
    <>
      <h2 className="text-light"> Welcome to {genre} page</h2>
      <div className="grid-games-list text-light">
        {error && <article>{error}</article>}
        {data &&
          data.results.map((game) => <CardGame key={game.id} game={game} />)}
      </div>
    </>
  );
}
