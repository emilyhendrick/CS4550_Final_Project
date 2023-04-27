import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { searchRestaurants } from "./yelp-service";
import { useNavigate } from "react-router-dom";
function YelpSearchScreen() {
    const { location, term } = useParams();
    const navigate = useNavigate();
    const [searchLocation, setSearchLocation] = useState(location);
    const [searchTerm, setSearchTerm] = useState(term);
    const [results, setResults] = useState([]);
    const searchYelp = async () => {
        const results = await searchRestaurants(searchLocation, searchTerm);
        console.log(results)
        setResults(results);
        // navigate(`/yelp/search/${searchLocation}/${searchTerm}`);
    };
    useEffect(() => { // generate a list
        if (location && term) {
            setSearchLocation(location);
            setSearchTerm(term);
            searchYelp();
        }
    }, [location, term]);
    return (
        <div>

            {/*<h1>Yelp Search Screen</h1>*/}
            <div className="form-group">
                <label>Location</label>
                <input
                    type="text"
                    className="form-control"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                />
                <label>Search Term</label>
                <input
                    type="text"
                    className="form-control"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={searchYelp} className="btn btn-primary">
                    Search
                </button>
                <div className="table-responsive">
                    <table className="table">
                        <tbody>
                        <tr>
                            {results.map((result) => {
                                return (
                                    <td>
                                        <Link to={`/yelp/restaurant/${result.id}`}>
                                            <img src={result.image_url} height={"400px"} />
                                            <br />
                                            <h2>{result.name}</h2>
                                        </Link>
                                    </td>
                                );
                            })}
                        </tr>
                        </tbody>
                    </table>
                </div>

                {/*<pre>{JSON.stringify(results, null, 2)}</pre>*/}
            </div>
        </div>
    ); // Create a new component and a new route
}

export default YelpSearchScreen;