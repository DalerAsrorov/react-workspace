import React, { Component } from 'react';
import styled from 'styled-components';
import Grid from './components/Grid';
import ScoreInfo from './components/ScoreInfo';

const TicTacToeWrapper = styled.div`
    width: 80%;
    height: 80vh;
    margin: 0 auto;
    margin-top: 15px;
`;

const DEFAULT_STATE = {
    board: [null, null, null, null, null, null, null, null, null],

    // x = true, 0 = false
    isTurn: true
};

const [OPTION_1, OPTION_2] = ['X', '0'];

export default class TicTacToe extends Component {
    state = DEFAULT_STATE;

    _handleStepMade(index) {
        let { isTurn, board } = this.state;

        if (board[index] !== null) {
            return;
        }

        let newBoard = [...board];
        newBoard[index] = isTurn;

        this.setState({
            isTurn: !isTurn,
            board: newBoard
        });
    }

    _handleClearBoard() {
        this.setState(DEFAULT_STATE);
    }

    render() {
        const { board, isTurn } = this.state;

        return (
            <TicTacToeWrapper>
                <Grid
                    board={board}
                    onStepMade={this._handleStepMade.bind(this)}
                    n={3}
                    option1={OPTION_1}
                    option2={OPTION_2}
                />
                <ScoreInfo
                    onClearBoard={this._handleClearBoard.bind(this)}
                    isTurn={isTurn}
                    option1={OPTION_1}
                    option2={OPTION_2}
                />
            </TicTacToeWrapper>
        );
    }
}
