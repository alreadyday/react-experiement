import React from 'react';

const StockTable = () => {
    const handleSubmit = event => {
        console.warn('123');
        event.preventDefault();
        fetch('/api/hello').then(response => console.warn(response));
    };
    return (
        <form onSubmit={ handleSubmit }>
            stock table
            <button type='submit'>Submit</button>
        </form>
    );
};
export default StockTable;
