import { Carousel } from "@fnando/react-native-carousel";
import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View>
        <Carousel
          renderIndicator={({ currentPage, index }) => (
            <View
              key={index}
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                marginTop: 20,
                marginHorizontal: 5,
                backgroundColor: currentPage === index ? "#5cc94d" : "#ccc",
              }}
            />
          )}
        >
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: "center",
  },

  page: {
    height: 275,
    alignItems: "center",
    justifyContent: "center",
  },

  indicatorsSafeArea: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default App;
