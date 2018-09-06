import React, {Component} from 'react';
import Square from './Square';
class Board extends React.Component {

  constructor(props){
    super(props);
    this.state={
      squares:Array(9).fill(null),
      isNext:true
    }
  }

  calculateWinner(squares){
    const lines =[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for(let i=0;i<lines.length;i++){
      const [a,b,c] = lines[i];
      if(squares[a]===squares[b] && squares[c]===squares[b] && squares[a]===squares[c]){
        return squares[a];
      }
    }
    return null;
  }

  handleClick(i){
    const squares = this.state.squares.slice();
    if(this.calculateWinner(squares)||squares[i])
      return;
    let squareCopy = this.state.squares.slice();
    if(squareCopy[i]==null){
      squareCopy[i]=this.state.isNext?'x':'o';
      this.setState({squares:squareCopy,isNext:!this.state.isNext});
    }


  }
  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClick={()=>this.handleClick(i)}/>;
  }

  refresh(){
    let startState = {
      squares:Array(9).fill(null),
      isNext:true
    };
    this.setState(startState);

  }
  render() {
    const winner = this.calculateWinner(this.state.squares);
    let status;
    if(winner!=null)
      status = 'Winner is '+(winner);
    else
      status = 'Next player: '+(this.state.isNext?'x':'o');

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div>
          <button onClick={()=>this.refresh()}>Restart</button>
        </div>
      </div>
    );
  }
}
export default Board;
