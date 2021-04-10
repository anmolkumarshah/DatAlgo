export const Controller = ({
  resetArray,
  operation,
  handleSpeedChange,
  handleSizeChange,
}) => {
  return (
    <div className="controller row w-50">
      <div className="col-sm-3">
        <button onClick={resetArray} className="btn btn-primary">
          New Array
        </button>
      </div>
      <div className="col-sm-3">
        <button onClick={() => operation()} className="btn btn-primary">
          sort
        </button>
      </div>
      <div className="col-sm-3">
        <form>
          <label htmlFor="speed">Speed</label>
          <select onChange={handleSpeedChange} id="speed" class="form-control">
            <option selected value="1">
              x1
            </option>
            <option value="2">x2</option>
            <option value="3">x3</option>
            <option value="4">x4</option>
            <option value="5">x5</option>
            <option value="10">x10</option>
            <option value="100">x100</option>
          </select>
        </form>
      </div>
      <div className="col-sm-3">
        <form>
          <label htmlFor="size">Size</label>
          <select id="size" onChange={handleSizeChange} class="form-control">
            <option selected value="5">
              5
            </option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </form>
      </div>
    </div>
  );
};
