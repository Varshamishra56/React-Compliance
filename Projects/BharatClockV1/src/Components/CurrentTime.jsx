import React, { useState, useEffect } from 'react';

function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <h3>
      This is the current Time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}
      <div className="container">
        <div className="rim"></div>
        <div className="outer"></div>
        <div className="inner"></div>
        <div id="clock">{time.getHours()}:{time.getMinutes().toString().padStart(2, '0')}</div>
      </div>
    </h3>
  );
}

export default CurrentTime;
