import React from 'react';

const Button = ({btnText,size,icon: Icon}) => {
    return (
        <button className={`animated-button ${size ==="sm"? "px-8! py-1.5!":"" }`}>
             {Icon && <Icon className="arr-1 h-8 w-8" />}
            <span className="text">{btnText}</span>
            <span className="circle"></span>
            {Icon && <Icon className="arr-2 h-8 w-8" />}
        </button>

    );
};

export default Button;