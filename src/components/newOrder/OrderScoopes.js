import React, {Component} from 'react';
import PropTypes from 'prop-types'

const OrderScoopes = ({flavor, count, handleIncreaseFlavor, handleDecreaseFlavor}) => (
    <div className="scoop">
    <div className="scoop__title">{flavor}</div>
    <div className="scoop-buttons">
        <span className="scoop-buttons__item" onClick={handleIncreaseFlavor}>+</span>
        <span className="scoop-buttons__count">{count}</span>
        <span className="scoop-buttons__item" onClick={handleDecreaseFlavor}>-</span>
    </div>
</div>
)
OrderScoopes.propTypes = {
    flavor:PropTypes.string.isRequired, 
    handleIncreaseFlavor:PropTypes.func.isRequired, 
    count:PropTypes.number.isRequired, 
    handleDecreaseFlavor:PropTypes.func.isRequired
}

export default OrderScoopes;