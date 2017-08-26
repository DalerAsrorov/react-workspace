import React, { Component } from 'react';
import styled from 'styled-components';
import Grid from './components/Grid';

const TicTacToeWrapper = styled.div`
    width: 80%;
    height: 80vh;
    margin: 0 auto;
    margin-top: 15px;
`;

export default class TicTacToe extends Component {
    state = {
        board: [null, null, null, null, null, null, null, null, null],

        // x = true, 0 = false
        isTurn: true
    };

    _handleStepMade(index) {
        let { isTurn, board } = this.state;

        if (board[index]) {
            return;
        }

        let newBoard = [...board];
        newBoard[index] = isTurn;

        this.setState({
            isTurn: !isTurn,
            board: newBoard
        });
    }

    render() {
        const { board } = this.state;

        return (
            <TicTacToeWrapper>
                <Grid board={board} onStepMade={this._handleStepMade.bind(this)} n={3} option1="X" option2="0" />
            </TicTacToeWrapper>
        );
    }
}
