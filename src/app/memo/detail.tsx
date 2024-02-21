import { View, Text, ScrollView, StyleSheet } from 'react-native'
import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'

const Detail = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.memoHeader}>
        <Text style={styles.memoItem}>Kaimono-list</Text>
        <Text style={styles.memoDate}>2024-02-19</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>
          This is a kaimono list.
          I must buy ...
          - [ ] milk
          - [ ] pork
          - [ ] pencil

          So I must go to seven-eleven.
          aa.
          aaa.
          aaaa.
          aaaaa.
        </Text>
      </ScrollView>
      <CircleButton style={{ top: 160, bottom: 'auto' }}>+</CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  memoHeader: {
    backgroundColor: 'darkgray',
    height: 96,
    paddingVertical: 24,
    paddingHorizontal: 19
  },
  memoItem: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold'
  },
  memoDate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27
  },
  memoBodyText: {
    color: '#000000'
  }
})

export default Detail
