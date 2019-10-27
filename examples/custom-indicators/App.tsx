import { range } from "lodash";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from "react-native";
import { Carousel } from "@fnando/react-native-carousel";

const Indicators = ({
  count,
  selectedIndex,
}: {
  count: number;
  selectedIndex: number;
}) => {
  const children = range(count).map((index: number) => {
    const selected = index === selectedIndex;

    return (
      <View
        key={index}
        style={{
          ...styles.indicator,
          backgroundColor: selected ? "#000" : "#ffffff80",
        }}>
        <Text
          style={{
            ...styles.indicatorText,
            color: selected ? "#fff" : "#00000090",
          }}>
          {index + 1}
        </Text>
      </View>
    );
  });

  return (
    <SafeAreaView style={styles.indicatorsSafeArea}>
      <View style={styles.indicators}>{children}</View>
    </SafeAreaView>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageChange = ({
    currentPage: newCurrentPage,
  }: {
    currentPage: number;
  }) => {
    setCurrentPage(newCurrentPage);
  };

  return (
    <View style={styles.container}>
      <Carousel showsIndicator={false} onPageChange={handlePageChange}>
        <View style={{ ...styles.page, backgroundColor: "orange" }}>
          <Text>Page 1</Text>
        </View>

        <View style={{ ...styles.page, backgroundColor: "gray" }}>
          <Text>Page 2</Text>
        </View>

        <View style={{ ...styles.page, backgroundColor: "#4a90e2" }}>
          <Text>Page 3</Text>
        </View>
      </Carousel>

      <Indicators count={3} selectedIndex={currentPage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  indicatorsSafeArea: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },

  indicators: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  indicator: {
    width: 20,
    height: 20,

    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    borderRadius: 10,
  },

  indicatorText: {
    fontFamily: "System",
    fontWeight: "700",
  },
});

export default App;
