import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo = ({ size = 'md', className = '' }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-9 h-9',     // Tamanho para o rodapé
    md: 'w-[4.5rem] h-[4.5rem]',   // Dobro do tamanho do rodapé (2x w-9/h-9)
    lg: 'w-24 h-24',   // Tamanho maior para outros usos
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <img 
        src="/virtuetechlogo.jpg" 
        alt="VirtueTech Logo" 
        className="w-full h-full rounded-full object-cover"
      />
    </div>
  );
};

export default Logo;
