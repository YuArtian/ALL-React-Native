import React from 'react'
import deepmerge from 'deepmerge'
import hoistNonReactStatics from 'hoist-non-react-statics';
import { ThemeConsumer } from './ThemeProvider'
import defaultTheme from './theme'
import isClassComponent from '../utils/isClassComponent'

const withTheme = (WrappedComponent, key) => {
  class ThemedComponent extends React.Component {
    render(){
      const { children, forwardedRef, ...restProps } = this.props
      return (
        <ThemeConsumer>
          {({ theme = defaultTheme }={}) => {
            const wrappedComponentProps = {
              ...deepmerge((key && theme[key]) || {}, restProps),
              children,
            }
            if (isClassComponent(WrappedComponent)) {
              wrappedComponentProps['ref'] = forwardedRef
            }
            return <WrappedComponent {...wrappedComponentProps}/>
          }}
        </ThemeConsumer>
      )
    }
  }
  //React DevTools displayName
  //https://zh-hans.reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging
  //https://zh-hans.reactjs.org/docs/forwarding-refs.html#displaying-a-custom-name-in-devtools
  const displayName = key ? `ThemedComponent(${key})` : (
    `ThemedComponent(${WrappedComponent.displayName})` ||
    WrappedComponent.name ||
    'Component'
  )

  if (isClassComponent(WrappedComponent)) {
    // HOC ref
    // https://zh-hans.reactjs.org/docs/forwarding-refs.html#forwarding-refs-in-higher-order-components
    const forwardedRef = (props, ref) => <ThemedComponent forwardedRef={ref} {...props}/>
    forwardedRef.displayName = displayName
    //copy static methods
    //https://zh-hans.reactjs.org/docs/higher-order-components.html?#static-methods-must-be-copied-over
    return hoistNonReactStatics(React.forwardRef(forwardedRef), WrappedComponent)
  }
  ThemedComponent.displayName = displayName
  return ThemedComponent
}

export default withTheme