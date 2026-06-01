import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300"
    >
      <div className={`flex items-center justify-center transition-transform duration-300 ${
        theme === 'dark' ? 'rotate-180' : 'rotate-0'
      }`}>
        {theme === 'light' ? (
          <Sun className="h-4 w-4 text-primary" />
        ) : (
          <Moon className="h-4 w-4 text-primary" />
        )}
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;