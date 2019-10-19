import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ChatScreen from "./screens/ChatScreen";
import JoinScreen from "./screens/JoinScreen";
import FriendListScreen from "./screens/FriendListScreen";

const AppStack = createStackNavigator({
  Home: FriendListScreen,
  Chat: ChatScreen
});

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
