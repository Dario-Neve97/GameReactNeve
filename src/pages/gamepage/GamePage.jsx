import { useParams } from "react-router";
import useFetchSolution from "../../customhook/hook/useFetchSolution";
import ToggleFavorite from "./ToggleFavorite";
import Chatbox from "../../components/Chatbox";

export default function GamePage() {
  const { id } = useParams();
  const initialUrl = `https://api.rawg.io/api/games/${id}?key=d3d33cd5a7714af7b5a951f8c6f3ea7b`;
  const { data, error } = useFetchSolution(initialUrl);
 
  return (
    <>
      {error && <h1>{error}</h1>}
      <div className="style-gamepage text-white">
        <div className="style-game-info">
          <p>{data && data.released}</p>
          <h1>{data && data.name}</h1>
          <p>Rating: {data && data.rating}<i className="fa-solid fa-star ms-2 star"></i></p>
        <div className="position-relative">
          <img src={data && data.background_image} className="img-fluid" alt="" />
        <span className="span-heart"><ToggleFavorite data={data}/></span>
        </div>
          <h4 className="m-0 mt-2">Descrizione:</h4>
          <p className="p-md-3 p-0">{data && data.description_raw}</p>
        </div>
      </div>
      <div className="style-chatbox">
        <Chatbox data={data && data} className="text-light"/>
      </div>
    </>
  );
}
