import { rollupFactory } from "@next-core/rollup-config-factory";

export default rollupFactory({
  umdName: "MicroAppSdk",
  copyFiles: [
    {
      src: "contract.json",
      dest: "dist",
    },
  ],
});
