import { View, StyleSheet } from 'react-native'
import Header from '../../components/Header'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import { FontAwesome5 } from '@expo/vector-icons'

const List = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View>
        <Header />
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>
      <CircleButton>
        <FontAwesome5 name='pen' size={25} />
      </CircleButton>
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
