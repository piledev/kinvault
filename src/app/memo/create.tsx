import { View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { router } from 'expo-router'
import { addDoc, collection } from 'firebase/firestore'

import CircleButton from '../../components/CircleButton'
import { db } from '../../config'
import Icon from '../../components/Icon'

const handlePress = (): void => {
  addDoc(collection(db, 'memos'), { bodyText: 'test' })
    .then((docRef) => {
      console.log('success', docRef.id)
    })
    .catch((error) => {
      console.log(error)
    })
  router.back()
}

const Create = (): JSX.Element => {
  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput multiline style={styles.input} value={'Write contents.'} />
      </View>
      <CircleButton onPress={handlePress}>
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
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 27
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24
  }
})

export default Create
