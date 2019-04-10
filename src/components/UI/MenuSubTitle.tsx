import * as React from 'react';

const MenuSubTitle = (props:{title:string}) => {
    return (
        <div className={'menu-title-container'}>
            <h2 className={'menu-title'}>
            {props.title}
            </h2>
        </div>
    );
};

export default MenuSubTitle;