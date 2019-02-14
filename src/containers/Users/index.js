// @flow
import { connect } from "react-redux";
import CardList from "components/CardList";
import Form from "components/Form";
import { getUsers, deleteUser } from "./actions";

const mapStateToProps = state => ({
  data: state.users.data,
  loading: state.users.loading,
  error: state.users.error
});

const mapDispatchToProps = dispatch => ({
  getUsers: (searchTerm: string) => dispatch(getUsers(searchTerm)),
  deleteUser: (user: number) => dispatch(deleteUser(user))
});

const userContainerCreator = connect(
  mapStateToProps,
  mapDispatchToProps
);

export const CardListContainer = userContainerCreator(CardList);
export const FormContainer = userContainerCreator(Form);
