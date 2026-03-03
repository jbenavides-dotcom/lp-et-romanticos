const LOGO_URL = 'https://res.cloudinary.com/dsylu9a7k/image/upload/f_auto,q_auto/lpet/logo.png';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ size = 'md' }: LogoProps) {
  const sizeClass =
    size === 'sm' ? 'h-8 w-auto' :
    size === 'lg' ? 'h-14 w-auto' :
    'h-10 w-auto';

  return (
    <img
      src={LOGO_URL}
      alt="La Palma & El Tucán"
      className={`${sizeClass} object-contain`}
    />
  );
}
