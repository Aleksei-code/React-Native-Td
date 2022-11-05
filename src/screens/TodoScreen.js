import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { AppCard } from "../components/ui/AppCard";
import { THEME } from "../theme";
import { EditModal } from "../components/EditModal";
import { AppTextBold } from "../components/ui/AppTextBold";
import { AppButton } from "../components/ui/AppButton";

export const TodoScreen = ({ goBack, deleteItem, todo, onSave }) => {
  const [modal, setModal] = useState(false);

  const saveHandler = (title) => {
    onSave(todo.id, title);
    setModal(false);
  };

  return (
    <View>
      <EditModal
        value={todo.title}
        visible={modal}
        onCancel={() => setModal(false)}
        onSave={saveHandler}
      />

      <AppCard style={styles.card}>
        <AppTextBold style={styles.title}> {todo.title}</AppTextBold>
        <AppButton onPress={() => setModal(true)}>
          <FontAwesome name="edit" size={21} />
        </AppButton>
      </AppCard>
      <View style={styles.buttonsGroup}>
        <View style={styles.button}>
          <AppButton color={THEME.GREY_COLOR} onPress={goBack}>
            <AntDesign name="back" size={21} />
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton color={THEME.DANGER_COLOR} onPress={deleteItem}>
            <AntDesign name="delete" size={21} />
          </AppButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsGroup: { flexDirection: "row", justifyContent: "space-between" },
  button: { padding: 2, width: Dimensions.get("window").width / 3 },
  title: { fontSize: 20 },
  card: { marginBottom: 20, padding: 15 },
});
