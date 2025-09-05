import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { 
  Twitter, 
  MessageCircle, 
  Send, 
  Mail, 
  Facebook,
  Copy,
  Share2
} from "lucide-react";

export const SocialShare = () => {
  const [isSharing, setIsSharing] = useState(false);
  const { toast } = useToast();
  
  const shareUrl = window.location.href;
  const shareText = "Check out Litera Reader - Read anything, anytime, anywhere!";

  const handleShare = async (platform: string, url: string) => {
    if (platform === "copy") {
      try {
        await navigator.clipboard.writeText(shareUrl);
        toast({
          title: "Link copied!",
          description: "The URL has been copied to your clipboard.",
        });
      } catch (error) {
        toast({
          title: "Copy failed",
          description: "Unable to copy link to clipboard.",
          variant: "destructive",
        });
      }
      return;
    }

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const shareLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      className: "hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950"
    },
    {
      name: "WhatsApp", 
      icon: MessageCircle,
      url: `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`,
      className: "hover:bg-green-50 hover:text-green-600 dark:hover:bg-green-950"
    },
    {
      name: "Telegram",
      icon: Send,
      url: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      className: "hover:bg-blue-50 hover:text-blue-500 dark:hover:bg-blue-950"
    },
    {
      name: "Email",
      icon: Mail,
      url: `mailto:?subject=${encodeURIComponent("Check out Litera Reader")}&body=${encodeURIComponent(shareText + "\n\n" + shareUrl)}`,
      className: "hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-gray-800"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      className: "hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-950"
    },
    {
      name: "Copy Link",
      icon: Copy,
      url: "copy",
      className: "hover:bg-primary/10 hover:text-primary"
    }
  ];

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-2">
        <Share2 className="w-4 h-4 text-litera-text-light" />
        <span className="text-sm font-medium text-litera-text">Share project</span>
      </div>
      
      <div className="flex items-center space-x-3">
        {shareLinks.map((social) => {
          const Icon = social.icon;
          return (
            <Button
              key={social.name}
              variant="ghost"
              size="sm"
              className={`p-2 h-auto rounded-full transition-colors ${social.className}`}
              onClick={() => handleShare(social.name.toLowerCase(), social.url)}
              aria-label={`Share on ${social.name}`}
            >
              <Icon className="w-5 h-5" />
            </Button>
          );
        })}
      </div>
    </div>
  );
};