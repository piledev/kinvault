import { View, Text, ScrollView, StyleSheet } from 'react-native'

import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { router } from 'expo-router'

const handleOnPress = (): void => {
  router.push('/memo/edit')
}

const Detail = (): JSX.Element => {
  return (
    <View style={styles.container}>
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
      <CircleButton style={{ top: 40, bottom: 'auto' }} onPress={handleOnPress}>
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
