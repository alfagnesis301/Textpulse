import type { PublishFitPresetId } from "@/lib/publishFitRules";

export type ToolPage = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  preset: PublishFitPresetId;
  intro: string;
  decide: string[];
  examples: string[];
  mistakes: string[];
  checklist: string[];
  faq: { question: string; answer: string }[];
  relatedGuides: { href: string; label: string }[];
};

const commonFaq = (name: string) => [
  {
    question: `Does the ${name} send my text to a server?`,
    answer: "No. The checker runs in your browser and does not send draft text to TextPulses or an external AI service."
  },
  {
    question: "Are the results guarantees?",
    answer: "No. They are practical editorial signals, not SEO, academic, platform, or professional guarantees."
  },
  {
    question: "What should I fix first?",
    answer: "Start with the main issue in the Publish Readiness Report, then review length, repetition, flow, and scanability."
  },
  {
    question: "Can I download the report?",
    answer: "Yes. You can copy the report or download it as a .txt file from the browser."
  }
];

export const toolPages: ToolPage[] = [
  {
    slug: "word-counter",
    title: "Word Counter",
    metaTitle: "Word Counter and Publish Readiness Checker",
    description: "Count words, characters, sentences, reading time, speaking time, keyword repetition, and publish readiness locally in your browser.",
    preset: "blog",
    intro: "The TextPulses Word Counter is for writers who need more than a raw number. It counts words, characters, sentences, paragraphs, reading time, speaking time, repeated phrases, and practical publish readiness signals in one browser-based workspace. Use it when a draft needs to fit a brief, article outline, email, post, script, or page requirement without sending private text to a server. The report helps you decide whether the draft is too thin, too long, hard to scan, or repeating terms in a way that may feel forced. It is built for editorial judgement rather than automatic promises: the signals point to likely issues, but a human editor should make the final call.",
    decide: ["Whether the draft has enough useful substance for its purpose.", "Whether the text is easy to scan before publication.", "Whether repeated terms or long sentences need another edit."],
    examples: ["A 950-word article draft before client handoff.", "A 180-word product update for a changelog.", "A 750-word newsletter introduction.", "A 2-minute speech draft.", "A short caption that may be too thin for a page."],
    mistakes: ["Judging value from word count alone.", "Counting copied navigation or footer text.", "Ignoring long paragraphs when the count looks acceptable.", "Treating reading time as exact for every audience."],
    checklist: ["Remove copied interface text.", "Check the main issue in the report.", "Split long sentences.", "Review repeated terms.", "Confirm the final count in the destination platform if strict."],
    faq: commonFaq("Word Counter"),
    relatedGuides: [{ href: "/guides/how-to-count-words-accurately", label: "How to Count Words Accurately" }, { href: "/guides/blog-post-word-count-guide", label: "Blog Post Word Count Guide" }]
  },
  {
    slug: "seo-title-checker",
    title: "SEO Title Checker",
    metaTitle: "SEO Title Checker",
    description: "Check SEO title length, clarity, repetition, and truncation risk with practical browser-side signals.",
    preset: "seo-title",
    intro: "The SEO Title Checker helps you review a page title before it becomes the promise shown in search results, browser tabs, and shared links. It checks length, clarity, repetition, and whether the important topic appears early enough to be understood quickly. The goal is not to chase a magic number or guarantee ranking. It is to make the title specific, readable, and aligned with the actual page. Paste a title, compare the Publish Readiness Report, then rewrite anything that sounds padded, duplicated, or vague. This is especially useful when several pages target similar topics and each title needs a clear reason to exist.",
    decide: ["Whether the title is concise enough for scanning.", "Whether the main topic appears early.", "Whether repeated terms make the title look forced."],
    examples: ["A guide title for a new article.", "A SaaS feature page title.", "A local service page title.", "A comparison page title."],
    mistakes: ["Repeating the same keyword twice.", "Starting with a vague brand claim.", "Using a title that does not match the page.", "Making every page title follow the same template."],
    checklist: ["Keep the topic early.", "Remove filler adjectives.", "Make the page type clear.", "Avoid duplicate titles.", "Check the methodology note before relying on limits."],
    faq: commonFaq("SEO Title Checker"),
    relatedGuides: [{ href: "/guides/seo-title-length-guide", label: "SEO Title Length Guide" }, { href: "/examples/seo-title-examples", label: "SEO Title Examples" }]
  },
  {
    slug: "meta-description-checker",
    title: "Meta Description Checker",
    metaTitle: "Meta Description Checker",
    description: "Review meta description length, clarity, benefit framing, repetition, and snippet risk before publishing.",
    preset: "meta-description",
    intro: "The Meta Description Checker helps you turn a page summary into a useful search snippet candidate. It looks at character length, repeated wording, sentence flow, and whether the description gives the searcher a clear reason to visit the page. Search engines may rewrite snippets, so this tool avoids guarantees and focuses on practical editorial quality. Use it when a description feels generic, too long, too short, or too similar to another page. The report helps you cut filler, put the page benefit near the front, and avoid unsupported claims that can make a snippet feel low value.",
    decide: ["Whether the description is specific to the page.", "Whether the main benefit is visible early.", "Whether length and repetition create snippet risk."],
    examples: ["A tool page snippet.", "A guide summary.", "A product comparison description.", "A support article description."],
    mistakes: ["Using one description across many pages.", "Writing only 'learn more'.", "Overpromising outcomes.", "Repeating the title word for word."],
    checklist: ["Name the page benefit.", "Keep the strongest point early.", "Avoid duplicate descriptions.", "Use cautious language.", "Confirm the description matches visible page content."],
    faq: commonFaq("Meta Description Checker"),
    relatedGuides: [{ href: "/guides/meta-description-length-checker-guide", label: "Meta Description Length Guide" }, { href: "/examples/meta-description-examples", label: "Meta Description Examples" }]
  },
  {
    slug: "readability-checker",
    title: "Readability Checker",
    metaTitle: "Readability Checker",
    description: "Check sentence flow, reading level, long sentences, and scanability before publishing web copy.",
    preset: "blog",
    intro: "The Readability Checker highlights the parts of a draft that may slow readers down. It combines sentence length, reading level, long sentence warnings, paragraph structure, and Publish Readiness signals so you can revise for clarity without flattening the meaning. Use it for help articles, landing pages, policy summaries, blog posts, and technical drafts that need to be understood by busy readers. The checker is intentionally cautious: it does not say simple writing is always better, and it does not replace subject expertise. It simply points out where the reader may need a shorter sentence, clearer heading, or better example.",
    decide: ["Whether sentences are too long for the audience.", "Whether paragraphs are easy to scan.", "Whether the draft needs examples or simpler structure."],
    examples: ["A support article.", "A technical introduction.", "A policy summary.", "A landing page section."],
    mistakes: ["Chasing a score while removing necessary precision.", "Leaving one idea buried in a long paragraph.", "Using corporate filler instead of direct language.", "Ignoring audience expertise."],
    checklist: ["Split the longest sentence.", "Define specialist terms.", "Add headings where the topic shifts.", "Keep one main idea per paragraph.", "Read the final draft aloud."],
    faq: commonFaq("Readability Checker"),
    relatedGuides: [{ href: "/guides/readability-scores-explained", label: "Readability Scores Explained" }]
  },
  {
    slug: "keyword-density-checker",
    title: "Keyword Density Checker",
    metaTitle: "Keyword Density Checker",
    description: "Spot repeated terms, phrase density, and unnatural keyword use without uploading your draft.",
    preset: "blog",
    intro: "The Keyword Density Checker helps editors catch repetition before it turns into keyword stuffing or dull writing. It lists common one-word, two-word, and three-word phrases, then connects that repetition to practical publish readiness signals. Use it when a page targets a topic but you are not sure whether the language still feels natural. The best fix is not always to replace a keyword with a synonym. Sometimes the draft needs a better example, clearer section, or more specific detail. The checker keeps the analysis local and gives you a review path without pretending density alone decides search performance.",
    decide: ["Whether a target phrase appears too often.", "Whether repeated language is replacing useful detail.", "Whether the page needs topic breadth rather than more keywords."],
    examples: ["A service page draft.", "A blog introduction.", "A YouTube description.", "A category page."],
    mistakes: ["Repeating the exact phrase in every heading.", "Removing all keywords until the topic becomes unclear.", "Using density as a ranking promise.", "Ignoring reader usefulness."],
    checklist: ["Review top repeated phrases.", "Replace forced repetition with specifics.", "Keep natural topic terms.", "Add examples where repetition hides thin sections.", "Check final readability."],
    faq: commonFaq("Keyword Density Checker"),
    relatedGuides: [{ href: "/guides/keyword-density-what-is-too-much", label: "Keyword Density Guide" }]
  },
  {
    slug: "linkedin-post-checker",
    title: "LinkedIn Post Checker",
    metaTitle: "LinkedIn Post Checker",
    description: "Check LinkedIn post length, hook clarity, line breaks, repetition, and professional scanability.",
    preset: "linkedin-post",
    intro: "The LinkedIn Post Checker helps you review professional posts before they enter a fast-scrolling feed. It checks length, sentence flow, repeated wording, and whether the draft is likely to be readable as short lines instead of a dense block. Use it for product notes, hiring posts, founder updates, event recaps, and practical lessons. The report is not a prediction of engagement. It is a browser-side editing aid that helps you make the opening clearer, reduce vague hype, and ensure the post has a useful takeaway for the reader.",
    decide: ["Whether the opening line gives enough context.", "Whether the post is scannable in a feed.", "Whether the CTA or takeaway feels natural."],
    examples: ["A founder update.", "A hiring announcement.", "An event recap.", "A product lesson."],
    mistakes: ["Opening with generic hype.", "Writing one long block.", "Adding a CTA before value is clear.", "Using unsupported performance claims."],
    checklist: ["Clarify the first line.", "Use short paragraphs.", "Keep the professional takeaway visible.", "Remove empty urgency.", "Check examples before posting."],
    faq: commonFaq("LinkedIn Post Checker"),
    relatedGuides: [{ href: "/guides/linkedin-post-length-guide", label: "LinkedIn Post Length Guide" }, { href: "/examples/linkedin-post-examples", label: "LinkedIn Post Examples" }]
  },
  {
    slug: "youtube-title-description-checker",
    title: "YouTube Title and Description Checker",
    metaTitle: "YouTube Title and Description Checker",
    description: "Review YouTube titles and descriptions for length, clarity, first-line value, repetition, and viewer expectations.",
    preset: "youtube-description",
    intro: "The YouTube Title and Description Checker helps creators review video copy before publishing. Titles need a clear topic and reason to watch; descriptions need enough context without burying the useful summary. This checker reviews length, repetition, sentence flow, scanability, and the first-line value that viewers often see first. It does not predict views or platform performance. Instead, it helps you make sure the title and description accurately set expectations, avoid vague clickbait, and give viewers enough information to decide whether the video fits their need.",
    decide: ["Whether the title topic is clear.", "Whether the description summary appears early.", "Whether repeated phrases or long blocks hurt scanning."],
    examples: ["A tutorial title and description.", "A webinar replay summary.", "A product demo description.", "An interview episode note."],
    mistakes: ["Using clickbait the video does not support.", "Saving the actual topic until the end.", "Repeating tags as prose.", "Writing a description with no practical summary."],
    checklist: ["Put the video topic early.", "Summarize the viewer benefit.", "Break long descriptions into sections.", "Avoid unsupported claims.", "Check related examples."],
    faq: commonFaq("YouTube Title and Description Checker"),
    relatedGuides: [{ href: "/examples/youtube-description-examples", label: "YouTube Description Examples" }]
  },
  {
    slug: "email-subject-line-checker",
    title: "Email Subject Line Checker",
    metaTitle: "Email Subject Line Checker",
    description: "Check subject length, preview clarity, repetition, urgency risk, and inbox scanability.",
    preset: "email-subject",
    intro: "The Email Subject Line Checker helps you review whether a subject is clear enough to scan in an inbox. It checks character length, repeated wording, vague urgency, and whether the important noun or benefit appears early. Use it for newsletters, product updates, event reminders, onboarding notes, and account messages. The tool does not guarantee opens or deliverability. It gives practical editing signals so you can remove empty urgency, avoid misleading promises, and make the subject match the email body before sending.",
    decide: ["Whether the subject is compact enough for scanning.", "Whether urgency is real and specific.", "Whether the subject matches the email content."],
    examples: ["A newsletter subject.", "A webinar reminder.", "A product update.", "An account notice."],
    mistakes: ["Using fake urgency.", "Making the subject too vague.", "Repeating words from the sender name.", "Promising more than the email contains."],
    checklist: ["Put the useful noun early.", "Cut filler words.", "Keep urgency honest.", "Check mobile-friendly length.", "Compare with examples."],
    faq: commonFaq("Email Subject Line Checker"),
    relatedGuides: [{ href: "/examples/email-subject-line-examples", label: "Email Subject Line Examples" }]
  },
  {
    slug: "speech-time-calculator",
    title: "Speech Time Calculator",
    metaTitle: "Speech Time Calculator",
    description: "Estimate speaking time, reading time, sentence flow, and delivery risk for scripts and talks.",
    preset: "speech-script",
    intro: "The Speech Time Calculator estimates how long a script may take to deliver aloud and flags text that could be difficult to say clearly. It uses a practical words-per-minute estimate, sentence length, and Publish Readiness signals to help you prepare talks, voiceovers, podcasts, demos, and short presentations. Speaking time varies by speaker, pauses, audience, and delivery style, so the result is an estimate rather than a promise. Use the report to cut dense sentences, add breathing room, and check whether the script needs a clearer opening or closing before rehearsal.",
    decide: ["Whether the script fits the available time.", "Whether long sentences may be hard to say.", "Whether the draft needs pauses, examples, or a cleaner close."],
    examples: ["A two-minute intro.", "A podcast monologue.", "A product demo script.", "A conference abstract."],
    mistakes: ["Timing a script without reading it aloud.", "Ignoring pauses and audience reactions.", "Writing sentences that work on screen but not by voice.", "Counting stage notes as spoken words."],
    checklist: ["Check estimated speaking time.", "Read the script aloud.", "Split hard-to-say sentences.", "Mark pauses.", "Confirm the final time in rehearsal."],
    faq: commonFaq("Speech Time Calculator"),
    relatedGuides: [{ href: "/guides/speech-timing-calculator-guide", label: "Speech Timing Guide" }]
  },
  {
    slug: "blog-post-readiness-checker",
    title: "Blog Post Readiness Checker",
    metaTitle: "Blog Post Readiness Checker and PublishFit Score",
    description: "Check blog draft depth, readability, keyword repetition, scanability, and PublishFit readiness before publishing.",
    preset: "blog",
    intro: "The Blog Post Readiness Checker turns TextPulses into an editorial review station for article drafts. It combines word count, readability, keyword balance, paragraph structure, sentence flow, and PublishFit Score into a practical pre-publish report. Use it when a post may be thin, repetitive, hard to scan, or missing examples. The checker does not guarantee search rankings or AdSense approval. It helps you make a better editorial decision: expand with useful examples, cut filler, improve headings, or hold the draft for human review before publishing.",
    decide: ["Whether the post has enough useful depth.", "Whether sections are scannable.", "Whether repetition or readability issues weaken trust."],
    examples: ["A how-to article.", "A comparison post.", "A methodology note.", "A case-study draft."],
    mistakes: ["Adding filler instead of useful sections.", "Publishing without examples.", "Repeating a keyword to cover thin content.", "Treating PublishFit as a guarantee."],
    checklist: ["Answer the reader's main question.", "Add original examples.", "Use headings and short paragraphs.", "Review repeated phrases.", "Keep cautious claims and link methodology."],
    faq: commonFaq("Blog Post Readiness Checker"),
    relatedGuides: [{ href: "/guides/blog-post-word-count-guide", label: "Blog Post Word Count Guide" }, { href: "/guides/publishfit-score-explained", label: "PublishFit Score Guide" }]
  }
];

export function getToolPage(slug: string) {
  return toolPages.find((tool) => tool.slug === slug);
}
