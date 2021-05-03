import { getWidth } from "../helper";
import "./bar-style.css";

export const Bar = (props) => {
  return (
    <div
      style={{
        height: `${props.height}px`,
        width: getWidth(props.noBars),
        backgroundColor: props.returnColor,
      }}
      key={props.key}
      className="array-bar"
    >
      {props.noBars < 50 && (
        <div className="badge badge-warning text-dark ">{props.height}</div>
      )}
    </div>
  );
};
