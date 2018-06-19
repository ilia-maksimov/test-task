import * as React from 'react';
import { connect } from 'react-redux';
import './app.styles.css';
import Cell from './../cell/cell.component';
import { createGameField, getField } from './../../helpers/algorithms/createField';
import { SET_FIELD } from './app.actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    createGameField(document.documentElement.clientWidth, 100);
    const field = getField();
    this.props.setField(field);
  }

  render() {
    return (
      <div className = 'app'>
        <div className = 'headText'>
          <div>
            { this.props.isPlayerMove ? 'Your turn!' : 'Computer thinking' }
          </div>
        </div>
        <div className = 'field'>
          { 
            !!this.props.field && this.props.field.map((it, index) => {
              return <div key = { index } className = 'row'>{ it.map((elem) => {
                return <Cell key = { elem.id } value = { elem.value }  cellPosition = { elem.position } />
              })}</div>
            }) 
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    field: state.appReducer.field,
    isPlayerMove: state.appReducer.isPlayerMove
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setField: (field) => dispatch({ type: SET_FIELD, field })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
