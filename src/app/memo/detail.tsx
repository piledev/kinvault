import { router, useLocalSearchParams } from 'expo-router'
import { onSnapshot, doc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { auth, db } from '../../config'
import { type Memo } from '../../../types/memo'

const handlePress = (id: string): void => {
  router.push({ pathname: '/memo/edit', params: { id } })
}

const Detail = (): JSX.Element => {
  const [memo, setMemo] = useState<Memo | null>(null)
  const params = useLocalSearchParams()
  const id = String(params.id)

  useEffect(() => {
    if (auth.currentUser === null) { return }
    const uid = auth.currentUser.uid
    const ref = doc(db, `users/${uid}/memos`, id)
    const unsubscribe = onSnapshot(ref, (memoDoc) => {
      const { bodyText, updatedAt } = memoDoc.data() as Memo
      setMemo({
        id: memoDoc.id,
        bodyText,
        updatedAt
      })
    })
    return unsubscribe
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoItem} numberOfLines={1}>{memo?.bodyText}</Text>
        <Text style={styles.memoDate}>{memo?.updatedAt.toDate().toLocaleString('en-US')}</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>
          {memo?.bodyText}
        </Text>
      </ScrollView>
      <CircleButton style={{ top: 40, bottom: 'auto' }} onPress={() => { handlePress(id) }}>
        <Icon name='quill' size={30} color='#ffffff'/>
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  memoHeader: {
    backgroundColor: '#586878',
    height: 84,
    paddingVertical: 24,
    paddingHorizontal: 19
  },
  memoItem: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 22,
    fontWeight: 'bold'
  },
  memoDate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16
  },
  memoBody: {
    paddingHorizontal: 27
  },
  memoBodyText: {
    paddingVertical: 32,
    color: '#000000'
  }
})

export default Detail
