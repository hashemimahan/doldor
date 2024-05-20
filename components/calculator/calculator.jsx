import React, {useReducer} from 'react';
import DigitButton from "./DigitButton";
import classes from "./calculator.module.css"

export const Actions = {
    DIGIT: 'ADD_DIGIT',
    OPERATION: 'ADD_OPERATION',
    CLEAR: 'CLEAR',
    DELETE: 'DELETE',
    EVALUATION: 'EVALUATION'
}
const defaultReducer = {
    operation: "",
    currentOperand: "",
    previousOperand: ""
}
const numberFormat = new Intl.NumberFormat('en-us', { maximumFractionDigits: 0});
function formatOperand(operand) {
    if (operand === "" || operand == null) return
    const [integer, decimal] = operand.split('.');
    if (decimal == null || decimal === "") return numberFormat.format(integer)
    return `${numberFormat.format(integer)}.${decimal}`
}
const calculatorReducer = (state, action) => {
    switch (action.type) {
        case Actions.DIGIT:
            if (state.overwrite) {
                return {
                    ...state,
                    currentOperand: action.payload,
                    overwrite: false
                }
            }
            if (action.payload === "0" && state.currentOperand === "0") return state
            if (action.payload === "." && state.currentOperand.includes(".")) return state
            return {
                ...state,
                currentOperand: `${state.currentOperand}${action.payload}`
            }
        case Actions.DELETE:
            if (state.overwrite) {
                return {
                    ...state,
                    overwrite: false,
                    currentOperand: ""
                }
            }
            if (state.currentOperand === "") return state
            if (state.currentOperand.length === 1) return { ...state, currentOperand: ""}
            return {
                ...state,
                currentOperand: `${state.currentOperand.slice(0, -1)}`
            }
        case Actions.CLEAR:
            return defaultReducer
        case Actions.OPERATION:
            if (state.currentOperand === "") {
                return {
                    ...state,
                    operation: action.payload
                }
            }
            if (state.currentOperand.length === 0 && state.previousOperand.length === 0) return state
            if (state.previousOperand.length === 0) {
                return {
                    ...state,
                    operation: action.payload,
                    previousOperand: state.currentOperand,
                    currentOperand: ""
                }
            }
            return {
                ...state,
                previousOperand: evaluation(state),
                overwrite: true,
                operation: action.payload,
                currentOperand: ""
            }
        case Actions.EVALUATION:
            if (state.operation === "" || state.currentOperand === "" || state.previousOperand === "") {
                return state
            }
            console.log(state)
            return {
                ...state,
                previousOperand: "",
                overwrite: true,
                operation: "",
                currentOperand: evaluation(state)
            }
        default:
            return defaultReducer
    }
}
function evaluation({ previousOperand, currentOperand, operation}) {
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return ""
    let computation = "";
    switch (operation) {
        case "+":
            computation = prev + current
            break;
        case "-":
            computation = prev - current
            break;
        case "*":
            computation = prev * current
            break;
        case "÷":
            computation = prev / current
            break;
        default:
            computation = ""
    }
    return computation.toString()
}

function Calculator() {
    const [calculatorState, dispatch] = useReducer(calculatorReducer, defaultReducer);
    return(
        <div className={`${classes.calculator}`} onClick={(event) => event.stopPropagation()}>
            <div className={`${classes["calculator__output"]}`}>
                <div className={classes["calculator__output--previous"]}>{formatOperand(calculatorState.previousOperand)} {calculatorState.operation}</div>
                <div className={classes["calculator__output--current"]}>{formatOperand(calculatorState.currentOperand)}</div>
            </div>
            <DigitButton dispatch={dispatch} btnSpan={classes["span-two"]} btnClass={classes.button}/>
        </div>
    )
}

export default Calculator