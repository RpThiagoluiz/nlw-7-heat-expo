import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  ColorValue,
  ActivityIndicator,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  color: ColorValue;
  backgroundColor: ColorValue;
  isLoading?: boolean;
  // flando que o icon, reactComponent props, que tera o tipo do nome que esta dentro do AntDesign
  icon?: React.ComponentProps<typeof AntDesign>["name"];
};

export function Button({
  color,
  backgroundColor,
  title,
  icon,
  isLoading = false,
  ...rest
}: Props) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }]}
      activeOpacity={0.7}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color={color} />
      ) : (
        <>
          {icon && (
            <AntDesign
              name={icon}
              size={24}
              color={color}
              style={styles.icon}
            />
          )}

          <Text style={[styles.title, { color }]}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
}
