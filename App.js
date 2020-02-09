import React from 'react';
import {  StyleSheet, ScrollView, ActivityIndicator, View, Text} from 'react-native';
import { List, ListItem, Button, Icon } from 'react-native-elements';
import { NavigationContainer,useNavigation  } from  '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import { useIsFocused } from "@react-navigation/core";
import BoardScreen from './components/BoardScreen';
import BoardDetailScreen from './components/BoardDetailScreen';
import AddBoardScreen from './components/AddBoardScreen';
import EditBoardScreen from './components/EditBoardScreen';
import firebase from './components/Firebase';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  navigation.setOptions({
    headerRight: () => (
      <Button
        title="Save"
        onPress={() => {
          //save the changes
          navigation.replace("Home");
        }}
      />
    )
  });

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Board List</Text>
        <Button
        title="Go To Settings Details"
        onPress={() => navigation.navigate("BoardScreen")}
        />
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('BoardDetails')}
        />
        <Button
          title="Go to Add Board"
          onPress={() => navigation.navigate('AddBoard')}
        />
        <Button
          title="Go to Edit Board"
          onPress={() => navigation.navigate('EditBoard')}
        />
      </View>
  );
};
  const SettingsScreen = ({ navigation }) => {
    const isFocused = useIsFocused();
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: isFocused ? "green" : "black" }}>
          SettingsScreen
        </Text>
        <Button title="Go To Home Screen" onPress={() => navigation.goBack()} />
      </View>
    );
  };
  

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        gestureEnabled:true,
        gestureDirection:"horizontal"
      }}>
        <Stack.Screen
          options={{ title: "My Home Screen" }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="BoardDetails" component={BoardDetailScreen} />
        <Stack.Screen name="AddBoard" component={AddBoardScreen} />
        <Stack.Screen name="EditBoard" component={EditBoardScreen} />
        <Stack.Screen name="BoardScreen" component={BoardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
