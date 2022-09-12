import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from '@views/Home'
import People from '@views/People'
import Person from '@views/Person'
import Favorite from '@views/Favorite';
import E404 from '@views/E404'

export default function() {
	return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/people" element={<People />} />
      <Route path="/people/:id" element={<Person />} />
      <Route path="/favorites" element={<Favorite />} />
      <Route path="*" element={<E404 />} />
    </Routes>
  )
}
