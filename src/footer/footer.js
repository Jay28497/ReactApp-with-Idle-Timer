import React from 'react';


export const Footer = () => {

    const year = new Date().getFullYear();
    const footerString = '\u00A9 Jaykumar '
    
    return (
        <div className="footer">
            {footerString}{year}
        </div>
    )
}