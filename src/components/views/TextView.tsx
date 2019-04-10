import * as React from 'react';

const TextView = (props: { children: any }) => {
    return (
        <div className={'text-view'}>
            {props.children}
        </div>
    );
};

export default TextView;