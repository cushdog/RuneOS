import { Link } from "react-router-dom";

const createCPLinks = (number) => {
    let checkPointLinks = [];
    for(let i = 1; i <= number; ++i){
        checkPointLinks.push(
        <li className="checkpoint-item">
            <Link to={`/about/checkpoint${i}`} children={`Checkpoint ${i}`}/> 
        </li>)
    }
    return checkPointLinks;
}

const CheckpointLayout = () => {
    return (<ul className="checkpoint-links-container">
        {createCPLinks(5)}
    </ul>)
}

export default CheckpointLayout;