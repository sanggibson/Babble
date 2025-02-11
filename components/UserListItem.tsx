import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { useChatContext } from "stream-chat-expo";
import { useAuth } from "@/providers/AuthProvider";
import { router } from "expo-router";

const UserListItem = ({ user }) => {
  const { client } = useChatContext();
  const { user: me } = useAuth();

  const onPress = async () => {
    const channel = client.channel("messaging", {
      members: [me?.id, user.id],
    });
    await channel.watch();
    router.replace(`/(home)/channel/${channel.cid}`);
  };

  // if (!user.full_name) {
  //   return <Text>Unknown User</Text>;
  // }
  return (
    <Pressable
      onPress={onPress}
      style={{ padding: 15, backgroundColor: "white" }}
    >
      <Text style={{ fontWeight: "600" }}>
        {user.full_name || "Unknown User"}
      </Text>
    </Pressable>
  );
};

export default UserListItem;
function useState<T>(arg0: null): [any, any] {
  throw new Error("Function not implemented.");
}
