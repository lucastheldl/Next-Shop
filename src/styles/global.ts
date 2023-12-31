import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    padding: 0,
    margin: 0,
  },

  body: {
    backgroundColor: "$gray900",
    "-webkit-font-smoothing": "antialised",
  },

  "body,input,textarea,button": {
    fontFamily: "Roboto",
    fontWeight: 400,
  },
});
