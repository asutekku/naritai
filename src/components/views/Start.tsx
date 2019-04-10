import * as React from 'react';
import MenuTitle from '../UI/MenuTitle';
import ButtonContainer from '../UI/ButtonContainer';
import RoundedButton from '../UI/RoundedButton';
import MenuSubTitle from '../UI/MenuSubTitle';

class Start extends React.Component {
    render() {
        return (
            <>
                <MenuTitle title={'Naritai'}/>
                <MenuSubTitle title={'Study japanese verbs efficiently!'}/>
                <nav>
                    <ButtonContainer>
                        <RoundedButton title={'Study'} link={'/level'}/>
                        <RoundedButton title={'Conjugations'} link={'/conjugations'} disabled={false}/>
                        <RoundedButton title={'Stats'} link={'/stats'} disabled={true}/>
                        <RoundedButton title={'Settings'} link={'/settings'} disabled={false}/>
                        <RoundedButton title={'Help'} link={'/help'}/>
                        <RoundedButton title={'About'} link={'/about'}/>
                    </ButtonContainer>
                </nav>
            </>
        );
    }
}

export default Start;