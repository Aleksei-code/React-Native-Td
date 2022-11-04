import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export const TodoScreen = ({ goBack, deleteItem, todo }) => {
  return (
    <View>
      <Text>{todo.title} </Text>
      <View style={styles.buttonsGroup}>
        <View style={styles.button}>
          <Button color="gray" title="Back" onPress={goBack} />
        </View>
        <View style={styles.button}>
          <Button color="red" title="Delete" onPress={deleteItem} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsGroup: { flexDirection: "row", justifyContent: "space-between" },
  button: { padding: 2, width: "45%" },
});
