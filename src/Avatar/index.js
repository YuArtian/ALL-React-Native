import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  containerStyle,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native'
import PropTypes from 'prop-types';
import { withTheme } from '../config'
import ViewPropTypes from '../utils/ViewPropTypes'

const SIZE = {
  small: 34,
  medium: 50,
  large: 75,
  xlarge: 150,
}

const Avatar = ({
  icon,
  size,
  shape,
  source,
  onPress,
  onLongPress,
  Component = onPress || onLongPress ? TouchableOpacity : View,
  ...otherProps
}) => {
  const width = typeof(size) === 'number' ? size : (SIZE[size] || SIZE.medium)
  const SHAPE = {
    circle: { borderRadius: width/2 },
    square: { borderRadius: 0 },
  }

  return (
    <Component
      onPress={onPress}
      onLongPress={onLongPress}
      style={StyleSheet.flatten([
        styles.container,
        { width, height: width },
        SHAPE[shape] || SHAPE.circle,
        containerStyle
      ])}
      {...otherProps}>
        <View style={styles.imgContainer}>
          <Image
            source={source}
            style={styles.avatar}/>
        </View>
    </Component>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    overflow: 'hidden'
  },
  imgContainer: {
    flex: 1,
    backgroundColor: '#eee'
  },
  avatar: {
    flex: 1
  },
})

Avatar.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
    PropTypes.number,
  ]),
  shape: PropTypes.oneOf(['circle', 'square']),
  containerStyle: ViewPropTypes.style,
  Component: PropTypes.oneOf([
    View,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
  ]),
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  source: Image.propTypes.source,
}

export {Avatar}
export default withTheme(Avatar)