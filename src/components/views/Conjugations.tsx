import * as React from 'react';
import MenuView from '../UI/MenuView';
import ListItemDouble from '../UI/ListItemDouble';

let words: [] = require('../../assets/dict/verbs.json');

interface ConjugationsState {
    searchValue: string;
}

class Conjugations extends React.Component<{}, ConjugationsState> {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    search(word: string[]) {
        let search = this.state.searchValue.toLowerCase();
        let searchJP: boolean = word[0].toLowerCase().includes(search);
        let searchHI: boolean = word[1].toLowerCase().includes(search);
        let searchRO: boolean = word[2].toLowerCase().includes(search);
        let searchEN: boolean = word[3].toLowerCase().includes(search);
        let showAll = !this.state.searchValue;
        return showAll ? showAll : (searchJP || searchEN || searchHI || searchRO);
    }

    getWords() {
        return words.filter((word: string[]) => this.search(word)).map((word: any, index: number) => {
            return <ListItemDouble top={word[0]} topExtra={word[1]} to={`/conjugation/${word[0]}`}
                                   bottom={word[3]} key={'word_' + index}/>;
        });
    };

    handleInputChange(event) {
        this.setState({searchValue: event.target.value});
        console.log(event.target.value);
        event.preventDefault();
    }

    render() {
        return (
            <MenuView title={'Conjugations'}>
                <div className={'search-container'}>
                    <input type={'text'}
                           name={'search-field'}
                           value={this.state.searchValue}
                           onChange={this.handleInputChange}
                           placeholder={'Search'}
                           className={'search-field'}
                           autoComplete={'off'}/>
                </div>
                <div className={'list-container scroll-area'}>
                    <ul className={'ui-list-container'}>
                        {this.getWords()}
                    </ul>
                </div>
            </MenuView>
        );
    }
}

export default Conjugations;