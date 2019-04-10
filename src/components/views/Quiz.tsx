import * as React from 'react';
import {conjugator} from '../../Conjugator';
import {Link} from 'react-router-dom';
import MultiSelection from '../UI/MultiSelection';
import {Utilities} from '../../Utilities';
import {JapaneseWord} from '../special/JWord';
import {NaritaiSettings} from '../../types';
import {AppSettings} from '../../state/settings';
import ButtonContainer from '../UI/ButtonContainer';

let words: [] = require('../../assets/dict/verbs.json');

interface dictEntry {
    japanese: string;
    furigana: string;
    romaji: string;
    english: string;
    type: string;
}

export class Word implements dictEntry {
    japanese: string;
    furigana: string;
    romaji: string;
    english: string;
    type: string;

    constructor(japanese: string, furigana: string, romaji: string, english: string, type: string) {
        this.japanese = japanese;
        this.furigana = furigana;
        this.romaji = romaji;
        this.english = english;
        this.type = type;
    }
}

enum QuizStyle {
    typing = 'typing',
    multi = 'typing'
}

interface quizState {
    word: Word;
    conjugation: any;
    allConjugations: any;
    answerValue: '',
    showAnswer: boolean,
    showReading: boolean
    correct: number;
    wrong: number;
    windowWidth: number;
    windowHeight: number;
    style: QuizStyle;
}

interface quizProps {
    settings?: NaritaiSettings;
}


class Quiz extends React.Component<quizProps, quizState> {

    answers: any;

    constructor(props) {
        super(props);
        let wBase: dictEntry = words[~~(words.length * Math.random())];
        let word = new Word(wBase[0], wBase[1], wBase[2], wBase[3], wBase[5]);
        let conjugations;
        if (AppSettings.showHiragana) {
            conjugations = conjugator.conjugate(word.furigana, word.type);
        } else {
            conjugations = conjugator.conjugate(word.japanese, word.type);
        }
        this.state = {
            word: word,
            conjugation: this.randomProperty(conjugations),
            allConjugations: conjugations,
            answerValue: '',
            showAnswer: false,
            showReading: false,
            correct: 0,
            wrong: 0,
            windowHeight: 0,
            windowWidth: 0,
            style: QuizStyle.multi
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputSubmit = this.handleInputSubmit.bind(this);
    }

    handleInputSubmit(event) {
        event.preventDefault();
        console.log(this.state.answerValue);
        let correct = (
            this.state.answerValue === this.state.conjugation.form ||
            this.state.answerValue === this.state.word.furigana[0] + this.state.conjugation.form.substr(1)
        );
        if (correct) {
            this.updateQuestion(true);
            return;
        } else {
            this.updateQuestion(false);
        }
    }

    updateQuestion(correct: boolean) {
        let wBase: dictEntry = words[~~(words.length * Math.random())];
        let wCon: any;
        let word = correct ? new Word(wBase[0], wBase[1], wBase[2], wBase[3], wBase[5]) : this.state.word;
        if (AppSettings.showHiragana) {
            wCon = conjugator.conjugate(word.furigana, word.type);
        } else {
            wCon = conjugator.conjugate(word.japanese, word.type);
        }
        let allConjugations: any = correct ? wCon : this.state.allConjugations;
        let conjugation: any = correct ? this.randomProperty(wCon) : this.state.conjugation;
        this.setState({
            answerValue: '',
            showAnswer: false,
            showReading: false,
            word: word,
            conjugation: conjugation,
            allConjugations: allConjugations,
            correct: correct ? this.state.correct + 1 : this.state.correct,
            wrong: correct ? this.state.wrong : this.state.wrong + 1
        });
        if (correct) this.getRandomAnswers(allConjugations, conjugation.form);
    }

    handleInputChange(event) {
        this.setState({answerValue: event.target.value});
        event.preventDefault();
    }

    randomProperty(obj: {}) {
        let keys = Object.keys(obj);
        return obj[keys[keys.length * Math.random() << 0]];
    };

    toggleReading(e) {
        e.preventDefault();
        this.setState(prevState => ({showReading: !prevState.showReading}));
    }

    handleResize = () => this.setState({
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth
    });


    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
        this.getRandomAnswers();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    answerAction = (rightChoice: boolean) => {
        if (rightChoice) {
            this.updateQuestion(true);
            console.log(this.state.word);
        } else {
            this.updateQuestion(false);
        }
        console.log('Uh oh, the answer was ' + rightChoice);
        console.log('yo');
    };

    getRandomAnswers(conjugations?: any, correct?: string) {
        let workCon = this.state.allConjugations;
        let form = this.state.conjugation.form;
        if (conjugations) {
            workCon = conjugations;
            form = correct;
        }
        let array: any[] = [];
        this.answers = [];
        let answer = <MultiSelection
            title={correct ? correct : form}
            correct={true}
            onClick={this.answerAction}
            key={Math.random()}/>;
        let count = 3;
        while (count > 0) {
            let conjugation = this.randomProperty(workCon);
            if (conjugation.form !== form) {
                array.push(
                    <MultiSelection
                        title={conjugation.form}
                        correct={false}
                        onClick={this.answerAction}
                        key={Math.random()}
                    />);
                count--;
            }
        }
        this.answers = Utilities.shuffle([...array, answer]);
    }

    render() {
        return (
            <div className={'quiz-container'} style={{height: window.innerHeight}}>
                <div className={'quiz-question-area'}>
                    <div className={'section-title'}>
                        <div className={'section-title-container'}>
                            <div className={'quiz-progress-container'}>
                                <div className={'quiz-value'}>
                                    <Link to={'/level'}>
                                        Return
                                    </Link>
                                </div>
                                <div className={'quiz-value'}>
                                    ✔ <span>{this.state.correct}</span>
                                </div>
                                <div className={'quiz-value'}>
                                    Correct <span> {
                                    !((this.state.wrong + this.state.correct) == 0) ? Math.floor(100 * (this.state.correct / (this.state.wrong + this.state.correct))) : 0
                                }%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'quiz-question-container'}
                         onMouseDownCapture={(e) => this.toggleReading(e)}
                         onMouseUpCapture={(e) => this.toggleReading(e)}
                         onTouchStart={(e) => this.toggleReading(e)}
                         onTouchEnd={(e) => this.toggleReading(e)}>
                        <div className={'quiz-question-container-inner'}>
                            <p className={'form'}>
                                <Link to={'/level'}>
                                    {this.state.conjugation.name}
                                    <span className={'no-style'}>-form</span>
                                </Link>
                            </p>
                            <p className={'word-jp'}>
                                <JapaneseWord word={this.state.word} showFuri={this.state.showReading}/>
                            </p>
                            <p className={'word-en'}>{this.state.word.english}</p>
                        </div>
                    </div>
                    <div className={`quiz-answer-container${this.state.showAnswer ? ' visible' : ''}`}>
                        {this.state.showAnswer ?
                            <JapaneseWord word={this.state.conjugation.form} showFuri={false}/> : null
                        }
                    </div>
                </div>
                <div className={'quiz-task-container'}>
                    <div className={'quiz-task'}>
                        {this.state.style == QuizStyle.multi ? 'Choose ' : 'Type '}
                        the <b>{this.state.conjugation.name}</b> -form
                    </div>
                </div>
                <div className={`quiz-input-container ${this.state.style == QuizStyle.multi ? 'multi' : 'type'}`}>
                    <ButtonContainer>
                        {this.answers}
                    </ButtonContainer>
                </div>
            </div>
        );
    }
}

/*
<div className={'quiz-input-container'}>
                    <form onSubmit={this.handleInputSubmit} autoComplete={'off'} className={'quiz-form'}>
                        <input type={'text'}
                               name={'form'}
                               value={this.state.answerValue}
                               onChange={this.handleInputChange}
                               placeholder={'Your answer'}
                               className={'quiz-input'}
                               ref={input => input && input.focus()}
                               autoComplete={'off'}/>
                        <input type={'submit'} value={'Submit'}/>
                    </form>
                </div>
 */

export default Quiz;