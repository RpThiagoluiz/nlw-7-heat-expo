import React from "react";
import { View } from "react-native";
import { useAuth } from "../../hooks";
import { Header } from "../../components/Header";
import { MessageList } from "../../components/MessageList";
import { SignInBox } from "../../components/SignInBox";
import { SendMessage } from "../../components/SendMessage";
import { NoUser } from "../../components/NoUser";

import { styles } from "./styles";

export function Home() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Header />
      <MessageList />

      {user ? <SendMessage /> : <SignInBox />}
    </View>
  );
}
