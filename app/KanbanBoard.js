import React, {Component} from 'react';
import {render} from 'react-dom';
import List from "./List";
import Search from "./Search";

class KanbanBoard extends Component {
  render() {
    console.log( this.props.cards);
    return (
      <div className="app">
        <Search />
        <List id='todo' title="To Do" cards={
          this.props.cards.filter((card) => card.status === "todo")}/>
        <List id='in-progres' title="In Progress i" cards={
          this.props.cards.filter((card) => card.status === "in-progress")}/>
        <List id='done' title="Done" cards={
          this.props.cards.filter((card) => card.status === "done")}/>
      </div>
    );
  }
}

export default KanbanBoard;

