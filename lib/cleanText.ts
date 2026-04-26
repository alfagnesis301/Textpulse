export type CaseTransform = "none" | "sentence" | "lower" | "upper" | "title";

export type CleanTextOptions = {
  removeExtraSpaces: boolean;
  removeDuplicateLineBreaks: boolean;
  trimLines: boolean;
  fixSmartQuotes: boolean;
  removeEmptyLines: boolean;
  caseTransform: CaseTransform;
};

export const defaultCleanTextOptions: CleanTextOptions = {
  removeExtraSpaces: true,
  removeDuplicateLineBreaks: true,
  trimLines: true,
  fixSmartQuotes: false,
  removeEmptyLines: false,
  caseTransform: "none"
};

function toSentenceCase(text: string) {
  const lower = text.toLocaleLowerCase();
  return lower.replace(/(^\s*[a-z])|([.!?]\s+[a-z])/g, (match) => match.toLocaleUpperCase());
}

function toTitleCase(text: string) {
  const smallWords = new Set(["a", "an", "and", "as", "at", "but", "by", "for", "in", "of", "on", "or", "the", "to", "vs", "with"]);

  return text.toLocaleLowerCase().replace(/\p{L}[\p{L}\p{N}'’-]*/gu, (word, offset) => {
    if (offset > 0 && smallWords.has(word)) {
      return word;
    }

    return word.charAt(0).toLocaleUpperCase() + word.slice(1);
  });
}

export function cleanText(text: string, options: CleanTextOptions) {
  let nextText = text.replace(/\r\n/g, "\n");

  if (options.fixSmartQuotes) {
    nextText = nextText
      .replace(/[“”]/g, '"')
      .replace(/[‘’]/g, "'")
      .replace(/[–—]/g, "-");
  }

  if (options.trimLines) {
    nextText = nextText
      .split("\n")
      .map((line) => line.trim())
      .join("\n");
  }

  if (options.removeExtraSpaces) {
    nextText = nextText
      .split("\n")
      .map((line) => line.replace(/[ \t]{2,}/g, " "))
      .join("\n");
  }

  if (options.removeEmptyLines) {
    nextText = nextText
      .split("\n")
      .filter((line) => line.trim().length > 0)
      .join("\n");
  }

  if (options.removeDuplicateLineBreaks) {
    nextText = nextText.replace(/\n{3,}/g, "\n\n");
  }

  switch (options.caseTransform) {
    case "sentence":
      nextText = toSentenceCase(nextText);
      break;
    case "lower":
      nextText = nextText.toLocaleLowerCase();
      break;
    case "upper":
      nextText = nextText.toLocaleUpperCase();
      break;
    case "title":
      nextText = toTitleCase(nextText);
      break;
    case "none":
    default:
      break;
  }

  return nextText.trim();
}
