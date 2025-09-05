import { useState } from "react";
import { FileUpload } from "@/components/FileUpload";
import { SocialShare } from "@/components/SocialShare";
import literaLogo from "@/assets/litera-logo.png";

const Index = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    // Here you would typically process the file for reading
    console.log("Selected file:", file.name);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-lg font-medium text-litera-text-light tracking-wide">
            LITERA Reader
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <img 
                  src={literaLogo} 
                  alt="Litera" 
                  className="h-16 object-contain"
                />
                
                <div className="space-y-0">
                  <h2 className="text-5xl lg:text-6xl font-bold text-litera-text leading-tight">
                    Read Online
                  </h2>
                  <h3 className="text-4xl lg:text-5xl font-bold text-litera-text">
                    Anything
                  </h3>
                  <h3 className="text-4xl lg:text-5xl font-bold text-litera-text">
                    Anytime  
                  </h3>
                  <h3 className="text-4xl lg:text-5xl font-bold text-litera-text">
                    Anywhere
                  </h3>
                </div>
              </div>

              <p className="text-lg text-litera-text-light leading-relaxed max-w-md">
                Imagine the possibilities of having your entire collection at hand. 
                You can read and share eBooks across all devices with Litera Reader!
              </p>

              <SocialShare />
            </div>

            {/* Right Column - File Upload */}
            <div className="flex justify-center">
              <FileUpload onFileSelect={handleFileSelect} />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-litera-text-light">
              Copyright © 2025 Litera Reader
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-litera-text-light">
              <span className="cursor-pointer hover:text-litera-text transition-colors">×</span>
              <span className="cursor-pointer hover:text-litera-text transition-colors">support@litera-library.com</span>
              <span className="cursor-pointer hover:text-litera-text transition-colors">How to use API</span>
              <span className="cursor-pointer hover:text-litera-text transition-colors">DMCA</span>
              <span className="cursor-pointer hover:text-litera-text transition-colors">Terms</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Duplicate Social Share for Mobile */}
      <div className="lg:hidden py-8">
        <div className="max-w-7xl mx-auto px-4">
          <SocialShare />
        </div>
      </div>
    </div>
  );
};

export default Index;
