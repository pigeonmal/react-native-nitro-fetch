Recommended to use it with @pigeonmal/react-native-video
Install: npm install @pigeonmal/react-native-nitro-fetch
Add this to your settings.gradle:
include ':cronet-release'
project(':cronet-release').projectDir = file('../node_modules/@pigeonmal/react-native-nitro-fetch/android/cronet-release')
Changes:
- include cronet build from source with cloudflare DOH by default
- the cache is set to HTTP_CACHE_DISK_NO_HTTP (so no cache http body)
- add timeout to fetch