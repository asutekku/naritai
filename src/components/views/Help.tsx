import * as React from 'react';
import MenuView from '../UI/MenuView';
import TextView from './TextView';

class Help extends React.Component {
    render() {
        return (
            <MenuView title={'Help'}>
                <div>
                    <TextView>
                        <h3>How to use</h3>
                        <p>
                            The app generates a conjugation for a random word. Choose the
                            correct answer on the list given to you. To see the reading
                            of the kanji, just hold the question area.
                        </p>
                    </TextView>
                </div>
            </MenuView>
        );
    }
}

export default Help;