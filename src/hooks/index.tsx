import React, { ReactNode } from 'react'
import { AuthProvider } from './Auth';

import { ToastProvider } from "./Toast";

interface AppProviderProps {
  children: ReactNode
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <AuthProvider>
      <ToastProvider>
        {children}
      </ToastProvider>
    </AuthProvider>
  );
}


