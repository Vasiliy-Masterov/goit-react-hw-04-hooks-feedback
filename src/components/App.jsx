import React, { Component } from "react";
import ReactDOM from "react-dom";
import {Feedback} from "./Feedback";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontSize: 40,
        color: '#010101',       
        padding: '40px 0 0 40px'
      }}
    >     
      <Feedback />
    </div>
  );
  
   
};


