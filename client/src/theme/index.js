import { extendTheme } from "@chakra-ui/react";
import { Button } from "./components/button";

export const theme = extendTheme({
  colors: {
    brand: {
      primary: "#49b2e3",
      secondary: "#FBD62E",
      error: "#F41213",
      black: "#1A1D22",
      black_light: "#393D42",
      white: "#FFFFFF",
      gray: "#bfbfbf",
      gray2: "#DADADA",
      gray3: "#bfbfbf",
      warning: "#63ceff",
      success: "#18DF44",
      disabled: "#F4F4F4",
    },
    primary: {
      50: "#FFF6CE",
      100: "#FFEFA8",
      200: "#FFEA8A",
      300: "#FFE467",
      400: "#FFDE47",
      500: "#49b2e3",
      600: "#F2CD23",
      700: "#E9C315",
      800: "#D6AA0D",
      900: "#B98708",
    },
    secondary: {
      50: "#C1D8FF",
      100: "#6CA1FE",
      200: "#387EF5",
      300: "#246DEA",
      400: "#0A53D1",
      500: "#49b2e3",
      600: "#094BBD",
      700: "#0740A3",
      800: "#0C3D92",
      900: "#09347C",
    },
  },
  fonts: {
    heading: "font-family: 'Roboto', sans-serif;",
    body: "font-family: 'Roboto', sans-serif;",
  },
  components: {
    Button,
  },

  shadows: {
    sidebar: "-5px 0px 20px 10px rgba(0, 0, 0, 0.05);",
    card: "0px 20px 50px 15px rgba(0, 0, 0, 0.05);",
    table: "0px 2px 10px 3px rgba(0, 0, 0, 0.04);",
    tab: "0px -10px 50px 15px rgba(0, 0, 0, 0.06);",
  },
});
