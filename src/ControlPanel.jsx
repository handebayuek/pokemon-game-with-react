const ControlPanel = ({moveUp, moveDown, moveLeft, moveRight}) => {
    return (
      <div className="control-panel">
          <button onClick={moveUp}>UP</button>
          <button onClick={moveLeft}>LEFT</button>
          <button onClick={moveRight}>RIGHT</button>
          <button onClick={moveDown}>DOWN</button>
      </div>
    )
  }
  
  export default ControlPanel