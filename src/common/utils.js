class Utils {
  static getImg(resourceName, path) {
    const imageUrl = new URL(
      path ? `../assets/${path}/${resourceName}` : `../assets/${resourceName}`,
      import.meta.url
    );
    return imageUrl;
  }

  static openInNew(url, event) {
    if (url) window.open(url, "_blank");
    event.stopPropagation();
  }
}
export default Utils;
