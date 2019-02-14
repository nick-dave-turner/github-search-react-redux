// @flow
import React from "react";

type Props = {
  getUsers: (search: string) => void
};

type State = {
  value: string
};

class Form extends React.Component<Props, State> {
  state = {
    value: ""
  };

  handleChange = (evt: SyntheticEvent<HTMLInputElement>) => {
    const { value } = evt.currentTarget;
    this.setState({ value });
  };

  handleSubmit = (evt: SyntheticEvent<>) => {
    evt.preventDefault();
    if (this.state.value === "") return;
    this.props.getUsers(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add user."
            onChange={evt => this.handleChange(evt)}
            value={value}
          />
          <button
            className="btn btn-outline-secondary"
            type="submit"
            disabled={this.state.value === ""}
          >
            Add
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
