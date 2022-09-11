import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from '@views/Home'
import People from '@views/People'
import E404 from '@views/E404'

export default function(){
	return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/people" element={<People />} />
      <Route path="*" element={<E404 />} />
    </Routes>
  )
}
