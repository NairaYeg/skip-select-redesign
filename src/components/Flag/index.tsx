import React from 'react';
import './styles.css';

export const FLAG_TYPES = {
  MESSAGE: 'message',
  WARNING: 'warning',
} as const;

export const FLAG_VARIANTS = {
  PRIVATE_PROPERTY: 'private-property',
  HEAVY_WASTE: 'heavy-waste',
} as const;

type FlagType = (typeof FLAG_TYPES)[keyof typeof FLAG_TYPES];
type FlagVariant = (typeof FLAG_VARIANTS)[keyof typeof FLAG_VARIANTS];

interface FlagProps {
  text: string;
  type: FlagType;
  variant?: FlagVariant;
  icon?: string;
  className?: string;
}

export const Flag: React.FC<FlagProps> = ({ text, type, variant, icon, className }) => {
  const baseClass = 'skip-flag';
  const typeClass = `skip-flag--${type}`;
  const variantClass = variant ? `skip-flag--${variant}` : '';
  const customClass = className || '';
  const combinedClassName = `${baseClass} ${typeClass} ${variantClass} ${customClass}`.trim();

  return (
    <span className={combinedClassName}>
      {icon && <span className="skip-flag__icon">{icon}</span>}
      <span className="skip-flag__text">{text}</span>
    </span>
  );
};
