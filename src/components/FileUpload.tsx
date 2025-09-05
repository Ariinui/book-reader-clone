import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Upload, File } from "lucide-react";

interface FileUploadProps {
  onFileSelect?: (file: File) => void;
}

export const FileUpload = ({ onFileSelect }: FileUploadProps) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const supportedFormats = [
    "PDF", "EPUB", "MOBI", "FB2", "AZW3", "DJVU", "LIT", "TXT", "RTF",
    "LRF", "AZW", "HTML", "DOCX", "PDB", "CHM", "CBZ", "PRC", "HTMLZ",
    "ODT", "DJV", "AZW4", "PML", "RB", "TCR"
  ];

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    onFileSelect?.(file);
    toast({
      title: "File selected",
      description: `${file.name} is ready to read`,
    });
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        className={`
          relative border-2 border-dashed rounded-2xl p-12 text-center
          transition-all duration-200 cursor-pointer
          ${isDragOver 
            ? "border-primary bg-primary/5 scale-[1.02]" 
            : "border-litera-border bg-gradient-to-br from-card to-card/50 hover:border-primary/50"
          }
        `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleBrowseClick}
        style={{ boxShadow: "var(--shadow-upload)" }}
      >
        <div className="space-y-6">
          <div className="flex justify-center">
            {selectedFile ? (
              <File className="w-16 h-16 text-primary" />
            ) : (
              <Upload className="w-16 h-16 text-litera-text-light" />
            )}
          </div>
          
          <div className="space-y-2">
            {selectedFile ? (
              <>
                <p className="text-lg font-medium text-litera-text">
                  {selectedFile.name}
                </p>
                <p className="text-sm text-litera-text-light">
                  Click to select a different file
                </p>
              </>
            ) : (
              <>
                <p className="text-lg text-litera-text">
                  Drag & Drop your file here or
                </p>
                <Button 
                  variant="default" 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Browse file
                </Button>
              </>
            )}
          </div>

          <div className="flex flex-wrap gap-2 justify-center max-w-lg mx-auto">
            {supportedFormats.map((format) => (
              <span
                key={format}
                className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded"
              >
                {format}
              </span>
            ))}
          </div>
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={handleFileInputChange}
        accept=".pdf,.epub,.mobi,.fb2,.azw3,.djvu,.lit,.txt,.rtf,.lrf,.azw,.html,.docx,.pdb,.chm,.cbz,.prc,.htmlz,.odt,.djv,.azw4,.pml,.rb,.tcr"
      />
    </div>
  );
};