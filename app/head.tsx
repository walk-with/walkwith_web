import Script from "next/script";

export default function Head() {
  return (
    <>
      <title>WalkWith | 워크위드</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <Script
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NEVER_MAP_CLIENT_KEY}`}
      />
    </>
  );
}
