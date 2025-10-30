import useAxios from "@/hooks/useAxios";
import React, { createContext, useContext, useEffect, useState } from "react";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  isVerified: boolean;
  profileImage: string;
  profileImageUrl: string;
};

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticated: boolean;
  initialized?: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { response, loading, error, fetchData } = useAxios();

  const [user, setUser] = useState<User | null>(null);
  const [initialized, setInitialized] = useState(false); // added

  const isAuthenticated = !!user;

  useEffect(() => {
    fetchData({ url: "profile", method: "get" });
  }, []);

  useEffect(() => {
    if (response) {
      setUser(response);
    }
    if (!loading) {
      setInitialized(true);
    }
  }, [response, loading, error]);

  if (!initialized) return "Loading...";

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
