import { extendTheme, SystemStyleObject} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  styles: {
    global: (props: SystemStyleObject) => ({
      "main, body, textarea": {
        backgroundColor: mode("#fff", "#0a1014")(props),
        color: mode("#000", "#f8f9fa")(props),
      },
      "h1, h2, h3, h4, h5, h6": {
        color: mode("#000", "#f8f9fa")(props),
      },
      "a": {
        color: mode("#000", "#007bff")(props),
        _hover: {
          color: mode("#000", "#0056b3")(props),
          textDecoration: "underline",
        },
      },
      ".navbar, .navbar-toggler, .dropdown-menu": {
        backgroundColor: mode("#fff", "#343a40")(props),
      },
      ".navbar-light .navbar-nav .nav-link, .navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-text": {
        color: mode("#000", "rgba(255, 255, 255, 0.5)")(props),
      },
      ".navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.active:focus, .navbar-light .navbar-nav .nav-link.active:hover, .navbar-light .navbar-nav .show > .nav-link, .navbar-light .navbar-nav .show > .nav-link:focus, .navbar-light .navbar-nav .show > .nav-link:hover": {
        color: mode("#000", "#fff")(props),
      },
      ".navbar-light .navbar-toggler-icon": {
        backgroundImage: mode('none', 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 30 30\'%3e%3cpath stroke=\'rgba(255, 255, 255, 0.5)\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e")')(props),
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      },
    }),
  },
});

export default theme;