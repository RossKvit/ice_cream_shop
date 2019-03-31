import React, {Component} from 'react';
import PropTypes from 'prop-types'

const OrderForm =({customerName, handleName, cone, handleCone}) => (
    <div className="row">
    <div className="col">
        <label className="label-form">
            Customer name
        </label>
        <input type="text" 
               className="form-control" 
               name="customerName"
               onChange={handleName}
               value={customerName}
               placeholder="Customer name" />
    </div>
    <div className="col">
        <label className="label-form">Container</label>
        <div>
            <div className="form-check">
                <input className="form-check-input" 
                       type="radio" 
                       name="inlineRadioOptions" 
                       id="cone"
                       checked={cone}
                       onChange={handleCone}/>
                <label className="form-check-label" 
                        htmlFor="cone">Cone
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" 
                       type="radio" 
                       name="inlineRadioOptions" 
                       id="cup"
                       checked={!cone}
                       onChange={handleCone}/>
                    <label className="form-check-label" 
                           htmlFor="cup">Cup</label>
            </div>
        </div>
    </div>
</div>

)

OrderForm.propTypes = {
    customerName:PropTypes.string.isRequired, 
    handleName:PropTypes.func.isRequired, 
    cone:PropTypes.bool.isRequired, 
    handleCone:PropTypes.func.isRequired
}

export default OrderForm;