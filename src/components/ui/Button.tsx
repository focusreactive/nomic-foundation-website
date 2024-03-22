import Link from 'next/link';
import { CTAContent } from '../../types/commonTypes';
import { StyledButton } from './styled/Button.styled';

export const Button = ({ href, label, color, className, smooth }: CTAContent) => {
  const target = href.startsWith('http') ? '_blank' : undefined;
  const button = (
    <StyledButton
      color={color}
      className={className}
    >
      {label}
    </StyledButton>
  );
  if (smooth) {
    return <a href={href}>{button}</a>;
  }
  return (
    <Link
      href={href}
      target={target}
    >
      {button}
    </Link>
  );
};
