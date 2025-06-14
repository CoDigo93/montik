export function setDataToStorage(key, value, variantIndex = 0) {
  const now = Date.now();
  const minutes = 15
  const item = {
    value,
    variantIndex,
    expiry: now + minutes * 1000 * 60,
  };
  sessionStorage.setItem(key, JSON.stringify(item));
}

export function getStoredData(key) {
  const itemStr = sessionStorage.getItem(key);
  if (!itemStr) return null;

  try {
    const item = JSON.parse(itemStr);
    if (Date.now() > item.expiry) {
      sessionStorage.removeItem(key);
      return null;
    }
    return {
      item: item.value,
      variantIndex: item.variantIndex
    };
  } catch (error) {
    sessionStorage.removeItem(key);
    console.error(error)
    return null;
  }
}