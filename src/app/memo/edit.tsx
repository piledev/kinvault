import { router, useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import { Alert, View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'

import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { auth, db } from '../../config'
import { Timestamp, doc, getDoc, setDoc } from 'firebase/firestore'

const handlePress = (id: string, bodyText: string): void => {
  if (auth.currentUser === null) { return }
  const uid = auth.currentUser.uid
  const ref = doc(db, `users/${uid}/memos`, id)
  setDoc(ref, {
    bodyText,
    updatedAt: Timestamp.fromDate(new Date())
  })
    .then(() => {
      router.back()
    })
    .catch((error) => {
      const { code, message } = error
      console.log(code, ': ', message)
      Alert.alert('error', message as string)
    })
}

const Edit = (): JSX.Element => {
  const params = useLocalSearchParams()
  const id = String(params.id)
  const [bodyText, setBodyText] = useState('')

  useEffect(() => {
    if (auth.currentUser === null) { return }
    const uid = auth.currentUser.uid
    const ref = doc(db, `users/${uid}/memos`, id)
    getDoc(ref)
      .then((docRef) => {
        const remoteBodyText = docRef?.data()?.bodyText as string
        setBodyText(remoteBodyText)
      })
      .catch((error) => {
        const { code, message } = error
        console.log(code, ': ', message)
        Alert.alert('error', message as string)
      })
  }, [])

  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          autoFocus
          multiline
          style={styles.input}
          value={bodyText}
          onChangeText={(text) => { setBodyText(text) }}
        />
      </View>
      <CircleButton onPress={() => { handlePress(id, bodyText) }}>
        <Icon name='check' size={40} color='#ffffff' />
      </CircleButton>
    </KeyboardAvoidingView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    flex: 1
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
    paddingVertical: 32,
    paddingHorizontal: 27
  }
})

export default Edit
