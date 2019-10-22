import React from 'react';

const GenerateQuote = ({ quote }) => {
    return (
        <div>
            <h2>{quote.character}</h2>
            <img src={quote.image} alt={quote.character}></img>
            <p>{quote.quote}</p>
        </div>
    );
}

export default GenerateQuote;