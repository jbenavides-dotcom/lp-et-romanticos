interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ variant = 'light', size = 'md' }: LogoProps) {
  const titleClass =
    size === 'sm'
      ? 'text-sm'
      : size === 'lg'
      ? 'text-xl'
      : 'text-base';

  const subtitleClass =
    size === 'sm'
      ? 'text-[9px]'
      : size === 'lg'
      ? 'text-xs'
      : 'text-[10px]';

  const primaryColor = variant === 'light' ? 'text-white' : 'text-brand-dark';
  const accentColor = variant === 'light' ? 'text-brand-gold' : 'text-brand-pink';

  return (
    <div className="flex flex-col items-start leading-tight select-none">
      <span
        className={`font-serif font-semibold tracking-widest uppercase ${titleClass} ${primaryColor}`}
      >
        La Palma &amp;{' '}
        <span className={accentColor}>El Tucán</span>
      </span>
      <span
        className={`font-sans font-light tracking-[0.25em] uppercase ${subtitleClass} ${
          variant === 'light' ? 'text-brand-beige' : 'text-gray-500'
        }`}
      >
        Escapadas Románticas
      </span>
    </div>
  );
}
