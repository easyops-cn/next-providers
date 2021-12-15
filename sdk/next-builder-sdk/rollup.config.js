import { rollupFactory } from "@next-core/rollup-config-factory";

export default rollupFactory({
  umdName: "NextBuilderSdk",
  copyFiles: [
    {
      src: "contract.json",
      dest: "dist",
    },
  ],
});
