import {
  TextInput, StyleSheet,
  type ViewStyle
} from 'react-native'

interface Props {
  type: 'email' | 'password'
  value: string
  onChangeText: React.Dispatch<React.SetStateAction<string>>
  style?: ViewStyle
}

const AuthInput = (props: Props): JSX.Element => {
  const { type, value, onChangeText, style } = props
  if (type === 'email') {
    return (
      <TextInput
        style={[styles.input, style]}
        value={value}
        onChangeText={onChangeText}
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
        value={value}
        onChangeText={onChangeText}
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
