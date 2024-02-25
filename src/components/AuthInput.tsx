import { useState } from 'react'
import {
  TextInput, StyleSheet,
  type ViewStyle
} from 'react-native'

interface Props {
  type: 'email' | 'password'
  value?: string
  style?: ViewStyle
}

const AuthInput = (props: Props): JSX.Element => {
  const { type, value = '', style } = props
  const [text, setText] = useState(value)
  if (type === 'email') {
    return (
      <TextInput
        style={[styles.input, style]}
        value={text}
        onChangeText={setText}
        placeholder='Email Address'
        autoCapitalize='none'
        keyboardType='email-address'
        textContentType='emailAddress'
        />
    )
  } else if (type === 'password') {
    return (
      <TextInput
        style={[styles.input, style]}
        value={text}
        onChangeText={setText}
        placeholder='Password'
        autoCapitalize='none'
        keyboardType='ascii-capable'
        textContentType='password'
        secureTextEntry
        />
    )
  } else {
    throw new Error('invalid type.')
  }
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

export default AuthInput
