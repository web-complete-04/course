import { useState } from "react";
import clsx from 'clsx';

import styles from './Counter.module.css';

// const propName = 'test';
// const obj = {
//   [propName]: 1
// }
// obj[propName] === obj.test
// obj.propName === obj['propName']

export function Counter({initialCounterValue = 0, diff = 1}) {
  const [count, setCount] = useState(initialCounterValue);

  // let cls = '';
  // if(count > 0) {
  //   cls = 'positive';
  // }
  // if(count < 0) {
  //   cls = 'negative';
  // }

  // const cls = count > 0 ? 'positive' 
  //     : count < 0 ? 'negative'
  //     : ''

  return (
    <>
      <h1>Counter</h1>
      <output className={clsx({ [styles.positive]: count > 0, [styles.negative]: count < 0})}>{count}</output>
      <div>
        <button onClick={() => setCount(count - diff)}>-</button>
        <button onClick={() => setCount(initialCounterValue)}>Reset</button>
        <button onClick={() => setCount(count + diff)}>+</button>
      </div>
    </>
  )
}


// let state: any;

// function myUseState(initialState) {
//   if(!state) {
//     state = initialState;
//   }

//   function updateState(newState) {
//     if(state === newState) return;
//     state = newState;

//     Counter();
//   }

//   return [state, updateState];
// }

// return (
//   React.createElement('h1')
  // React.createElement('output', {className: 'positive'})
//   React.createElement('div', null, 
//     React.createElement('button'),
//     React.createElement('button')
//   );
// )
