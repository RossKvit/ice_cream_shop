import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Colleague extends Component {

	render(){
	    const {image, name, status} = this.props;
	    const fullName = `${name.title}. ${name.firts} ${name.last}`;
	    const picture = image.medium;

		return(
            <div className="colleagues">
                <div className="colleague__photo">
                    <img src={`/i/${picture}`} alt={fullName} />
                </div>
                <div>
                    <p className="colleague-person-name">{name}</p>
                    <p className="colleague-person-status">{status}</p>
                </div>
            </div>
		);
	}
}

Colleague.propTypes = {
    image: PropTypes.object,
    status: PropTypes.object,
    name: PropTypes.object
}

export default Colleague;