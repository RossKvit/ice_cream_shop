import React  from 'react';
import './freezer.css'

const  FreezerItem  = ({name, scoops, onClickRestock, onRemoveScoop}) => (
    <div className="ic">
        <p className="ic__title">{name}</p>
        <p className="ic__count">{scoops}</p>
        <button className="ic__restock" onClick={onClickRestock}>Restock</button>
        <button className="ic__restock" onClick={onRemoveScoop}>Remove</button>

    </div>
)

export default FreezerItem;