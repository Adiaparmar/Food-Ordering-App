import { Text, FlatList } from "react-native";
import orders from "@assets/data/orders";
import OrderListItem from "@/components/OrderListItem";

export default function OrdersStack() {
  return (
    <FlatList
      data={orders}
      renderItem={({ item }) => <OrderListItem order={item} />}
      contentContainerStyle={{ padding: 10, gap: 10 }}
    />
  );
}
