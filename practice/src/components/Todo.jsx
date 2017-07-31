import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    addItem(event) {
        event.preventDefault();
        this.setState({
            value: '',
            items: this.state.items.concat([this.state.value])
        });
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <form onSubmit={this.addItem}>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <div>
                        <ul>
                            {this.state.items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </form>
            </div>

        );
    }
}


export default Todo; 