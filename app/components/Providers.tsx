"use client";

import React, { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

type ProvidersProps = {
  children: ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return (
    <div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#FFC0CB',
            color: '#000000',
          },
          duration: 1000,
        }}
      />
      {children}
    </div>
  );
};

export default Providers;
