import {createSlice} from '@reduxjs/toolkit';

const initialState =  []


// const [list , setList] = useState(null)
const todoReducers = createSlice({
    name: "todos",
    initialState,
    reducers:{
        addTodos:(state,action)=>{
            state.push(action.payload);
            return state
        },
        completedTodos:(state,action)=>{
            
            return state.map(todo => {
                if(todo.id === action.payload){
                    return{
                        ...todo,
                        completed: true,
                    }
                }
                return todo
            })
        }
    }
})

export const {addTodos,completedTodos} =  todoReducers.actions;
export const reducer =  todoReducers.reducer;