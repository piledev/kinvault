import { Stack } from 'expo-router'

const Layout = (): JSX.Element => {
  return <Stack screenOptions={{
    headerStyle: {
      backgroundColor: '#586878'
    },
    headerTintColor: '#ffffff',
    headerTitle: 'Kinvault.md',
    headerBackTitle: 'Back',
    headerTitleStyle: {
      fontSize: 22,
      fontWeight: 'bold'
    }
  }}/>
}

export default Layout
