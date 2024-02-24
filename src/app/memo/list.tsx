import { View, StyleSheet } from 'react-native'

import Header from '../../components/Header'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { Link, router } from 'expo-router'

const handleOnPress = (): void => {
  router.push('/memo/create')
}

const List = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View>
        <Header />
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
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
