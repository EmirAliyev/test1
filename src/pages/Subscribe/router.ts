export const SubscribeRoutes = {
  path: '/subscribe',
  name: 'subscribe',
  component: () => import('@/pages/Subscribe/index.vue'),
  meta: {
    layout: 'defaultLayout',
  },
}
