import DarkModeToggle from './DarkModeToggle';

export default function Nav() {
  return (
    <nav className="mx-auto flex max-w-4xl items-center justify-between border-b p-4">
      <h1 className="text-lg font-bold">After the Honeymoon</h1>
      <DarkModeToggle />
    </nav>
  );
}
