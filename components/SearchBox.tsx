import { View, TextInput, Text, Pressable } from "react-native";
import React, { useState } from "react";

type Props = {
  onSearch: Function;
};

const SearchBox = ({ onSearch }: Props) => {
  const [username, setUsername] = useState<string>("");
  return (
    <View className="flex flex-row items-center space-x-4 mx-auto mt-5">
      <TextInput
        placeholder="Enter your username here..."
        onChangeText={(text: string) => setUsername(text)}
        className="border border-gray-100 p-2 text-gray-100 w-2/3 rounded focus:border-2 focus:border-purple-400"
        placeholderTextColor="#ffffff"
      />
      <Pressable
        className="bg-sky-500 px-4 py-2 rounded-lg"
        onPress={() => onSearch(username)}
      >
        <Text className="text-gray-100">Search</Text>
      </Pressable>
    </View>
  );
};

export default SearchBox;
