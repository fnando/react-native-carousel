import React from "react";
import { View } from "react-native";

export const Indicator = ({
  index,
  currentPage,
}: {
  index: number;
  currentPage: number;
}) => {
  const selected = index === currentPage;
  const style = {
    backgroundColor: selected ? "#4a90e2" : "#ccc",
    borderRadius: 10,
    height: 10,
    marginHorizontal: 5,
    marginTop: 20,
    width: 10,
  };

  return <View style={style} />;
};
