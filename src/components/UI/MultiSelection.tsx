import * as React from 'react';

interface MultiChoiceProps {
    title: string;
    correct: boolean;
    selected?: boolean;
    onClick: any;
}

const initialState = {
    answerVisible: false
};


class MultiSelection extends React.Component<MultiChoiceProps, { answerVisible: boolean }> {

    constructor(props) {
        super(props);
        this.state = initialState;
    }


    changeColor = () => {
        this.setState({answerVisible: true});
        console.log('clicked an answer: ' + this.state.answerVisible);
        this.props.onClick(this.props.correct);
    };

    getClass = () => {
        let className = '';
        if (this.state.answerVisible) {
            console.log('yay');
            className = this.props.correct ? 'correct' : 'incorrect';
        }
        return className;
    };

    reset() {
        this.setState(initialState);
    }

    render() {

        return (
            <div className={`button-rounded-outer`}>
                <div className={`button-rounded-inner ${this.getClass()}`} onClick={this.changeColor}>
                    {this.props.title}
                </div>
            </div>
        );
    }
}

export default MultiSelection;