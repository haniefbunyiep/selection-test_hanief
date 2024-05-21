'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [data, setData] = useState(null);
  const [dataDisplay, setDataDisplay] = useState(null);
  const [countAlphabet, setCountAlphabet] = useState(null);
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const alphabetGenerator = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let result = '';
    let total = [];

    for (let i = 0; i < 60; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    console.log('Get data Success');
    setData(result);
  };

  const handleCountAlphabet = () => {
    let counts = {};
    for (let char of alphabet) {
      counts[char] = 0;
    }

    for (let char of data) {
      if (counts[char] !== undefined) {
        counts[char]++;
      }
    }

    setDataDisplay([counts]);
    console.log(dataDisplay);
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-slate-200'>
      <div>Hello Purwadhika Student</div>
      <div onClick={alphabetGenerator}>Click to get Data</div>
      <div onClick={handleCountAlphabet}>test</div>
    </main>
  );
}
