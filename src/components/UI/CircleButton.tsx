import * as React from 'react';
import {Link} from 'react-router-dom';

const CircleButton = (props: { title: string, link: string, inactive?: boolean }) => {
    console.log(props.inactive);
    let inactive = props.inactive;
    let link = inactive ? '' : props.link;
    return (
        <div className={`circle-button-outer ${inactive ? 'disabled' : 'active'}`}>
            <Link to={link}>
                <div className={`circle-button-inner`}>{props.title}</div>
            </Link>
        </div>
    );
};

export default CircleButton;