import { Link } from "react-router-dom";

const nopagePhrases = [
    "Maybe there is going to be something here in the future :)",
    "Wow, how did you land here?",
    "Are you looking for some treasures?",
    "The time has not come yet.",
];

const NoPage = () => {
    return(<div className=" content-container content-404">
        <h1>OOPS! Nothing is here!</h1>
        <div style={{marginBottom: '20px'}}>{nopagePhrases[Math.floor(Math.random() * nopagePhrases.length)]}</div>
        <div className="redirect-button"><Link to='/'> Go Back To Home </Link></div>
    </div>);
}

export default NoPage;