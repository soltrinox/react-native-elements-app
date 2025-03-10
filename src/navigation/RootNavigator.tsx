import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ThemeContext } from 'react-native-elements';
import { ThemeReducerContext } from '../helpers/ThemeReducer';
import DrawerNavigator from './DrawerNavigator';
import Avatars from '../views/avatars';
import Cards from '../views/cards';
import Tiles from '../views/tiles';
import Buttons from '../views/buttons';
import Chips from '../views/chips';
import Lists from '../views/lists';
import Lists2 from '../views/lists2';
import Inputs from '../views/inputs';
import LinearProgress from '../views/linearProgress';
import CircularSlider from '../views/circularSlider';
import Login from '../views/login';
import Pricing from '../views/pricing';
import Ratings from '../views/ratings';
import Settings from '../views/settings';
import SpeedDial from '../views/speedDial';
import Sliders from '../views/sliders';
import SocialIcons from '../views/social_icons';
import Fonts from '../views/fonts';
import BottomSheet from '../views/bottomsheet';
import Tooltip from '../views/tooltip';
import Overlay from '../views/overlay';
import CheckBox from '../views/checkbox';
import FAB from '../views/fab';
import Text from '../views/text';
import Tabs from '../views/tabs';
import Badge from '../views/badge';
import Image from '../views/image';
import WhatsappClone from '../views/whatsappClone';
import Divider from '../views/Divider';

const Drawer = createDrawerNavigator();

function RootNavigator() {
  const { ThemeState } = useContext(ThemeReducerContext);
  const { theme } = useContext(ThemeContext);

  return (
    <NavigationContainer
      theme={{
        colors: {
          background:
            theme?.colors?.white !== undefined ? theme.colors.white : '',
          primary: '',
          card: '',
          text: '',
          border: '',
          notification: '',
        },
        dark: ThemeState.themeMode === 'dark',
      }}
    >
      <Drawer.Navigator
        drawerContent={DrawerNavigator}
        drawerContentOptions={{
          activeTintColor: theme?.colors?.secondary,
          activeBackgroundColor: 'transparent',
          inactiveTintColor: theme?.colors?.grey0,
          inactiveBackgroundColor: 'transparent',
          labelStyle: {
            fontSize: 15,
            marginLeft: 0,
          },
        }}
        drawerStyle={{
          backgroundColor: theme?.colors?.grey4,
        }}
      >
        <Drawer.Screen name="Avatars" component={Avatars} />
        <Drawer.Screen name="Badge" component={Badge} />
        <Drawer.Screen name="BottomSheet" component={BottomSheet} />
        <Drawer.Screen name="Buttons" component={Buttons} />
        <Drawer.Screen name="Cards" component={Cards} />
        <Drawer.Screen name="Checkbox" component={CheckBox} />
        <Drawer.Screen name="Chips" component={Chips} />
        <Drawer.Screen name="Divider" component={Divider} />
        <Drawer.Screen name="Circular Slider" component={CircularSlider} />
        <Drawer.Screen name="FAB" component={FAB} />
        <Drawer.Screen name="Fonts" component={Fonts} />
        <Drawer.Screen name="Inputs" component={Inputs} />
        <Drawer.Screen name="LinearProgress" component={LinearProgress} />
        <Drawer.Screen name="Lists" component={Lists} />
        <Drawer.Screen name="Lists2" component={Lists2} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Overlay" component={Overlay} />
        <Drawer.Screen name="Pricing" component={Pricing} />
        <Drawer.Screen name="Ratings" component={Ratings} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Slider" component={Sliders} />
        <Drawer.Screen name="Social Icons" component={SocialIcons} />
        <Drawer.Screen name="Speed Dial" component={SpeedDial} />
        <Drawer.Screen name="Tabs" component={Tabs} />
        <Drawer.Screen name="Text" component={Text} />
        <Drawer.Screen name="Tiles" component={Tiles} />
        <Drawer.Screen name="Tooltip" component={Tooltip} />
        <Drawer.Screen name="Whatsapp Clone" component={WhatsappClone} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
