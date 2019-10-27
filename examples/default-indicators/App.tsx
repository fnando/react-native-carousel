import { Carousel } from "@fnando/react-native-carousel";
import React, { useRef, useState } from "react";
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const App = () => {
  const carousel: any = useRef();

  const handleGoToLastPage = () => {
    carousel.current.goToPage(3);
  };

  return (
    <View style={styles.container}>
      <Button title="Go to last page" onPress={handleGoToLastPage} />
      <View>
        <Carousel ref={carousel}>
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
