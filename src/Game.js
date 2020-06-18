import React, {Component} from 'react';

class Game extends Component{
state = {
  bird: {
    x: 50,
    y: 100,
    radius: 20
  }
}
draw= () => {
  const ctx = this.refs.canvas.getContext("2d");
  //change the color of the canvas
  //"pen" in the Game
  ctx.fillStyle="Gray";
  ctx.beginPath();
  ctx.arc(this.state.bird.x, this.state.bird.y,
          this.state.bird.radius, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}
componentDidMount(){
  this.draw()
}
  render(){
    return (
      <div>
        <canvas ref="canvas" width={450} height={650} />
      </div>
    );
  }
}

export default Game;
