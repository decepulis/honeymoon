'use client';

import { useEffect, useState } from 'react';

// this will always start the user in light mode
// if you want to read the system preference
// or persist this state to local storage,
// further work is required
export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button className="rounded-full bg-slate-800 p-2 text-xs" onClick={() => setIsDark((d) => !d)}>
      {isDark ? '🌙' : '☀️'}
    </button>
  );
}
