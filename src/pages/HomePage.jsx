import CardGame from "../components/CardGame";
import useFetchSolution from "../customhook/hook/useFetchSolution";

export default function HomePage() {
  const initialUrl = `https://api.rawg.io/api/games?key=d3d33cd5a7714af7b5a951f8c6f3ea7b&dates=2024-01-01,2024-12-31&page=1`;
  const { data, error } = useFetchSolution(initialUrl);

  return (
    <>
      <div className="container">
        <div className="row">
          {error && <article>{error}</article>}
          {data &&
            data.results.map((game) => (
              <div key={game?.id} className="col-md-4">
                <CardGame key={game?.id} game={game} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
