import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CellWrapper = styled.div`
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    padding: 3px;
    border: 1px solid #bbb;
    cursor: pointer;

    &:hover {
        background: #ddd;
    }
`;

const CellFormat = styled.h4`
    margin: 0;
    padding: 0;
    width: 20px;
    height: 30px;
    margin: 0 auto;
    font-size: 32px;
`;

export default class Cell extends PureComponent {
    static propTypes = {
        onStepMade: PropTypes.func,
        index: PropTypes.number,
        value: PropTypes.bool,
        option1: PropTypes.string,
        option2: PropTypes.string
    };

    _handleStepMade(e) {
        e.stopPropagation();
        const { onStepMade, index } = this.props;

        if (onStepMade) {
            onStepMade(index);
        }
    }

    _generateCell(value = '') {
        const { index } = this.props;
        return (
            <CellWrapper key={index} onClick={this._handleStepMade.bind(this)}>
                <CellFormat>
                    {value}
                </CellFormat>
            </CellWrapper>
        );
    }

    render() {
        const { option1, option2, value } = this.props;
        const _generateCell = this._generateCell.bind(this);

        let cell = _generateCell();

        if (value) {
            cell = _generateCell(option2);
        } else if (value === false) {
            cell = _generateCell(option1);
        }

        return cell;
    }
}
