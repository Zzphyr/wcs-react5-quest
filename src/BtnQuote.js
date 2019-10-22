import React from 'react';
import './BtnQuote.css';

const BtnQuote = ({ onClick }) => {
    return (
        <button onClick={onClick} className="btn-style">Click me!</button>
    );
}

export default BtnQuote;

