import { View, Text, TextStyle, StyleProp } from 'react-native';
import React from 'react';

interface TextCustomProps {
  style?: StyleProp<TextStyle>;
  fontSize?: number;
  children: React.ReactNode;
}

const TextCustom: React.FC<TextCustomProps> = ({ style, fontSize = 16, children }) => {
  return (
    <Text style={[{ fontSize }, style]}>{children}</Text>
  );
};

export default TextCustom;
