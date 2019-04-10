import * as React from 'react';
import MenuView from '../UI/MenuView';
import TextView from './TextView';

class About extends React.Component {
    render() {
        return (
            <MenuView title={'About'}>
                <TextView>
                    <h3>About the App?</h3>
                    <p>I made this app / tool because I couldn't find a decent way
                        to study the japanese verb conjugations. Hope it's useful for
                        you.
                    </p>
                    <p>
                        It's still heavily under work so'd be glad if you could send me
                        either bug reports or improvements. Just contact me on LINE or
                        send an email.
                    </p>
                    <p>
                        The words used in this app are automatically generated so there
                        might be some mistakes. If you spot one, please tell me and I'll
                        fix the algorithm handling the conjugation.
                    </p>
                    - Aku
                </TextView>
            </MenuView>
        );
    }
}

export default About;