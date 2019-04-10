import * as React from 'react';
import MenuSection from '../UI/MenuSection';
import MenuView from '../UI/MenuView';
import {AppSettings} from '../../state/settings';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

interface SettingsState {
    hiraganaToggle: boolean,
    darkModeToggle: boolean
}

export class Settings extends React.Component<{}, SettingsState> {

    constructor(props) {
        super(props);
        this.state = {
            hiraganaToggle: AppSettings.showHiragana,
            darkModeToggle: AppSettings.darkMode
        };
        this.toggleHiragana = this.toggleHiragana.bind(this);
        this.toggleDarkMode = this.toggleDarkMode.bind(this);
    }

    toggleHiragana = () => {
        event.preventDefault();
        let state = AppSettings.toggleHiragana();
        this.setState({hiraganaToggle: state});
    };
    toggleDarkMode = () => {
        event.preventDefault();
        let state = AppSettings.toggleDarkMode();
        this.setState({darkModeToggle: state});
    };

    render() {
        return (
            <MenuView title={'Settings'}>
                <MenuSection title={'Study'}>
                    <div className={'setting-row'}>
                        <div className={'setting-label'}>Show hiragana</div>
                        <Toggle
                            defaultChecked={this.state.hiraganaToggle}
                            icons={false}
                            onChange={this.toggleHiragana}/>
                    </div>
                </MenuSection>
                <MenuSection title={'General'}>
                    <div className={'setting-row'}>
                        <div className={'setting-label'}>Dark mode</div>
                        <Toggle
                            defaultChecked={this.state.darkModeToggle}
                            icons={false}
                            onChange={this.toggleHiragana}/>
                    </div>
                </MenuSection>
            </MenuView>
        );
    }
}