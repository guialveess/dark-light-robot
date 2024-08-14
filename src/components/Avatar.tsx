"use client";

import { useTheme } from 'next-themes';
import { useMemo } from 'react';
import { createAvatar } from '@dicebear/core';
import { pixelArt } from '@dicebear/collection';

const Avatar = () => {
  const { theme } = useTheme();

  const seed = theme === 'dark' ? 'DarkThemeSeed' : 'LightThemeSeed';

  const avatarSvg = useMemo(() => {
    const avatar = createAvatar(pixelArt, {
      seed: seed, 
    });
    
    return avatar.toString();
  }, [theme]);

  return (
    <div className="w-32 h-32">
      <div
        className={`w-full h-full ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}
        dangerouslySetInnerHTML={{ __html: avatarSvg }}
      />
    </div>
  );
};

export default Avatar;
