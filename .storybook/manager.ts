import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";
import favicon from "../public/wondersoft-favicon-icon.svg";

// Configure favicon
const link = document.createElement("link");
link.setAttribute("rel", "shortcut icon");
link.setAttribute("href", favicon);
document.head.appendChild(link);

// Configure theme
addons.setConfig({
  theme: create({
    //Brand
    base: "light",
    brandTitle: "Wondersoft - Business Component Library - Viewer",
    brandImage: "/Wondersoft - Default Logo.svg",
    brandTarget: "_self",
    brandUrl: "https://www.wondersoft.com/",
    //Toolbar default and active colors
    colorSecondary: "#292C6B",
  }),
});
