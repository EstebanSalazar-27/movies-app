import React from 'react'



export const HeadingH3 = ({ children, cl, size, weight}) => {
    return (
        <h3 className={`${cl} ${size} ${weight}`}>
            {children}
        </h3>
    )
}
