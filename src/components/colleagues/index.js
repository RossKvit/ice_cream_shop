import React,{Component , Fragment} from 'react';
import Colleague from './Colleague'
import {connect} from 'react-redux'
import './colleagues.css'
import employees from "../../reducer/employees";
import {fetchEmployees} from '../../AC'

class Colleagues extends Component{
    render(){
        const {data, loading, error} = this.props;

        return(
            <div>
            {!loading && !error &&
                <Fragment>
                    { data.map( person => <Colleague
                        name={person.name}
                        image={person.picture}
                        status="checked in" /> ) }
                </Fragment> }
                { loading ? <h2>Loading ...</h2> : '' }
            </div>

        )
    }
}

export default connect(
    ({employees}) => ({
        data: employees.data,
        loading: employees.loading,
        error: employees.error
    }),
    {fetchEmployees}
)(Colleagues)