import { View, Text } from "react-native";
import React from "react";
import Button from "../components/Button";
import { Link } from "expo-router";

const index = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 10 }}>
      <Link href={"/(users)"} asChild>
        <Button text="User"></Button>
      </Link>
      <Link href={"/(admin)"} asChild>
        <Button text="Admin"></Button>
      </Link>
    </View>
  );
};

export default index;
