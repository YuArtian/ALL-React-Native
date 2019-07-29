import React from 'react'
import PropTypes from 'prop-types'
import color from './theme/color'

const ThemeContext = React.createContext()

export default class ThemeProvider extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      theme: {
        color
      },
    }
  }
  render(){
    return (
      <ThemeContext.Provider
        value={{theme: this.state.theme}}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

ThemeProvider.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.node.isRequired,
};

ThemeProvider.defaultProps = {
  theme: {},
};

export const ThemeConsumer = ThemeContext.Consumer