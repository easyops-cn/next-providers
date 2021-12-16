import { rollupFactory } from "@next-core/rollup-config-factory";

export default rollupFactory({
  umdName: "ApiGatewaySdk",
  copyFiles: [
    {
      src: "contracts.json",
      dest: "dist",
    },
  ],
});
