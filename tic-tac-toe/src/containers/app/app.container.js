import * as React from 'react';
import { connect } from 'react-redux';
import './app.styles.css';
import Cell from './../cell/cell.component';
import { createGameField, getField, makeAMove } from './../../helpers/algorithms/fieldControl';
import { computerPlayer } from './../../helpers/algorithms/computerPlayer';
import { SET_FIELD, CHANGE_PLAYER } from './app.actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    createGameField(document.documentElement.clientWidth, 200);
    const field = getField();
    this.props.setField(field);
  }

  componentDidUpdate(prevProps) {
    if ((prevProps.isPlayerMove !== this.props.isPlayerMove) && !this.props.isPlayerMove) {
      const computerMove = computerPlayer(this.props.field);
      makeAMove(computerMove, this.props.isPlayerMove, this.props.field);
      this.props.changePlayer(!this.props.isPlayerMove);
    } 
  }

  render() {
    return (
      <div className = 'app'>
        <div className = 'headText'>
          <span>
            { this.props.isPlayerMove ? 'Your turn!' : 'Computer thinking' }
          </span>
        </div>
        <div className = 'field'>
          { 
            !!this.props.field && this.props.field.map((it) => {
              return it.map((elem) => {
                return <Cell key = { elem.id } value = { elem.value }  cellPosition = { elem.position } />
              })
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
    setField: (field) => dispatch({ type: SET_FIELD, field }),
    changePlayer: (isPlayerMove) => dispatch({ type: CHANGE_PLAYER, isPlayerMove })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
