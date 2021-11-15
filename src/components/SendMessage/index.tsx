import React, { useState } from "react";

import { View, Text, TextInput } from "react-native";
import { COLORS } from "../../theme";
import { Button } from "../Button";

import { styles } from "./styles";

export function SendMessage() {
  const [message, setMessage] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardAppearance="dark"
        placeholder="Envie sua mensagem para o evento"
        placeholderTextColor={COLORS.WHITE}
        multiline
        maxLength={140}
        onChangeText={setMessage}
        // editable, para nao deixar o usuario digitar enquanto ele envia uma message.
        editable={!sendingMessage}
        value={message}
      />
      <Button
        title="ENVIAR MESSAGEM"
        backgroundColor={COLORS.PINK}
        color={COLORS.WHITE}
        isLoading={sendingMessage}
      />
    </View>
  );
}
