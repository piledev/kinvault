import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { Link } from 'expo-router'

import Icon from './Icon'
import { type Memo } from '../../types/memo'
import { auth, db } from '../config'
import { doc, deleteDoc } from 'firebase/firestore'
interface Props {
  memo: Memo
}

const handlePress = (id: string): void => {
  if (auth.currentUser === null) { return }
  const uid = auth.currentUser.uid
  const ref = doc(db, `users/${uid}/memos`, id)
  Alert.alert('Delete Memo', 'Are you sure you want to delete this?', [
    {
      text: 'Cancel'
    },
    {
      text: 'Delete',
      style: 'destructive',
      onPress: () => {
        deleteDoc(ref)
          .catch(() => {
            Alert.alert("The memo couldn't be deleted.")
          })
      }
    }
  ])
}
const MemoListItem = (props: Props): JSX.Element | null => {
  const { memo } = props
  const { id, bodyText, updatedAt } = memo
  if (id === null || bodyText === null || updatedAt === null) { return null }

  const dateString = updatedAt.toDate().toLocaleString('en-US')
  return (
    <Link
      href={{
        pathname: '/memo/detail',
        params: {
          id: memo.id
        }
      }}
      asChild
    >
        <TouchableOpacity style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle} numberOfLines={1}>{bodyText}</Text>
            <Text style={styles.memoListItemDate}>{dateString}</Text>
          </View>
          <TouchableOpacity onPress={ () => { handlePress(id) }}>
            <Icon name='delete' size={24} color='#b0b0b0'/>
          </TouchableOpacity>
        </TouchableOpacity>
    </Link>
  )
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)'
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484'
  }
})

export default MemoListItem
