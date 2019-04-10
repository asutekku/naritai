import * as React from 'react';
import '../assets/scss/App.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Start from './views/Start';
import Quiz from './views/Quiz';
import Level from './views/Level';
import About from './views/About';
import Stats from './views/Stats';
import {NaritaiSettings} from '../types';
import {Settings} from './views/Settings';
import Help from './views/Help';
import Conjugations from './views/Conjugations';
import Conjugation from './views/Conjugation';

export interface AppProps {
}

interface AppState {
    settings: NaritaiSettings;
}

export default class App extends React.Component<AppProps, AppState> {


    render() {
        return (
            <Router>
                <div className="app">
                    <Route exact path="/" component={Start}/>
                    <Route path="/quiz" component={Quiz}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/level" component={Level}/>
                    <Route path="/stats" component={Stats}/>
                    <Route path="/about" component={About}/>
                    <Route path="/help" component={Help}/>
                    <Route path="/conjugations" component={Conjugations}/>
                    <Route path="/conjugation/:id" component={Conjugation}/>
                </div>
            </Router>
        );
    }
}
