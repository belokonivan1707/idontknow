import React from 'react';

interface IProps {
    title: string;
}

export const PrimaryButton: React.FC<IProps> = ({title}) => {
    return (
        <button>
            {title}
        </button>
    )
}