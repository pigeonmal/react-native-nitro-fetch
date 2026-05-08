import { fetch } from '@pigeonmal/react-native-nitro-fetch';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
export default function App() {
  useEffect(() => {
    fetch({
      url: '',
      method: 'GET',
      redirect: 'manual',
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Referer': 'https://frembed.one/movie/205596',
      },
      timeoutMs: 10000,
    }).then(async (res) => {
      console.log(res.status, res.headers);
    });
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello, World!</Text>
    </View>
  );
}
