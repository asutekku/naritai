import * as React from 'react';
import MenuTitle from '../UI/MenuTitle';
import ButtonContainer from '../UI/ButtonContainer';
import RoundedButton from '../UI/RoundedButton';
import MenuSubTitle from '../UI/MenuSubTitle';
import MenuView from '../UI/MenuView';

class Start extends React.Component {
    render() {
        return (
            <MenuView title={'Naritai'} verticalCenter={true} hideReturn={true}>
                <ButtonContainer>
                    <RoundedButton title={'Study'} link={'/level'}/>
                    <RoundedButton title={'Conjugations'} link={'/conjugations'} disabled={false}/>
                    <RoundedButton title={'Stats'} link={'/stats'} disabled={true}/>
                    <RoundedButton title={'Settings'} link={'/settings'} disabled={false}/>
                    <RoundedButton title={'Help'} link={'/help'}/>
                    <RoundedButton title={'About'} link={'/about'}/>
                </ButtonContainer>
            </MenuView>
        );
    }
}

export default Start;