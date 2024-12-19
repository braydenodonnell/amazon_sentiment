// import { useState } from 'react';

// function BurgerIcon({ sendMenuState }) {
//   const handleBurger = () => {
//     console.log('burger is clicked');
//     sendMenuState(true);
//   };

//   return (
//     <div className='m-4 flex justify-start'>
//       <button
//         onClick={handleBurger}
//         className='group h-8 w-8 rounded-lg border-2 border-white'
//       >
//         <div className='grid justify-items-center gap-1'>
//           {/* <span className='transition duration-500 group-hover:rotate-45 group-hover:translate-y-1.5 h-0.5 w-4 rounded-full bg-white'></span>
//           <span className='transition duration-500 group-hover:scale-x-0 h-0.5 w-4 rounded-full bg-white'></span>
//           <span className='transition duration-500 group-hover:-rotate-45 group-hover:-translate-y-1.5 h-0.5 w-4 rounded-full bg-white'></span> */}
//           <span className='transition duration-500 h-0.5 w-4 rounded-full bg-white'></span>
//           <span className='transition duration-500 h-0.5 w-4 rounded-full bg-white'></span>
//           <span className='transition duration-500 h-0.5 w-4 rounded-full bg-white'></span>
//         </div>
//       </button>
//     </div>
//   );
// }

// export default BurgerIcon;
import React from 'react';

function BurgerIcon({ sendMenuState, isOpen }) {
  const handleBurger = () => {
    sendMenuState(!isOpen);
  };

  return (
    <div className='m-4 flex justify-start'>
      <button
        onClick={handleBurger}
        className='group h-8 w-8 rounded-lg border-2 border-white'
      >
        <div className='grid justify-items-center gap-1'>
          <span
            className={`h-0.5 w-4 rounded-full bg-white ${
              isOpen && 'rotate-45 translate-y-1.5'
            }`}
          ></span>
          <span
            className={`h-0.5 w-4 rounded-full bg-white ${
              isOpen && 'scale-x-0'
            }`}
          ></span>
          <span
            className={`h-0.5 w-4 rounded-full bg-white ${
              isOpen && '-rotate-45 -translate-y-1.5'
            }`}
          ></span>
        </div>
      </button>
    </div>
  );
}

export default BurgerIcon;
