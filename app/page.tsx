"use client";

import Image from "next/image";

export default function Home() {
  const notificationPush = (
    notificationText = "Thank You for enabling notifications!"
  ) => {
    if (!("Notification" in window)) {
      alert("Browser does not support notifications");
    } else if (Notification.permission === "granted") {
      new Notification(notificationText);
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(notificationText);
        }
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white -mt-6">
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
          <Image src="/bell.svg" alt="bell" width={50} height={50} />
        </div>
      </div>
      <button
        onClick={() => notificationPush()}
        className="mt-[140px] text-[12px] sm:text-[14px] font-bold  bg-gradient-to-r from-[#1e080b] to-[#2b1002] via-[#f5563a] border border-l-[0] border-r-[2px]  border-orange-800 border-r-orange-600 border-solid border-opacity-100 shadow-md shadow-rgba(0, 0, 0, 0.12) gap-[8px] px-[5rem] sm:px-[6rem]  py-2 rounded-lg text-white text-lg"
      >
        Send Notification
      </button>
    </div>
  );
}
