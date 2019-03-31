import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import './orderTicket.css'
import Order from './Order'
import {fullFillOrder, payForOrder, cancelOrder} from '../../AC'

const OrderTicket  = ({orders, fullFillOrder, payForOrder, cancelOrder}) =>
    <div className="box__content box__content_orders">
        {
            orders.map(order => <Order key={order.id}
                                      order={order}
                                      fullFillOrder={() => fullFillOrder(order.id)}
                                      payForOrder={() => payForOrder(order.id)}
                                      cancelOrder={() => cancelOrder(order.id)}
                                      />)
        }
	</div>

OrderTicket.propTypes ={
    orders: PropTypes.array.isRequired,
    fullFillOrder: PropTypes.func.isRequired,
    payForOrder: PropTypes.func.isRequired,
    cancelOrder: PropTypes.func.isRequired,
}
export default connect(
    ({order}) => ({orders: order}),
    {fullFillOrder, payForOrder, cancelOrder}
)(OrderTicket);