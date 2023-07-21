import {ACTION} from './Calculator';

export default function OperationButton({ dispatch, operation }) {
    console.log({operation})
    return (
        <button 
          onClick={() => dispatch({ type: ACTION.CHOOSE_OPERATION, payload: {operation} })}
          >
            {operation}
        </button>
    )
}