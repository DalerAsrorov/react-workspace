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
    winner: null,
    isTurn: true
};

const [OPTION_1, OPTION_2] = ['X', '0'];

const checkIfWon = (board, player) => {
    let isWinner = null;

    if (
        (board[0] === board[1] && board[1] === board[2] && board[0] === player) ||
        (board[3] === board[4] && board[4] === board[5] && board[3] === player) ||
        (board[6] === board[7] && board[7] === board[8] && board[6] === player) ||
        (board[0] === board[3] && board[3] === board[6] && board[0] === player) ||
        (board[1] === board[4] && board[4] === board[7] && board[1] === player) ||
        (board[2] === board[5] && board[5] === board[8] && board[2] === player) ||
        (board[2] === board[4] && board[4] === board[6] && board[2] === player) ||
        (board[0] === board[4] && board[4] === board[8] && board[0] === player)
    ) {
        isWinner = player;
    }

    return isWinner;
};

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
            board: newBoard,
            winner: checkIfWon(newBoard, isTurn)
        });
    }

    _handleClearBoard() {
        this.setState(DEFAULT_STATE);
    }

    render() {
        const { board, isTurn, winner } = this.state;

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
                    winner={winner}
                    option1={OPTION_1}
                    option2={OPTION_2}
                />
            </TicTacToeWrapper>
        );
    }
}
