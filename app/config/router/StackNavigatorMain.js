import { createStackNavigator, createDrawerNavigator, StackViewTransitionConfigs } from "react-navigation"
import App from '@app/App';

const StackNavigatorMain = createStackNavigator(
    {
        App,
    },
    {
        headerMode: "none",
        initialRouteName: "App",
        transitionConfig: () => StackViewTransitionConfigs.SlideFromRightIOS,
    }
)
export default StackNavigatorMain