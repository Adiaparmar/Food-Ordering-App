import { StatusBar } from "expo-status-bar";
import { View, Text, Platform } from "react-native";

const CartScreen = () => {
  return (
    <View>
      <Text>cart</Text>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default CartScreen;
