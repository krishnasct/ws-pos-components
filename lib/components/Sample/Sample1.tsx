import React from "react";
import './sample.css';

interface WSGridProps {
    label: string;
}

export const Sample1 = (props: WSGridProps) => {
    return <button>{props.label}</button>
}