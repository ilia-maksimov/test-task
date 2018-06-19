import * as React from 'react';
import { connect } from 'react-redux';
import './app.styles.css';
import Cell from './../cell/cell.component';
import { createGameField, getField } from './../../helpers/algorithms/createField';
import { SET_FIELD, SET_WINNER } from './app.actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    createGameField(document.documentElement.clientWidth, 190);
    const field = getField();
    this.props.setField(field);
  }

  render() {
    return (
      <div className = 'app'>
        <div className = 'headText'>
          {
            !this.props.winner
              ? <div>{ this.props.isPlayerMove ? 'Your turn!' : 'Computer thinking' }</div>
              : <div>{ `${this.props.winner} win!` }</div>
          }
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

const mapStateToProps = ({ appReducer }) => {
  return {
    field: appReducer.field,
    isPlayerMove: appReducer.isPlayerMove,
    winner: appReducer.winner
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setField: (field) => dispatch({ type: SET_FIELD, field }),
    setWinner: (winner) => dispatch({ type: SET_WINNER, winner })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
