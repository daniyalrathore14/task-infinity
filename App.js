import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import MainScreen from './src/MainScreen';
import HomeScreen from './src/HomeScreen';

const navigator = createStackNavigator({
  Main: MainScreen,
  Home: HomeScreen,

},
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      title: ''
    }

  }
)

export default createAppContainer(navigator);                                     