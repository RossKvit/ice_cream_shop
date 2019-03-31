import React, {Fragment} from 'react';

import Header from './layout/Header'
import Footer from './layout/Footer'
import Box from './layout/Box'
import Freezer from './freezer'
import NewOrder from './newOrder';
import OrderTicket from './orderTicket'
import Colleagues from './colleagues'

const App = () => <Fragment>
    <Header />
    <div className="container container_main">
        <div className="wrap-box">
            <Freezer />
            <Box title="New Order">
                <NewOrder/>
            </Box>
            <Box title="Orders" className="box_orders">
                <OrderTicket/>
            </Box>
            <Box title="Colleagues" className="box_colleagues">
                <Colleagues />
            </Box>
        </div>
    </div>
    <Footer />



</Fragment>


export default App;