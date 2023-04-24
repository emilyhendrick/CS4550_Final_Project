import { Link } from "react-router-dom";

function Yelp() {
    return (
        <div>
            <h1>Yelp Home Screen</h1>
            <Link to="search">Search</Link>
        </div>
    );
}

export default Yelp;