import { Link } from "react-router";
import LazyLoadGameImage from "./LazyLoadGameImage";

export default function CardGame({ game }) {
  const genres = game?.genres.map((genre) => genre.name).join(", ");

  const { background_image: image } = game;
  
  return (
    <>
      <article key={game?.id}>
        <div className="card bg-secondary gap-3 mb-4 shadow" >
          <LazyLoadGameImage image={image} alt="..." />
          <div className="card-body">
            <h5 className="card-title text-truncate">{game?.name}</h5>
            <p className="card-text text-truncate">
              rilasciato il: {game.released}
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <Link
              to={`/games/${game.slug}/${game.id}`}
              className="btn btn-danger w-50"
            >
              Dettagli
            </Link>
          </div>
          <p className="text-center text-truncate text-muted">Genere: {genres}</p>
        </div>
      </article>
    </>
  );
}
//  <article classNameName="card mb-3" style={{maxWidth: '540px'}} key={game?.id}>
//         <div classNameName="row g-0">
//           <div classNameName="col-md-4">
//             <img
//               src={game?.background_image}
//               classNameName="img-fluid rounded-start"
//               alt="..."
//             />
//           </div>
//           <div classNameName="col-md-8">
//             <div classNameName="card-body">
//               <h5 classNameName="card-title">{game?.name}</h5>
//               <p classNameName="card-text">
//                 This is a wider card with supporting text below as a natural
//                 lead-in to additional content. This content is a little bit
//                 longer.
//               </p>
//               <p classNameName="card-text">
//                 <small classNameName="text-body-secondary">
//                   {genres}
//                   {game?.released}
//                 </small>
//               </p>
//               <button>Visita il gioco</button>
//             </div>
//           </div>
//         </div>
//       </article>
