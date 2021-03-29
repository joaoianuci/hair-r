module.exports = {
  presets: [
    "next/babel",
    "@babel/preset-react",
    ["@babel/preset-env", {targets: { esmodules: true }}]
  ],
  plugins: [["styled-components", { ssr: true }], "@babel/plugin-transform-runtime", "inline-react-svg", "emotion"]
}
