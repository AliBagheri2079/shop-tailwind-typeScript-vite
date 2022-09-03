import packageJson from "./package.json";

const getPackageName = () => {
  return packageJson.name;
};

export const config = {
  entries: [
    {
      filePath: "./src/index.ts",
      outFile: `./dist/${getPackageName()}.d.ts`,
      noCheck: false,
    },
  ],
};
