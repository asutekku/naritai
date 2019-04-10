import * as React from 'react';
import MenuSection from '../UI/MenuSection';
import MenuLink from '../UI/MenuLink';
import MenuView from '../UI/MenuView';

class Stats extends React.Component {
    render() {
        return (
            <MenuView title={'Conjugations'}>
                <div>
                    <nav>
                        <MenuSection title={'Stats (not implemented yet)'}>
                            <MenuLink title={'Go back'} link={'/'}/>
                        </MenuSection>
                    </nav>
                </div>
            </MenuView>
        );
    }
}

export default Stats;