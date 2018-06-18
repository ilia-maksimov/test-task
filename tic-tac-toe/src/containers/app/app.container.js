import * as React from 'react';
import { connect } from 'react-redux';
import './app.styles.css';
import { Cell } from './../../components/cell/cell.component';
import { createGameField, getField } from './../../helpers/algorithms/fieldControl';
import { SET_FIELD } from './app.actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    createGameField(document.documentElement.clientWidth, 150);
  }

  componentWillMount() {
    const field = getField();
    this.props.setField(field);
  }

  render() {
    const field = getField();
    return (
      <div className = 'app'>
        { 
          field.map((it) => {
            return it.map((elem) => {
              return <Cell key = { elem.id } value = {elem.value}  cellPosition = {elem.position} />
            })
          }) 
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    app: state.appReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setField: (field) => dispatch({ type: SET_FIELD, field })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
