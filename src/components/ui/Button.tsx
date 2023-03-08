import Link from 'next/link';
import { CTAContent } from '../../types/commonTypes';
import { StyledButton } from './styled/Button.styled';

export const Button = ({ href, label, color }: CTAContent) => (
  <Link href={href}>
    <StyledButton color={color}>{label}</StyledButton>
  </Link>
);
