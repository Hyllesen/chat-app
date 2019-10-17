import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./screens/HomeScreen";
import JoinScreen from "./screens/JoinScreen";

const AppStack = createStackNavigator({ Home: HomeScreen });

export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
      Join: JoinScreen
    },
    {
      initialRouteName: "Join"
    }
  )
);
