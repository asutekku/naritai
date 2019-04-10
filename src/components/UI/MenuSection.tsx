import * as React from 'react';

interface MenuSectionProps {
    title: string;
}

class MenuSection extends React.Component<MenuSectionProps> {
    render() {
        return (
            <div className={'menuSection-container'}>
                <div className={'menu-section-title'}>{this.props.title}</div>
                <div className={'menu-section-content'}>{this.props.children}</div>
            </div>
        );
    }
}

export default MenuSection;