import Link from "next/link";
import { CTAContent } from "../../types/commonTypes";
import { StyledButton } from "./styled/Button.styled";

export const Button = ({ href, label, color, className }: CTAContent) => (
  <Link href={href}>
    <StyledButton
      color={color}
      className={className}
    >
      {label}
    </StyledButton>
  </Link>
);
