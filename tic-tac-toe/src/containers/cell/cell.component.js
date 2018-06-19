import * as React from 'react';
import { connect } from 'react-redux';
import './cell.styles.css';
import { makeAMove } from './../../helpers/algorithms/fieldControl';
import { isWinner } from './../../helpers/algorithms/checkWinner';
import { CHANGE_PLAYER, SET_NEW_ARRAY, COMPUTER_MOVE } from './../app/app.actions';
import tomato from './../../assets/tomato.png';
import fork from './../../assets/fork.png';

class Cell extends React.Component {
  render() {
    const { value, isPlayerMove } = this.props;
    return (
      <div
        className = 'cell'
        onClick = { value === null && isPlayerMove ? this.onClick.bind(this) : null}
      >
        { value === 'o' && <img  src = { tomato } className = 'picture' alt = 'tomato' /> }
        { value === 'x' && <img  src = { fork } className = 'picture' alt = 'fork' /> }
      </div>
    );
  }

  onClick(event) {
    const newField = makeAMove(this.props.cellPosition, this.props.isPlayerMove, this.props.field);
    isWinner(this.props.cellPosition, this.props.isPlayerMove, newField);
    this.props.setNewArray(newField);
    this.props.changePlayer(!this.props.isPlayerMove);
    this.props.computerMove();
  }
}

const mapStateToProps = ({ appReducer }) => {
  return {
    field: appReducer.field,
    isPlayerMove: appReducer.isPlayerMove
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changePlayer: (isPlayerMove) => dispatch({ type: CHANGE_PLAYER, isPlayerMove }),
    setNewArray: (newArray) => dispatch({ type: SET_NEW_ARRAY, newArray }),
    computerMove: () => dispatch({ type: COMPUTER_MOVE })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
