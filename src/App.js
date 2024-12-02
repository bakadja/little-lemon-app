import React from 'react'
import Nav from "./components/Nav";
import './App.css';
import { RootLayout } from './styles/components.styles';


export default function App() {
  return (
    <RootLayout>
      <Nav />
    </RootLayout>
  )
}
