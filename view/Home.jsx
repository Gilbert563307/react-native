import React from 'react'
import { SafeAreaView, } from 'react-native';
import Navbar from './Navbar';

export default function Home() {
  return (
    <SafeAreaView style={{ display: 'flex', justifyContent: 'center' }}>
      <Navbar/>
    </SafeAreaView>
  )
}
