"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";

type AuthUser = {
  type: "store" | "agent";
  username: string;
  storeCode: string;
  storeName: string;
} | null;

type AuthContextType = {
  user: AuthUser;
  login: (userData: NonNullable<AuthUser>) => void;
  logout: () => void;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // 从 localStorage 读取登录状态
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("auth");
      if (stored) {
        try {
          setUser(JSON.parse(stored));
        } catch (e) {
          localStorage.removeItem("auth");
        }
      }
      setIsLoading(false);
    }
  }, []);

  const login = (userData: NonNullable<AuthUser>) => {
    setUser(userData);
    localStorage.setItem("auth", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth");
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

