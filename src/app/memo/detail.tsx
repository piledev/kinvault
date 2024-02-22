import { View, Text, ScrollView, StyleSheet } from 'react-native'
import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'
// Ref. https://oblador.github.io/react-native-vector-icons/
// import { FontAwesome5 } from '@expo/vector-icons'
import Icon from '../../components/Icon'

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
      <CircleButton style={{ top: 140, bottom: 'auto' }}>
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
    backgroundColor: '#98a8b8',
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
    paddingVertical: 32,
    paddingHorizontal: 27
  },
  memoBodyText: {
    color: '#000000'
  }
})

export default Detail
