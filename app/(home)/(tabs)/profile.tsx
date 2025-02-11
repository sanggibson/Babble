// import { useState, useEffect } from "react";

// import { StyleSheet, View, Alert, ScrollView, Button} from "react-native";
// import { Session } from "@supabase/supabase-js";
// import { supabase } from "@/app/lib/supabase";
// import { useAuth } from "@/providers/AuthProvider";
// import Avatar from "@/components/Avatar";
// import { TextInput } from "react-native-gesture-handler";

// export default function ProfileScreen() {
//   const { session } = useAuth();

//   const [loading, setLoading] = useState(true);
//   const [username, setUsername] = useState("");
//   const [fullName, setFullname] = useState("");
//   const [avatarUrl, setAvatarUrl] = useState("");

//   useEffect(() => {
//     if (session) getProfile();
//   }, [session]);

//   async function getProfile() {
//     try {
//       setLoading(true);
//       if (!session?.user) throw new Error("No user on the session!");

//       const { data, error, status } = await supabase
//         .from("profiles")
//         .select(`username, avatar_url, full_name`)
//         .eq("id", session?.user.id)
//         .single();
//       if (error && status !== 406) {
//         throw error;
//       }

//       if (data) {
//         setUsername(data.username);
//         setAvatarUrl(data.avatar_url);
//         setFullname(data.full_name);
//       }
//     } catch (error) {
//       if (error instanceof Error) {
//         Alert.alert(error.message);
//       }
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function updateProfile({
//     username,
//     avatar_url,
//     full_name,
//   }: {
//     username: string;
//     avatar_url: string;
//     full_name: string;
//   }) {
//     try {
//       setLoading(true);
//       if (!session?.user) throw new Error("No user on the session!");

//       const updates = {
//         id: session?.user.id,
//         username,
//         avatar_url,
//         full_name,
//         updated_at: new Date(),
//       };

//       const { error } = await supabase.from("profiles").upsert(updates);

//       if (error) {
//         throw error;
//       }
//     } catch (error) {
//       if (error instanceof Error) {
//         Alert.alert(error.message);
//       }
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <ScrollView style={styles.container}>
//       <View style={{ alignItems: "center" }}>
//         <Avatar
//           size={150}
//           url={avatarUrl}
//           onUpload={(url: string) => {
//             setAvatarUrl(url);
//             updateProfile({
//               username,
//               avatar_url: url,
//               full_name: fullName,
//             });
//           }}
//         />
//       </View>
//       <View style={[styles.verticallySpaced, styles.mt20]}>
//         <TextInput
//           placeholder="Email"
//           value={session?.user?.email}
//           style={{
//             borderWidth: 1,
//             borderColor: "red",
//             borderRadius: 50,
//             padding: 10,
//             paddingStart: 20,
//           }}
//         />
//       </View>
//       <View style={styles.verticallySpaced}>
//         <TextInput
//           placeholder="Full Name"
//           value={fullName || ""}
//           onChangeText={(text) => setFullname(text)}
//           style={{
//             borderWidth: 1,
//             borderColor: "red",
//             borderRadius: 50,
//             padding: 10,
//             paddingStart: 20,
//           }}
//         />
//       </View>
//       <View style={styles.verticallySpaced}>
//         <TextInput
//           placeholder="Username"
//           value={username || ""}
//           onChangeText={(text) => setUsername(text)}
//           style={{
//             borderWidth: 1,
//             borderColor: "red",
//             borderRadius: 50,
//             padding: 10,
//             paddingStart: 20,
//           }}
//         />
//       </View>

//       <View style={[styles.verticallySpaced, styles.mt20]}>
//         <Button
//           color="red"
//           title={loading ? "Loading ..." : "Update"}
//           onPress={() =>
//             updateProfile({
//               username,
//               avatar_url: avatarUrl,
//               full_name: fullName,
//             })
//           }
//           disabled={loading}
//         />
//       </View>

//       <View style={styles.verticallySpaced}>
//         <Button
//           title="Sign Out"
//           onPress={() => supabase.auth.signOut()}
//           color="red"
//         />
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 12,
//     backgroundColor: "white",
//     flex: 1,
//   },
//   verticallySpaced: {
//     paddingTop: 4,
//     paddingBottom: 4,
//     alignSelf: "stretch",
//     borderRadius: 50,
//   },
//   mt20: {
//     marginTop: 20,
//   },
// });

import { View, Text } from 'react-native'
import React from 'react'

const profile = () => {
  return (
    <View>
      <Text>profile</Text>
    </View>
  )
}

export default profile