import React, {Component} from 'react';

function Square(props){// extends React.Component {

    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
}

export default Square;
