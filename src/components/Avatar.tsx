"use client";

import { useTheme } from 'next-themes';
import { useMemo } from 'react';
import { createAvatar } from '@dicebear/core';
import { pixelArt } from '@dicebear/collection';

const Avatar = () => {
  const { theme } = useTheme();

  // Defina as seeds diferentes para os temas e adicione acessórios
  const seed = theme === 'dark' ? 'NightModeAvatar' : 'DayModeAvatar';

  const avatarSvg = useMemo(() => {
    const avatar = createAvatar(pixelArt, {
      seed: seed,
      // Adicione acessórios e cores diferentes dependendo do tema
      accessoriesProbability: theme === 'dark' ? 100 : 50, // Acessórios mais destacados no tema escuro
      backgroundColor: theme === 'dark' ? ['#8e44ad'] : ['#f39c12'], // Cores de fundo diferentes
    });
    
    return avatar.toString();
  }, [seed, theme]); // Use 'seed' e 'theme' como dependências

  return (
    <div className="w-32 h-32">
      <div
        className={`w-full h-full ${theme === 'dark' ? 'bg-black' : ''}`}
        dangerouslySetInnerHTML={{ __html: avatarSvg }}
      />
    </div>
  );
};

export default Avatar;
