import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Scoop  = ({tittle, count}) =>    <div className="order-item">
                    <div className="order-flavor__item">
                        <span className="order-item__title">{tittle}</span>
                        <span className="order-item__count">{count}</span>
                    </div>
                </div>

Scoop.PropTypes = {
    tittle: PropTypes.string.isRequired, 
    count: PropTypes.number.isRequired,
}

export default Scoop;