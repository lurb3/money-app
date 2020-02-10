import React from 'react';
import './Movements.scss'

const Movements = ({ item, amount, date }) => {
    return (
        <div className="Movements">
            <div className="row">
                <div className="col-7 text-left purchase">
                    <strong>Compra: { item }</strong>
                </div>
                <div className="col-5 text-right amount">
                    - { amount } €
                </div>
                <h3 className="date col-12 text-left">{ date }</h3>
            </div>
        </div>
    );
};

export default Movements;