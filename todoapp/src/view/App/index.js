import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    filter: state.app.filter,
    content: state.create.content
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ...ownProps.functions
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
