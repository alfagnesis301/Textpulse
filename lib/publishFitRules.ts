import type { TextAnalysis } from "@/lib/textAnalysis";

export type PublishFitPresetId =
  | "blog"
  | "seo-title"
  | "meta-description"
  | "youtube-title"
  | "youtube-description"
  | "linkedin-post"
  | "twitter-post"
  | "instagram-caption"
  | "email-subject"
  | "academic-essay"
  | "speech-script";

export type PublishFitPreset = {
  id: PublishFitPresetId;
  label: string;
  unit: "characters" | "words" | "minutes";
  idealMin: number;
  idealMax: number;
  warningMin?: number;
  warningMax?: number;
  recommendedLimit: string;
  description: string;
};

export type PublishFitIndicator = {
  label: string;
  score: number;
  status: "Strong" | "Good" | "Needs work";
};

export type PublishFitResult = {
  preset: PublishFitPreset;
  score: number;
  state: "Too short" | "Good range" | "Too long" | "Needs improvement";
  measuredValue: number;
  measuredLabel: string;
  recommendations: string[];
  indicators: {
    clarity: PublishFitIndicator;
    keywordDensity: PublishFitIndicator;
    readability: PublishFitIndicator;
    publicationReadiness: PublishFitIndicator;
  };
};

export const publishFitPresets: PublishFitPreset[] = [
  {
    id: "blog",
    label: "Blog Article",
    unit: "words",
    idealMin: 600,
    idealMax: 2200,
    warningMin: 350,
    warningMax: 3000,
    recommendedLimit: "600+ words for useful depth; keep sections scannable.",
    description: "Checks depth, paragraph shape, readability, and keyword balance."
  },
  {
    id: "seo-title",
    label: "SEO Title",
    unit: "characters",
    idealMin: 40,
    idealMax: 60,
    warningMin: 30,
    warningMax: 65,
    recommendedLimit: "Ideal: 40-60 characters. Warning above 65.",
    description: "Best for page titles that need clarity before truncation."
  },
  {
    id: "meta-description",
    label: "Meta Description",
    unit: "characters",
    idealMin: 120,
    idealMax: 160,
    warningMin: 90,
    warningMax: 170,
    recommendedLimit: "Ideal: 120-160 characters. Warning below 90 or above 170.",
    description: "Helps shape concise snippets for search results."
  },
  {
    id: "youtube-title",
    label: "YouTube Title",
    unit: "characters",
    idealMin: 45,
    idealMax: 70,
    warningMin: 25,
    warningMax: 100,
    recommendedLimit: "Ideal: 45-70 characters. Warning above 100.",
    description: "Checks whether the title is clear, compact, and clickable."
  },
  {
    id: "youtube-description",
    label: "YouTube Description",
    unit: "characters",
    idealMin: 150,
    idealMax: 5000,
    warningMin: 80,
    warningMax: 5000,
    recommendedLimit: "Ideal: 150-5000 characters; make the first 150 characters strong.",
    description: "Reviews summary strength, length, and scannability."
  },
  {
    id: "linkedin-post",
    label: "LinkedIn Post",
    unit: "characters",
    idealMin: 150,
    idealMax: 1300,
    warningMin: 80,
    warningMax: 3000,
    recommendedLimit: "Ideal: 150-1300 characters with short, direct sentences.",
    description: "Evaluates clarity for professional social publishing."
  },
  {
    id: "twitter-post",
    label: "X/Twitter Post",
    unit: "characters",
    idealMin: 70,
    idealMax: 240,
    warningMax: 280,
    recommendedLimit: "Maximum: 280 characters. Ideal: 70-240.",
    description: "Keeps short posts within a strong readable range."
  },
  {
    id: "instagram-caption",
    label: "Instagram Caption",
    unit: "characters",
    idealMin: 80,
    idealMax: 2200,
    warningMin: 20,
    warningMax: 2200,
    recommendedLimit: "Ideal: 80-2200 characters; avoid extreme length unless intentional.",
    description: "Balances caption context, readability, and keyword repetition."
  },
  {
    id: "email-subject",
    label: "Email Subject",
    unit: "characters",
    idealMin: 30,
    idealMax: 60,
    warningMin: 15,
    warningMax: 70,
    recommendedLimit: "Ideal: 30-60 characters for compact inbox scanning.",
    description: "Checks whether the subject line is short enough to read quickly."
  },
  {
    id: "academic-essay",
    label: "Academic Essay",
    unit: "words",
    idealMin: 800,
    idealMax: 2500,
    warningMin: 500,
    warningMax: 5000,
    recommendedLimit: "Evaluate word count, paragraphs, sentence length, and lexical variety.",
    description: "Looks for enough depth, paragraphing, readable sentences, and variety."
  },
  {
    id: "speech-script",
    label: "Speech Script",
    unit: "minutes",
    idealMin: 3,
    idealMax: 7,
    warningMin: 1,
    warningMax: 12,
    recommendedLimit: "Short speech: 1-3 min. Standard: 3-7 min. Long: 7+ min.",
    description: "Uses speaking time to check whether the script fits a real delivery window."
  }
];

function clamp(value: number, min = 0, max = 100) {
  return Math.min(max, Math.max(min, value));
}

function indicator(label: string, score: number): PublishFitIndicator {
  const rounded = Math.round(clamp(score));

  return {
    label,
    score: rounded,
    status: rounded >= 82 ? "Strong" : rounded >= 64 ? "Good" : "Needs work"
  };
}

function lengthScore(value: number, preset: PublishFitPreset) {
  if (value >= preset.idealMin && value <= preset.idealMax) {
    return 100;
  }

  const lowerEdge = preset.warningMin ?? Math.max(0, preset.idealMin * 0.65);
  const upperEdge = preset.warningMax ?? preset.idealMax * 1.25;

  if (value < preset.idealMin) {
    if (value <= lowerEdge) {
      return clamp((value / Math.max(1, preset.idealMin)) * 72);
    }

    return clamp(72 + ((value - lowerEdge) / Math.max(1, preset.idealMin - lowerEdge)) * 28);
  }

  if (value > upperEdge) {
    return clamp(70 - ((value - upperEdge) / Math.max(1, preset.idealMax)) * 70);
  }

  return clamp(100 - ((value - preset.idealMax) / Math.max(1, upperEdge - preset.idealMax)) * 30);
}

function getMeasuredValue(analysis: TextAnalysis, preset: PublishFitPreset) {
  if (preset.unit === "words") {
    return analysis.wordCount;
  }

  if (preset.unit === "minutes") {
    return analysis.estimatedSpeakingTime;
  }

  return analysis.characterCount;
}

function stateFor(value: number, score: number, preset: PublishFitPreset): PublishFitResult["state"] {
  if (value < preset.idealMin) {
    return "Too short";
  }

  if (value > preset.idealMax) {
    return "Too long";
  }

  if (score < 70) {
    return "Needs improvement";
  }

  return "Good range";
}

function baseRecommendations(analysis: TextAnalysis, preset: PublishFitPreset, value: number) {
  const recs: string[] = [];

  if (value < preset.idealMin) {
    recs.push(`Add more useful detail to reach the recommended ${preset.label.toLowerCase()} range.`);
  } else if (value > preset.idealMax) {
    recs.push(`Tighten the text so it fits the recommended ${preset.label.toLowerCase()} range.`);
  } else {
    recs.push("Length is in the recommended range for this channel.");
  }

  if (analysis.longSentences.length > 0) {
    recs.push("Split the longest sentence to improve clarity and scanning.");
  }

  if (analysis.overusedKeywords.length > 0) {
    recs.push(`Reduce repetition around "${analysis.overusedKeywords[0].phrase}" for a more natural keyword balance.`);
  }

  if (analysis.readingLevel.score > 0 && analysis.readingLevel.score < 55) {
    recs.push("Simplify dense wording or sentence structure to improve readability.");
  }

  if (analysis.wordCount > 0 && analysis.uniqueWords / analysis.wordCount < 0.38) {
    recs.push("Add more varied wording to reduce repetition and improve lexical variety.");
  }

  return recs;
}

function presetRecommendations(analysis: TextAnalysis, preset: PublishFitPreset, value: number) {
  const recs = baseRecommendations(analysis, preset, value);

  switch (preset.id) {
    case "meta-description":
      recs.push("Lead with the page benefit and keep the promise specific enough for searchers.");
      break;
    case "youtube-title":
      recs.push("Put the clearest hook early and remove filler words that delay the topic.");
      break;
    case "youtube-description":
      recs.push("Make the first 150 characters useful because they are often the most visible.");
      break;
    case "academic-essay":
      if (analysis.paragraphCount < 3) {
        recs.push("Use multiple paragraphs so the argument has visible structure.");
      }
      recs.push("Check that each paragraph advances one clear idea with evidence or explanation.");
      break;
    case "speech-script":
      recs.push("Read it aloud once; spoken pacing often reveals sentences that look fine on screen.");
      if (analysis.estimatedSpeakingTime < 1) {
        recs.push("For a short speech, add a stronger opening, one example, and a clean closing line.");
      }
      break;
    case "blog":
      if (analysis.paragraphCount < 4) {
        recs.push("Break the article into shorter paragraphs or sections for web reading.");
      }
      recs.push("Use the top keyword naturally in headings or early context only when it helps the reader.");
      break;
    case "linkedin-post":
      recs.push("Use short paragraphs and make the professional takeaway visible before the ending.");
      break;
    case "twitter-post":
      recs.push("Leave room for a link, mention, or edit if the post is close to 280 characters.");
      break;
    case "instagram-caption":
      recs.push("Open with a strong first line before adding context, tags, or calls to action.");
      break;
    case "email-subject":
      recs.push("Remove vague openers and keep the strongest noun or benefit near the front.");
      break;
    case "seo-title":
      recs.push("Keep the primary topic early and avoid repeating the same term unnaturally.");
      break;
    default:
      break;
  }

  return Array.from(new Set(recs)).slice(0, 5);
}

export function evaluatePublishFit(
  text: string,
  analysis: TextAnalysis,
  presetId: PublishFitPresetId
): PublishFitResult {
  const preset = publishFitPresets.find((item) => item.id === presetId) ?? publishFitPresets[0];
  const measuredValue = getMeasuredValue(analysis, preset);
  const length = lengthScore(measuredValue, preset);
  const clarity = analysis.writingHealth.clarity;
  const keywordBalance = analysis.writingHealth.keywordBalance;
  const readability = analysis.writingHealth.readability;
  const variety = analysis.writingHealth.variety;
  const hasText = text.trim().length > 0;

  const rawScore = hasText
    ? length * 0.42 + clarity * 0.2 + keywordBalance * 0.14 + readability * 0.12 + variety * 0.12
    : 0;
  const score = Math.round(clamp(rawScore));
  const publicationReadiness = Math.round(clamp(score * 0.7 + length * 0.3));

  return {
    preset,
    score,
    state: hasText ? stateFor(measuredValue, score, preset) : "Needs improvement",
    measuredValue,
    measuredLabel:
      preset.unit === "minutes"
        ? `${measuredValue.toFixed(2)} min speaking time`
        : `${Math.round(measuredValue)} ${preset.unit}`,
    recommendations: hasText
      ? presetRecommendations(analysis, preset, measuredValue)
      : ["Paste or write text to generate channel-specific recommendations."],
    indicators: {
      clarity: indicator("Clarity", clarity),
      keywordDensity: indicator("Keyword density", keywordBalance),
      readability: indicator("Readability", readability),
      publicationReadiness: indicator("Publication readiness", publicationReadiness)
    }
  };
}
