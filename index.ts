import 'expo-router/entry';
import messaging from '@react-native-firebase/messaging';
import { tokenProvider } from './utils/tokenProvider';
import { supabase } from './app/lib/supabase';
import { StreamChat } from 'stream-chat';
import notifee from '@notifee/react-native';
import { setPushConfig } from './utils/setPushConfig';

setPushConfig();

messaging().setBackgroundMessageHandler(async (remoteMessage) => {
    console.log("Remote message: ", JSON.stringify(remoteMessage, null, 2))

    console.log(await tokenProvider());
    const { data : { session }} = await supabase.auth.getSession();
    if(!session?.user) {
        console.log("Error: no active auth session");
        return;
    }


    const client = StreamChat.getInstance(process.env.EXPO_PUBLIC_STREAM_API_KEY!);

  // You can also provide tokenProvider instead of static token
  // await client._setToken({ id: userId }, tokenProvider)
  client._setToken(
    {
      id: session.user.id,
    },
    'user_token',
  );

  
  // handle the message
  const message = await client.getMessage(remoteMessage.data.id);
  console.log(message);

  // create the android channel to send the notification to
  const channelId = await notifee.createChannel({
    id: 'chat-messages',
    name: 'Chat Messages',
  });

  // display the notification
  const { stream, ...rest } = remoteMessage.data ?? {};
  const data = {
    ...rest,
    ...((stream as unknown as Record<string, string> | undefined) ?? {}), // extract and merge stream object if present
  };
  await notifee.displayNotification({
    title: 'New message from ' + message.message.user.name,
    body: message.message.text,
    data,
    android: {
      channelId,
      // add a press action to open the app on press
      pressAction: {
        id: 'default',
      },
    },
  });

})