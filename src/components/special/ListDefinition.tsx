import * as React from 'react';

const ListDef = (props: { type: string, string: string }) => {
    return (
        <li className={'list-item single'}>
            <span className={'list-item-def-type'}>{props.type}</span>
            <span className={'list-item-def-string'}>{props.string}</span>
        </li>
    );
};

export default ListDef;