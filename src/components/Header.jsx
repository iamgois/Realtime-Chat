import { Contact } from "./Contact";

export function Header(){
    return(
        <>
            <div className="header">
                <div className="chat-box">
                    <Contact />
                    <div className="chat"></div>
                </div>
            </div>
        </>
    )
}