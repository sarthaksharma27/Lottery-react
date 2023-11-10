import React, { useState } from "react";
import { genTicket } from './helper';
import Ticket from './Ticket';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Lottery({ n = 3, winCondition = 15 }) {
  const [ticket, setTicket] = useState(genTicket(n));
  const isWinning = winCondition(ticket);

  const buyTicket = () => {
    setTicket(genTicket(n));
  };

  const notifyWin = () => {
    toast.success('🦄 You Won!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="box">
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket} />
      <button onClick={buyTicket}>Buy New Ticket</button>
      {isWinning && notifyWin()}
      {isWinning && (
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      )}
    </div>
  );
}
