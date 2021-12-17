import { rollupFactory } from "@next-core/rollup-config-factory";

export default rollupFactory({
  umdName: "ObjectStoreSdk",
  copyFiles: [
    {
      src: "contracts.json",
      dest: "dist",
    },
  ],
});
