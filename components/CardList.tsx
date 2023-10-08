import { View, TextInput, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { Data } from "../App";

type Props = {
  data: Data;
};

const Card = ({
  number,
  text,
  ...other
}: {
  number: string | number;
  text: string;
  [other: string]: any;
}) => {
  return (
    <View
      className="flex justify-center items-center rounded-md w-36 h-36"
      {...other}
    >
      <View>
        <Text className="text-gray-50 font-semibold text-center">{number}</Text>
        <Text className="text-gray-50 font-semibold mt-3">{text}</Text>
      </View>
    </View>
  );
};

const CardList = ({ data }: Props) => {
  const [username, setUsername] = useState<string>("");
  return (
    <View className="flex flex-row gap-5 flex-wrap my-5 justify-center">
      <Card text="Followers" number={data.followers} className="bg-blue-400" />
      <Card text="Following" number={data.following} className="bg-green-400" />
      <Card
        text="Public repos"
        number={data.public_repos}
        className="bg-orange-400"
      />
    </View>
  );
};

export default CardList;
