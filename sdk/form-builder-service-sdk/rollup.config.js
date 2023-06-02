import { rollupFactory } from "@next-core/rollup-config-factory";

export default rollupFactory({
  umdName: "FormBuilderServiceSdk",
  copyFiles: [
    {
      src: "contracts.json",
      dest: "dist",
    },
  ],
});
