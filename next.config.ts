import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental:{
    serverActions:{
      allowedOrigins:[
        'localhost:3000',
        'https://abnormally-actual-cowbird.ngrok-free.app'
      ]
    }
  }
};

export default nextConfig;
