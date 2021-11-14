import React from "react";
import { View, Text } from "react-native";
import { UserImage } from "../UserImage";
import { MotiView } from "moti";
import { MessageProps } from "../../Interface";
import { styles } from "./styles";

type Props = {
  data: MessageProps;
};

export function Message({ data }: Props) {
  // MotiView - Animacao de forma declarativa

  return (
    <MotiView
      style={styles.container}
      from={{ opacity: 0, translateY: -50 }}
      transition={{ type: "timing", duration: 1000 }}
      animate={{ opacity: 1, translateY: 0 }}
    >
      <Text style={styles.message}>{data.text}</Text>

      <View style={styles.footer}>
        <UserImage size="SMALL" imageUri={data.user.avatar_url} />
        <Text style={styles.userName}>{data.user.name}</Text>
      </View>
    </MotiView>
  );
}
