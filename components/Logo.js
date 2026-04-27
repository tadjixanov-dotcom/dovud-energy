import Image from 'next/image';

export default function Logo({ size = 40 }) {
  return (
    <Image
      src="/logo.svg"
      alt="Dovud Energy"
      width={size * 2.3}
      height={size}
      priority
    />
  );
}
