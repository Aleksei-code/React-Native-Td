import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { THEME } from "../theme";

export const TodoScreen = ({ goBack, deleteItem, todo }) => {
  return (
    <View>
      <Text>{todo.title} </Text>
      <View style={styles.buttonsGroup}>
        <View style={styles.button}>
          <Button color={THEME.GREY_COLOR} title="Back" onPress={goBack} />
        </View>
        <View style={styles.button}>
          <Button color={THEME.DANGER_COLOR} title="Delete" onPress={deleteItem} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsGroup: { flexDirection: "row", justifyContent: "space-between" },
  button: { padding: 2, width: "45%" },
});
