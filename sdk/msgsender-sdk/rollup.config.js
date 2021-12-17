import { rollupFactory } from "@next-core/rollup-config-factory";

export default rollupFactory({
  umdName: "MsgsenderSdk",
  copyFiles: [
    {
      src: "contracts.json",
      dest: "dist",
    },
  ],
});
