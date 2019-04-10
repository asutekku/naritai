import * as React from 'react';

const ButtonContainer = (props: { children: any }) => {
    return (
        <div className={'button-container'}>
            {props.children}
        </div>
    );
};

export default ButtonContainer;