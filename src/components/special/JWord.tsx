import * as React from 'react';
import {Word} from '../views/Quiz';
import {AppSettings} from '../../state/settings';

export const extractKanji = (word: string): string[] => {
    let hiraganaList = 'ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをんゔ';
    let kanji: string, reading: string = '';
    if (word) {
        for (let i = 0; i < word.length; i++) {
            if (hiraganaList.includes(word[i])) {
                reading += word[i];
            }
        }
    }
    kanji = word.replace(reading, '');
    return [kanji, reading];
};

export interface wordProps {
    word: Word | string;
    showFuri: boolean;
    link?: '';
}


export const JapaneseWord = (props: wordProps) => {

    let parts: string[],
        firstPart: string,
        reading: string,
        lastpart: string;
    //let showReading = props.showFuri && props.word instanceof Word;
    let onlyHiragana = AppSettings.showHiragana;

    if (props.word instanceof Word) {
        parts = extractKanji(props.word.japanese);
        firstPart = parts[0];
        reading = props.word.furigana.replace(parts[1], '');
        lastpart = parts[1];
    } else {
        firstPart = props.word;
    }

    return <ruby>
        {onlyHiragana ? reading : firstPart}
        {props.showFuri ?
            <>
                <rp>(</rp>
                <rt>{reading}</rt>
                <rp>)</rp>
            </> : null
        }
        {lastpart}
    </ruby>;
};