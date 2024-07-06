import React, { createContext, useContext, useEffect, useState, ReactNode, useMemo } from 'react';
import socketio, { Socket } from 'socket.io-client';

// Define the type for the context
interface SocketContextProps {
  socket: Socket | null;
}

// Create a Context for the socket
const SocketContext = createContext<SocketContextProps | undefined>(undefined);

// Custom hook to use the socket context
export const useSocket = (): SocketContextProps => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error('useSocket must be used within a SocketProvider');
  }
  return context;
};

// Define the type for the provider props
interface SocketProviderProps {
  children: ReactNode;
}

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }: SocketProviderProps): React.ReactElement => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = socketio('https://mumba022.com');
    setSocket(newSocket);
    return () => {
      if (newSocket) newSocket.close();
    };
  }, []);

  const contextValue: SocketContextProps = useMemo(() => ({ socket }), [socket]);

  return (
    <SocketContext.Provider value={contextValue}>
      {children}
    </SocketContext.Provider>
  );
};
