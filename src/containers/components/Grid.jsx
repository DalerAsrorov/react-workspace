import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Cell from './Cell';

const GridWrapper = styled.div`
    display: table;
    width: 100%;
    height: 100%;
`;

const Grid = props => {
    const { board, onStepMade, rows, columns, option1, option2 } = props;

    const cells = board.map((cellValue, index) =>
        <Cell onStepMade={onStepMade} value={cellValue} index={index} option1={option1} option2={option2} />
    );

    return (
        <GridWrapper>
            {cells}
        </GridWrapper>
    );
};

Grid.propTypes = {
    board: PropTypes.array,
    onStepMade: PropTypes.func,
    rows: PropTypes.number,
    width: PropTypes.number,
    option1: PropTypes.string,
    option2: PropTypes.string
};

export default Grid;
