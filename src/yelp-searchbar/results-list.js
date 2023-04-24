import React from 'react';

function ResultsList({ results }) {
    return (
        <div>
            {results.map((restaurant) => (
                <div key={restaurant.id}>
                    <img src={restaurant.image} alt={restaurant.name} />
                    <h3>{restaurant.name}</h3>
                    <p>Rating: {restaurant.rating}</p>
                    <p>Reviews: {restaurant.reviewCount}</p>
                    <p>
                        {restaurant.address}, {restaurant.city}, {restaurant.state}{' '}
                        {restaurant.zipCode}
                    </p>
                    <p>{restaurant.phone}</p>
                </div>
            ))}
        </div>
    );
}

export default ResultsList;