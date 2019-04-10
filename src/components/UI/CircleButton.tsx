import * as React from 'react';
import {Link} from 'react-router-dom';

const CircleButton = (props: { title: string, link: string, disabled?: boolean }) => {
    console.log(props.disabled);
    let inactive = props.disabled;
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