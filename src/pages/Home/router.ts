export const HomeRoutes = {
  path: '/',
  name: 'home',
  component: () => import('@/pages/Home/index.vue'),
  meta: {
    layout: 'defaultLayout',
  },
}
