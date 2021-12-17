import { rollupFactory } from "@next-core/rollup-config-factory";

export default rollupFactory({
  umdName: "UserServiceSdk",
  copyFiles: [
    {
      src: "contracts.json",
      dest: "dist",
    },
  ],
});
