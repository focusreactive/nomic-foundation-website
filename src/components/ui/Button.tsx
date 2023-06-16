import Link from 'next/link';
import { CTAContent } from '../../types/commonTypes';
import { StyledButton } from './styled/Button.styled';

export const Button = ({ href, label, color }: CTAContent) => {
  const target = href.startsWith("http") ? "_blank" : undefined;

  return <Link href={href} target={target}>
    <StyledButton color={color}>{label}</StyledButton>
  </Link>
};
