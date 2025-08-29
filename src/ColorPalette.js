import React, { useState } from 'react';

function ColorPalette() {
    const [colors, setColors] = useState(['#FF5733', '#33FF57', '#3357FF']);

    return (
        <div className="palette">
            {colors.map((color, index) => (
                <div key={index} className="color-box" style={{ backgroundColor: color }}></div>
            ))}
        </div>
    );
}

export default ColorPalette;
