// eslint-disable-next-line @typescript-eslint/no-var-requires
const mod = require("module");

export const resolves = (plugins: Array<[string, string]>): void => {
  const keeps: string[] = [];
  const sorted: string[] = [];
  const cwd = process.cwd().replace(/\\/g, "/");
  const originalPaths = require.resolve.paths("eslint-plugin-import") || [];

  for (let index = 0; index < originalPaths.length; index++) {
    const current = originalPaths[index];
    if (current.replace(/\\/g, "/").startsWith(cwd)) {
      sorted.push(current);
    } else {
      keeps.unshift(current);
    }
  }

  sorted.push(...keeps);

  const properties = new Map(
    plugins.map(([request, replacement]) => [request, require.resolve(replacement, { paths: sorted })]),
  );

  const resolveFilename = mod._resolveFilename;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mod._resolveFilename = (request: string, parent: any, isMain: any, options: any) => {
    const toResolve = properties.get(request);
    if (toResolve) {
      request = toResolve;
    }
    return resolveFilename.call(mod, request, parent, isMain, options);
  };
};
