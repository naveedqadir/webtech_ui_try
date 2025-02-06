import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  { path: "solutions", file: "routes/solutions.tsx" },
  { path: "services", file: "routes/services.tsx" },
  { path: "about", file: "routes/about.tsx" },
  { path: "contact", file: "routes/contact.tsx" }
] satisfies RouteConfig;
