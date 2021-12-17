import { rollupFactory } from "@next-core/rollup-config-factory";

export default rollupFactory({
  umdName: "MicroAppSdk",
  copyFiles: [
    {
      src: "contracts.json",
      dest: "dist",
    },
  ],
});
