import React from 'react';
import Tweet from './CabinList';
import cabinData from './data/cabin';

function App(){
  const cabinNameList = cabinData.map((data, index) => (
    <li key={index}>{data.cabin} </li>
  ))
  return (
      <ul>
        {cabinData.map((data, index) => (
          <li key={index}>{data.cabin} </li>
        ))}
      </ul>
      
  );
  // const cabinNameList = cabinData.map((data) => {
  //   return <Tweet cabin={data.cabin} />
  // });
  // return(
  //   <div className='app'>
  //     <ul>
  //       <li>{cabinNameList} </li>
  //     </ul>
  //     {/* {cabinNameList} */}
  //   </div>
  // )
}


export default App;