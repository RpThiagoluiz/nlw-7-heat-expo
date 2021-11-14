import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Message } from "../Message";

import { styles } from "./styles";

export function MessageList() {
  // basico, view nao da roll a scroll view sim.
  // a flatlist eu ainda acho mais pratico.
  // keyboardShouldPersistTaps="never" -> sempre que clicar na lista, vai fechar o keyboard, teclado.

  const fakedata = {
    id: "1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti error enim facilis suscipit sed, eius adipisci libero iure dignissimos esse itaque dolores quod quam repellat optio consectetur. Cum, nisi facilis!",
    user: {
      name: "Thiago",
      avatar_url: "https://github.com/RpThiagoluiz.png",
    },
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <Message data={fakedata} />
      <Message data={fakedata} />
      <Message data={fakedata} />
      <Message data={fakedata} />
      <Message data={fakedata} />
      <Message data={fakedata} />
      <Message data={fakedata} />
      <Message data={fakedata} />
      <Message data={fakedata} />
    </ScrollView>
  );
}
