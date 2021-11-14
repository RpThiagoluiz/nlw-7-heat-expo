import React from "react";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import avatarImage from "../../assets/avatar.png";
import { styles } from "./styles";
import { COLORS } from "../../theme";

const SIZES = {
  SMALL: {
    containerSize: 32,
    avatarSize: 28,
  },
  MEDIUM: {
    containerSize: 48,
    avatarSize: 42,
  },
};

type Props = {
  imageUri: string | undefined;
  size?: "SMALL" | "MEDIUM";
};

export function UserImage({ imageUri, size = "MEDIUM" }: Props) {
  // URI por a imagem vem da internet.

  const { containerSize, avatarSize } = SIZES[size];
  //Pegar a imagem, caso tenha alguma image, ele vai pegar ela. se nao ele vai pegar ela pelo Image.
  const AvatarDefault = Image.resolveAssetSource(avatarImage).uri;
  return (
    <LinearGradient
      colors={[COLORS.PINK, COLORS.YELLOW]}
      start={{ x: 0, y: 0.8 }}
      end={{ x: 0.9, y: 1 }}
      style={[
        styles.containerGradient,
        {
          width: containerSize,
          height: containerSize,
          borderRadius: containerSize / 2,
        },
      ]}
    >
      <Image
        source={{ uri: imageUri || AvatarDefault }}
        style={[
          styles.avatar,
          {
            width: avatarSize,
            height: avatarSize,
            borderRadius: avatarSize / 2,
          },
        ]}
      />
    </LinearGradient>
  );
}
