import { AppLink } from "../AppLink/AppLink";

export const Logo = () => {
  return (
    <AppLink>
      <svg
        width={"80px"}
        height={"22px"}
      >
        <text
          x="0" y="20px" font-size="24px" font-weight="bold" stroke="black" stroke-width=".5"
          letterSpacing="3.5" fill="none"
        >
          {"<></>"}
        </text>
      </svg>
    </AppLink>
  );
};