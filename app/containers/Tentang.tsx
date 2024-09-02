"use client";
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import Image from 'next/image';

const Timer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number>(3600); // Waktu dalam detik (contoh: 1 jam = 3600 detik)
  const [isTimerActive, setIsTimerActive] = useState<boolean>(true);
  const [notificationShown, setNotificationShown] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let notificationTimer: NodeJS.Timeout;

    if (isTimerActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && !notificationShown) {
      setNotificationShown(true);
      toast('Waktu bermain telah habis! Silakan istirahat.', {
        icon: '⏳',
        style: {
          background: '#f87171',
          color: '#fff',
        },
        duration: 5000, // Menampilkan notifikasi selama 5 detik
      });
    }

    return () => clearInterval(timer);
  }, [isTimerActive, timeLeft]);

  const handleReset = () => {
    setTimeLeft(10); // Reset ke 1 jam
    setIsTimerActive(true);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div id="about" className='bg-slate-900'>
      <div
        className="pt-8 pb-32 mx-2 lg:mx-auto text-white rounded-lg shadow-lg flex flex-col justify-center items-center h-screen max-w-screen-sm">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
          WAKTU BERMAIN GAME
        </h1>

        <div className="mt-8 flex flex-col items-center mx-8">
          <p className="text-xs md:text-md lg:text-lg ">
            Waktu ini akan menghitung waktu bermain kamu. Setelah waktu habis, kamu akan mendapatkan notifikasi untuk istirahat, pastikan kamu sudah menyimpan progress permainan kamu! dan jangan lupa untuk beristirahat sejenak.
          </p>
          <div className='flex justify-center mt-6'>
            <Image
              src="/images/Jam/jam.gif"
              width={150}
              height={150}
              alt="Game"
              className="object-contain"
            />
          </div>
          <h1 className="text-lg mt-6 font-bold">Waktu Bermain Tersisa:</h1>
          <div className="text-2xl md:text-3xl lg:text-4xl font-mono mb-4">{formatTime(timeLeft)}</div>
          <button
            onClick={handleReset}
            className="bg-purple-900 rounded border hover:bg-purple-800 text-white font-bold py-2 px-4 duration-100"
          >
            Reset Timer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
