import React, { useState, useEffect } from 'react';

const Toast = ({ message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timeout = setTimeout(() => {
        onClose();
      }, 3000); // Hide the toast after 3 seconds (adjust as needed)

      return () => clearTimeout(timeout);
    }
  }, [show, onClose]);

  return show ? (
    <div className="fixed top-10 right-5 p-4 bg-green-500 text-white rounded shadow-lg">
      {message}
    </div>
  ) : null;
};

export default Toast;