import "./UserInput.css";
import { useState } from "react";

const initialUserInput = {
  "current-savings": 5000,
  "yearly-contribution": 1500,
  "expected-return": 7,
  duration: 5,
};

const UserInput = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const SubmitHandler = (event) => {
    event.preventDefault();

    props.onCalculate(userInput);
  };
  // for resetting button
  const resetHandler = () => {
    setUserInput(initialUserInput);
  };
  // whenever we want to change value of input( depending on useState userinput,setUaserInput)
  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value, // the "+" converts the string value to a number
      };
    });
  };
  return (
    <div className="conatiner d-flex justify-content-center mt-5">
      <form onSubmit={SubmitHandler} className="form whole-form p-5 rounded-3">
        <div className="row mx-auto">
          <div class="col-sm-6">
            <div class="form-outline">
              <label class="form-label text-light" for="current-savings">
                Current-saving
              </label>
              <input
                onChange={(event) =>
                  inputChangeHandler("current-savings", event.target.value)
                }
                value={userInput["current-savings"]}
                type="number"
                id="current-savings"
                class="form-control "
              />
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-outline">
              <label class="form-label text-light" for="yearly-contribution">
                Yearly Contribution
              </label>
              <input
                onChange={(event) =>
                  inputChangeHandler("yearly-contribution", event.target.value)
                }
                value={userInput["yearly-contribution"]}
                type="number"
                id="yearly-contribution"
                class="form-control"
              />
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-outline">
              <label class="form-label mt-3 text-light" for="expected-return">
                expected-return
              </label>
              <input
                onChange={(event) =>
                  inputChangeHandler("expected-return", event.target.value)
                }
                // following all these duffrent value are being accessed and fed back to input
                value={userInput["expected-return"]}
                type="number"
                id="expected-return"
                class="form-control"
              />
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-outline">
              <label class="form-label mt-3 text-light" for="duration">
                duration
              </label>
              <input
                onChange={(event) =>
                  inputChangeHandler("duration", event.target.value)
                }
                value={userInput["duration"]}
                type="number"
                id="duration"
                class="form-control"
              />
            </div>
          </div>
        </div>
        <div class=" text-center mt-5">
          <div class="btn-group" id="reset">
            <button
              onClick={resetHandler}
              type="reset"
              className="btn btn-lg reset"
            >
              Reset
            </button>
          </div>
          <div class="btn-group">
            <button type="submit" className="btn btn-lg calculate">
              Calculate
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserInput;
