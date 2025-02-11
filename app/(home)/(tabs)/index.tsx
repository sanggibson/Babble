import { Link, Redirect, Stack, router } from "expo-router";
import { ChannelList } from "stream-chat-expo";
import { FontAwesome5 } from "@expo/vector-icons";
import { useAuth } from "@/providers/AuthProvider";

export default function MainTabScreen() {
  
  // const { user } = useAuth();

  return (
    <Stack>
      <Stack.Screen
        name="ChannelList" // Add the required 'name' prop
        options={{
          headerRight: () => (
            <Link href={"/(home)/users"} asChild>
              <FontAwesome5
                name="users"
                size={22}
                color="gray"
                style={{ marginHorizontal: 15 }}
              />
            </Link>
          ),
        }}
      />
      <ChannelList
        // filters={{ users: { $in: [user.id] } }}
        onSelect={(channel) => router.push(`/channel/${channel.cid}`)}
      />
    </Stack>
  );
}
