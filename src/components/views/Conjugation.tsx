import * as React from 'react';
import MenuView from '../UI/MenuView';
import {conjugator} from '../../Conjugator';
import MenuSection from '../UI/MenuSection';
import {JapaneseWord} from '../special/JWord';
import {Word} from './Quiz';

let words: [] = require('../../assets/dict/verbs.json');

function Conjugation({match}) {

    let word = words.find((w) => w[0] == match.params.id);
    let titleWord = new Word(word[0], word[1], word[2], word[3], word[4]);
    let c: any = conjugator.conjugate(word[0], word[4]);
    return (
        <MenuView title={`${word[0]}`} customReturn={'/conjugations'}>
            <h2><JapaneseWord word={titleWord} showFuri={true}/></h2>
            <h3>{word[3]}</h3>
            <MenuSection title={'Present'}>
                <ConjugationTable plainP={c[0].form} plainN={c[1].form} politeP={c[2].form} politeN={c[3].form}/>
            </MenuSection>
            <MenuSection title={'Past'}>
                <ConjugationTable plainP={c[4].form} plainN={c[5].form} politeP={c[6].form} politeN={c[7].form}/>
            </MenuSection>
        </MenuView>
    );
}

function ConjugationTable(props: { politeP: string, politeN: string, plainP: string, plainN: string, }) {
    return <div className={'conjugation-table'}>
        <div></div>
        <div>Positive</div>
        <div>Negative</div>
        <div className={'cell-title'}>Plain</div>
        <div>{props.plainP}</div>
        <div>{props.plainN}</div>
        <div className={'cell-title'}>Polite</div>
        <div>{props.politeP}</div>
        <div>{props.politeN}</div>
    </div>;
}

export default Conjugation;