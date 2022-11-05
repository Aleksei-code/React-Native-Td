import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Keyboard,
} from "react-native";
import { THEME } from "../theme";
import { AntDesign } from "@expo/vector-icons";

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
      Keyboard.dismiss();
    } else {
      Alert.alert("Your Task name cannot be empty");
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Enter your task"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <AntDesign.Button onPress={pressHandler} name="plussquareo">
        Add
      </AntDesign.Button>
      {/* <View style={styles.addButton}>
        <Button title="Add" onPress={pressHandler} />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    width: "70%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR,
  },
  addButton: {
    width: "25%",
  },
});
