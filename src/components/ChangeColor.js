import React,{useState} from 'react' 
/* Sometimes in Redux apps, we still need to use LocalState
and the Local state is dealt with useState Hooks and 
Global State is dealt with Redux*/
import {useDispatch} from 'react-redux';
import {changeColor} from '../features/theme';

function ChangeColor(){
    const [color,setColor]=useState('');
    const dispatch=useDispatch();
    return (
        <div>
            <input type='text' placeholder='enter color' onChange={(event)=>{setColor(event.target.value);}} /> 
            <button onClick={()=>{
                dispatch(changeColor(color));
            }}>CHANGE COLOR</button>
        </div>
    );
}
export default ChangeColor;