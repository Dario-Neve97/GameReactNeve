import { useContext } from "react";
import { SessionContext } from "../../context/SessionContext";
import FavoritesContext from "../../context/FavoritesContext";
import { FaTrashAlt } from "react-icons/fa";

const favoriteGameUI = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export default function ProfilePage() {
  const { session } = useContext(SessionContext);
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="fw-bold text-white">
            {" "}
            Benvenuto {session?.user.user_metadata.first_name}
          </h2>
          <details className="dropdown">
            <summary className="text-white fw-bold mb-4">Favoriti</summary>
            {favorites.length == 0 && (
              <h4 className="text-white mt-4">
                Non ci sono favoriti al momento...
              </h4>
            )}
            <ul className="justify-content-center">
              {favorites.map((game) => (
                <li key={game.id} style={favoriteGameUI}>
                  <div className="me-3">
                    <img
                      src={game.game_image}
                      alt=""
                      width={200}
                      height={150}
                      className="rounded-3"
                    />
                    <h4 className="text-white mb-4">{game.game_name}</h4>
                  </div>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFavorite(game.game_id)}
                  >
                    <FaTrashAlt />
                  </button>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
}
