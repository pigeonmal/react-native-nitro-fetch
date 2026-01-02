Recommended to use it with @pigeonmal/react-native-video
Install: npm install @pigeonmal/react-native-nitro-fetch

Add this to your settings.gradle:
def cronetReleasePath = new File(["node", "--print", "require.resolve('@pigeonmal/react-native-nitro-fetch/package.json')"].execute(null, rootDir).text.trim(), "../android/cronet-release")
include ':cronet-release'
project(':cronet-release').projectDir = file(cronetReleasePath)


Changes:
- include cronet v143.0.7499.146 build from source with cloudflare DOH enabled
- the cache is set to HTTP_CACHE_DISK_NO_HTTP (so no cache http body)
- add timeout to fetch