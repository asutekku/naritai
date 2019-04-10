import * as React from 'react';
import RoundedButton from './RoundedButton';
import ButtonContainer from './ButtonContainer';

interface MenuProps {
    title: string;
    customReturn?: string
    verticalCenter?: boolean;
    children?: any;
    hideReturn?: boolean;
}

const MenuView = (props: MenuProps) => (
    <>
        <div className={'section-title'}>
            <div className={'section-title-container'}>
                <h1 className={'section-title-h1'}>
                    {props.title}
                </h1>
            </div>
        </div>
        <div className={`section-content ${props.verticalCenter ? 'vertical-center' : ''}`}>
            {props.children}
        </div>
        {!props.hideReturn ?
            <div className={'section-button'}>
                <ButtonContainer>
                    <RoundedButton title={'Return'}
                                   link={props.customReturn ? props.customReturn : '/'}/>
                </ButtonContainer>
            </div>
            : null}
    </>
);

export default MenuView;