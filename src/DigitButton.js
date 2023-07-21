import {ACTION} from './Calculator';

export default function DigitButton({ dispatch, digit }) {
    console.log({digit})

    return (
        <button onClick={() => dispatch({ type: ACTION.ADD_DIGIT, payload: {digit} })}>{digit}</button>
    )
}