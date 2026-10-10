# Mobile application

Expo/React Native and TypeScript mobile client for employee self-service, candidate applications, and manager approvals. The current screens are scaffold placeholders; sign-in, API integration, and permission enforcement are still to be built.

## Local setup

Use Node 24 LTS (`.nvmrc`).

```sh
npm install
cp .env.example .env
npm start
```

Then open Expo Go or an emulator. Use `npm run android`, `npm run ios`, or `npm run web` as needed. Run `npm run typecheck` before merging changes.

`EXPO_PUBLIC_API_BASE_URL` is bundled into the app and must never contain a secret. For a physical device, set it to your computer's LAN address rather than `127.0.0.1`. The backend must listen on that interface and allow the device to reach it.
