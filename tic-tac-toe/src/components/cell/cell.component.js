import * as React from 'react';
import './cell.styles.css';
import { makeAMove } from './../helpers/algorithms/fieldControl';

export class Cell extends React.Component {
  render() {
    const { value } = this.props;
    return (
      <div
        className = 'cell'
        onClick = { value === null ? this.onClick.bind(this) : null}
      >
        { value }
      </div>
    );
  }

  onClick() {
    makeAMove(this.props.id);
  }
}
