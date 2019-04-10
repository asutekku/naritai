import * as React from 'react';
import {Link} from 'react-router-dom';

const RoundedButton = (props: { title: string, link: string, disabled?: boolean }) => {
    let inactive = props.disabled;
    let link = inactive ? '' : props.link;
    return (
        <div className={`button-rounded-outer ${inactive ? 'disabled' : 'active'}`}>
            <Link to={link}>
                <div className={'button-rounded-inner'}>
                    {props.title}
                </div>
            </Link>
        </div>
    );
};

export default RoundedButton;