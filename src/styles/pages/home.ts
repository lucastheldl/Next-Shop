import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  position: "relative",
  width: "100%",
  marginLeft: "auto",
  maxWidth: "calc(100vw - (100vw - 1180px)/2)",
  minHeight: "465px",
  overflow: "hidden",
});
export const Product = styled("a", {
  background: "linear-gradient(180deg,#1ea483 0%,#5A31F4 100%)",
  borderRadius: 8,
  // padding: "0.25rem",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },

  footer: {
    position: "absolute",
    bottom: "0.15rem",
    left: "0.15rem",
    right: "0.15rem",
    padding: "2rem",

    borderRadius: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    background: "rgba(0,0,0,0.6)",

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    strong: {
      fontSize: "$lg",
      color: "$gray100",
    },
    span: {
      fontSize: "$xl",
      color: "$green300",
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    },
  },
});

export const ArrowLeftButton = styled("div", {
  position: "absolute",
  left: 0,
  top: "50%",

  button: {
    border: "none",
    background: "transparent",

    "&:hover": {
      cursor: "pointer",
    },
    "&:disabled": {
      opacity: 0.2,
      cursor: "not-allowed",
    },
  },

  svg: {
    color: "$white",
  },
});
export const ArrowRightButton = styled("div", {
  position: "absolute",
  right: 0,
  top: "50%",
  //width
  button: {
    border: "none",
    background: "transparent",

    "&:hover": {
      cursor: "pointer",
    },
    "&:disabled": {
      opacity: 0.2,
      cursor: "not-allowed",
    },
  },

  svg: {
    color: "$white",
  },
});
