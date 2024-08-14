import ThemeToggle from '@/components/ThemeToggle';
import Avatar from '@/components/Avatar';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
      <ThemeToggle />
      <Avatar />
    </div>
  );
}
