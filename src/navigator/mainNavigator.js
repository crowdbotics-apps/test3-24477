import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps204319Navigator from '../features/Maps204319/navigator';
import Additem204318Navigator from '../features/Additem204318/navigator';
import Maps204314Navigator from '../features/Maps204314/navigator';
import UserProfile204310Navigator from '../features/UserProfile204310/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps204319: { screen: Maps204319Navigator },
Additem204318: { screen: Additem204318Navigator },
Maps204314: { screen: Maps204314Navigator },
UserProfile204310: { screen: UserProfile204310Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
