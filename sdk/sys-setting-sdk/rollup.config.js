import { rollupFactory } from "@next-core/rollup-config-factory";

export default rollupFactory({
  umdName: "SysSettingSdk",
  copyFiles: [
    {
      src: "contracts.json",
      dest: "dist",
    },
  ],
});
