import logo from './logo.svg';
import * as React from 'react';
import './App.css';
import Header from './Header';
import Employees from './Employees';
import Footer from './Footer';

export default function App() {
  return (
    <div>
      <Header />
      <Employees />
      <Footer />
    </div>
  )
}
