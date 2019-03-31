import React, {Component} from 'react';
import Scoop from './Scoop';

const STATUSES = [
    'pending',
    'fullfilled',
    'paid',
    'cancelled'
];

class Order extends Component {

    handleChange = ({target}) => {
        if (target.value === 'fullfilled') {
            this.props.fullFillOrder()
        } else if (target.value === 'paid') {
            this.props.payForOrder()
        } else if (target.value === 'cancelled') {
            this.props.cancelOrder()
        }
    }

	render(){
        const {order} = this.props
		return(
            <div className={`order order_${order.status}`}>
                <div className="order-status">
                    <p className="order-status__title">{order.customerName}</p>
                    <select className="order-status__select"
                            onChange={this.handleChange}
                            value={order.status}>
                        {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                </div>

                <p className="order-count">{order.cone ? 'Cone' : 'Cup'}</p>

                {Object.keys(order.scoopes).map(name =>
                    <Scoop key={name}
                           tittle={name}
                           count={order.scoopes[name]}
                           />)}
              </div>
		);
	}
}

export default Order;