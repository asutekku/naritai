import * as React from 'react';
import {Link} from 'react-router-dom';

const ListItemDouble = (props: { top: string, bottom: string, topExtra?: string, to: string }) => {
    return (
        <li className={'list-item'}>
            <Link to={props.to}>
                <div className={'list-item-top-row'}>
                    <span className={'list-item-top-main'}>{props.top}</span>
                    {props.topExtra ? <span className={'list-item-top-extra'}>{props.topExtra}</span> : null}
                </div>
                <div className={'list-item-bottom-row'}>
                    {props.bottom}
                </div>
            </Link>
        </li>
    );
};

export default ListItemDouble;