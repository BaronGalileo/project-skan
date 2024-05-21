import React from "react";
import classNames from "classnames";



const Text = ({ children, className = "", as, ...restProps}) => {

    const classes = classNames(
        'txt',
        className,
    )
    const Component = as || "p";

    return (
        <Component 
            {...restProps}
            className={classes}
        >{children}
        </Component>
    );
};

export { Text };