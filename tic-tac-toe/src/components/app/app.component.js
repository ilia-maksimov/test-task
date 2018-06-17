import * as React from 'react';
import './app.styles.css';
import { Cell } from './../cell/cell.component';
import { array, createGameField } from './../helpers/algorithms/fieldControl';

export class App extends React.Component {
  constructor(props) {
    super(props);
    createGameField(document.documentElement.clientWidth, 150);
  }

  render() {
    return (
      <div className = 'app'>
        { 
          array.map((it) => {
            return it.map((it) => {
              return <Cell key = { it.id } value = {it.value}  id = {it.id} />
            })
          }) 
        }
      </div>
    );
  }
}
