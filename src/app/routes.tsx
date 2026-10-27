import { createBrowserRouter } from "react-router";
import { Root } from "./layouts/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Programs from "./pages/Programs";
import Pricing from "./pages/Pricing";
import Education from "./pages/Education";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Newsletter from "./pages/Newsletter";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "programs", Component: Programs },
      { path: "pricing", Component: Pricing },
      { path: "education", Component: Education },
      { path: "blog", Component: Blog },
      { path: "contact", Component: Contact },
      { path: "newsletter", Component: Newsletter },
      { path: "*", Component: NotFound },
    ],
  },
]);