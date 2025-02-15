import { AppLink } from "../AppLink/AppLink";

export const Logo = () => {
  return (
    <AppLink>
      <svg
        width={"80px"}
        height={"22px"}
      >
        <text
          x="0" y="20px" fontSize="24px" fontWeight="bold" stroke="black" strokeWidth=".5"
          letterSpacing="3.5" fill="none"
        >
          {"<></>"}
        </text>
      </svg>
    </AppLink>
  );
};