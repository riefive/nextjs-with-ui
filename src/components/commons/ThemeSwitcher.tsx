'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button, Tooltip } from "@nextui-org/react";
import { HiMiniMoon } from 'react-icons/hi2';
import { HiMiniSun } from 'react-icons/hi2';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true)
  }, []);

  if(!mounted) return null;

  return (
    <div>
      The current theme is: {theme}
      <div className="flex gap-2">
        <Tooltip content="Light Mode">
            <Button isIconOnly aria-label="light" onClick={() => setTheme('light')}>
                <HiMiniSun />
            </Button>
        </Tooltip>
        <Tooltip content="Dark Mode">
            <Button isIconOnly aria-label="dark" onClick={() => setTheme('dark')}>
                <HiMiniMoon />
            </Button>
        </Tooltip>
      </div>
    </div>
  )
};
