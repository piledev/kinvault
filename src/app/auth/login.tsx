import { Link, router } from 'expo-router'
import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { signInWithEmailAndPassword } from 'firebase/auth'

import SquareButton from '../../components/SquareButton'
import AuthInput from '../../components/AuthInput'
import { auth } from '../../config'

const handlePress = (email: string, password: string): void => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      router.replace('/memo/list')
    })
    .catch((error) => {
      const { code, message } = error
      console.log(code, ': ', message)
      Alert.alert('Error', message as string)
    })
}

const Login = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Log in</Text>
        <AuthInput type='email' value={email} onChangeText={setEmail} />
        <AuthInput type='password' value={password} onChangeText={setPassword} />
        <SquareButton label='Submit' onPress={() => { handlePress(email, password) }} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <Link href='./signup' asChild replace>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Sign up here!</Text>
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

export default Login
