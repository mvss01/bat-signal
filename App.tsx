import { useState } from 'react';
import { Form } from './src/screens/Form';
import { Home } from './src/screens/Home';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [screen, setScreen] = useState("Home")

  return (
    <>
      <Home screen={screen} setScreen={setScreen}/>
      <Form screen={screen} setScreen={setScreen}/>
      <StatusBar style="dark"/>
    </>
  );
}
