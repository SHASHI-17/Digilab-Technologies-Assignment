// 'use client'
// import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
// import { Vortex } from "@/components/ui/vortex";
// import Image from "next/image";
// import addNotification from "react-push-notification";
// export default function Home() {

//   const notificationPush = ()=>{
//       addNotification({
//         title:'DigiLabs Assignment',
//         message:'visit my website ',
//         duration:7000,
//         icon:'/express.png',
//         native:true,
//         theme:'darkblue',
//         vibrate:100
//       })
//   }

//   return (
// <div className="w-full mx-auto rounded-md  h-screen overflow-hidden">
// {/* <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden"> */}
// <Vortex
//   backgroundColor="black"
//   rangeY={800}
//   particleCount={1100}
//   baseHue={120}
//   rangeSpeed={2}
//   className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
// >
//   <h1 className="text-white  md:text-6xl font-bold text-center">
//    DigiLab Technologies Assignment
//   </h1>
//   <p className="text-white text-sm md:text-2xl max-w-2xl mt-6 text-center">
//     This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been
//     burned and you&apos;ll have a scar.
//   </p>
//     <div className=" mt-[5.5rem]  bg-transparent">
//     {/* <Image src={'/bell.svg'} width={100} height={100} alt="bell"/> */}
//     <div className="pulse relative flex items-center justify-center h-36 w-36 bg-transparent rounded-full mx-auto">
//       <Image src="/bell.svg" alt="bell" width={100} height={100} className="z-10  animate-ping" />
//       <div className="absolute h-full w-full bg-blue-700/20 rounded-full opacity-70 animate-pulse1"></div>
//       <div className="absolute h-full w-full bg-emerald-500 rounded-full opacity-70 animate-pulse2"></div>
//     </div>
//     </div>
//   <div className="flex flex-col sm:flex-row items-center gap-4 mt-[7rem]">
//     <HoverBorderGradient onClick={notificationPush}
//         containerClassName="rounded-full"
//         as="button"
        
//         className="text-white px-5 py-3 flex items-center space-x-2"
//       >
//         <span className="text-lg">Send Notification</span>
//       </HoverBorderGradient>
//   </div>
// </Vortex>
// </div>
//   );
// }

'use client'
import { useEffect, useState } from 'react';
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Vortex } from "@/components/ui/vortex";
import Image from "next/image";
import addNotification from "react-push-notification";

export default function Home() {
  const [isBellVisible, setIsBellVisible] = useState(false);

  const notificationPush = () => {
    addNotification({
      title: 'DigiLabs Assignment',
      message: 'Visit my website',
      duration: 7000,
      icon: '/express.png',
      native: true,
      theme: 'darkblue',
      vibrate: 100,
    });
  };

  useEffect(() => {
    setIsBellVisible(true);
    const timer = setTimeout(() => {
      setIsBellVisible(true);
    }, 100); // 3 seconds delay

    return () => clearTimeout(timer); // Cleanup the timeout on component unmount
  }, []);

  return (
    <div className="w-full mx-auto rounded-md h-screen overflow-hidden z-[999]">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={1100}
        baseHue={120}
        rangeSpeed={2}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold text-center">
          DigiLab Technologies Assignment
        </h1>
        <p className="text-white text-sm md:text-2xl max-w-2xl mt-6 text-center">
          This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been burned and you&apos;ll have a scar.
        </p>
        {isBellVisible && (
          <div className="mt-[5.5rem] bg-transparent">
            <div className="pulse relative flex items-center justify-center h-36 w-36 bg-transparent rounded-full mx-auto duration-150 transition-all">
              <Image src="/bell.svg" alt="bell" width={100} height={100} className="z-10 animate-ping" />
              <div className="absolute h-full w-full bg-blue-300 rounded-full opacity-70 animate-pulse1"></div>
              <div className="absolute h-full w-full bg-emerald-500 rounded-full opacity-70 animate-pulse2"></div>
            </div>
          </div>
        )}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-[7.3rem]">
          <HoverBorderGradient
            onClick={notificationPush}
            containerClassName="rounded-full"
            as="button"
            className="text-white  px-14 py-3 sm:px-10 sm:py-3 flex items-center space-x-2"
          >
            <span className="text-xl sm:text-lg">Send Notification</span>
          </HoverBorderGradient>
        </div>
      </Vortex>
    </div>
  );
}
