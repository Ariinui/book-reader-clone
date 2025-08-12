import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import bookshelfLogo from "@/assets/bookshelf-logo.png";

interface LoginFormProps {
  onLogin: () => void;
  onSwitchToSignup: () => void;
}

export const LoginForm = ({ onLogin, onSwitchToSignup }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      if (email && password) {
        toast({
          title: "Welcome back!",
          description: "You've successfully logged in.",
        });
        onLogin();
      } else {
        toast({
          title: "Error",
          description: "Please fill in all fields.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-[var(--shadow-card)] bg-[var(--gradient-card)] border-0">
      <CardHeader className="text-center pb-6">
        <div className="flex justify-center mb-4">
          <img 
            src={bookshelfLogo} 
            alt="Deseret Bookshelf" 
            className="w-16 h-16 object-contain"
          />
        </div>
        <CardTitle className="text-2xl font-semibold text-foreground">
          deseret<span className="text-bookshelf-teal">bookshelf</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Deseret Book email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 px-4 bg-background border-border rounded-lg focus:ring-2 focus:ring-bookshelf-teal focus:border-transparent transition-all"
              required
            />
          </div>
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 px-4 bg-background border-border rounded-lg focus:ring-2 focus:ring-bookshelf-teal focus:border-transparent transition-all"
              required
            />
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 bg-bookshelf-teal hover:bg-bookshelf-teal-hover text-white font-medium rounded-lg shadow-[var(--shadow-button)] transition-all duration-200 hover:shadow-lg"
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>
        
        <div className="text-center">
          <button
            type="button"
            className="text-bookshelf-text-muted hover:text-foreground text-sm transition-colors"
          >
            Forgot Password?
          </button>
        </div>
        
        <div className="text-center text-sm text-bookshelf-text-muted">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={onSwitchToSignup}
            className="text-bookshelf-teal hover:text-bookshelf-teal-hover font-medium transition-colors"
          >
            Sign up
          </button>
        </div>
      </CardContent>
    </Card>
  );
};