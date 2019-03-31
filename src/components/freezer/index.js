import React, {Component}  from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Box from '../layout/Box';
import FreezerItem from './FreezerItem'
import AddProductToFreezer from './AddProductToFreezer'
import { updateTemperature, addProductToFreezer, removeScoop} from '../../AC'


class  Freezer  extends Component {
    
    componentDidMount() {
        const randomTemperature = Math.round(Math.random() * 10);
        this.props.updateTemperature(randomTemperature);
    }
    
    handleRestock = (name) => {
        const amount = parseInt(window.prompt('Enter amount of restock'), 10);
        if (!isNaN(amount)) {
            this.props.addProductToFreezer(name, amount)
        }
    }

    render(){
        const {flavors, temperature, removeScoop} = this.props;
        const items = Object.keys(flavors).map(name =>
            <FreezerItem key={name} 
                         name={name} 
                         onRemoveScoop={() => removeScoop(name)}
                         onClickRestock={() => this.handleRestock(name)}
                         scoops={flavors[name]} />
        )
    	return (
    		<Box title={`Freezrt ( -${temperature || 0} C)`}>
                <div className="box__content">
                    {items}
                </div>
                <AddProductToFreezer/>
        </Box>
    )
    }
}

Freezer.propTypes = {
    temperature : PropTypes.number,
    flavors: PropTypes.object,
    updateTemperature: PropTypes.func.isRequired,
    addProductToFreezer: PropTypes.func.isRequired,
    removeScoop: PropTypes.func.isRequired,
}

Freezer.defaultProps = {
    temperature: 0,
    flavors: {}
}

export default connect(
    ({freezer}) => ({
        flavors: freezer.flavors,
        temperature: freezer.temperature
    }),
    { updateTemperature, addProductToFreezer, removeScoop}
)(Freezer)
