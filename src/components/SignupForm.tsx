import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import bookshelfLogo from "@/assets/bookshelf-logo.png";

interface SignupFormProps {
  onSignup: () => void;
  onSwitchToLogin: () => void;
}

export const SignupForm = ({ onSignup, onSwitchToLogin }: SignupFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords don't match.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Simulate signup process
    setTimeout(() => {
      if (email && password && firstName && lastName) {
        toast({
          title: "Welcome to Deseret Bookshelf!",
          description: "Your account has been created successfully.",
        });
        onSignup();
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
        <CardDescription className="text-bookshelf-text-muted">
          Create your account to start reading
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="h-12 px-4 bg-background border-border rounded-lg focus:ring-2 focus:ring-bookshelf-teal focus:border-transparent transition-all"
              required
            />
            <Input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="h-12 px-4 bg-background border-border rounded-lg focus:ring-2 focus:ring-bookshelf-teal focus:border-transparent transition-all"
              required
            />
          </div>
          <Input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 px-4 bg-background border-border rounded-lg focus:ring-2 focus:ring-bookshelf-teal focus:border-transparent transition-all"
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-12 px-4 bg-background border-border rounded-lg focus:ring-2 focus:ring-bookshelf-teal focus:border-transparent transition-all"
            required
          />
          <Input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full h-12 px-4 bg-background border-border rounded-lg focus:ring-2 focus:ring-bookshelf-teal focus:border-transparent transition-all"
            required
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 bg-bookshelf-teal hover:bg-bookshelf-teal-hover text-white font-medium rounded-lg shadow-[var(--shadow-button)] transition-all duration-200 hover:shadow-lg"
          >
            {isLoading ? "Creating account..." : "Create Account"}
          </Button>
        </form>
        
        <div className="text-center text-sm text-bookshelf-text-muted">
          Already have an account?{" "}
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="text-bookshelf-teal hover:text-bookshelf-teal-hover font-medium transition-colors"
          >
            Sign in
          </button>
        </div>
      </CardContent>
    </Card>
  );
};