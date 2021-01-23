import React, { Component } from 'react';
 

const Footer = ({counters}) => {
    console.log('Footer - Rendered')
    const divClasses = () => {
        let classes = "rounded my-2 bg-";
        classes += counters.filter(c => c.value > 0).length > 0 ? "primary lead" : "danger";
        return classes
    }
    return (
            <div className={divClasses()}>
                   <h2 className="text-center text-success p-2">
                   {counters.filter(counter => counter.value > 0).length} <span className="text-white">Non Zero Counters</span>
                   </h2> 
            </div>
        );
        
}
 
export default Footer;