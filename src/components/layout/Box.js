import React from 'react';
import PropTypes from 'prop-types';

const Box = ({title, className, children}) => {
    return (
        <div className={`box ${className}`}>
            <h3 className="box__head">{title}</h3>
            {children}
        </div>
    )
}

Box.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
}

Box.defaultProps = {
    className: ''
}

export default Box