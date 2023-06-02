import { rollupFactory } from "@next-core/rollup-config-factory";

export default rollupFactory({
  umdName: "PermissionSdk",
  copyFiles: [
    {
      src: "contracts.json",
      dest: "dist",
    },
  ],
});
