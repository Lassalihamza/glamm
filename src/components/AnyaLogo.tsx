import React from 'react';
import { Logo, type LogoProps } from './Logo.tsx';

export interface AnyaLogoProps extends LogoProps {
  forceSvg?: boolean;
}

export const AnyaLogo: React.FC<AnyaLogoProps> = (props) => {
  return <Logo {...props} />;
};

export { Logo };
