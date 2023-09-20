import { styled } from "..";

export const CardContainer = styled("div", {
  display: "flex",
  gap: "1rem",

  img: {
    background: "linear-gradient(180deg,#1ea483 0%,#5A31F4 100%)",
    borderRadius: 8,
    overflow: "hidden",
  },
});
export const InfoSection = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: 3,

  color: "$gray100",

  span: {
    fontWeight: "bold",
    fontSize: "$lg",
  },
  button: {
    background: "none",
    fontWeight: "bold",
    fontSize: "md",
    color: "$green500",

    "&:hover": {
      color: "$green300",
      background: "none",
    },
  },
});
