import { X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const MobileNotice = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-bookshelf-teal text-white p-4 shadow-lg">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex-1 text-center text-sm">
          This application is not optimized for mobile devices. For the best experience, please{" "}
          <Button 
            variant="ghost" 
            className="text-white underline h-auto p-0 font-medium hover:bg-transparent"
          >
            Download the App
          </Button>
          {" "}or use a desktop or laptop computer.
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 text-white hover:text-gray-200 transition-colors"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};