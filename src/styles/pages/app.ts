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

export const ShopCartContainer = styled("div", {
  position: "absolute",
  right: 0,
  top: 0,

  height: "100%",
  width: "100%",
  maxWidth: 480,
  padding: "2rem",
  boxSizing: "border-box",
  transition: "0.2s all",

  zIndex: 10,
  background: "$gray800",
});
export const ShopCart = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  height: "100%",
});
export const CartItems = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 10,

  "&:first-child": {
    display: "flex",
    justifyContent: "flex-end",
  },

  button: {
    border: "none",
    background: "none",
    borderRadius: "50%",
    padding: 5,

    "&:hover": {
      transition: "all 0.2s",
      backgroundColor: "$green300",
      cursor: "pointer",
    },
  },
  strong: {
    fontSize: "lg",
    color: "$gray100",
  },
});

export const CartResume = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "3rem",

  width: "100%",

  button: {
    backgroundColor: "$green500",

    padding: ".8rem",
    borderRadius: 6,
    border: "none",

    fontWeight: "bold",
    fontSize: "lg",
    color: "$gray100",

    "&:hover": {
      transition: "all 0.2s",
      backgroundColor: "$green300",
      cursor: "pointer",
    },
  },
});
export const CartValueInfo = styled("div", {
  display: "flex",
  justifyContent: "space-between",

  div: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },

  span: {
    color: "$gray300",
  },
  strong: {
    color: "$gray100",
    fontSize: "$lg",
  },

  //width: "100%",
});
