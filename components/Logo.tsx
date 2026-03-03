interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ size = 'md' }: LogoProps) {
  const sizes = {
    sm: 'text-sm',
    md: 'text-base sm:text-lg',
    lg: 'text-xl sm:text-2xl lg:text-3xl',
  };

  return (
    <div className="flex flex-col leading-tight">
      <span className={`${sizes[size]} font-serif font-bold tracking-tight`}>
        <span className="text-brand-gold">LA PALMA</span>
        <span className="text-brand-pink mx-1">&amp;</span>
        <span className="text-brand-gold">EL TUCÁN</span>
      </span>
      <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.3em] text-brand-pink font-bold">
        Escapadas Románticas
      </span>
    </div>
  );
}
