import { useState } from 'react'
import {
  TextInput, StyleSheet,
  type ViewStyle, type KeyboardTypeOptions
} from 'react-native'

interface Props {
  value?: string
  placeholder?: string
  style?: ViewStyle
  keyboardType?: KeyboardTypeOptions
  secureTextEntry?: boolean
  textContentType?: 'emailAddress' | 'password'
}

const CustomInput = (props: Props): JSX.Element => {
  const {
    value = '',
    placeholder = '',
    style,
    keyboardType,
    secureTextEntry = false,
    textContentType
  } = props
  const [text, setText] = useState(value)

  return (
    <TextInput
      style={[styles.input, style]}
      value={text}
      onChangeText={setText}
      placeholder={placeholder}
      autoCapitalize='none'
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      textContentType={textContentType}
      />
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#dddddd',
    backgroundColor: '#ffffff',
    height: 48,
    padding: 8,
    fontSize: 16,
    marginBottom: 16
  }
})

export default CustomInput
