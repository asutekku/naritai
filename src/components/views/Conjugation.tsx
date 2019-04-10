import * as React from 'react';
import MenuView from '../UI/MenuView';
import {conjugator} from '../../Conjugator';
import MenuSection from '../UI/MenuSection';

let words: [] = require('../../assets/dict/verbs.json');

function Conjugation({match}) {

    let word = words.find((w) => w[0] == match.params.id);
    let c: any = conjugator.conjugate(word[0], word[4]);
    return (
        <MenuView title={`${word[0]}`} customReturn={'/conjugations'}>
            <h2>{word[3]}</h2>
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
    return <table className={'conjugation-table'}>
        <tbody>
        <tr>
            <th> </th>
            <th>Positive</th>
            <th>Negative</th>
        </tr>
        <tr>
            <td className={'cell-title'}>Plain</td>
            <td>{props.plainP}</td>
            <td>{props.plainN}</td>
        </tr>
        <tr>
            <td className={'cell-title'}>Polite</td>
            <td>{props.politeP}</td>
            <td>{props.politeN}</td>
        </tr>
        </tbody>
    </table>;
}

export default Conjugation;