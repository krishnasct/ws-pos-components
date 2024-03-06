import React from "react";
import './WSGrid.css';

interface WSGridProps {
    label: string;
}

export const WSGrid = (props: WSGridProps) => {
    return <button>{props.label}</button>
}
