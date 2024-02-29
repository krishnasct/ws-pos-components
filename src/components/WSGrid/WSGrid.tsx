import React from "react";
import './WSGrid.css';

interface WSGridProps {
    label: string;
}

const WSGrid = (props: WSGridProps) => {
    return <button>{props.label}</button>
}

export default WSGrid;