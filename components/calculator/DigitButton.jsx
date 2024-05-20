import {Actions} from "./calculator";

const DigitButton = (props) => {
    const buttons = [
        {digit: "7", id: "7", operation: null},
        {digit: "8", id: "8", operation: null},
        {digit: "9", id: "9", operation: null},
        {digit: "*", id: "*", operation: true},
        {digit: "4", id: "4", operation: null},
        {digit: "5", id: "5", operation: null},
        {digit: "6", id: "6", operation: null},
        {digit: "-", id: "-", operation: true},
        {digit: "1", id: "1", operation: null},
        {digit: "2", id: "2", operation: null},
        {digit: "3", id: "3", operation: null},
        {digit: "+", id: "+", operation: true},
        {digit: ".", id: "."},
        {digit: 0, id: 0, operation: null},
        {digit: "=", id: "=", operation: true},
        {digit: "÷", id: "÷", operation: true}
    ];
    const addClickHandler = (e) => {
        if (e.target.dataset.operation && e.target.textContent === "=") props.dispatch({type: Actions.EVALUATION})
        if (e.target.dataset.operation && e.target.textContent !== "=") {
            props.dispatch({type: Actions.OPERATION, payload: e.target.textContent})
        } else if (e.target.dataset.operation == null) {
            props.dispatch({type: Actions.DIGIT, payload: e.target.textContent})
        }
    }
    const clearButtonHandler = () => {
        props.dispatch({ type: Actions.CLEAR})
    }
    const deleteButtonHandler = () => {
        props.dispatch({ type: Actions.DELETE})
    }
    return (
        <>
            {buttons.map(button => {
                return (
                    <button className={props.btnClass} key={button.id} onClick={addClickHandler}
                            data-operation={button.operation}>{button.digit}</button>
                )
            })}
            <button className={props.btnSpan} onClick={clearButtonHandler}>AC</button>
            <button className={props.btnSpan} onClick={deleteButtonHandler}>DL</button>
        </>
    )
};
export default DigitButton;