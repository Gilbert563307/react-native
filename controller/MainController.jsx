import React from 'react'
import Router from "./Router";
import { NounsController } from './NounsController';
import { NavigationContainer } from '@react-navigation/native';
import { UsersController } from './UsersController';


export default function MainController({ children }) {
  return (
    <NavigationContainer>
      <NounsController>
        <UsersController>
          <Router>{children}</Router>
        </UsersController>
      </NounsController>
    </NavigationContainer>
  )
}

