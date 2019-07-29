import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import Zocial from 'react-native-vector-icons/Zocial'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

export default type => {
  switch(type){
    case 'antd': {
      return AntDesign
    }
    case 'entypo': {
      return Entypo
    }
    case 'evilIcons': {
      return EvilIcons
    }
    case 'feather': {
      return Feather
    }
    case 'fontAwesome': {
      return FontAwesome
    }
    case 'fontAwesome5': {
      return FontAwesome5
    }
    case 'foundation': {
      return Foundation
    }
    case 'ionicons': {
      return Ionicons
    }
    case 'materialIcons': {
      return MaterialIcons
    }
    case 'materialCommunityIcons': {
      return MaterialCommunityIcons
    }
    case 'octicons': {
      return Octicons
    }
    case 'zocial': {
      return Zocial
    }
    case 'simpleLineIcons': {
      return SimpleLineIcons
    }
    default: {
      return AntDesign
    }
  }
}