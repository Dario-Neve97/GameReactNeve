import { useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import FavoritesContext from "../../context/FavoritesContext";

export default function ToggleFavorite({ data }) {
  const { favorites, addFavorites, removeFavorite } =
    useContext(FavoritesContext);

  const isFavorite = () => favorites.find((el) => +el.game_id === data?.id);

  return (
    <>
      {isFavorite() ? (
        <div className="rounded-5 bg-black mt-2">
          <button onClick={() => removeFavorite(data.id)} className="btn">
            <FaHeart className="text-danger" />
          </button>
        </div>
      ) : (
        <div className="rounded-5 bg-black mt-2">
          <button onClick={() => addFavorites(data)} className="btn">
            <FaRegHeart className="text-white" />
          </button>
        </div>
      )}
    </>
  );
}
