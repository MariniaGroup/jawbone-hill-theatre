# Jawbone Hill Theatre – Amplify Site Package

This package contains the current React + Vite site for Jawbone Hill Theatre.

## Included
- Updated site code
- Header logo
- Hero video: `JHT_logo_sparkles.mp4`
- Alternate hero videos copied into `public/jawbone/`

## Important note about gallery images
The code references additional gallery photos in `public/jawbone/` using filenames such as:
- `IMG_1709.jpg`
- `IMG_1710.jpg`
- `IMG_20231215_190803759_MP.jpg`
- `IMG-5833.jpg` through `IMG-5845.jpg`

Those gallery images were added on your local machine and were not available inside this chat environment, so they are **referenced in the code but not bundled into this zip**.

Before deployment, copy your local gallery photos into:

`public/jawbone/`

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy with AWS Amplify
- Build command: `npm run build`
- Output directory: `dist`
