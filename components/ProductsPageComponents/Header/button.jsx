import React from 'react';

const Button = ({children, onClick, className}) => {
    if (onClick) {
        return (
            <button onClick={onClick} className={`${className}`}>
                {children}
            </button>
        )
    }
    return (
        <button className={`${className}`}>
            {children}
        </button>
    );
};

export default Button;