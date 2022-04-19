import React, { Component } from 'react';
import FormControl from './FormControl';
import '../App.css';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postForm } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

  const mapStateToProps = state => {
      return {
        form: state.form
      }
}

const mapDispatchToProps = (dispatch) => ({
  postForm: (firstname, lastname, telnum, email, agree, contactType, message) => {dispatch(postForm(firstname, lastname, telnum, email, agree, contactType, message))},
  resetFeedbackForm: () => {dispatch(actions.reset('feedback'))}


});

class Main extends Component{

  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.postForm();

  }
  
  render() {

  return (
    <div>
      <Switch>
        <Route exact path="/form" component={() => <FormControl resetFeedbackForm={this.props.resetFeedbackForm} postForm={this.props.postForm} /> } />
        <Redirect to="/form" />
      </Switch>
    </div>
  );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
