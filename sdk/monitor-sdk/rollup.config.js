import { rollupFactory } from "@next-core/rollup-config-factory";

export default rollupFactory({
  umdName: "MonitorSdk",
  copyFiles: [
    {
      src: "contracts.json",
      dest: "dist",
    },
  ],
});
