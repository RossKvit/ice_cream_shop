import React, {Component}  from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { addProductToFreezer } from '../../AC'
import F from '../../flavors'

class AddProductToFreezer extends Component {
    state = {
        flavor: '',
        amount: 1
    }

    renderFlavorOption = () => {
        return Object.keys(F).map(name =>
            <option key={name} value={name}>{F[name]}</option>
        )
    }

    handleChange = ({target}) => this.setState({
        [target.name]: target.value
    })

    addProduct = e => {
        e.preventDefault();
        const flavor = this.state.flavor;
        const amount = parseInt(this.state.amount, 10)

        if (!flavor) {
            alert('Choose flavor');
            return
        }

        if (isNaN(amount) && amount <= 0) {
            alert('Type amount of flavor');
            return
        }
        this.props.addProductToFreezer(flavor, amount);

        this.setState({
            flavor: '',
            amount: 1
        })
    }
    render() {
        const { flavor, amount } = this.state
        return (
            <form>
                <div className="add-product-form">
                    <select name="flavor"
                            className="form-select"
                            onChange={this.handleChange}
                            value={flavor}
                    >
                        <option value="">Choose flavor</option>
                        {this.renderFlavorOption()}
                    </select>

                    <input type="numer"
                           min={1}
                           className="form-number"
                           name="amount"
                           value={amount}
                           onChange={this.handleChange}
                    />

                    <button className="add-product-btn" onClick={this.addProduct}> Add product</button>
                </div>
            </form>
        )
    }
}

AddProductToFreezer.propTypes = {
    addProductToFreezer: PropTypes.func.isRequired
}

export default connect(
    null,
    {addProductToFreezer}
)(AddProductToFreezer)