import * as React from 'react';
import MenuView from '../UI/MenuView';
import CircleButton from '../UI/CircleButton';

class Level extends React.Component {
    render() {
        return (
            <MenuView title={'Level'}>
                <div className={'circle-button-container'}>
                    <CircleButton title={'N5'} link={'/quiz/n5'} inactive={false}/>
                    <CircleButton title={'N4'} link={'/quiz/n4'} inactive={true}/>
                    <CircleButton title={'N3'} link={'/quiz/n3'} inactive={true}/>
                    <CircleButton title={'N2'} link={'/quiz/n2'} inactive={true}/>
                    <CircleButton title={'N1'} link={'/quiz/n1'} inactive={true}/>
                </div>
            </MenuView>
        );
    }
}

export default Level;