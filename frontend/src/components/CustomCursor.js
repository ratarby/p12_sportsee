import React from 'react';
import { Rectangle } from 'recharts';

/**
 * Function to render a custom cursor component based on provided points and width.
 *
 * @param {object} props - Object containing points and width properties.
 * @return {JSX.Element} React component representing a custom cursor.
 */
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

