"use client";

import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  if (currentYear === null) {
    return <footer className="bg-muted py-6 text-center text-sm text-muted-foreground">
      <div className="container mx-auto px-4">
        Loading copyright year...
      </div>
    </footer>;
  }

  return (
    <footer className="bg-muted py-6 text-center text-sm text-muted-foreground mt-auto">
      <div className="container mx-auto px-4">
        <p>&copy; {currentYear} Devfolio. All rights reserved.</p>
        <p className="mt-1">Built with Next.js and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
