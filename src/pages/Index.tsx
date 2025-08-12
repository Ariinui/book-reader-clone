import { useState } from "react";
import { LoginForm } from "@/components/LoginForm";
import { SignupForm } from "@/components/SignupForm";
import { Dashboard } from "@/components/Dashboard";
import { MobileNotice } from "@/components/MobileNotice";

type AppState = "login" | "signup" | "dashboard";

const Index = () => {
  const [currentView, setCurrentView] = useState<AppState>("login");

  const handleLogin = () => {
    setCurrentView("dashboard");
  };

  const handleSignup = () => {
    setCurrentView("dashboard");
  };

  const handleLogout = () => {
    setCurrentView("login");
  };

  const handleSwitchToSignup = () => {
    setCurrentView("signup");
  };

  const handleSwitchToLogin = () => {
    setCurrentView("login");
  };

  if (currentView === "dashboard") {
    return <Dashboard onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-background relative bookshelf-pattern">
      <MobileNotice />
      
      <div className="min-h-screen flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          {currentView === "login" ? (
            <LoginForm 
              onLogin={handleLogin}
              onSwitchToSignup={handleSwitchToSignup}
            />
          ) : (
            <SignupForm 
              onSignup={handleSignup}
              onSwitchToLogin={handleSwitchToLogin}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
