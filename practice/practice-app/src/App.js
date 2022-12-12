
import React from 'react';
import Form from './components/Form';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import './App.css';

export default function web() {
  return (
    <>
      <Navbar Navbar = "myWeb" Home = "About also"/>
      <div className="container my-3">
        <Form />
      </div>
    </>
  )
}