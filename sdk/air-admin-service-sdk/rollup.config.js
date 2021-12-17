import { rollupFactory } from "@next-core/rollup-config-factory";

export default rollupFactory({
  umdName: "AirAdminServiceSdk",
  copyFiles: [
    {
      src: "contracts.json",
      dest: "dist",
    },
  ],
});
