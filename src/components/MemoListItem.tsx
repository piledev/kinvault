import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from './Icon'
import { Link } from 'expo-router'

import { type Memo } from '../../types/memo'
interface Props {
  memo: Memo
}
const MemoListItem = (props: Props): JSX.Element | null => {
  const { memo } = props
  const { bodyText, updatedAt } = memo
  if (bodyText === null || updatedAt === null) { return null }

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
          <TouchableOpacity>
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
