import { SafeAreaView, ScrollView, Text, View } from "react-native";
import SearchBox from "./components/SearchBox";
import User from "./components/user";
import { useState, useCallback } from "react";
import CardList from "./components/CardList";

export type Data = {
  avatar_url: string;
  followers: string | number;
  following: string | number;
  login: string;
  public_repos: string | number;
};

export default function App() {
  const [data, setData] = useState<Data>();

  const search = useCallback((searchTerm: string) => {
    if (searchTerm == "") {
      alert("Please enter a valid term");
      return;
    }
    fetch(`https://api.github.com/users/${searchTerm}`)
      .then((res) => res.json())
      .then((data) => [setData(data)]);
  }, []);
  return (
    <SafeAreaView className="bg-black flex-1">
      <ScrollView
        keyboardShouldPersistTaps="handled"
        className="h-screen px-4 mx-auto"
      >
        <SearchBox onSearch={search} />
        {data && (
          <>
            <User src={data.avatar_url} username={data.login} />
            <CardList data={data} />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
