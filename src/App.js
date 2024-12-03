import React from 'react'
import Nav from "./components/Nav";
import './App.css';
import { RootLayout } from './styles/components.styles';
import Header from './components/Header';
import Main from './components/Main';


export default function App() {
  return (
    <RootLayout>
      <Nav />
      <Header />
      <Main />
    </RootLayout>
  )
}
