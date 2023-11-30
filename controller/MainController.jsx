import React from 'react'
import Router from "./Router";
import { NounsController } from './NounsController';
import { NavigationContainer } from '@react-navigation/native';


export default function MainController({ children }) {
  return (
    <NavigationContainer>
      <NounsController>
        <Router>{children}</Router>
      </NounsController>
    </NavigationContainer>
  )
}

