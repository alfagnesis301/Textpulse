export type KeywordDensityEntry = {
  phrase: string;
  count: number;
  density: number;
};

export type SentenceInsight = {
  text: string;
  wordCount: number;
  characterCount: number;
};

export type ReadabilityResult = {
  score: number;
  grade: string;
  level: string;
  description: string;
};

export type WritingHealth = {
  clarity: number;
  variety: number;
  keywordBalance: number;
  sentenceFlow: number;
  readability: number;
  warnings: string[];
};

export type TextAnalysis = {
  wordCount: number;
  characterCount: number;
  characterCountNoSpaces: number;
  sentenceCount: number;
  paragraphCount: number;
  lineCount: number;
  uniqueWords: number;
  averageWordLength: number;
  averageSentenceLength: number;
  longestSentence: SentenceInsight | null;
  shortestSentence: SentenceInsight | null;
  estimatedReadingTime: number;
  estimatedSpeakingTime: number;
  estimatedHandwritingTime: number;
  readingLevel: ReadabilityResult;
  keywordDensity: KeywordDensityEntry[];
  oneWordPhrases: KeywordDensityEntry[];
  twoWordPhrases: KeywordDensityEntry[];
  threeWordPhrases: KeywordDensityEntry[];
  repeatedWords: string[];
  overusedKeywords: KeywordDensityEntry[];
  longSentences: SentenceInsight[];
  writingHealth: WritingHealth;
};

const STOP_WORDS = new Set([
  "a",
  "an",
  "and",
  "are",
  "as",
  "at",
  "be",
  "but",
  "by",
  "can",
  "for",
  "from",
  "has",
  "have",
  "if",
  "in",
  "into",
  "is",
  "it",
  "its",
  "of",
  "on",
  "or",
  "our",
  "that",
  "the",
  "their",
  "this",
  "to",
  "was",
  "we",
  "will",
  "with",
  "you",
  "your"
]);

const WORD_REGEX = /[\p{L}\p{N}]+(?:['’.-][\p{L}\p{N}]+)*/gu;

function clamp(value: number, min = 0, max = 100) {
  return Math.min(max, Math.max(min, value));
}

function round(value: number, precision = 1) {
  const factor = 10 ** precision;
  return Math.round(value * factor) / factor;
}

function getWords(text: string) {
  return text.match(WORD_REGEX) ?? [];
}

function getNormalizedWords(text: string) {
  return getWords(text)
    .map((word) => word.toLocaleLowerCase())
    .filter(Boolean);
}

function getSentences(text: string) {
  const trimmed = text.trim();

  if (!trimmed) {
    return [];
  }

  const matches = trimmed.match(/[^.!?\n]+(?:[.!?]+|$)/g);

  if (!matches) {
    return [trimmed];
  }

  return matches.map((sentence) => sentence.trim()).filter(Boolean);
}

function getSentenceInsight(sentence: string): SentenceInsight {
  return {
    text: sentence,
    wordCount: countWords(sentence),
    characterCount: sentence.length
  };
}

function countSyllablesInWord(word: string) {
  const clean = word
    .toLocaleLowerCase()
    .replace(/[^a-z]/g, "")
    .replace(/e$/i, "");

  if (!clean) {
    return 1;
  }

  const groups = clean.match(/[aeiouy]+/g);
  return Math.max(1, groups?.length ?? 1);
}

function countSyllables(text: string) {
  return getWords(text).reduce((total, word) => total + countSyllablesInWord(word), 0);
}

function getSentenceWordLengths(text: string) {
  return getSentences(text).map((sentence) => countWords(sentence));
}

export function countWords(text: string) {
  return getWords(text).length;
}

export function countCharacters(text: string) {
  return Array.from(text).length;
}

export function countCharactersNoSpaces(text: string) {
  return Array.from(text.replace(/\s/g, "")).length;
}

export function countSentences(text: string) {
  return getSentences(text).length;
}

export function countParagraphs(text: string) {
  const trimmed = text.trim();
  return trimmed ? trimmed.split(/\n\s*\n/).filter((paragraph) => paragraph.trim()).length : 0;
}

export function countLines(text: string) {
  return text.length ? text.replace(/\r\n/g, "\n").split("\n").length : 0;
}

export function getUniqueWords(text: string) {
  return new Set(getNormalizedWords(text)).size;
}

export function getAverageWordLength(text: string) {
  const words = getWords(text);

  if (words.length === 0) {
    return 0;
  }

  const totalCharacters = words.reduce((total, word) => total + Array.from(word).length, 0);
  return round(totalCharacters / words.length);
}

export function getAverageSentenceLength(text: string) {
  const sentenceLengths = getSentenceWordLengths(text).filter((length) => length > 0);

  if (sentenceLengths.length === 0) {
    return 0;
  }

  const totalWords = sentenceLengths.reduce((total, length) => total + length, 0);
  return round(totalWords / sentenceLengths.length);
}

export function getKeywordDensity(text: string, ngramSize: number) {
  const normalizedWords = getNormalizedWords(text);

  if (ngramSize < 1 || normalizedWords.length < ngramSize) {
    return [];
  }

  const phrases = new Map<string, number>();
  const totalNgrams = normalizedWords.length - ngramSize + 1;

  for (let index = 0; index <= normalizedWords.length - ngramSize; index += 1) {
    const ngram = normalizedWords.slice(index, index + ngramSize);

    if (ngramSize === 1 && STOP_WORDS.has(ngram[0])) {
      continue;
    }

    if (ngramSize > 1 && ngram.every((word) => STOP_WORDS.has(word))) {
      continue;
    }

    const phrase = ngram.join(" ");
    phrases.set(phrase, (phrases.get(phrase) ?? 0) + 1);
  }

  return Array.from(phrases.entries())
    .map(([phrase, count]) => ({
      phrase,
      count,
      density: round((count / Math.max(1, totalNgrams)) * 100, 2)
    }))
    .sort((a, b) => b.count - a.count || b.density - a.density || a.phrase.localeCompare(b.phrase))
    .slice(0, 10);
}

export function estimateReadingTime(text: string, wpm = 225) {
  return round(countWords(text) / Math.max(1, wpm), 2);
}

export function estimateSpeakingTime(text: string, wpm = 150) {
  return round(countWords(text) / Math.max(1, wpm), 2);
}

export function estimateHandwritingTime(text: string, wpm = 25) {
  return round(countWords(text) / Math.max(1, wpm), 2);
}

export function getLongestSentence(text: string) {
  const sentences = getSentences(text).map(getSentenceInsight).filter((sentence) => sentence.wordCount > 0);

  if (sentences.length === 0) {
    return null;
  }

  return sentences.reduce((longest, sentence) =>
    sentence.wordCount > longest.wordCount ? sentence : longest
  );
}

export function getShortestSentence(text: string) {
  const sentences = getSentences(text).map(getSentenceInsight).filter((sentence) => sentence.wordCount > 0);

  if (sentences.length === 0) {
    return null;
  }

  return sentences.reduce((shortest, sentence) =>
    sentence.wordCount < shortest.wordCount ? sentence : shortest
  );
}

export function calculateReadabilityApprox(text: string): ReadabilityResult {
  const words = countWords(text);
  const sentences = Math.max(1, countSentences(text));
  const syllables = Math.max(1, countSyllables(text));

  if (words === 0) {
    return {
      score: 0,
      grade: "N/A",
      level: "No text yet",
      description: "Add text to estimate readability."
    };
  }

  const readingEase = clamp(206.835 - 1.015 * (words / sentences) - 84.6 * (syllables / words));
  const gradeLevel = Math.max(1, 0.39 * (words / sentences) + 11.8 * (syllables / words) - 15.59);
  let level = "Plain language";
  let description = "Easy to scan for most readers.";

  if (readingEase < 35) {
    level = "Advanced";
    description = "Likely suited to expert, academic, or technical readers.";
  } else if (readingEase < 55) {
    level = "Moderate";
    description = "Readable, but some sentences may need simplifying.";
  } else if (readingEase < 75) {
    level = "Clear";
    description = "Comfortable for broad web and business audiences.";
  }

  return {
    score: Math.round(readingEase),
    grade: `Grade ${round(gradeLevel, 1)}`,
    level,
    description
  };
}

export function getRepeatedWords(text: string) {
  const words = getNormalizedWords(text);
  const repeated = new Set<string>();

  for (let index = 1; index < words.length; index += 1) {
    if (words[index] === words[index - 1] && !STOP_WORDS.has(words[index])) {
      repeated.add(words[index]);
    }
  }

  return Array.from(repeated);
}

export function getLongSentences(text: string) {
  return getSentences(text)
    .map(getSentenceInsight)
    .filter((sentence) => sentence.wordCount >= 28)
    .sort((a, b) => b.wordCount - a.wordCount)
    .slice(0, 5);
}

export function calculateWritingHealth(text: string): WritingHealth {
  const words = countWords(text);
  const sentences = Math.max(1, countSentences(text));
  const uniqueWords = getUniqueWords(text);
  const averageSentenceLength = getAverageSentenceLength(text);
  const sentenceLengths = getSentenceWordLengths(text).filter((length) => length > 0);
  const longSentences = sentenceLengths.filter((length) => length >= 28);
  const topKeyword = getKeywordDensity(text, 1)[0];
  const repeatedWords = getRepeatedWords(text);
  const readability = calculateReadabilityApprox(text);
  const warnings: string[] = [];

  if (words === 0) {
    return {
      clarity: 0,
      variety: 0,
      keywordBalance: 0,
      sentenceFlow: 0,
      readability: 0,
      warnings: ["Add text to generate writing health scores."]
    };
  }

  const longSentenceRatio = longSentences.length / Math.max(1, sentenceLengths.length);
  const lexicalDiversity = uniqueWords / Math.max(1, words);
  const shortSentences = sentenceLengths.filter((length) => length > 0 && length <= 12).length;
  const mediumSentences = sentenceLengths.filter((length) => length > 12 && length <= 24).length;
  const flowBalance = (shortSentences * 0.9 + mediumSentences) / Math.max(1, sentenceLengths.length);
  const topDensity = topKeyword?.density ?? 0;

  const clarity = clamp(
    96 -
      longSentenceRatio * 42 -
      Math.max(0, averageSentenceLength - 20) * 2.4 -
      repeatedWords.length * 4
  );
  const variety = clamp(45 + lexicalDiversity * 90 - Math.max(0, 0.35 - lexicalDiversity) * 90);
  const keywordBalance = clamp(100 - Math.max(0, topDensity - 4.5) * 12);
  const sentenceFlow = clamp(45 + flowBalance * 55 - longSentenceRatio * 30);

  if (longSentences.length > 0) {
    warnings.push("Long sentence warning: at least one sentence is 28 words or longer.");
  }

  if (repeatedWords.length > 0) {
    warnings.push(`Repeated words warning: check repeated terms such as ${repeatedWords.slice(0, 3).join(", ")}.`);
  }

  if (topKeyword && topKeyword.density >= 6) {
    warnings.push(`Overused keyword warning: "${topKeyword.phrase}" appears unusually often.`);
  }

  return {
    clarity: Math.round(clarity),
    variety: Math.round(variety),
    keywordBalance: Math.round(keywordBalance),
    sentenceFlow: Math.round(sentenceFlow),
    readability: readability.score,
    warnings
  };
}

export function analyzeText(text: string): TextAnalysis {
  const keywordDensity = getKeywordDensity(text, 1);
  const longSentences = getLongSentences(text);

  return {
    wordCount: countWords(text),
    characterCount: countCharacters(text),
    characterCountNoSpaces: countCharactersNoSpaces(text),
    sentenceCount: countSentences(text),
    paragraphCount: countParagraphs(text),
    lineCount: countLines(text),
    uniqueWords: getUniqueWords(text),
    averageWordLength: getAverageWordLength(text),
    averageSentenceLength: getAverageSentenceLength(text),
    longestSentence: getLongestSentence(text),
    shortestSentence: getShortestSentence(text),
    estimatedReadingTime: estimateReadingTime(text),
    estimatedSpeakingTime: estimateSpeakingTime(text),
    estimatedHandwritingTime: estimateHandwritingTime(text),
    readingLevel: calculateReadabilityApprox(text),
    keywordDensity,
    oneWordPhrases: keywordDensity,
    twoWordPhrases: getKeywordDensity(text, 2),
    threeWordPhrases: getKeywordDensity(text, 3),
    repeatedWords: getRepeatedWords(text),
    overusedKeywords: keywordDensity.filter((entry) => entry.density >= 6),
    longSentences,
    writingHealth: calculateWritingHealth(text)
  };
}
