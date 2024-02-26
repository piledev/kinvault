import { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Link, router, useNavigation } from 'expo-router'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'

import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import LogoutButton from '../../components/LogoutButton'
import { db, auth } from '../../config'
import { type Memo } from '../../../types/memo'

const handleOnPress = (): void => {
  router.push('/memo/create')
}

const List = (): JSX.Element => {
  const [memos, setMemos] = useState<Memo[]>([])
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => { return <LogoutButton /> }
    })
  }, [])

  useEffect(() => {
    if (auth.currentUser === null) { return }
    const uid = auth.currentUser.uid
    const ref = collection(db, `users/${uid}/memos`)
    const q = query(ref, orderBy('updatedAt', 'desc'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const remoteMemos: Memo[] = []
      snapshot.forEach((doc) => {
        const { bodyText, updatedAt } = doc.data()
        remoteMemos.push({
          id: doc.id,
          bodyText,
          updatedAt
        })
      })
      setMemos(remoteMemos)
    })
    return unsubscribe
  }, [])

  return (
    <View style={styles.container}>
      <View>
        {memos.map((memo, index) => <MemoListItem key={index} memo={memo} />)}
      </View>
      <Link href='./create' asChild>
        <CircleButton onPress={handleOnPress}>
          <Icon name='plus' size={40} color='#ffffff'/>
        </CircleButton>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})
export default List
