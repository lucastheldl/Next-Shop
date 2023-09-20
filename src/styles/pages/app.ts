import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh",
});

export const Header = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",

  svg: {
    color: "$white",
  },
});
export const OpenShopCartButton = styled("button", {
  backgroundColor: "$gray800",
  padding: ".8rem",
  borderRadius: 6,
  border: "none",

  "&:hover": {
    transition: "all 0.2s",
    backgroundColor: "$green500",
    cursor: "pointer",
  },
});
