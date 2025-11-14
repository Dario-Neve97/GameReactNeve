import { useContext } from "react";
import supabase from "../supabase/supabase";
import SessionContext from "../context/SessionProvider";
import RealtimeChat from "./RealTimeChat";

export default function Chatbox({data}) {
    const session = useContext(SessionContext);

    const handleMessageSubmit = async(event) =>{
        event.preventDefault();
        const inputMessage = event.currentTarget;
        const {message} = Object.fromEntries(new FormData(inputMessage));
        if (typeof message === "string" && message.trim().length !== 0){
            const {error} = await supabase
            .from("messages")
            .insert([
                {
                    profile_id:session?.user.id,
                    profile_username: session?.user.user_metadata.username,
                    game_id:data.id,
                    content: message,
                },
            ])
            .select();
            if(error){
                console.log(error);
            }else{
                inputMessage.reset()
            }
        }
    };

    return (
        <>
        <h4 className="text-white mt-2">Gamers chat</h4>
        <div>
            <RealtimeChat data={data && data}/>
        </div>
        <div>
            <form onSubmit={handleMessageSubmit}>
                <fieldset role="group" className="mt-2 d-flex justify-content-center">
                    <input type="text" name="message" placeholder="Chat..." className="form-control w-50"/>
                    <button type="submit"className="btn btn-dark ms-2 ">Invia</button>
                </fieldset>
            </form>
        </div>
        </>
    );
}