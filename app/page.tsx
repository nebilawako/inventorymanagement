// //This directive tells Next.js that this file contains client-side code, meaning it will be executed in the browser rather than on the server.
// 'use client';
// //hook for navigation
// import { useRouter } from 'next/navigation';
// //hook for sideeffects
// import { useEffect } from 'react';
// //from libbrary
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import {
//     CardContent,
//     CardHeader,
//     CardTitle,
//   } from "@/components/ui/card"

  
// //main component of page as default export
// export default function Home() {
// //initialize router object using hook
// const router = useRouter();
// //defines a function to naviage to that
// const handleStartChatting = () => {
//   router.push('/chat'); 
// };

// //jsx return statement defines components ui
//   return (

//     <div className="min-h-screen bg-gradient-to-r from-[#003f66] to-indigo-600 flex items-center justify-center p-4 sm:p-6">
//       <Card className="w-full max-w-md sm:max-w-lg bg-white shadow-2xl rounded-lg transform transition duration-500 hover:scale-105">
//         <CardHeader className="text-center p-4 sm:p-6">
//           <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">
//             Shelf Savvy
//           </h1>
//         </CardHeader>
//         <CardContent className="text-center p-4 sm:p-6">
//           <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6">
//             Meet <span className="font-semibold">Langchain Assistant</span>, your AI companion for quick and accurate answers about building applications, connecting LLMs, managing workflows, and more...
//           </p>
         
//             <Button
//               className="bg-blue-600 text-white text-base sm:text-lg font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300" onClick={handleStartChatting}
//             >
//               Start Chatting ➜
//             </Button>
       
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
// This directive tells Next.js that this file contains client-side code, meaning it will be executed in the browser rather than on the server.
'use client';
// Hook for navigation
import { useRouter } from 'next/navigation';
// Hook for side effects
import { useEffect } from 'react';
// Importing components from custom UI library
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

// Main component of page as default export
export default function Home() {
  // Initialize router object using hook
  const router = useRouter();

  // Defines a function to navigate to the chat page
  const handleStartChatting = () => {
    router.push('/chat'); 
  };

  // JSX return statement defines components UI
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#003f66] to-indigo-600 flex items-center justify-center p-4 sm:p-6">
      <Card className="w-full max-w-md sm:max-w-lg bg-white shadow-2xl rounded-lg transform transition duration-500 hover:scale-105">
        <CardHeader className="text-center p-4 sm:p-6">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">
            Shelf Savvy
          </h1>
          <h2 className="text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-500 mt-1">
          Organize, Track, and Manage Your Pantry Effortlessly
        </h2>
        </CardHeader>
        <CardContent className="text-center p-4 sm:p-6">
          <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6">
            Welcome to <span className="font-semibold">Shelf Savvy</span>, your ultimate tool to 
            reduce food waste, plan your meals, and keep your pantry in check with ease. You can monitor your pantry inventory, get alerts before items expire, and even receive recipe suggestions based on what you have available.
          </p>
      
          <Button
            className="bg-blue-600 text-white text-base sm:text-lg font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300" 
            onClick={handleStartChatting}
          >
            Get Started ➜
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

