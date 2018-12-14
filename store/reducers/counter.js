import Actions from '../actions/actionTypes'

const CounterReducer = (state = { count: 0, data: '', posts: [] }, action) => {
    switch (action.type) {
        case Actions.COUNTER_INCREMENT:
            console.log('ReducerIncrement')
            return Object.assign({}, state, {
                count: state.count + 1
            })
            break;
        case Actions.COUNTER_DECREMENT:
            console.log('ReducerDecrement')
            return Object.assign({}, state, {
                count: state.count - 1,
                data: action.payload
            })
        case Actions.FETCH_POSTS:
            console.log(action.payload)
            return Object.assign({}, state, {
                posts: action.payload
            })
            break
        default:
            return state
            break;
    }
}


export default CounterReducer
