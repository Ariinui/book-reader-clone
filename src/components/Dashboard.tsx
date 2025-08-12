import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, User, Settings, LogOut, Plus } from "lucide-react";
import bookshelfLogo from "@/assets/bookshelf-logo.png";

interface DashboardProps {
  onLogout: () => void;
}

export const Dashboard = ({ onLogout }: DashboardProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const sampleBooks = [
    { id: 1, title: "The Book of Mormon", author: "Various Authors", progress: 45, cover: "📖" },
    { id: 2, title: "Jesus the Christ", author: "James E. Talmage", progress: 78, cover: "✝️" },
    { id: 3, title: "Preach My Gospel", author: "The Church of Jesus Christ", progress: 23, cover: "🌟" },
    { id: 4, title: "Gospel Principles", author: "The Church of Jesus Christ", progress: 67, cover: "📚" },
    { id: 5, title: "True to the Faith", author: "The Church of Jesus Christ", progress: 89, cover: "🕊️" },
    { id: 6, title: "The Miracle of Forgiveness", author: "Spencer W. Kimball", progress: 12, cover: "💝" },
  ];

  return (
    <div className="min-h-screen bg-background relative bookshelf-pattern">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img 
                src={bookshelfLogo} 
                alt="Deseret Bookshelf" 
                className="w-8 h-8 object-contain"
              />
              <h1 className="text-xl font-semibold text-foreground">
                deseret<span className="text-bookshelf-teal">bookshelf</span>
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bookshelf-text-muted w-4 h-4" />
                <Input
                  type="search"
                  placeholder="Search your library..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64 h-9 bg-background border-border rounded-lg focus:ring-2 focus:ring-bookshelf-teal focus:border-transparent"
                />
              </div>
              
              <Button variant="ghost" size="sm" className="text-bookshelf-text-muted hover:text-foreground">
                <User className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-bookshelf-text-muted hover:text-foreground">
                <Settings className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onLogout}
                className="text-bookshelf-text-muted hover:text-foreground"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">My Library</h2>
          <p className="text-bookshelf-text-muted">Continue reading or discover new books</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-bookshelf-teal to-bookshelf-teal-hover text-white border-0 shadow-[var(--shadow-card)]">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <Plus className="w-6 h-6" />
                <div>
                  <h3 className="font-semibold">Add New Book</h3>
                  <p className="text-sm opacity-90">Browse the catalog</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[var(--gradient-card)] border-border shadow-[var(--shadow-card)]">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-bookshelf-teal" />
                <div>
                  <h3 className="font-semibold text-foreground">Continue Reading</h3>
                  <p className="text-sm text-bookshelf-text-muted">Resume where you left off</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[var(--gradient-card)] border-border shadow-[var(--shadow-card)]">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <User className="w-6 h-6 text-bookshelf-teal" />
                <div>
                  <h3 className="font-semibold text-foreground">Reading Goals</h3>
                  <p className="text-sm text-bookshelf-text-muted">Track your progress</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sampleBooks.map((book) => (
            <Card 
              key={book.id}
              className="bg-[var(--gradient-card)] border-border shadow-[var(--shadow-card)] hover:shadow-lg transition-all duration-200 cursor-pointer group"
            >
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{book.cover}</div>
                  <h3 className="font-semibold text-foreground group-hover:text-bookshelf-teal transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-sm text-bookshelf-text-muted mt-1">{book.author}</p>
                </div>
                
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-bookshelf-text-muted mb-1">
                    <span>Progress</span>
                    <span>{book.progress}%</span>
                  </div>
                  <div className="w-full bg-bookshelf-gray-light rounded-full h-2">
                    <div 
                      className="bg-bookshelf-teal h-2 rounded-full transition-all duration-300"
                      style={{ width: `${book.progress}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};