import React, { useState, useEffect, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence, motion } from "framer-motion";
import { RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

import router from "./Routes/Routes.jsx";
import AuthProvider from "./Components/AuthProvider/AuthProvider.jsx";
import "./index.css";
import StartLoader from "./Loading/StartLoader.jsx";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex justify-center items-center h-screen bg-white"
        >
          <StartLoader />
        </motion.div>
      ) : (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <QueryClientProvider client={queryClient}>
            <AuthProvider>
              <ToastContainer />
              <RouterProvider router={router} />
            </AuthProvider>
          </QueryClientProvider>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Render the App
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
