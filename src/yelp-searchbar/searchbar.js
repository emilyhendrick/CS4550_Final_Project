import React, { useState } from 'react';

const SearchBar = ({ setResults }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_API_URL}/search?term=${searchTerm}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                mode: 'cors',
            });
            const data = await response.json();
            setResults(data.businesses);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSearch}>
            <input type="text" placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value)} />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
