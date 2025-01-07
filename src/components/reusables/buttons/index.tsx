import React from "react";

interface Props {
    children: React.ReactNode;
    title: string
    className?: string
}

const Buttons: React.FC<Props> = ({ title, className, children }) => {
    return (
        <div title={title} className={className} >
            {children}
        </div>
    );
};

export default Buttons;
