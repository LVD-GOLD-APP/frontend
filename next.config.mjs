import { codeInspectorPlugin } from "code-inspector-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "example.com"],
  },
  webpack: (config) => {
    config.plugins.push(
      codeInspectorPlugin({
        bundler: "webpack",
      })
    );
    return config;
  },
};

export default nextConfig;
