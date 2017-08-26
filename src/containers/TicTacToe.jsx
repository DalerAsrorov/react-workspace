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
        this.setState(prevState => {
            let { isTurn, board } = prevState;
            board[index] = isTurn;

            return {
                isTurn: !isTurn,
                board
            };
        });
    }

    render() {
        const { board } = this.state;

        return (
            <TicTacToeWrapper>
                <Grid
                    board={board}
                    onStepMade={this._handleStepMade.bind(this)}
                    rows={3}
                    columns={3}
                    option1="X"
                    option2="0"
                />
            </TicTacToeWrapper>
        );
    }
}
