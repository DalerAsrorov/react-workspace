import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Cell from './Cell';

const GridRow = styled.div`
    display: table-row;
    width: 100%;
`;

const GridWrapper = styled.div`
    display: table;
    width: 100%;
    height: 100%;
`;

const Grid = props => {
    const { board, onStepMade, n, option1, option2 } = props;
    let gridRowArray = [],
        gridRowWrappers = [];

    board.forEach((cellValue, cellIndex) => {
        gridRowArray.push(
            <Cell
                key={cellIndex}
                onStepMade={onStepMade}
                value={cellValue}
                index={cellIndex}
                option1={option1}
                option2={option2}
            />
        );

        if (gridRowArray.length === n) {
            gridRowWrappers.push(
                <GridRow key={`r${cellIndex}`}>
                    {gridRowArray}
                </GridRow>
            );
            gridRowArray = [];
        }
    });

    return (
        <GridWrapper>
            {gridRowWrappers}
        </GridWrapper>
    );
};

Grid.propTypes = {
    board: PropTypes.array,
    onStepMade: PropTypes.func,
    n: PropTypes.number,
    option1: PropTypes.string,
    option2: PropTypes.string
};

export default Grid;
