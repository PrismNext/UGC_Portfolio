/**
 * Helper to ensure safe video URLs even if filenames contain spaces or ampersands
 */
export const getCleanVideoUrl = (url) => {
  if (!url) return '';
  if (url.includes('Dot & Key') || url.includes('dot_and_key')) {
    return '/media/dot_and_key_sunscreen.mp4';
  }
  return encodeURI(url);
};
