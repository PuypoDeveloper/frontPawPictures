import React, { useContext, useEffect, useState } from 'react'
import Header from './components/Header/Header'
import VisualUserC from './components/visualUser/visualUser'
import VisualPublic from './components/visualPublic/visualPublic'
import StateCompo from './context/StateCompo'

export default function publicVisual() {

  return (
    <>
    <StateCompo>
        <Header userIn={false}/>
        <VisualPublic/> 
    </StateCompo>
    </>
  )
}
