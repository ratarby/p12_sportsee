import React from 'react';
import { Rectangle } from 'recharts';
import PropTypes from 'prop-types';

export default function CustomCursor(props) {
    const { points, width } = props;
    const { x, y } = points[0];
    console.log(props);
    return (
        <Rectangle
            key={x}
            fill="#000"
            stroke="#000"
            x={x}
            y={y}
            width={width}
            height={300}
            opacity={0.1} />
    );
}

CustomCursor.propTypes = {
    points: PropTypes.array,
    width: PropTypes.number
}