import { createRouter, createWebHistory } from 'vue-router'
import { loadLayoutMiddleware } from '@/common/plugins/router/middleware/layoutLoader'
import routes from '@/pages/routes'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, from, next) => {
  await loadLayoutMiddleware(to)
  next()
})

export default router
