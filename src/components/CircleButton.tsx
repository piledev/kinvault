import { forwardRef } from 'react'
import { Text, StyleSheet, TouchableOpacity, type ViewStyle } from 'react-native'

interface Props {
  children?: React.ReactNode
  style?: ViewStyle
  onPress?: () => void
}

// eslint-disable-next-line react/display-name
const CircleButton = forwardRef((props: Props, _): JSX.Element => {
  const { children, style, onPress } = props
  return (
    <TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
      <Text style={styles.circleButtonLabel}>{children}</Text>
    </TouchableOpacity>
  )
})

const styles = StyleSheet.create({
  circleButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#586878',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 30,
    bottom: 30,
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8 // for android
  },
  circleButtonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 48
  }
})

export default CircleButton
