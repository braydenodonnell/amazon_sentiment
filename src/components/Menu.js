import React from 'react';
import BurgerIcon from './BurgerIcon';

function Menu({ sendMenuState }) {
  return (
    <div className='overflow-x-hidden h-full w-64 fixed z-10 top-0 left-0 bg-[#090909]'>
      <BurgerIcon sendMenuState={sendMenuState} isOpen={true} />
      <h1 className='mx-6 mt-6 mb-3 text-sm'>Recent Searches</h1>
      <div className='flex flex-col gap-3 ml-6'>
        <p className='w-screen overflow-y-hidden'>
          Clorox Disinfecting Wipes Value Pack, Household Essentials, 75 Count,
          Pack of 3 (Package May Vary)
        </p>
        <p>search 2</p>
        <p>search 3</p>
        <p>search 4</p>
        <p>search 5</p>
        <p>search 6</p>
        <p>search 7</p>
        <p>search 8</p>
        <p>search 9</p>
      </div>
    </div>
  );
}

export default Menu;
