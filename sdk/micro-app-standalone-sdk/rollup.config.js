import { rollupFactory } from "@next-core/rollup-config-factory";

export default rollupFactory({
  umdName: "MicroAppStandaloneSdk",
  copyFiles: [
    {
      src: "contracts.json",
      dest: "dist",
    },
  ],
});
