import React from 'react';
import Navbar from '../component/Navbar';
import Workfooter from '../component/Workfooter';
import Workheader from '../component/Workheader';
import Workproduct from '../component/Workproduct';


function ourwork() {
  return (
    <>
    <Navbar active={'Work'}/> 
    <Workheader/>
    <Workproduct/>
    <Workfooter/>
    </>
  )
}

export default ourwork;