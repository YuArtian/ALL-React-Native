import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import PropTypes from 'prop-types'
import { withTheme } from '../config'
import getIconComponent from './getIconComponent';
import ViewPropTypes from '../utils/ViewPropTypes'

class Icon extends React.Component {
  constructor(props){
    super(props)
  }
  static getFontFamily = type => {
    if (type) {
      return getIconComponent(type).getFontFamily()
    }
  }
  static hasIcon = (type, name) => {
    if (type && name) {
      return getIconComponent(type).hasIcon(name)
    }
  }
  static getRawGlyphMap = type => {
    if (type) {
      return getIconComponent(type).getRawGlyphMap()
    }
  }
  static Button = ({
    type,
    children,
    name,
    color,
    size,
    iconStyle,
    backgroundColor,
    borderRadius,
    onPress,
  }) => {
    const CurrentIcon = getIconComponent(type)
    return (
      <CurrentIcon.Button {...{
        type, name, color, size, iconStyle, backgroundColor, borderRadius, onPress
        }}>
        { children }
      </CurrentIcon.Button>
    )
  }
  render(){
    const {
      type,
      size,
      name,
      color,
      onPress,
      Component = onPress ? TouchableOpacity : View,
      style,
      iconStyle,
      ...otherProps
    } = this.props
    // get icon component from react-native-vector-icons
    // https://github.com/oblador/react-native-vector-icons#icon-component
    const RNVIconComponent = getIconComponent(type)
    return (
      <View style={StyleSheet.flatten([
        {backgroundColor: 'transparent'},
        style,
      ])}>
        <Component
          onPress={onPress}
          {...otherProps}>
          <RNVIconComponent
            style={StyleSheet.flatten([
              { backgroundColor: 'transparent' },
              iconStyle,
            ])}
            size={size}
            name={name}
            color={color}/>
        </Component>
      </View>
    )
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'antd', 'entypo', 'evilIcons', 'feather', 'fontAwesome', 'fontAwesome5', 'foundation',
    'ionicons', 'materialIcons', 'materialCommunityIcons', 'octicons', 'zocial', 'simpleLineIcons'
  ]),
  size: PropTypes.number,
  color: PropTypes.string,
  onPress: PropTypes.func,
  iconStyle: Text.propTypes.style,
  style: ViewPropTypes.style,
  Component: PropTypes.oneOf([ View, TouchableOpacity ]),
}
Icon.defaultProps = {
  type: 'antd',
  size: 24,
  color: 'black',
  style: {},
};

Icon.Button.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'antd', 'entypo', 'evilIcons', 'feather', 'fontAwesome', 'fontAwesome5', 'foundation',
    'ionicons', 'materialIcons', 'materialCommunityIcons', 'octicons', 'zocial', 'simpleLineIcons'
  ]),
  size: PropTypes.number,
  color: PropTypes.string,
  onPress: PropTypes.func,
  iconStyle: Text.propTypes.style,
}
Icon.Button.defaultProps = {
  type: 'antd',
}
export {Icon}
export default withTheme(Icon)