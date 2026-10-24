# WorkSuite Shared Frontend Sample

Frontend-only demo: React + TypeScript + Vite for web, React Native + Expo for Android, and one shared TypeScript package.

## Requirements
Install Node.js 22 LTS and npm. For Android, use Expo Go or an Android Studio emulator.

## Install
From this folder:
```bash
npm install
```

## Run web
```bash
npm run dev:web
```

## Run Android
```bash
npm run dev:mobile
```
Scan the Expo QR code using Expo Go, or press `a` if an Android emulator is running.

## What's reusable?
`packages/shared` contains employee types/data, Zod leave-request validation, and leave-day calculation. Both apps import the same package. UI/navigation remain platform-specific.

## Demo limitations
This is frontend-only. Login is simulated, data is hard-coded, and leave submission is local only. Do not use this mock login as real security. Production authentication, authorization, tenant isolation, and validation must be enforced by the backend.
