import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TextInput as Input} from 'react-native-paper';
import {theme} from '../code/Theme';
import {useTogglePasswordVisibility} from '../hooks/useTogglePasswordVisibility';

export default function TextInputs({
  errorText,
  description,
  secureTextEntry,
  showRightIcon,
  ...props
}) {
  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();

  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        overflow="hidden"
        placeholderTextColor={'#929292'}
        mode="outlined"
        outlineColor="#EFEFEF"
        right={
          showRightIcon && (
            <Input.Icon
              icon={rightIcon}
              onPress={handlePasswordVisibility}
              iconColor="#929292"
            />
          )
        }
        secureTextEntry={showRightIcon && passwordVisibility}
        {...props}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText && <Text style={styles.error}>{errorText}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  input: {
    backgroundColor: theme.colors.surface,
    height: 50,
    borderStyle: 'solid',
    fontSize: 15,
    borderRadius: 10,
  },
  description: {
    fontSize: 13,
    color: theme.colors.secondary,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
});
