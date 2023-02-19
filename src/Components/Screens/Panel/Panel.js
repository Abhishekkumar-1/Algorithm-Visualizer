import React, { useState } from "react";
import "./Panel.css";
import Workspace from "../Workspace/Workspace";

function Panel(props) {
  const [state, setState] = useState({
    DropDownArray: false,
    typeOfArray: null,
    lengthOfArray: 0,
  });

  const handleArrayLengthChange = (e) => {
    // const name = e.target.name;
    const value = e.target.value;
    setState({
      ...state,
      lengthOfArray: value,
    });
    console.log(value);
    console.log(this.props.lengthOfArray);
  };
  const handleDropDownArray = () => {
    console.log(state.DropDownArray);
    console.log(state.typeOfArray);

    setState({
      ...state,
      DropDownArray: !state.DropDownArray,
      // typeOfArray: state.typeOfArray,
    });
  };
  return (
    <div className="Home">
      <div className="Home-main-activity">
        <div className="Panel">
          <div className="Panel-Section-1">
            <div className="Panel-Array">
              <button
                id="Array-option-button"
                onClick={() => handleDropDownArray()}
              >
                Array
              </button>
              {/* {console.log(state.DropDownArray)} */}
              {state.DropDownArray && (
                <div className="DropDownArray">
                  <input
                    id="DropDownArray-length"
                    type="number"
                    placeholder="Length"
                    name="lengthOfArray"
                    // value={this.props.state.lengthOfArray}
                    onChange={handleArrayLengthChange}
                  />
                  <hr id="DropDownArray-separator" />
                  <div className="DropDownArray-options">
                    <div
                      className="DropDownArray-option"
                      onClick={() =>
                        setState({ ...state, typeOfArray: "Integer" })
                      }
                    >
                      Integer
                    </div>
                    <div
                      className="DropDownArray-option"
                      onClick={() =>
                        setState({ ...state, typeOfArray: "String" })
                      }
                    >
                      String
                    </div>
                    <div
                      className="DropDownArray-option"
                      onClick={() =>
                        setState({ ...state, typeOfArray: "Character" })
                      }
                    >
                      Character
                    </div>
                    <div
                      className="DropDownArray-option"
                      onClick={() =>
                        setState({ ...state, typeOfArray: "Double" })
                      }
                    >
                      Double
                    </div>
                    <div
                      className="DropDownArray-option"
                      onClick={() =>
                        setState({ ...state, typeOfArray: "Float" })
                      }
                    >
                      Float
                    </div>
                  </div>
                </div>
              )}
              {console.log(state.lengthOfArray)}
            </div>
          </div>
          {/* <DropDownArray/> */}
        </div>
        <div className="Home-workspace">
          {console.log(state.lengthOfArray)}
          <Workspace
            typeOfArray={state.typeOfArray}
            setState={setState}
            lengthOfArray={state.lengthOfArray}
          />
        </div>
      </div>
    </div>
  );
}

export default Panel;
