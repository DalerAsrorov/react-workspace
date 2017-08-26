import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ScoreInfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const ScoreInfoChild = styled.div`
    flex: 1 1;
    font-weight: bold;
`;

const ReplayButton = styled.button`
    padding: 1.0em;
    font-size: 14px;
    background: lightgreen;
`;

export default class ScoreInfo extends PureComponent {
    static propTypes = {
        onClearBoard: PropTypes.func.isRequired,
        isTurn: PropTypes.bool.isRequired,
        option1: PropTypes.string.isRequired,
        option2: PropTypes.string.isRequired
    };

    render() {
        const { onClearBoard, isTurn, option1, option2 } = this.props;
        const currentPlayer = isTurn ? option1 : option2;

        return (
            <ScoreInfoWrapper>
                <ScoreInfoChild>
                    Turn: {currentPlayer}
                </ScoreInfoChild>
                <ScoreInfoChild>
                    <ReplayButton onClick={onClearBoard}>Replay</ReplayButton>
                </ScoreInfoChild>
            </ScoreInfoWrapper>
        );
    }
}
