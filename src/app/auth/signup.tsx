import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import SquareButton from '../../components/SquareButton'
import AuthInput from '../../components/AuthInput'
import { Link, router } from 'expo-router'

const handleOnPress = (): void => {
  // TODO: signup
  router.replace('/memo/list')
}

const Signup = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Sign up</Text>
        <AuthInput type='email' />
        <AuthInput type='password' />
        <SquareButton label='Submit' onPress={handleOnPress}/>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registered?</Text>
          <Link href='./login' asChild>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Log in here!</Text>
            </TouchableOpacity>
          </Link>
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

export default Signup
