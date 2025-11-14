import { useEffect } from "react";
import { useSearchParams } from "react-router";
import CardGame from "../../components/CardGame";
import useFetchSolution from "../../customhook/hook/useFetchSolution";

export default function SearchPage(){
    let [SearchParams] = useSearchParams();
    const game= SearchParams.get("query");
    
    const initialUrl = `https://api.rawg.io/api/games?key=d3d33cd5a7714af7b5a951f8c6f3ea7b&search=${game}`
    const {loading,data,error, updateUrl} = useFetchSolution(initialUrl);

    useEffect(()=>{
        updateUrl(initialUrl);
    },[initialUrl,updateUrl]);

    return(
        <div className="container">
            <h1>Risultati per: {game} game</h1>
            {loading && <p>loading...</p>}
            {error && <h1>{error}</h1>}
            <div>
                {data && data.results.map((game)=><CardGame key={game.id} game={game}/>)}
            </div>
        </div>
    )
}