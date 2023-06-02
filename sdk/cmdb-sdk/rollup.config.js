import { rollupFactory } from "@next-core/rollup-config-factory";

export default rollupFactory({
  umdName: "CmdbSdk",
  copyFiles: [
    {
      src: "contracts.json",
      dest: "dist",
    },
  ],
});
