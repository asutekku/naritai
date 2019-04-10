import * as React from 'react';
import MenuView from '../UI/MenuView';
import CircleButton from '../UI/CircleButton';
import ButtonContainer from '../UI/ButtonContainer';
import RoundedButton from '../UI/RoundedButton';

class Level extends React.Component {
    render() {
        return (
            <MenuView title={'Level'} verticalCenter={true}>
                <ButtonContainer>
                    <RoundedButton title={'N5'} link={'/quiz/n5'} disabled={false}/>
                    <RoundedButton title={'N4'} link={'/quiz/n4'} disabled={true}/>
                    <RoundedButton title={'N3'} link={'/quiz/n3'} disabled={true}/>
                    <RoundedButton title={'N2'} link={'/quiz/n2'} disabled={true}/>
                    <RoundedButton title={'N1'} link={'/quiz/n1'} disabled={true}/>
                </ButtonContainer>
            </MenuView>
        );
    }
}

export default Level;