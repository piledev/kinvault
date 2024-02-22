import { TextInput, StyleSheet, type ViewStyle } from 'react-native'

interface Props {
  value: string
  style?: ViewStyle
}

const CustomInput = (props: Props): JSX.Element => {
  const { value, style } = props

  return (
    <TextInput style={[styles.input, style]} value={value} />
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
