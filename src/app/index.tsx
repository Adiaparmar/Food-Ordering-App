import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import Button from "../components/Button";
import { Link, Redirect } from "expo-router";
import { useAuth } from "@/providers/AuthProvider";
import { supabase } from "@/lib/supabase";

const index = () => {
  const { session, loading, isAdmin } = useAuth();
  if (loading) {
    return <ActivityIndicator />;
  }
  if (!session) {
    return <Redirect href={"/sign-in"} />;
  }
  if (!isAdmin) {
    return <Redirect href={"/(users)"} />;
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 10 }}>
      <Link href={"/(users)"} asChild>
        <Button text="User"></Button>
      </Link>
      <Link href={"/(admin)"} asChild>
        <Button text="Admin"></Button>
      </Link>
      <Button onPress={() => supabase.auth.signOut()} text="Sign Out"></Button>
    </View>
  );
};

export default index;
