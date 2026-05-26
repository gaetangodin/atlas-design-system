import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const nm = (pkg) => path.resolve(here, "node_modules", pkg);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // The playground imports @atlas/design-system straight from the library's
  // TypeScript source (../src), which lives outside this Next project root.
  // `externalDir` lets Next compile those files so library edits hot-reload.
  experimental: {
    externalDir: true,
  },
  webpack: (config) => {
    // The library's source files (compiled in via `externalDir`) import
    // its *optional* peer deps (vaul, sonner, recharts, embla). npm
    // doesn't install optional peers at the library root, so pin them
    // to the playground's own copies. The library's non-optional deps
    // (@heroui/react, clsx, tailwind-merge, etc.) come from a regular
    // `npm install` at the parent root — see netlify.toml's command.
    config.resolve.alias = {
      ...config.resolve.alias,
      vaul: nm("vaul"),
      sonner: nm("sonner"),
      recharts: nm("recharts"),
      "embla-carousel-react": nm("embla-carousel-react"),
      "react-resizable-panels": nm("react-resizable-panels"),
    };
    return config;
  },
};

export default nextConfig;
