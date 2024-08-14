import { useTheme } from 'next-themes';
import { useMemo } from 'react';
import { createAvatar } from '@dicebear/core';
import { pixelArt } from '@dicebear/collection';

const Avatar: React.FC = () => {
  const { theme } = useTheme();

  const seed = theme === 'dark' ? 'NightModeAvatar' : 'DayModeAvatar';

  const avatarSvg = useMemo(() => {
    const avatar = createAvatar(pixelArt, {
      seed: seed,
      accessoriesProbability: theme === 'dark' ? 100 : 50,
      backgroundColor: theme === 'dark' ? ['#8e44ad'] : ['#f39c12'],
    });
    
    return avatar.toString();
  }, [seed, theme]);

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
