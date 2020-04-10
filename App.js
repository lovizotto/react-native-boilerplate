import IndexNavigation from './src/app';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

export default function App() {
  return (
    <NavigationContainer>
      <IndexNavigation />
    </NavigationContainer>
  );
}