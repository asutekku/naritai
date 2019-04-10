import * as React from 'react';
import {Link} from 'react-router-dom';

const MenuLink = (props: { title: string, link: string, inactive?: boolean }) => {
    console.log(props.inactive);
    let inactive = props.inactive;
    let link = inactive ? '' : props.link;
    return (
        <div className={`link-main-container ${inactive ? 'disabled' : 'active'}`}>
            <Link to={link}>
                <div className={`link-main`}>{props.title}</div>
            </Link>
        </div>
    );
};

export default MenuLink;