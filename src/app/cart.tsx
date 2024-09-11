import { StatusBar } from "expo-status-bar";
import { View, Text, Platform } from "react-native";

import { useCart } from "@/providers/CartProvider";

const CartScreen = () => {
  const { items } = useCart();
  return (
    <View>
      <Text>Cart items length: {items.length}</Text>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default CartScreen;
