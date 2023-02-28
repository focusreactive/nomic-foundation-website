import Link from 'next/link';
import { CTAContent } from '../../types/commonTypes';
import { StyledButton } from './styled/Button.styled';

export const Button = ({ href, label }: CTAContent) => (
  <Link href={href}>
    <StyledButton>{label}</StyledButton>
  </Link>
);
