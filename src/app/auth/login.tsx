import { View, Text, StyleSheet } from 'react-native'
import Header from '../../components/Header'
import SquareButton from '../../components/SquareButton'
import CustomInput from '../../components/CustomInput'

const Login = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.inner}>
        <Text style={styles.title}>Log in</Text>
        <CustomInput value='Email' />
        <CustomInput value='Password' />
        <SquareButton label='Submit'/>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <Text style={styles.footerLink}>Sign up here!</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8'
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24
  },
  footer: {
    flexDirection: 'row'
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
    color: '#000000'
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
    color: '#467fd3'
  }
})

export default Login
