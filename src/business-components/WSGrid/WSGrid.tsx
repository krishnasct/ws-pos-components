import React from "react";
// import './WSGrid.css';
import './assets/scss/wsgrid.scss';

interface WSGridProps {
    label: string;
}

const WSGrid = (props: WSGridProps) => {
    return <div >
        <button className="wsgrid">{props.label}</button>
    </div>
     
}

export default WSGrid;