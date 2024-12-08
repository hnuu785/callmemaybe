"use client";

import { useState } from "react";

export default function Home() {
  const [timer, setTimer] = useState('00:00:00');
  const [isMatched, setIsMatched] = useState('before matched');

  return (
    <div>
      <p className="text-center mt-10 mb-10 text-xl rounded">Call Me Maybe</p>
      <button className="block bg-slate-500 mb-10 ml-5 px-5 py-2 text-white rounded">Create Room</button>
      <button className="block bg-slate-400 mb-10 ml-5 px-5 py-2 text-white rounded">Join Room</button>
      <p className="text-center mb-10">{timer}</p>
      <p className="text-center mb-10">{isMatched}</p>
    </div>
  );
}
