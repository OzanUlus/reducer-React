
import './App.css';
import {useReducer} from 'react';

const initialValue = 0;
const reducer = (state , action) =>{
switch(action){
  case 'increment' :
    return state + 1 ;
    case 'decrement' :
    return state -1 ;
    case 'reset' :
      return initialValue ;
      default :
      return state;
é
}
}
function App() {
  const[count , dispatch] = useReducer(reducer , initialValue)
  return (
    
    <div className="App">
      <div>Sayı : {count}</div>
      <button onClick={()=>dispatch('increment')}>Artır</button>
      <button onClick={()=>dispatch('decrement')}>Azalt</button>
      <button onClick={()=>dispatch('reset')}>Sıfırla</button>
    </div>
  );
}

export default App;
