"use client";
import { useEffect, useState } from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Vortex } from "@/components/ui/vortex";
import Image from "next/image";
import addNotification from "react-push-notification";

export default function Home() {
  const [isBellVisible, setIsBellVisible] = useState(false);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('Service Worker registered with scope:', registration.scope);
          })
          .catch((error) => {
            console.error('Service Worker registration failed:', error);
          });
      });
    }
  }, []);

  const notificationPush = (
    notificationText = "Thank You for enabling notifications!"
  ) => {
    // addNotification({
    //   title: 'DigiLabs Assignment',
    //   message: 'Visit my website',
    //   duration: 7000,
    //   icon: '/express.png',
    //   native: true,
    //   theme: 'darkblue',
    //   vibrate: 100,
    // });

    if (!("Notification" in window)) {
      alert("Browser does not support notifications");
    } else if (Notification.permission === "granted") {
      const notification = new Notification(notificationText);
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          const notification = new Notification(notificationText);
        }
      });
    }
  };

  useEffect(() => {
    setIsBellVisible(true);
    const timer = setTimeout(() => {
      setIsBellVisible(true);
    }, 100); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    // <div className="w-full mx-auto rounded-md h-screen overflow-hidden z-[999]">
    //   <Vortex
    //     backgroundColor="black"
    //     rangeY={800}
    //     particleCount={1100}
    //     baseHue={120}
    //     rangeSpeed={2}
    //     className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
    //   >
    //     <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold text-center">
    //       DigiLab Technologies Assignment
    //     </h1>
    //     <p className="text-white text-sm md:text-2xl max-w-2xl mt-6 text-center">
    //       This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been
    //       burned and you&apos;ll have a scar.
    //     </p>
    //     {isBellVisible && (
    //       <div className="mt-[5.5rem] bg-transparent">
    //         <div className="pulse relative flex items-center justify-center h-36 w-36 bg-transparent rounded-full mx-auto duration-150 transition-all">
    //           <Image
    //             src="/bell.svg"
    //             alt="bell"
    //             width={100}
    //             height={100}
    //             className="z-10 animate-ping"
    //           />
    //           <div className="absolute h-full w-full bg-blue-300 rounded-full opacity-70 animate-pulse1"></div>
    //           <div className="absolute h-full w-full bg-emerald-500 rounded-full opacity-70 animate-pulse2"></div>
    //         </div>
    //       </div>
    //     )}
    //     <div className="flex flex-col sm:flex-row items-center gap-4 mt-[7.3rem]">
    //       <HoverBorderGradient
    //         onClick={()=>notificationPush()}
    //         containerClassName="rounded-full"
    //         as="button"
    //         className="text-white  px-14 py-3 sm:px-10 sm:py-3 flex items-center space-x-2"
    //       >
    //         <span className="text-xl sm:text-lg">Send Notification</span>
    //       </HoverBorderGradient>
    //     </div>
    //   </Vortex>
    // </div>
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="text-center mb-[100px]">
        <h1 className="text-3xl font-semibold mb-2">Lorem Ipsum...</h1>
        <p className="text-gray-400 mb-8">Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="relative mb-8 flex items-center justify-center mt-10">
        <div className="absolute w-full h-full flex items-center justify-center">
          <div className="wave absolute w-[348px] h-[348px] rounded-full"></div>
          <div className="wave absolute w-[348px] h-[348px] rounded-full opacity-50"></div>
          <div className="wave absolute w-[278px] h-[278px] rounded-full"></div>
          <div className="wave absolute w-[278px] h-[278px] rounded-full opacity-50"></div>
          <div className="wave absolute w-[222px] h-[222px] rounded-full"></div>
          <div className="wave absolute w-[222px] h-[222px] rounded-full opacity-50"></div>
          <div className="wave absolute w-[160px] h-[160px] rounded-full"></div>
          <div className="wave absolute w-[160px] h-[160px] rounded-full opacity-50"></div>
        </div>
        <div className="relative w-24 h-24 rounded-full bg-gradient-to-b from-orange-400 to-orange-900 via-orange-700  to flex items-center justify-center z-10">
          <Image
            src="/bell.svg"
            alt="bell"
            width={50}
            height={50}
          />
        </div>
      </div>
      <button className="mt-[140px] text-[13px] font-bold  bg-gradient-to-r from-[#1e080b] to-[#341303] via-[#9b1b04] border border-orange-800 border-solid border-opacity-100 shadow-md shadow-rgba(0, 0, 0, 0.12) gap-[8px] px-[6.5rem]  py-2 rounded-lg text-white text-lg">
  Send Notification
</button>



    </div>
  );
}
