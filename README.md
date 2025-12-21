Recommended to use it with @pigeonmal/react-native-video
Install: npm install @pigeonmal/react-native-nitro-fetch
Changes:
- use playstore cronet (so it doesn't add 10mb to your app size)
- the cache is set to HTTP_CACHE_DISK_NO_HTTP (so no cache http body)
- add timeout to fetch