import { rollupFactory } from "@next-core/rollup-config-factory";

export default rollupFactory({
  umdName: "LlmSdk",
  copyFiles: [
    {
      src: "contracts.json",
      dest: "dist",
    },
  ],
});
