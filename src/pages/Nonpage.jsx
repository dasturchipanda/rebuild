import React from 'react';
import { NavLink } from 'react-router-dom';

const Nonpage = () => {
  return (
    <div>
      <h1>non pages <NavLink to={'/'}>go home</NavLink> </h1>
    </div>
  );
};

export default Nonpage;