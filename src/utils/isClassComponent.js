const isClassComponent = component => (
  Boolean(component.prototype && component.prototype.isReactComponent)
)

export default isClassComponent