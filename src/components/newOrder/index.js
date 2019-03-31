import React, {Component} from 'react';
import {connect} from 'react-redux';
import './newOrder.css'
import OrderForm from './OrderForm'
import OrderScoopes from './OrderScoopes'
import {placeOrder} from "../../AC"
import F from '../../flavors'

const DEFAULT_STATE = {
    customerName: '',
    scoopes: {},
    cone: false
}

class NewOrder extends Component {
    state = {
        ...DEFAULT_STATE
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.placeOrder(this.state);
        this.setState(DEFAULT_STATE)
    }
    handleName = ({target}) => this.setState({
        customerName: target.value
    })

    handleCone = ({target}) => this.setState({
        cone: target.id === 'cone'
    })

    handleDecreaseFlavor = (flavorName) => {
        const {scoopes} = this.state;
        if (!scoopes[flavorName]) {
            return;
        }
        
        if (scoopes[flavorName] === 1) {
            const updatedScoops = {
                ...scoopes
            }
            delete updatedScoops[flavorName]
            
            this.setState({
                scoopes: updatedScoops
            })
        } else {
            this.setState({
                scoopes: {
                    ...scoopes,
                    [flavorName]: scoopes[flavorName] - 1
                }
            })
        }
    }
    
    handleIncreaseFlavor = (flavorName) => {
        this.setState({
            scoopes: {
                ...this.state.scoopes,
                [flavorName]: (this.state.scoopes[flavorName] || 0) + 1
            }
        })
    }

	render(){
        const {customerName, scoopes, cone} = this.state;
		return(
            <div>
                <form className="form">
                    <OrderForm
                        cone={cone}
                        handleCone={this.handleCone}
                        handleName={this.handleName}
                        customerName={customerName}/>
                    <div>
                        <label className="label-form label-form_scoops">Scoops</label>
                        <div className="scoops">

                        {
                            Object.keys(F).map(flavor => 
                            <OrderScoopes key={flavor}
                                          handleDecreaseFlavor = {() => this.handleDecreaseFlavor(flavor)}
                                          handleIncreaseFlavor = {() => this.handleIncreaseFlavor(flavor)}
                                          count={scoopes[flavor] || 0}
                                          flavor={flavor}/>)
                        }
                        
                        </div>
                    </div>

                    <button className="order-button" onClick={this.handleSubmit}>Add</button>
                </form>
             </div>
		);
	}
}

export default connect(
    ({order}) => ({order}),
    {placeOrder}
)(NewOrder)