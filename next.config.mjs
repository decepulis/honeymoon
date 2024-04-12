import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextVideo(nextConfig, { folder: 'src/_videos' });