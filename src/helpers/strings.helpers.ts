export function maxLengthString(length = 8, text: string): string {
  if (!text) return "";

  if (text.length > length) {
    return `${text.substring(0, length)}...`;
  }

  return text;
}
