export async function loadLayoutMiddleware(route) {
  const { layout } = route.meta
  const normalizedLayoutName = layout || 'defaultLayout'
  const component = await import(`../../../layouts/${normalizedLayoutName}.vue`)
  route.meta.layoutComponent = component.default
}
