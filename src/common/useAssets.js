export default function useAssets(asset, resPath) {
  const assets = import.meta.glob("../assets/**", { eager: true });

  const getAssetUrl = () => {
    const path = resPath
      ? `/src/assets/${resPath}/${asset}`
      : `/src/assets/${asset}`;
    const modules = import.meta.glob("/src/assets/*", { eager: true });
    const mod = modules[path];

    return mod?.default;
  };

  return getAssetUrl();
}
