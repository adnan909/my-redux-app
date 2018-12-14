import { createStackNavigator, createAppContainer } from "react-navigation";
import Posts from '../components/posts'
import Counter from '../components/counter'
import Login from '../components/login'
const AppNavigator = createStackNavigator(
    {
        Counter,
        Posts,
        Login
    },
    {
        initialRouteName: 'Counter'
    }
);
const AppContainer = createAppContainer(AppNavigator)
export default AppContainer