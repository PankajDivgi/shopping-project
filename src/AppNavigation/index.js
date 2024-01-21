import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../HomeScreen";
import ProductDetailScreen from "../ProductDetailsScreen";
import CartScreen from "../CartScreen";
import { Icon } from "@rneui/themed";
import { View, Text } from "react-native";

// const Tab = createBottomTabNavigator();

// const Footer = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="wallet"
//       screenOptions={{
//         tabBarActiveBackgroundColor: "#fff",
//         tabBarInactiveBackgroundColor: "#f2f2f2",
//         tabBarShowLabel: false,
//         tabBarStyle: {
//           borderTopWidth: 0,
//           height: 50,
//         },
//       }}
//     >
//       <Tab.Screen
//         name="wallet"
//         component={WalletScreen}
//         options={{
//           headerShown: false,
//           animation: "none",
//           tabBarIcon: () => (
//             <Icon
//               name="account-balance-wallet"
//               type="materialIcons"
//               color="#000"
//               size={25}
//             />
//           ),
//         }}
//         screenOptions={{ showLabel: false }}
//       />
//       <Tab.Screen
//         name="Swap"
//         component={SwapScreen}
//         initialParams={{ paramKey1: null }}
//         options={{
//           animation: "none",
//           headerStyle: {
//             backgroundColor: "#f2f2f2",
//           },
//           headerTintColor: "#000",
//           tabBarIcon: () => (
//             <Icon
//               name="swap-horiz"
//               type="materialIcons"
//               color="#000"
//               size={25}
//             />
//           ),
//         }}
//         screenOptions={{ showLabel: false }}
//       />
//       <Tab.Screen
//         name="Settings"
//         component={UserProfileScreen}
//         options={{
//           animation: "none",
//           headerStyle: {
//             backgroundColor: "#f2f2f2",
//           },
//           headerTintColor: "#000",
//           tabBarIcon: () => (
//             <Icon name="setting" type="antdesign" color="#000" size={25} />
//           ),
//         }}
//         screenOptions={{ showLabel: false }}
//       />
//     </Tab.Navigator>
//   );
// };

const CartProduct = () => {
  return (
    <View style={{ display: "flex", marginLeft: 65, width: "100%" }}>
      <Icon name="shopping-bag" type="font-awesome-5" color="#000" size={32} />
    </View>
  );
};

const RootStack = createNativeStackNavigator();

const NvigateApp = () => {
  const CartTotal = () => {
    return (
      <View style={{ display: "flex"}}>
        <Text style={{ fontSize: 20}}>Shopping Cart</Text>
      </View>
    );
  };
  return (
    <NavigationContainer>
      {/* <ProductProvider> */}
      <RootStack.Navigator>
        <RootStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false, animation: "none" }}
        />
        <RootStack.Screen
          name="ProductDetailScreen"
          component={ProductDetailScreen}
          options={{ headerTitle: (props) => <CartProduct {...props} /> }}
        />
        <RootStack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{ headerTitle: (props) => <CartTotal {...props} /> }}
          initialParams={{ cartTotalNum: 0 }}
        />
      </RootStack.Navigator>
      {/* </ProductProvider> */}
    </NavigationContainer>
  );
};

export default NvigateApp;
