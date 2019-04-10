import * as React from 'react';

const MenuTitle = (props:{title:string}) => {
    return (
        <div className={'menu-title-container'}>
            <h1 className={'menu-title'}>
            {props.title}
            </h1>
        </div>
    );
};

export default MenuTitle;