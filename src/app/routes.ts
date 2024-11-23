import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout('./layout.tsx', [
    index('../pages/home.tsx'),
    route('/streamer/:id', '../pages/streamer.tsx'),
  ]),
] satisfies RouteConfig;