import { View, Text, StyleSheet } from 'react-native'

const MemoListItem = (): JSX.Element => {
  return (
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>Kaimono-list</Text>
            <Text style={styles.memoListItemDate}>2024-02-19</Text>
          </View>
          <View>
            <Text>x</Text>
          </View>
        </View>
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
