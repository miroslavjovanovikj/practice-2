import Button from "../components/Button";
import { useReducer } from "react";
import Panel from "../components/Panel";

const INCREMENT_COUNT = 'INCREMENT';
const DECREMENT_COUNT = 'DECREMENT'
const SET_VALUE_TO_ADD = 'CHANGE_VALUE_TO_ADD';
const ADD_A_LOT = "ADD_A_LOT"

const reducer = (state, action) => {


    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1
            }
        case SET_VALUE_TO_ADD:
            return {
                ...state,
                valueToAdd: action.payload
            }
        case ADD_A_LOT:
            return {
                ...state,
                valueToAdd: "",
                count: state.count + +state.valueToAdd
            }
        default: return state
    }



}

const CounterPage = ({ initialCount }) => {

    const [state, dispatch] = useReducer(reducer, {
        count: initialCount, valueToAdd: 0
    })
    const increment = () => {
        dispatch({ type: INCREMENT_COUNT })
    };
    const decrement = () => {
        dispatch({ type: DECREMENT_COUNT })
    };
    const handleChange = (e) => {
        dispatch({ type: SET_VALUE_TO_ADD, payload: e.target.value })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: ADD_A_LOT })
        // setValueToAdd("");
    };
    return (
        <Panel className="m-3">
            <h1 className="text-lg">Count is {state.count}</h1>
            <div className="flex flex-row">
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Add a Lot</label>
                <input
                    className="p-1 m3 bg-gray-50 border border-gray-300"
                    onChange={handleChange}
                    value={state.valueToAdd}
                    type="number"
                />
                <Button type="submit">Add it</Button>
            </form>
        </Panel>
    );
};
export default CounterPage;
// if (action.type === INCREMENT_COUNT) {
// return {
//     ...state,
//     count: state.count + 1
// }
// } else if (action.type === "decrement") {
// return {
//     ...state,
//     count: state.count - 1
// }
// } else if (action.type === SET_VALUE_TO_ADD) {
//     return {
//         ...state,
//         valueToAdd: action.payload
//     }
// } else if (action.type === 'add-lot') {
//     return {
//         valueToAdd: 0,
//         count: state.count + +state.valueToAdd
//     }
// }
// return state