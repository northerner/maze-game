import React from "react";

class Cell extends React.Component {
  render() {
    return <div className={`${this.props.cellType} cell`}></div>
  }
}

class Row extends React.Component {
  render() {
    let row = this.props.cells.map(cell => <Cell cellType={cell}></Cell>);
    return (
          <div className="row" style={{flexDirection: "row", display: "flex"}}>
            {row}
          </div>
        );
  }
}

class Player extends React.Component {
  render() {
    return <div>{`${this.props.name} - ${this.props.position}`}</div>
  }
}

export default class Maze extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let maze = this.props.maze.map(row => {
      return <Row cells={row}></Row>
    });
    console.log(this.props);
    let players = this.props.players.map(player => <Player name={player[0]} position={player[1]}></Player>);
    return (
        <div>
        <div>{maze}</div>
        <div>{players}</div>
        </div>
        );
  }
}

