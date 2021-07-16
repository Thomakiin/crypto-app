import React from 'react';


class NewForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
        };
    }

    handleOnChange = (e) => {
        this.setState({ text: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault(); // stops page from reloading
        this.props.func(this.state.text);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Symbol:
                    <input type="text" onChange={this.handleOnChange} />
                </label>
            </form>
        );
    }
}

export default NewForm;