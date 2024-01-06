import path from "path";

export const aliases = () => {
  return {
    "@src": path.resolve(__dirname, "../../../src"),
    "@components": path.resolve(__dirname, "../../../src/components"),
    "@constants": path.resolve(__dirname, "../../../src/constants"),
    "@containers": path.resolve(__dirname, "../../../src/containers"),
    "@hoc-helpers": path.resolve(__dirname, "../../../src/hoc-helpers"),
    "@images": path.resolve(__dirname, "../../../src/images"),
    "@routes": path.resolve(__dirname, "../../../src/routes"),
    "@services": path.resolve(__dirname, "../../../src/services"),
    "@utils": path.resolve(__dirname, "../../../src/utils"),
    "@hooks": path.resolve(__dirname, "../../../src/hooks"),
    "@UI": path.resolve(__dirname, "../../../src/components/UI"),
  };
};
