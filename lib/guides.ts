export type GuideSection = {
  title: string;
  body: string[];
};

export type GuideTable = {
  title: string;
  columns: string[];
  rows: string[][];
};

export type GuideExample = {
  title: string;
  before: string;
  after: string;
  why: string;
};

export type GuideCaseStudy = {
  title: string;
  body: string;
};

export type GuideFaq = {
  question: string;
  answer: string;
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  updated: string;
  readingTime: string;
  category: string;
  quickAnswer: string[];
  whyMatters: string[];
  ruleOfThumb: string[];
  sections: GuideSection[];
  table: GuideTable;
  examples: GuideExample[];
  caseStudy: GuideCaseStudy;
  commonMistakes: string[];
  checklist: string[];
  howToCheck: string[];
  relatedSlugs: string[];
  faq: GuideFaq[];
};

const updated = "April 27, 2026";

const baseGuides: Guide[] = [
  {
    slug: "how-to-count-words-accurately",
    title: "How to Count Words Accurately",
    description:
      "Learn what usually counts as a word, why tools may disagree, and how to prepare clean text before checking word count.",
    updated,
    readingTime: "8 min read",
    category: "Word Count",
    quickAnswer: [
      "For practical writing, a word is usually a group of letters or numbers separated by spaces, punctuation, or line breaks. That sounds simple, but counts can change when a draft includes hyphenated phrases, URLs, emojis, copied navigation labels, captions, headings, footnotes, or pasted formatting from another tool.",
      "The safest workflow is to use one counter consistently while drafting, clean the text before final review, and confirm strict final requirements in the destination system. A school, client, publisher, or CMS may use a slightly different counting rule."
    ],
    whyMatters: [
      "Word count affects assignments, article briefs, speech timing, SEO planning, social posts, and client deliverables. A small difference rarely matters for casual drafting, but it can matter when the instruction says 1,000 words maximum or when a client expects a specific article length.",
      "Accurate counting also helps avoid false confidence. A draft can look long because it includes copied menus, comments, or duplicate headings. Cleaning the input makes the number more useful."
    ],
    ruleOfThumb: [
      "Count only the text that belongs to the final draft. Include headings if they will be published or submitted. Exclude navigation labels, cookie notices, internal notes, comments, and CMS interface text.",
      "If the count is strict, check whether references, appendices, captions, tables, footnotes, and headings are included. Those rules are usually decided by the institution, client, publisher, or platform."
    ],
    sections: [
      {
        title: "Word count rules by writing context",
        body: [
          "A blog article usually includes headings, body text, and captions that will appear on the page. It usually excludes navigation, author bios, related posts, and footer content. An academic essay usually includes the introduction, body, and conclusion, but references and appendices depend on the instructions.",
          "A client article should include the final deliverable text, not internal comments or CMS labels. A social caption usually includes the caption and hashtags, not platform interface text. A speech script should count words spoken aloud, not stage directions unless the speaker will say them."
        ]
      },
      {
        title: "Why copied formatting can change your count",
        body: [
          "Text copied from a document editor, website, PDF, or CMS may include extra line breaks, hidden comments, menu labels, duplicated headings, or tracking URLs. These details can make one counter disagree with another even when both tools are working correctly.",
          "Before checking a final count, paste only the content that belongs to the draft. If you copied from a web page, remove navigation labels, cookie notices, related article titles, and footer text."
        ]
      }
    ],
    table: {
      title: "Word count rules by writing context",
      columns: ["Context", "Usually included", "Often checked separately"],
      rows: [
        ["Blog article", "Headings, body text, published captions", "Navigation, author bio, related posts"],
        ["Academic essay", "Introduction, body, conclusion", "References, appendices, footnotes"],
        ["Client article", "Final deliverable text", "Internal notes, comments, CMS labels"],
        ["Social caption", "Caption text and hashtags", "Platform UI text"],
        ["Speech script", "Spoken words", "Stage directions unless spoken aloud"]
      ]
    },
    examples: [
      {
        title: "Copied navigation removed",
        before: "Home About Services This article explains how to write a useful meta description. Contact us today.",
        after:
          "This article explains how to write a useful meta description that summarizes the page, matches search intent, and stays concise enough for search snippets.",
        why:
          "The improved version removes copied navigation and turns the draft into one clear sentence that can be counted consistently."
      },
      {
        title: "Hidden draft notes removed",
        before:
          "Draft note: ask client about keyword. The guide explains how word count changes when pasted formatting adds extra labels.",
        after:
          "The guide explains how word count changes when pasted formatting adds extra labels, hidden comments, or duplicate line breaks.",
        why:
          "The after version removes an internal note and keeps only the wording intended for the reader."
      }
    ],
    caseStudy: {
      title: "Client article handoff",
      body:
        "A writer drafts a 950-word article in a document editor, then sees 943 words after pasting it into a CMS. The difference comes from a URL, a hyphenated product name, and a hidden comment. The practical fix is not to chase one universal number, but to clean the text and use the CMS count as the final submission count."
    },
    commonMistakes: [
      "Counting copied navigation text as part of the draft.",
      "Switching counters at the last minute and treating a small difference as an error.",
      "Forgetting to ask whether references or captions count.",
      "Leaving internal notes in the pasted text.",
      "Counting stage directions as spoken words in a speech script."
    ],
    checklist: [
      "Paste only the content you plan to submit or publish.",
      "Remove duplicate line breaks and accidental copied navigation text.",
      "Check whether headings, captions, or references should be included.",
      "Use the same counter throughout the drafting process.",
      "Confirm final requirements in the destination platform."
    ],
    howToCheck: [
      "Paste the clean draft into TextPulses and review Words, Paragraphs, Lines, and Sentence extremes. If the count looks higher than expected, use Clean Text to trim lines, remove duplicate line breaks, and reduce copied spacing before checking again.",
      "For strict submissions, use TextPulses while drafting and then confirm the final count in the school portal, CMS, document editor, or client platform that will receive the finished text."
    ],
    relatedSlugs: ["blog-post-word-count-guide", "academic-essay-word-count-guide", "speech-timing-calculator-guide"],
    faq: [
      {
        question: "Do all word counters produce the same result?",
        answer:
          "No. Tools may treat punctuation, contractions, hyphenated words, numbers, URLs, and copied formatting differently."
      },
      {
        question: "Should headings count toward word count?",
        answer:
          "Include headings if they are part of the submitted or published text unless the requirement says otherwise."
      },
      {
        question: "Should emojis count as words?",
        answer:
          "Usually no. Emojis can affect character counts, but most word counters do not treat them as words."
      },
      {
        question: "Why does my CMS count differ from my document editor?",
        answer:
          "A CMS may treat punctuation, embeds, copied formatting, or hidden content differently from a document editor."
      }
    ]
  },
  {
    slug: "blog-post-word-count-guide",
    title: "Word Count Guide for Blog Posts",
    description:
      "A practical guide to blog post length, structure, readability, and when a post needs more depth before publishing.",
    updated,
    readingTime: "9 min read",
    category: "Blogging",
    quickAnswer: [
      "A blog post should be as long as the reader's problem requires. A quick definition may be useful at 400 to 700 words, while a comparison, tutorial, or evergreen guide may need 1,200 words or more to cover context, examples, objections, and next steps.",
      "TextPulses uses 600+ words as a practical depth signal for blog posts, not a universal rule. A short article can work when the intent is narrow. A long article fails when it repeats itself instead of helping the reader move forward."
    ],
    whyMatters: [
      "Word count influences depth, scanability, search intent coverage, and reader satisfaction. A thin post may not answer follow-up questions. An oversized post may bury the answer under filler.",
      "The best blog length balances usefulness with pace. Readers want enough detail to solve the problem, plus examples that make the advice easier to apply."
    ],
    ruleOfThumb: [
      "Use 300 to 600 words for quick announcements or narrow answers, 800 to 1,500 words for focused how-to articles, 1,200 to 2,500 words for comparisons or troubleshooting, and 2,000+ words for deep guides that genuinely need scope.",
      "When expanding, add examples, tables, checklists, common mistakes, mini case studies, and FAQs. Do not repeat the introduction just to reach a target number."
    ],
    sections: [
      {
        title: "Match word count to search intent",
        body: [
          "Search intent is usually more important than a fixed word count. A person searching for a definition wants a fast answer. A person comparing tools expects criteria, tradeoffs, and a recommendation. A person troubleshooting a problem expects symptoms, causes, fixes, and prevention.",
          "Before expanding a post, ask what the reader still needs. If the answer is an example, add one. If the answer is a decision, add a comparison. If the answer is confidence, add common mistakes or a checklist."
        ]
      },
      {
        title: "How to expand without filler",
        body: [
          "If a post feels thin, do not stretch sentences or repeat the thesis. Add useful material that changes what the reader can do after reading. A concrete example, a comparison table, a checklist, a short FAQ, or a mini case can add value without padding.",
          "Useful expansion also improves trust. It shows the page understands real use cases, exceptions, and mistakes rather than repeating a generic answer."
        ]
      }
    ],
    table: {
      title: "Blog length by search intent",
      columns: ["Search intent", "Typical depth", "What the reader expects"],
      rows: [
        ["Quick definition", "400-700 words", "Clear answer, example, related term"],
        ["How-to tutorial", "800-1,500 words", "Steps, examples, mistakes"],
        ["Comparison", "1,200-2,500 words", "Criteria, pros and cons, recommendation"],
        ["Troubleshooting", "900-2,000 words", "Symptoms, causes, fixes, prevention"],
        ["Deep guide", "2,000+ words", "Full context, sections, examples, FAQ"]
      ]
    },
    examples: [
      {
        title: "Thin advice expanded",
        before: "A good blog post should be long enough to explain the topic. Use headings and write clearly.",
        after:
          "A good blog post should answer the reader's question, explain the context, give at least one practical example, and show what to do next. For a focused how-to, 800-1,200 words may be enough. For a comparison or evergreen guide, the article may need more sections, examples, and objections answered.",
        why:
          "The improved version gives a decision framework instead of repeating generic advice."
      },
      {
        title: "Filler replaced with value",
        before: "This topic is important for many reasons, and writers should think carefully about it before writing content online.",
        after:
          "Before drafting, identify whether the reader needs a definition, a process, a comparison, or troubleshooting help. That choice should shape the article length more than a fixed target.",
        why:
          "The after version gives the reader a concrete planning step."
      }
    ],
    caseStudy: {
      title: "Expanding a short guide",
      body:
        "A 420-word post explains what meta descriptions are but does not show examples. Expanding it to 900 words with a before/after rewrite, a length table, common mistakes, and FAQ makes the page more useful without adding filler."
    },
    commonMistakes: [
      "Adding filler paragraphs just to reach a target word count.",
      "Publishing one dense block of text without scannable sections.",
      "Repeating the same keyword instead of adding related information.",
      "Ignoring the search intent behind the topic.",
      "Ending without a practical next step or checklist."
    ],
    checklist: [
      "Define the reader's problem in the introduction.",
      "Match article depth to the search intent.",
      "Add examples when advice would otherwise feel generic.",
      "Break long paragraphs into focused sections.",
      "Review keyword density and long sentence warnings before publishing."
    ],
    howToCheck: [
      "Paste the draft into TextPulses and choose the Blog Article preset. Review the word count, paragraph count, readability, keyword balance, and PublishFit recommendations.",
      "If the draft is under the recommended range, add useful sections such as examples, mistakes, a table, or FAQ. If it is long but repetitive, trim repeated points and improve structure."
    ],
    relatedSlugs: ["how-to-count-words-accurately", "keyword-density-what-is-too-much", "readability-scores-explained"],
    faq: [
      {
        question: "Is 600 words enough for a blog post?",
        answer:
          "It can be enough for a focused article, but competitive or evergreen topics often need more examples, structure, and supporting detail."
      },
      {
        question: "Can a blog post be too long?",
        answer:
          "Yes. If extra length repeats the same idea or delays the answer, trimming can improve the post."
      },
      {
        question: "Should every blog post be over 1,000 words?",
        answer:
          "No. The topic and search intent matter. A narrow answer can be useful below 1,000 words, while a comparison may need much more depth."
      },
      {
        question: "How many paragraphs should a blog post have?",
        answer:
          "Use enough paragraphs to keep each idea readable. On the web, shorter paragraphs usually improve scanning."
      }
    ]
  },
  {
    slug: "meta-description-length-checker-guide",
    title: "Meta Description Length Checker Guide",
    description:
      "Understand practical meta description length, snippet clarity, and how to write concise descriptions for search results.",
    updated,
    readingTime: "8 min read",
    category: "SEO",
    quickAnswer: [
      "A practical meta description is often strongest around 120 to 160 characters. That range is not a guarantee that a search engine will display the exact text, but it gives you enough space to summarize the page, include the main benefit, and avoid a vague snippet.",
      "A good description should match the page, sound natural, and help the searcher understand why the page is relevant. It should not promise outcomes the page does not deliver or repeat the same keyword mechanically."
    ],
    whyMatters: [
      "Search engines may rewrite snippets, but writing a strong meta description still helps clarify the page promise. It also gives your content system, editors, and SEO workflow a concise summary of what the page is supposed to do.",
      "Weak descriptions often fail because they are generic. They say 'learn more' or 'best guide' without naming the audience, use case, or specific value."
    ],
    ruleOfThumb: [
      "Aim for 120 to 160 characters when possible. Warnings below 90 or above 170 characters are useful because very short descriptions may feel vague and very long descriptions may be truncated or rewritten.",
      "Lead with the page benefit, use the topic naturally, and remove filler such as 'In this article' when space is tight."
    ],
    sections: [
      {
        title: "What to cut when the description is too long",
        body: [
          "Start by removing repeated brand names, vague openers, unnecessary adjectives, secondary benefits, repeated keywords, and words that do not change the meaning.",
          "Do not cut the specific value first. A shorter description that says nothing clearly is worse than a slightly longer sentence that tells the searcher what the page provides."
        ]
      },
      {
        title: "What to add when the description is too short",
        body: [
          "Add the audience, specific use case, main benefit, practical action, or page format. Words such as guide, checker, calculator, template, tutorial, or comparison can help when they accurately describe the page.",
          "If the page is a tool, say what the user can do with it. If the page is a guide, say what decision or task the guide supports."
        ]
      }
    ],
    table: {
      title: "Meta description examples by page type",
      columns: ["Page type", "Weak description", "Stronger description"],
      rows: [
        ["Tool page", "Use our free tool online.", "Count words, check readability, and review keyword balance before publishing your draft."],
        ["Blog guide", "Learn SEO tips here.", "Learn how to write clear SEO titles and meta descriptions with practical length checks."],
        ["Product page", "Best software for teams.", "Compare features, use cases, and pricing notes to decide whether this software fits your team."],
        ["Contact page", "Contact us today.", "Contact TextPulses for support, corrections, privacy questions, or business inquiries."]
      ]
    },
    examples: [
      {
        title: "Generic description improved",
        before: "Meta description guide for SEO and websites.",
        after:
          "Learn how to write concise meta descriptions that summarize the page, fit practical length ranges, and avoid keyword stuffing.",
        why:
          "The improved version explains the benefit, topic, and outcome in one natural sentence."
      },
      {
        title: "Overlong description trimmed",
        before:
          "TextPulses is a very useful and helpful online website that lets users count words and characters and also check many other important writing things.",
        after:
          "Count words, check readability, and review keyword balance before publishing your draft.",
        why:
          "The after version removes vague praise and keeps the concrete actions."
      }
    ],
    caseStudy: {
      title: "Search snippet rewrite",
      body:
        "A product page originally used the description 'Best text tool online for writers.' The revised version named the privacy angle, the main action, and the publishing use case, giving searchers a clearer reason to click without making exaggerated claims."
    },
    commonMistakes: [
      "Writing a generic description that could apply to any page.",
      "Repeating the target keyword in an unnatural way.",
      "Promising content or features the page does not provide.",
      "Using the same description on many pages.",
      "Saving all useful information until the end of the sentence."
    ],
    checklist: [
      "Keep the page benefit near the front.",
      "Write one natural sentence or two compact clauses.",
      "Stay close to 120-160 characters when possible.",
      "Avoid keyword stuffing.",
      "Make sure the description matches the page."
    ],
    howToCheck: [
      "Paste the description into TextPulses and choose the Meta Description preset. Review the character count, status, and recommendations.",
      "If it is too long, cut filler first. If it is too short, add the audience, use case, or page type."
    ],
    relatedSlugs: ["seo-title-length-guide", "publishfit-score-explained", "keyword-density-what-is-too-much"],
    faq: [
      {
        question: "Will Google always show my meta description?",
        answer:
          "No. Search engines may rewrite snippets based on the query and page content."
      },
      {
        question: "Should every page have a unique meta description?",
        answer:
          "Yes. Unique descriptions help each page communicate its specific purpose."
      },
      {
        question: "Can a meta description include a call to action?",
        answer:
          "Yes, but it should still summarize the page honestly. Avoid clickbait or vague commands."
      },
      {
        question: "Should the brand name be included?",
        answer:
          "Include it when brand recognition helps. For small sites, the page benefit may deserve the space."
      }
    ]
  },
  {
    slug: "seo-title-length-guide",
    title: "SEO Title Length Guide",
    description:
      "Learn how to write concise SEO titles, avoid truncation risk, and keep the main topic visible.",
    updated,
    readingTime: "8 min read",
    category: "SEO",
    quickAnswer: [
      "A practical SEO title often works best around 40 to 60 characters. That range gives you room for the main topic and a useful angle while reducing truncation risk.",
      "The best title is clear before it is clever. Put the topic early, avoid keyword lists, and add the brand only when it improves trust or recognition."
    ],
    whyMatters: [
      "The SEO title is often the first text a searcher sees. It has to communicate relevance and usefulness quickly, especially on mobile where space is limited.",
      "A title that is too vague may be ignored. A title that is too long may hide the important words. A title stuffed with repeated terms can look less trustworthy."
    ],
    ruleOfThumb: [
      "Combine the main topic, a specific benefit, and a clarifying detail. Add the brand at the end only when useful.",
      "Example formula: Main topic + benefit or format + brand when helpful."
    ],
    sections: [
      {
        title: "Practical SEO title formula",
        body: [
          "A useful SEO title usually combines the main topic, a specific benefit, a clarifying detail, and the brand name only when useful. For example: 'Meta Description Length Guide: Write Clearer Search Snippets | TextPulses'.",
          "The formula should not make every title sound identical. Use it as a check: can the searcher see the topic, understand the page type, and know why the result may help?"
        ]
      },
      {
        title: "Write for searchers, not just search engines",
        body: [
          "A title should match the page and the query without sounding mechanical. If you repeat a phrase twice, list unrelated keywords, or hide the topic behind a clever slogan, the title may lose clarity.",
          "Read the title aloud. If it sounds like a label a real editor would write, it is usually stronger than a string of search terms."
        ]
      }
    ],
    table: {
      title: "SEO title examples",
      columns: ["Weak title", "Better title", "Why it is better"],
      rows: [
        ["SEO Tips", "SEO Title Length Guide for Clearer Search Results", "More specific"],
        ["Best Writing Tool", "Free Word Counter and PublishFit Text Analyzer", "Describes the product"],
        ["Meta Descriptions", "Meta Description Length Checker Guide", "Matches the search task"],
        ["TextPulses - Tools - SEO - Writing", "Free Word Counter and Readability Checker", "Avoids keyword listing"]
      ]
    },
    examples: [
      {
        title: "Long opener removed",
        before: "Everything You Need to Know About Blog Post Word Counts and Article Length",
        after: "Blog Post Word Count Guide",
        why:
          "The shorter title keeps the topic visible and removes a soft opener."
      },
      {
        title: "Vague title clarified",
        before: "Guide",
        after: "Meta Description Length Checker Guide",
        why:
          "The after version names the task and the page type, which helps the searcher understand the result."
      }
    ],
    caseStudy: {
      title: "Title trimming",
      body:
        "A guide title at 78 characters was readable in a CMS but likely to truncate in search. Removing 'Everything You Need to Know' created a clearer 48-character title with the main topic intact."
    },
    commonMistakes: [
      "Starting with the brand when the topic matters more.",
      "Repeating the same keyword twice.",
      "Making the title vague.",
      "Writing only for search engines.",
      "Ignoring mobile truncation risk."
    ],
    checklist: [
      "Aim for 40-60 characters.",
      "Place the primary topic early.",
      "Use one clear promise or angle.",
      "Avoid repeating the same keyword.",
      "Check the title on mobile-sized screens."
    ],
    howToCheck: [
      "Paste the title into TextPulses and choose the SEO Title preset. Review character count, repeated words, clarity, and PublishFit status.",
      "If the title is too long, remove soft openers, repeated terms, and brand wording that does not add trust."
    ],
    relatedSlugs: ["meta-description-length-checker-guide", "keyword-density-what-is-too-much", "publishfit-score-explained"],
    faq: [
      {
        question: "Is a longer SEO title always bad?",
        answer:
          "No, but longer titles are more likely to be truncated or rewritten. Use length as a practical warning, not an absolute rule."
      },
      {
        question: "Should the brand name be in every title?",
        answer:
          "Use the brand when it helps trust or navigation. For small sites, the topic often deserves priority."
      },
      {
        question: "Can I use separators like pipes or colons?",
        answer:
          "Yes. Use them sparingly to clarify structure, not to stack unrelated keywords."
      },
      {
        question: "Should the H1 match the SEO title exactly?",
        answer:
          "It can, but it does not have to. The H1 can be more natural while the SEO title stays compact."
      }
    ]
  },
  {
    slug: "youtube-title-description-length-guide",
    title: "YouTube Title and Description Length Guide",
    description:
      "Plan clearer YouTube titles and descriptions with practical length checks, hooks, and first-line guidance.",
    updated,
    readingTime: "8 min read",
    category: "Video",
    quickAnswer: [
      "A YouTube title should make the topic and reason to watch clear quickly. TextPulses uses 45 to 70 characters as a practical ideal range and warns above 100 characters.",
      "A YouTube description can be much longer, but the first 150 characters should work hard. Put the main value early, then use the rest for context, chapters, links, sources, and next steps."
    ],
    whyMatters: [
      "Titles appear in search, recommendations, channel pages, embeds, and notifications. If the title hides the topic, the right viewer may never recognize the video.",
      "Descriptions support trust and navigation. A strong opening helps viewers understand the video before links and boilerplate appear."
    ],
    ruleOfThumb: [
      "Use the title to combine topic, outcome, and audience. Use the first description lines to summarize value, not to repeat generic channel language.",
      "Curiosity can help, but clarity should come first. A viewer should know what the video is about without already knowing your channel."
    ],
    sections: [
      {
        title: "YouTube title and description checklist",
        body: [
          "The title should state the topic and reason to watch. The first description lines should summarize value. Links should support next actions. Chapters should be accurate. Repetition should feel natural rather than spammy.",
          "A longer description can be useful when it adds sources, timestamps, tools, credits, or related resources. It is weak when it repeats the same phrase to look optimized."
        ]
      },
      {
        title: "How to avoid weak video copy",
        body: [
          "Weak titles often hide the topic behind vague curiosity. Weak descriptions often start with generic channel boilerplate or a stack of links before explaining the video.",
          "Before publishing, ask whether a new viewer could understand the video without seeing the thumbnail or knowing your channel."
        ]
      }
    ],
    table: {
      title: "YouTube copy planning ranges",
      columns: ["Element", "Practical goal", "Check before publishing"],
      rows: [
        ["Title", "Clear topic and reason to watch", "Does the viewer understand the video quickly?"],
        ["First description lines", "Summarize value", "Is the main benefit visible early?"],
        ["Links", "Support next actions", "Are links relevant and not excessive?"],
        ["Chapters", "Improve scanning", "Are timestamps accurate?"],
        ["Repetition", "Avoid spam feel", "Are keywords natural?"]
      ]
    },
    examples: [
      {
        title: "Specific beginner title",
        before: "My New Video About Orchids",
        after: "How to Water Orchids Without Root Rot: Simple Beginner Guide",
        why:
          "The improved title names the topic, problem, and audience more clearly."
      },
      {
        title: "Description opening improved",
        before: "Welcome back to the channel. In today's video we are talking about a topic many people ask about.",
        after:
          "Learn how to check keyword density before publishing so your draft sounds natural instead of repetitive.",
        why:
          "The after version uses the first line to explain the value of the video."
      }
    ],
    caseStudy: {
      title: "Tutorial title rewrite",
      body:
        "A tutorial title changed from 'You won't believe this writing trick' to 'How to Check Keyword Density Before Publishing'. The second title is less dramatic, but it tells the right viewer exactly what they will learn."
    },
    commonMistakes: [
      "Hiding the topic behind a vague curiosity hook.",
      "Starting the description with generic channel boilerplate.",
      "Repeating the same keyword instead of explaining the video.",
      "Adding too many unrelated links before the summary.",
      "Writing a title that depends entirely on the thumbnail."
    ],
    checklist: [
      "Keep the title clear at a glance.",
      "Put the main topic or outcome early.",
      "Make the first 150 description characters useful.",
      "Avoid repeating the same keyword unnaturally.",
      "Use longer descriptions for context, timestamps, and resources."
    ],
    howToCheck: [
      "Paste the title into TextPulses and choose YouTube Title. Paste the opening description and choose YouTube Description. Review length, repeated phrases, and clarity warnings separately.",
      "If the title is unclear, add the topic or outcome. If the description is weak, move the benefit above links and boilerplate."
    ],
    relatedSlugs: ["keyword-density-what-is-too-much", "readability-scores-explained", "publishfit-score-explained"],
    faq: [
      {
        question: "Can a YouTube title be under 45 characters?",
        answer:
          "Yes. Short titles can work well when the topic is obvious and the hook is strong."
      },
      {
        question: "Should keywords be repeated in the description?",
        answer:
          "Use relevant terms naturally. Repetition that reads awkwardly is usually a sign to revise."
      },
      {
        question: "Should I put episode numbers in the title?",
        answer:
          "Use episode numbers when they help a series. If discovery matters more, lead with the topic."
      },
      {
        question: "Do links belong at the top of the description?",
        answer:
          "Usually no. Start with a useful summary, then add links, chapters, and resources."
      }
    ]
  },
  {
    slug: "linkedin-post-length-guide",
    title: "LinkedIn Post Length Guide",
    description:
      "Write LinkedIn posts with clear structure, readable length, and professional pacing.",
    updated,
    readingTime: "8 min read",
    category: "Social Media",
    quickAnswer: [
      "A clear LinkedIn post often works well between 150 and 1,300 characters, depending on whether it is a short insight, mini story, or framework. Length is less important than the visible point.",
      "A post should give people a reason to stop, explain the idea, and leave them with a useful takeaway. Short paragraphs help because many readers scan before they commit."
    ],
    whyMatters: [
      "LinkedIn posts compete with professional updates, opinions, job news, and personal stories. If the opening is vague, the reader may move on before reaching the useful part.",
      "Readable structure also protects tone. A clear post can feel professional without becoming stiff or overloaded with jargon."
    ],
    ruleOfThumb: [
      "Use 150 to 400 characters for one focused insight, 500 to 900 characters for a mini story, and 900 to 1,300 characters for a framework post with steps or examples.",
      "Start with a specific observation, then explain why it matters. End with a practical takeaway or a simple question that fits the content."
    ],
    sections: [
      {
        title: "LinkedIn post structure",
        body: [
          "A clear LinkedIn post usually has a first line that gives people a reason to stop, a short explanation of the problem, a practical insight or story, a takeaway, and a simple closing question or next step.",
          "Not every post needs all five parts, but the structure helps prevent vague updates. It also makes long posts easier to scan."
        ]
      },
      {
        title: "Tone and professional clarity",
        body: [
          "Professional does not have to mean stiff. Use direct language, avoid jargon where possible, and make the takeaway useful to people outside your immediate team.",
          "Before posting, read the draft once as a stranger. If the value appears only at the end, consider moving it earlier."
        ]
      }
    ],
    table: {
      title: "LinkedIn post formats",
      columns: ["Format", "Typical length", "Best use"],
      rows: [
        ["Short insight", "150-400 characters", "One idea with a direct takeaway"],
        ["Mini story", "500-900 characters", "Situation, tension, lesson"],
        ["Framework post", "900-1,300 characters", "Steps, examples, conclusion"],
        ["Announcement", "150-700 characters", "What changed and why it matters"]
      ]
    },
    examples: [
      {
        title: "Generic advice made useful",
        before: "Content quality is important. You should write better posts and be consistent.",
        after:
          "Most weak LinkedIn posts do not fail because they are short. They fail because the first line gives no reason to keep reading. A better post makes one clear point, explains why it matters, and gives the reader a specific takeaway.",
        why:
          "The improved version gives structure, rhythm, and practical value."
      },
      {
        title: "Launch update clarified",
        before:
          "We launched a tool and learned a lot about writing and users and how people need quick feedback before publishing.",
        after:
          "We launched a writing tool with one lesson in mind: writers do not only need counts. They need to know whether a draft fits the channel before they publish.",
        why:
          "The after version turns a general update into a clear professional point."
      }
    ],
    caseStudy: {
      title: "Professional takeaway",
      body:
        "A founder post originally described a launch in one long paragraph. Splitting it into the problem, decision, result, and lesson made it easier to scan and clarified why the story mattered."
    },
    commonMistakes: [
      "Opening with a vague lesson before showing the situation.",
      "Using many one-line paragraphs without substance.",
      "Ending with a forced engagement question that does not match the post.",
      "Hiding the useful takeaway until the final line.",
      "Writing in jargon that only an internal team would understand."
    ],
    checklist: [
      "Make the point clear in the first few lines.",
      "Use short paragraphs for scanning.",
      "Cut generic openers.",
      "Check sentence length and flow.",
      "End with a useful conclusion or clear question."
    ],
    howToCheck: [
      "Paste the draft into TextPulses and choose LinkedIn Post. Review character count, sentence flow, readability, and repeated phrases.",
      "If the post is too long, cut background before cutting the main insight. If it is too short, add a concrete example or takeaway."
    ],
    relatedSlugs: ["readability-scores-explained", "keyword-density-what-is-too-much", "publishfit-score-explained"],
    faq: [
      {
        question: "Are long LinkedIn posts bad?",
        answer:
          "No. Long posts can work when they offer a story, framework, or useful detail. They fail when length comes from repetition."
      },
      {
        question: "Should every LinkedIn post ask a question?",
        answer:
          "No. A question can invite discussion, but a clear takeaway is often enough."
      },
      {
        question: "Are hooks necessary on LinkedIn?",
        answer:
          "A strong opening helps, but it should be honest and connected to the rest of the post."
      },
      {
        question: "Should I use hashtags?",
        answer:
          "Use a small number when they help categorization. Do not let hashtags replace clear writing."
      }
    ]
  },
  {
    slug: "email-subject-line-length-guide",
    title: "Email Subject Line Length Guide",
    description:
      "Improve subject lines with practical length ranges, inbox clarity, and wording checks.",
    updated,
    readingTime: "8 min read",
    category: "Email",
    quickAnswer: [
      "A useful email subject line is usually clear within 30 to 60 characters. That gives enough room for topic, context, or action without becoming hard to scan in an inbox.",
      "The best subject line tells the reader what the email is about, whether action is needed, and why it matters now. It should match the body of the email."
    ],
    whyMatters: [
      "Subject lines are scanning text. They appear beside sender names, preview text, timestamps, and many competing messages, often on a phone.",
      "Vague subjects create friction. Misleading urgency can increase opens once but reduce trust over time."
    ],
    ruleOfThumb: [
      "Use the shortest version that still communicates the reason to open. If it is too long, cut filler such as 'quick note' or 'important update' when the specific topic matters more.",
      "If it is too short, add the item, deadline, benefit, or context that helps the recipient triage the message."
    ],
    sections: [
      {
        title: "What makes a subject line clear",
        body: [
          "A clear subject line usually tells the reader what the email is about, whether action is needed, why it matters now, and who or what the message relates to.",
          "Avoid forcing curiosity if clarity would serve the reader better. A support message, deadline reminder, or invoice update should be easy to understand before opening."
        ]
      },
      {
        title: "Avoid misleading urgency",
        body: [
          "Urgency can be helpful when it is true. Fake urgency, vague pressure, or exaggerated scarcity may get attention but can harm trust.",
          "A good subject line sets a clear expectation for the email body. If the body cannot deliver on the subject, revise the subject."
        ]
      }
    ],
    table: {
      title: "Subject line examples",
      columns: ["Goal", "Weak subject", "Better subject"],
      rows: [
        ["Support reply", "Update", "Update on your TextPulses support request"],
        ["Newsletter", "New article", "New guide: how to check word count accurately"],
        ["Product update", "We changed things", "PublishFit now checks more writing formats"],
        ["Reminder", "Reminder", "Reminder: send your final draft by Friday"]
      ]
    },
    examples: [
      {
        title: "Vague support subject clarified",
        before: "Question",
        after: "Question about TextPulses contact form",
        why:
          "The improved version helps the recipient triage the message before opening it."
      },
      {
        title: "Overlong reminder shortened",
        before: "A quick reminder about the upcoming deadline for the content audit that we discussed last week",
        after: "Content audit deadline reminder",
        why:
          "The after version keeps the core context and removes extra setup."
      }
    ],
    caseStudy: {
      title: "Support inbox triage",
      body:
        "A support email subject changed from 'Quick question' to 'Question about AdSense setup'. The second version is still short, but it gives the inbox enough context for a faster response."
    },
    commonMistakes: [
      "Using urgency when there is no real deadline.",
      "Starting with filler when the topic matters more.",
      "Writing a subject that does not match the email body.",
      "Making the subject so short that it becomes vague.",
      "Using personalization that feels automated or irrelevant."
    ],
    checklist: [
      "Aim for 30-60 characters.",
      "Put the strongest noun or benefit near the front.",
      "Avoid vague filler.",
      "Do not use false urgency.",
      "Match the promise in the email body."
    ],
    howToCheck: [
      "Paste the subject into TextPulses and choose Email Subject. Review character count and clarity recommendations.",
      "If the subject is too long, remove filler first. If it is too short, add the item, deadline, or action."
    ],
    relatedSlugs: ["readability-scores-explained", "publishfit-score-explained", "meta-description-length-checker-guide"],
    faq: [
      {
        question: "Is shorter always better for email subjects?",
        answer:
          "No. Very short subjects can be vague. The best length is the shortest version that still communicates the reason to open."
      },
      {
        question: "Should I use emojis in subject lines?",
        answer:
          "Only when they fit the audience and brand. Emojis can help scanning, but they can also look unprofessional in some contexts."
      },
      {
        question: "Should I include a person's name in the subject?",
        answer:
          "Only when it adds useful context or personalization. Forced personalization can feel automated."
      },
      {
        question: "Do all mobile inboxes truncate at the same point?",
        answer:
          "No. Device, app, font size, sender name, and preview text all affect what appears."
      }
    ]
  },
  {
    slug: "academic-essay-word-count-guide",
    title: "Academic Essay Word Count Guide",
    description:
      "Plan essay length, paragraph structure, sentence clarity, and lexical variety before submission.",
    updated,
    readingTime: "9 min read",
    category: "Academic Writing",
    quickAnswer: [
      "An academic word count is a signal about expected depth. A 500-word essay usually needs a tight argument, while a 2,500-word essay usually needs more sections, evidence, counterpoints, and transitions.",
      "Always follow the instructions from your school, university, teacher, or publisher. Some assignments include references in the word count, while others exclude them. Some include footnotes, captions, appendices, or tables, while others count only the main essay body."
    ],
    whyMatters: [
      "Word count shapes the amount of evidence and analysis expected. Being far under the target can signal missing development. Being far over can signal unfocused argument or weak editing.",
      "Structure matters as much as length. An essay may meet the word count but still feel unclear if it has too few paragraphs, very long sentences, or repeated claims."
    ],
    ruleOfThumb: [
      "Plan the structure before drafting. Use the word count to decide how many claims, evidence sections, and counterpoints the essay can support.",
      "Use TextPulses for planning signals, not grading. It cannot judge accuracy, citation quality, or whether the argument satisfies the rubric."
    ],
    sections: [
      {
        title: "Academic word count planning",
        body: [
          "A 500-word essay may need an introduction, two body paragraphs, and a conclusion. A 1,000-word essay may support three or four body paragraphs. A 1,500-word essay may include counterpoints. A longer essay often needs sections or a deeper argument plan.",
          "The goal is not to fill a quota. The goal is to use the available space to make a clear argument with evidence, explanation, and transitions."
        ]
      },
      {
        title: "Sentence length and academic clarity",
        body: [
          "Academic writing can include complex ideas, but long sentences still need control. A sentence that tries to carry too many claims can obscure the argument.",
          "Use longer sentences when they clarify relationships between ideas, and shorter sentences when you need emphasis or transition."
        ]
      }
    ],
    table: {
      title: "Essay length planning examples",
      columns: ["Essay length", "Suggested structure", "Notes"],
      rows: [
        ["500 words", "Intro, 2 body paragraphs, conclusion", "Stay focused on one argument"],
        ["1,000 words", "Intro, 3-4 body paragraphs, conclusion", "Use evidence selectively"],
        ["1,500 words", "Intro, 4-6 body paragraphs, conclusion", "Develop counterpoints"],
        ["2,500+ words", "Sections or deeper argument", "Plan before drafting"]
      ]
    },
    examples: [
      {
        title: "Vague claim developed",
        before: "This shows the policy was important and had many effects on society.",
        after:
          "The policy mattered because it changed access, shifted costs, and created a public debate about who should be responsible for implementation.",
        why:
          "The improved version turns a vague claim into specific lines of argument."
      },
      {
        title: "Overlong academic sentence split",
        before:
          "Because the reform affected schools, families, and local budgets while also changing the expectations placed on administrators, it became controversial across several groups.",
        after:
          "The reform affected schools, families, and local budgets. It also changed expectations for administrators. Those combined effects made the policy controversial across several groups.",
        why:
          "The after version keeps the ideas but makes the relationships easier to follow."
      }
    ],
    caseStudy: {
      title: "Underdeveloped essay",
      body:
        "A 780-word essay meets a rough length target but has only two body paragraphs. Adding one paragraph for counterargument and one for evidence analysis improves structure more than simply adding longer sentences."
    },
    commonMistakes: [
      "Trying to meet the word count by repeating the same claim.",
      "Using long sentences to sound academic.",
      "Ignoring whether references, footnotes, or appendices count.",
      "Leaving too few paragraphs for the argument.",
      "Forgetting to proofread after trimming."
    ],
    checklist: [
      "Confirm the assignment's word count rules.",
      "Use paragraphs to organize claims and evidence.",
      "Watch for very long sentences.",
      "Check repeated words and low variety.",
      "Leave time for manual proofreading."
    ],
    howToCheck: [
      "Paste the essay into TextPulses and choose Academic Essay. Review word count, paragraph count, average sentence length, lexical variety, and repeated word warnings.",
      "If the essay is underdeveloped, add evidence or analysis. If it is overlong, remove repeated claims and tighten transitions."
    ],
    relatedSlugs: ["how-to-count-words-accurately", "readability-scores-explained", "speech-timing-calculator-guide"],
    faq: [
      {
        question: "Can TextPulses grade my essay?",
        answer:
          "No. It provides writing signals, not academic grading, citation review, or rubric evaluation."
      },
      {
        question: "Is it okay to be under the word count?",
        answer:
          "Small differences may be acceptable, but being far under often suggests missing evidence or analysis."
      },
      {
        question: "Can I use TextPulses for citations?",
        answer:
          "No. TextPulses can help with structure and counts, but citation style must be checked separately."
      },
      {
        question: "Do references count?",
        answer:
          "That depends on the instructions. Always confirm whether references, footnotes, appendices, tables, and captions are included."
      }
    ]
  },
  {
    slug: "speech-timing-calculator-guide",
    title: "Speech Timing Calculator Guide",
    description:
      "Estimate speaking time, plan scripts, and adjust pacing for presentations, speeches, and voiceover drafts.",
    updated,
    readingTime: "8 min read",
    category: "Speaking",
    quickAnswer: [
      "Speech timing depends on word count, speaking pace, pauses, delivery style, slides, and audience interaction. TextPulses estimates speaking time at a practical baseline, but rehearsal is the only reliable final test.",
      "A short speech may be 1 to 3 minutes, a standard talk may be 3 to 7 minutes, and longer speeches need more structure. If a script runs long, cut repeated points and simplify transitions before removing useful examples."
    ],
    whyMatters: [
      "A script that looks short on the page can feel long aloud. Spoken delivery needs pauses, emphasis, and breathing room. Dense written sentences are often harder to speak than to read silently.",
      "Timing also affects confidence. When the script fits the time limit with room for pauses, the speaker can deliver more calmly."
    ],
    ruleOfThumb: [
      "Use 120 to 130 words per minute for slow formal delivery, 140 to 160 for conversational delivery, and 170+ for fast delivery that may be harder to follow.",
      "Plan below the maximum time. A 5-minute slot should not be scripted to exactly 5 minutes before rehearsal."
    ],
    sections: [
      {
        title: "Speaking pace table",
        body: [
          "Slow and deliberate delivery works for formal speeches or emotional moments. Conversational delivery works for presentations, videos, and explainers. Fast delivery can feel energetic, but it is harder for listeners to follow.",
          "Choose pace based on audience and setting. A technical talk may need more pauses than a casual update."
        ]
      },
      {
        title: "Revision tip",
        body: [
          "If your script is too long, do not only cut words. Check whether you can remove repeated points, shorten examples, simplify transitions, or move supporting details into slides.",
          "Read the script aloud. Mark places where you run out of breath, stumble, or need a pause. Those marks often reveal better edits than the word count alone."
        ]
      }
    ],
    table: {
      title: "Speaking pace estimates",
      columns: ["Speaking style", "Approximate pace", "Best for"],
      rows: [
        ["Slow and deliberate", "120-130 wpm", "Formal speech, emotional delivery"],
        ["Conversational", "140-160 wpm", "Presentations, videos, explainers"],
        ["Fast", "170+ wpm", "Energetic delivery, harder to follow"],
        ["Rehearsed baseline", "Around 150 wpm", "General planning estimate"]
      ]
    },
    examples: [
      {
        title: "Opening shortened",
        before:
          "In today's presentation I am going to attempt to explain several different reasons why this decision is important.",
        after: "Today I will explain three reasons this decision matters.",
        why:
          "The after version is easier to say and saves time."
      },
      {
        title: "Written sentence made speakable",
        before:
          "The initiative, which was developed after several meetings and internal reviews, is intended to improve the process for everyone involved.",
        after:
          "We developed this initiative after several internal reviews. Its goal is simple: improve the process for everyone involved.",
        why:
          "The after version gives the speaker clearer pauses and emphasis."
      }
    ],
    caseStudy: {
      title: "Five minute talk",
      body:
        "A 900-word script looked fine on paper but ran over six minutes when read aloud. Cutting one example and shortening the opening brought it closer to 750 words and made the delivery calmer."
    },
    commonMistakes: [
      "Writing to the exact maximum time with no room for pauses.",
      "Using written sentences that are hard to speak aloud.",
      "Forgetting slide transitions, applause, or audience interaction.",
      "Cutting examples before cutting repeated setup.",
      "Skipping rehearsal and trusting the estimate alone."
    ],
    checklist: [
      "Estimate speaking time before rehearsing.",
      "Read the script aloud at least once.",
      "Mark sentences that feel hard to say.",
      "Leave time for pauses and transitions.",
      "Trim repeated points before cutting the main message."
    ],
    howToCheck: [
      "Paste the script into TextPulses and choose Speech Script. Review speaking time, sentence length, paragraph breaks, and sentence flow.",
      "If the script is too long, shorten repeated setup, simplify transitions, and move supporting details to slides or notes."
    ],
    relatedSlugs: ["readability-scores-explained", "academic-essay-word-count-guide", "how-to-count-words-accurately"],
    faq: [
      {
        question: "Should I memorize the exact script?",
        answer:
          "That depends on the event. Many speakers use a script for timing and notes for delivery."
      },
      {
        question: "What speaking speed should I use?",
        answer:
          "150 words per minute is a practical baseline, but rehearsal is the only reliable test."
      },
      {
        question: "Why is speaking time slower than reading time?",
        answer:
          "Speaking includes pauses, emphasis, breathing, and audience processing time."
      },
      {
        question: "Should slide text count as spoken words?",
        answer:
          "Only count slide text if you plan to read it aloud."
      }
    ]
  },
  {
    slug: "keyword-density-what-is-too-much",
    title: "Keyword Density: What Is Too Much?",
    description:
      "Use keyword density as a repetition warning, not a rigid SEO target, and learn how to revise forced phrasing.",
    updated,
    readingTime: "8 min read",
    category: "SEO",
    quickAnswer: [
      "Keyword density can help you notice repetition, but it should not become a formula. A natural article may mention the main topic several times, especially if the topic has no simple synonym.",
      "The problem starts when the same phrase appears so often that the text feels forced. Instead of chasing a perfect percentage, use density to identify wording that may need more variety, examples, or subtopics."
    ],
    whyMatters: [
      "Readers notice mechanical repetition. It can make a page feel less trustworthy, even when the information is useful.",
      "Keyword balance also helps writers improve coverage. If a draft repeats one exact phrase but lacks related terms, examples, or questions, it may be narrow rather than helpful."
    ],
    ruleOfThumb: [
      "Use density as a warning, not a target. If a top phrase feels repeated when you read the draft aloud, revise it.",
      "Add related terms, specific examples, subtopics, use cases, reader questions, and clearer headings instead of repeating the same phrase."
    ],
    sections: [
      {
        title: "Keyword density is a warning, not a target",
        body: [
          "A repeated term can be normal when it names the topic. A page about meta descriptions will naturally say 'meta description' several times. The issue is not the presence of the phrase; it is repetition that feels forced or replaces useful detail.",
          "If every paragraph repeats the exact same phrase, the draft probably needs more precise examples, related vocabulary, and clearer structure."
        ]
      },
      {
        title: "Better alternatives to repetition",
        body: [
          "Instead of repeating one keyword, add related terms, specific examples, subtopics, use cases, questions the reader may ask, and clearer headings.",
          "Variety should not obscure the topic. The goal is natural coverage, not avoiding the main phrase completely."
        ]
      }
    ],
    table: {
      title: "Keyword balance signals",
      columns: ["Signal", "What it may mean", "Revision response"],
      rows: [
        ["Top term above 6%", "Possible overuse", "Replace repeated phrases with specific details"],
        ["Many repeated bigrams", "Mechanical phrasing", "Rewrite headings and transitions"],
        ["Low related vocabulary", "Thin coverage", "Add examples, definitions, or adjacent questions"],
        ["Natural variations", "Healthy coverage", "Keep the wording if it reads clearly"]
      ]
    },
    examples: [
      {
        title: "Repetition made natural",
        before: "Our word counter is a free word counter for people who need a word counter to count words.",
        after:
          "TextPulses helps you count words, check readability, and review repeated phrases before publishing.",
        why:
          "The natural version explains the same topic without forcing the exact phrase again and again."
      },
      {
        title: "Keyword list turned into useful detail",
        before: "SEO title length, SEO title checker, SEO title guide, SEO title tips for SEO titles.",
        after:
          "A useful SEO title keeps the main topic visible, stays concise enough for search snippets, and avoids repeated terms that look mechanical.",
        why:
          "The after version keeps the topic but gives the reader actual guidance."
      }
    ],
    caseStudy: {
      title: "Natural variation",
      body:
        "A page about subject lines repeated 'email subject line' in nearly every sentence. Rewriting some mentions as 'inbox text', 'opening line', and 'message title' made the copy read naturally while keeping the topic clear."
    },
    commonMistakes: [
      "Treating density as a ranking formula.",
      "Repeating exact-match phrases in every paragraph.",
      "Removing necessary terms so aggressively that the topic becomes unclear.",
      "Ignoring repeated two-word and three-word phrases.",
      "Adding synonyms that confuse the reader."
    ],
    checklist: [
      "Review the top one-word, two-word, and three-word phrases.",
      "Read repeated phrases aloud.",
      "Replace forced repetition with specific detail.",
      "Add related subtopics when coverage feels thin.",
      "Keep the main topic clear."
    ],
    howToCheck: [
      "Paste the draft into TextPulses and review Keyword Density. Check one-word, two-word, and three-word phrases, then read the most repeated phrases in context.",
      "If a phrase appears too often, revise the surrounding sentences instead of simply deleting every mention."
    ],
    relatedSlugs: ["blog-post-word-count-guide", "seo-title-length-guide", "readability-scores-explained"],
    faq: [
      {
        question: "Should I remove every repeated keyword?",
        answer:
          "No. Some repetition is natural. Revise repetition that feels forced or distracts from the reader's task."
      },
      {
        question: "Are two-word phrases important?",
        answer:
          "Yes. Repeated two-word phrases often reveal mechanical wording faster than single-word counts."
      },
      {
        question: "Is there a perfect keyword density?",
        answer:
          "No. Use density as a warning signal, not a target percentage."
      },
      {
        question: "Can low density be a problem?",
        answer:
          "Sometimes. If the main topic barely appears, the page may be unclear. The fix is clarity, not stuffing."
      }
    ]
  },
  {
    slug: "readability-scores-explained",
    title: "Readability Scores Explained",
    description:
      "Understand what readability scores can and cannot tell you, and how to revise dense drafts responsibly.",
    updated,
    readingTime: "8 min read",
    category: "Readability",
    quickAnswer: [
      "Readability scores estimate how easy or difficult a draft may feel based on sentence length, word patterns, and structure. They are useful prompts, not final judgments.",
      "A readable draft is not automatically accurate, persuasive, original, or appropriate. A complex draft is not automatically bad. The audience and purpose matter."
    ],
    whyMatters: [
      "Readers abandon confusing text quickly. Long sentences, dense paragraphs, vague wording, and weak transitions can make useful information harder to use.",
      "Readability helps writers spot friction before publishing. It gives you a place to start revising instead of guessing why a draft feels heavy."
    ],
    ruleOfThumb: [
      "Start with the sentence, not the score. Break sentences that contain too many ideas, replace vague words with specific ones, use headings to separate sections, and read the draft aloud.",
      "Do not simplify so much that the text loses accuracy. Expert content may need technical terms, but it still benefits from clear structure."
    ],
    sections: [
      {
        title: "What readability can and cannot tell you",
        body: [
          "Readability can help with spotting long sentences, finding dense paragraphs, estimating audience difficulty, improving scanability, and prompting revision. It cannot guarantee accuracy, expertise, persuasiveness, originality, or search performance.",
          "Use the score as a signal. Then read the draft with the real audience in mind."
        ]
      },
      {
        title: "How to improve readability",
        body: [
          "Break sentences that contain too many ideas. Replace vague words with specific ones. Use headings to separate sections. Turn long lists into bullets. Remove filler phrases.",
          "Reading the draft aloud is especially useful. If you stumble, run out of breath, or lose the point, the sentence probably needs revision."
        ]
      }
    ],
    table: {
      title: "Readability revision signals",
      columns: ["Readability can help with", "Readability cannot guarantee", "Useful edit"],
      rows: [
        ["Spotting long sentences", "Accuracy", "Split or simplify dense sentences"],
        ["Finding dense paragraphs", "Expertise", "Break paragraphs by idea"],
        ["Estimating audience difficulty", "Persuasiveness", "Define technical terms"],
        ["Improving scanability", "Originality", "Use headings and bullets"],
        ["Prompting revision", "Search performance", "Read the draft aloud"]
      ]
    },
    examples: [
      {
        title: "Dense sentence split",
        before:
          "Because the policy applies across several teams and requires staged adoption, users should review the instructions before implementation begins.",
        after:
          "The policy applies across several teams. Review the instructions before implementation begins. Adoption will happen in stages.",
        why:
          "The after version is easier to scan while keeping the same information."
      },
      {
        title: "Vague wording clarified",
        before: "This thing helps people do better work in a lot of different situations.",
        after:
          "The checklist helps writers spot long sentences, repeated terms, and missing examples before publishing.",
        why:
          "The improved version replaces vague words with specific benefits."
      }
    ],
    caseStudy: {
      title: "Business update rewrite",
      body:
        "A policy update scored as difficult because it used long sentences with multiple conditions. Breaking each condition into a separate sentence lowered the reading load without changing the meaning."
    },
    commonMistakes: [
      "Trying to maximize readability score at the expense of accuracy.",
      "Removing necessary technical terms for expert readers.",
      "Ignoring paragraph structure and focusing only on sentence length.",
      "Leaving long introductions before the main point.",
      "Assuming a simple sentence is automatically correct."
    ],
    checklist: [
      "Check average sentence length.",
      "Break paragraphs that contain multiple ideas.",
      "Replace vague words with specific nouns and verbs.",
      "Use bullets for long lists.",
      "Read the draft aloud before publishing."
    ],
    howToCheck: [
      "Paste the draft into TextPulses and review Reading level, Average sentence length, Long sentence warnings, and Sentence Flow.",
      "If the score looks weak, revise the longest sentences first, then check paragraph structure and repeated wording."
    ],
    relatedSlugs: ["speech-timing-calculator-guide", "academic-essay-word-count-guide", "blog-post-word-count-guide"],
    faq: [
      {
        question: "Can a text be too simple?",
        answer:
          "Yes. If simplification removes precision or sounds unnatural for the audience, keep the necessary detail."
      },
      {
        question: "Do readability scores work for every language?",
        answer:
          "No. Many formulas are designed around English patterns and may be less reliable for other languages."
      },
      {
        question: "Should every sentence be short?",
        answer:
          "No. Variation matters. Use shorter sentences for emphasis and longer ones when they clearly connect ideas."
      },
      {
        question: "Can readability prove a draft is good?",
        answer:
          "No. It can reveal friction, but it cannot judge accuracy, originality, or audience fit."
      }
    ]
  },
  {
    slug: "publishfit-score-explained",
    title: "PublishFit Score Explained",
    description:
      "Learn how TextPulses turns length, clarity, readability, keyword balance, and channel rules into a practical readiness score.",
    updated,
    readingTime: "8 min read",
    category: "PublishFit",
    quickAnswer: [
      "PublishFit Score compares a draft with the expectations of the selected publishing channel. A meta description, blog article, email subject, LinkedIn post, speech script, and academic essay should not be judged by the same rules.",
      "The score is a revision checklist, not a guarantee. It does not predict rankings, social engagement, conversions, grades, or editorial acceptance."
    ],
    whyMatters: [
      "Raw counts are helpful, but they do not explain whether the draft fits the channel. A 155-character sentence may be strong as a meta description but weak as a LinkedIn post. A 900-word article may be useful for a focused tutorial but too short for a deep comparison.",
      "PublishFit helps you judge the same text through different lenses. The selected preset changes the length expectations and recommendations."
    ],
    ruleOfThumb: [
      "Choose the preset before interpreting the score. Then read the recommendations, not just the number.",
      "A score in the good range may be enough if the text fits the real audience and context. A perfect score is not required."
    ],
    sections: [
      {
        title: "PublishFit scoring table",
        body: [
          "PublishFit combines length fit, clarity, keyword balance, readability, variety, sentence flow, and publication readiness. Each signal matters differently depending on the selected format.",
          "For example, character count is critical for a meta description or email subject. Paragraph depth matters more for a blog article or academic essay. Speaking time matters for a speech script."
        ]
      },
      {
        title: "Same draft, different presets",
        body: [
          "Text such as 'Count words, check readability, and review keyword balance before publishing' may be close to useful as a meta description because it is concise and explains the tool.",
          "As a blog post, the same text is far too short because it does not explain context, examples, or next steps. That is why the selected preset matters."
        ]
      }
    ],
    table: {
      title: "PublishFit scoring signals",
      columns: ["Signal", "What it checks", "Why it matters"],
      rows: [
        ["Length fit", "Whether the draft fits the selected channel", "Prevents thin or oversized drafts"],
        ["Clarity", "Sentence and wording signals", "Helps the reader understand faster"],
        ["Keyword balance", "Repeated terms and phrases", "Reduces forced repetition"],
        ["Readability", "Estimated ease of reading", "Helps match audience expectations"],
        ["Variety", "Repeated vocabulary patterns", "Encourages more natural writing"],
        ["Sentence flow", "Long and short sentence balance", "Improves rhythm"]
      ]
    },
    examples: [
      {
        title: "Meta description strengthened",
        before: "This tool counts words and helps writers.",
        after:
          "Count words, check readability, and see whether your draft fits SEO snippets, social posts, emails, essays, and speeches.",
        why:
          "The after version names use cases and value while staying concise."
      },
      {
        title: "Blog intro expanded",
        before: "Keyword density matters for SEO writing.",
        after:
          "Keyword density can help writers spot repeated phrases, but it should be treated as a warning signal rather than a target percentage.",
        why:
          "The after version adds nuance and sets up a more useful article."
      }
    ],
    caseStudy: {
      title: "Same text, different channel",
      body:
        "A 155-character sentence scores well as a meta description but poorly as a LinkedIn post because the professional context is too thin. Changing the preset reveals that readiness depends on the destination."
    },
    commonMistakes: [
      "Choosing the wrong preset and treating the score as universal.",
      "Optimizing the number without reading the recommendations.",
      "Assuming a high score guarantees search or social performance.",
      "Ignoring audience and context after improving the score.",
      "Treating every channel as if it had the same length rules."
    ],
    checklist: [
      "Select the correct preset before judging the draft.",
      "Read the status and recommendations.",
      "Check whether the length range matches the channel.",
      "Review clarity, readability, and keyword balance.",
      "Use human judgment before publishing."
    ],
    howToCheck: [
      "Paste the draft into TextPulses, choose the relevant PublishFit preset, and review the score, status, progress bar, and recommendations.",
      "Switch presets only when you are genuinely repurposing the text for a different channel. A lower score in another preset may simply mean the text belongs elsewhere."
    ],
    relatedSlugs: ["meta-description-length-checker-guide", "linkedin-post-length-guide", "speech-timing-calculator-guide"],
    faq: [
      {
        question: "Why does my score change when I switch presets?",
        answer:
          "Each preset has different length expectations and recommendations because each publishing channel has different constraints."
      },
      {
        question: "Should I always aim for 100?",
        answer:
          "No. Aim for a useful draft. A score in the good range can still be ready if the text fits the real audience and context."
      },
      {
        question: "Can PublishFit predict rankings or engagement?",
        answer:
          "No. PublishFit estimates format readiness. It does not predict rankings, clicks, shares, conversions, grades, or editorial acceptance."
      },
      {
        question: "Is PublishFit generated by external AI?",
        answer:
          "No. The score is rule-based and calculated in the browser from text metrics and preset ranges."
      }
    ]
  }
];

const depthAdditions: Record<string, GuideSection[]> = {
  "how-to-count-words-accurately": [
    {
      title: "A reliable final-count workflow",
      body: [
        "Use TextPulses early to keep the draft within the expected range, then use the final destination as the authority when the number is strict. This is especially useful for assignments, client briefs, grant applications, and editorial systems where the receiving platform may have its own counting rules.",
        "Keep a clean copy of the final text before submission. If the count changes after pasting into another tool, compare what changed: headings, references, smart punctuation, hidden notes, or copied formatting are more likely to explain the difference than a broken counter."
      ]
    }
  ],
  "blog-post-word-count-guide": [
    {
      title: "Editorial depth checklist for blog drafts",
      body: [
        "Before adding words, look for missing value. A stronger blog post usually has a clear answer, context for why the answer matters, at least one example, one section on mistakes or exceptions, and a closing step that helps the reader act. Those additions improve the article more than a longer introduction.",
        "After expanding, trim the draft again. A good revision often adds 400 useful words and removes 150 weak ones. The result feels deeper without feeling heavier, which is exactly what searchers and regular readers usually need."
      ]
    }
  ],
  "meta-description-length-checker-guide": [
    {
      title: "How to review a meta description before publishing",
      body: [
        "Read the description without looking at the page title. If the description still explains the page, audience, and benefit, it is probably specific enough. If it could describe dozens of pages, add the actual task, outcome, or page format.",
        "Next, compare the description with the page content. A snippet should not promise a checklist if the page has no checklist, or a calculator if the page only contains an article. Honest descriptions are safer for trust and usually easier to maintain across a site."
      ]
    },
    {
      title: "When the length range is not enough",
      body: [
        "A description can sit perfectly between 120 and 160 characters and still be weak. Length only tells you whether the sentence fits a practical snippet range. It does not tell you whether the message is clear, truthful, or differentiated from similar pages.",
        "When two descriptions have similar length, choose the one that gives the searcher a more concrete reason to visit. Specific verbs such as compare, calculate, check, plan, review, or learn often work better than broad claims such as discover more or improve today."
      ]
    }
  ],
  "seo-title-length-guide": [
    {
      title: "How to evaluate title quality beyond length",
      body: [
        "After checking character count, ask whether the title can stand alone. A searcher should understand the topic without reading the URL, brand, or meta description. If the title needs extra context to make sense, it is probably too vague.",
        "Then check whether the title matches the page type. A guide should sound like a guide, a tool should sound like a tool, and a comparison should make the comparison clear. This prevents titles from becoming clever labels that do not help the reader choose."
      ]
    },
    {
      title: "How to keep titles natural",
      body: [
        "A natural title usually has one main phrase and one useful modifier. Too many modifiers can make the title feel like a keyword stack. If you are tempted to add several synonyms, move some of that context into the meta description or introduction instead.",
        "Use the brand name when it helps recognition, support, or trust. For a new site, the topic often deserves the first position because the searcher is usually trying to solve a task before they recognize the publisher."
      ]
    }
  ],
  "youtube-title-description-length-guide": [
    {
      title: "Planning the title and description together",
      body: [
        "Treat the title and first description lines as a pair. The title should earn attention by naming the topic and outcome. The description should confirm what the viewer will learn, then add context that would make the title too long.",
        "If the title uses a short hook, the description should become more specific. If the title is already detailed, the description can add resources, chapters, and next steps. This prevents both fields from repeating the same wording."
      ]
    },
    {
      title: "Before publishing a video draft",
      body: [
        "Read the title beside a few competing titles in the same topic. If yours is the only one that hides the subject, revise it. If yours promises more than the video delivers, reduce the claim before publishing.",
        "For descriptions, check the first lines on a narrow screen. Viewers should not have to pass channel boilerplate, social links, or sponsor text before understanding the video. Put supporting links after the summary unless a link is the central action."
      ]
    }
  ],
  "linkedin-post-length-guide": [
    {
      title: "How to revise a LinkedIn post without making it generic",
      body: [
        "Keep the human detail that makes the post specific. Many weak revisions remove the story and leave only a polished lesson. A stronger revision keeps the situation, removes unnecessary setup, and makes the takeaway easier to scan.",
        "If the post is long, cut repeated context before cutting the example. If the post is short, add the missing reason the point matters. Readers are more likely to respond to a clear observation than to a broad statement about success, leadership, or consistency."
      ]
    },
    {
      title: "Checking rhythm and scanability",
      body: [
        "LinkedIn writing often benefits from short paragraphs, but every line should still carry meaning. One-sentence paragraphs can improve rhythm; too many empty one-liners can feel theatrical.",
        "Before posting, scan only the first line of each paragraph. If those lines do not create a logical path, reorganize the draft. The reader should be able to understand the movement from problem to insight to takeaway."
      ]
    }
  ],
  "email-subject-line-length-guide": [
    {
      title: "Using preview text with the subject line",
      body: [
        "A subject line does not work alone. In many inboxes, preview text appears beside it, so the best email copy uses both fields together. The subject can name the topic while the preview adds detail, deadline, or context.",
        "Avoid repeating the same phrase in the subject and preview. If the subject says 'Content audit deadline reminder', the preview can explain the date or action instead of saying 'This is a reminder about the content audit deadline'."
      ]
    },
    {
      title: "Trust signals in subject lines",
      body: [
        "Trust matters more than cleverness for support, billing, product updates, and professional communication. A subject line that says exactly what changed often performs better for the recipient than one that tries to create curiosity.",
        "Use urgency only when the message is truly time-sensitive. If every message sounds urgent, the audience learns to ignore the signal. Clear wording protects long-term trust."
      ]
    }
  ],
  "academic-essay-word-count-guide": [
    {
      title: "Using word count to plan argument depth",
      body: [
        "A useful essay plan assigns words to jobs. The introduction sets the argument, body paragraphs develop claims, evidence supports those claims, and the conclusion explains the final significance. If one section consumes too much space, another section may become thin.",
        "Before drafting, estimate how many paragraphs the word count can support. During revision, check whether each paragraph advances the argument or simply restates the thesis. This helps reduce both underdeveloped and overlong essays."
      ]
    },
    {
      title: "Academic clarity without oversimplifying",
      body: [
        "Academic writing can be precise without being tangled. Technical terms are appropriate when the subject requires them, but the sentence still needs a clear subject, verb, and relationship between ideas.",
        "If a sentence contains several claims, split it and decide which claim deserves evidence. This usually improves the essay more than replacing every long word with a short one."
      ]
    }
  ],
  "speech-timing-calculator-guide": [
    {
      title: "Building pauses into the script",
      body: [
        "A speech script should include room for emphasis, transitions, and audience processing. If every sentence is packed with information, the audience may understand the words but miss the point. Pauses are part of the message, not empty space.",
        "When timing a script, add a little margin for greetings, slide changes, laughter, questions, or applause. A script that fits only when read quickly is not really within the time limit."
      ]
    },
    {
      title: "Editing for the ear",
      body: [
        "Written clarity and spoken clarity are different. A sentence that looks polished on the page may be difficult to deliver aloud if it has too many clauses or weak transitions.",
        "Read the script once while standing, not silently at the screen. Mark any sentence that makes you restart. Those are the best places to shorten, split, or rewrite."
      ]
    }
  ],
  "keyword-density-what-is-too-much": [
    {
      title: "How to diagnose repetition in context",
      body: [
        "Do not revise a keyword just because it appears in the top phrase list. First, inspect where it appears. Repetition in headings, examples, and definitions may be normal. Repetition in every sentence of the same paragraph is more likely to feel forced.",
        "A useful review looks at clusters. If the same two-word phrase appears several times close together, rewrite the surrounding paragraph. If mentions are spread naturally across a long guide, the density may be acceptable."
      ]
    },
    {
      title: "Adding coverage instead of stuffing",
      body: [
        "When a draft feels repetitive, add coverage before adding synonyms. A page about keyword density can discuss examples, risks, review workflow, related phrases, and when not to worry. That creates natural variety because the article is doing more useful work.",
        "Synonyms help only when they are accurate. Do not replace a clear term with a vague one just to reduce density. The reader should still know exactly what the page is about."
      ]
    }
  ],
  "readability-scores-explained": [
    {
      title: "A practical readability review order",
      body: [
        "Start with the longest sentences, then review paragraph length, then check repeated phrases. This order works because a few dense sentences can make an otherwise simple draft feel difficult. Fixing those sentences often improves the whole page.",
        "After sentence-level edits, review headings. Clear headings reduce the burden on every paragraph because readers can predict what each section is trying to do."
      ]
    },
    {
      title: "Matching readability to the audience",
      body: [
        "A beginner guide should usually be more direct than a specialist reference. An academic essay may need technical language, while a contact page should be plain and fast. The same score can mean different things depending on who is reading.",
        "Use readability to ask better questions: who is the audience, what do they already know, and what decision should they be able to make after reading?"
      ]
    }
  ],
  "publishfit-score-explained": [
    {
      title: "How to interpret the score responsibly",
      body: [
        "PublishFit is most useful when you read the recommendations behind the number. A score may fall because the draft is too short, too long, too repetitive, or poorly matched to the selected channel. Those causes require different edits.",
        "Do not rewrite a good sentence only to chase a perfect score. If the draft is clear, accurate, and appropriate for the audience, a strong but imperfect score may already be enough."
      ]
    },
    {
      title: "Repurposing content across channels",
      body: [
        "A draft often needs a different version for each channel. A blog intro can become a LinkedIn post, but it may need a stronger first line and less background. A meta description can become an email subject only if the wording is tightened and the action is clear.",
        "Switch presets when repurposing and treat the new score as a channel-specific review. This helps avoid publishing one generic text everywhere."
      ]
    }
  ]
};

const finalAdditions: Record<string, GuideSection[]> = {
  "seo-title-length-guide": [
    {
      title: "Balancing title length with page promise",
      body: [
        "The strongest SEO title is not always the shortest title. It is the shortest honest version of the page promise. If cutting the title removes the topic, page type, or useful qualifier, the result may be compact but unclear.",
        "When revising, create two versions: one that is clear but a little long, and one that is short but possibly vague. Then combine the best parts. This usually produces a title that is concise without becoming empty."
      ]
    }
  ],
  "youtube-title-description-length-guide": [
    {
      title: "Using examples to check clarity",
      body: [
        "A simple clarity test is to show the title to someone without the thumbnail and ask what they expect the video to cover. If their answer is far from the actual video, the title is probably relying too much on curiosity or channel context.",
        "Do the same with the first description line. It should confirm the topic and value quickly, especially for viewers arriving from search or embeds where they may not see the full page layout."
      ]
    }
  ],
  "linkedin-post-length-guide": [
    {
      title: "When a LinkedIn post should be shorter",
      body: [
        "Shorten the post when the setup is longer than the insight, when multiple stories compete for attention, or when the takeaway can be understood without background. A concise post can feel more confident when the point is narrow.",
        "Keep the post longer when the story needs tension, evidence, or a step-by-step explanation. Length is useful when every section helps the reader understand the lesson."
      ]
    }
  ],
  "email-subject-line-length-guide": [
    {
      title: "Matching subject line to email type",
      body: [
        "Different emails need different subject line styles. A support reply should be direct and searchable. A newsletter can include the topic and format. A reminder should include the action or deadline. A product update should say what changed rather than only saying that something changed.",
        "This matters because recipients use subject lines to prioritize attention. If the email requires action, make the action visible. If the email is informational, make the topic visible. If the email is sensitive, avoid clever wording that could be misunderstood."
      ]
    },
    {
      title: "How to test a subject before sending",
      body: [
        "Place the subject beside the sender name and preview text. If the three pieces repeat each other, revise. If the subject is clear but the preview adds no value, move a useful detail from the body into the preview.",
        "Also check whether the subject will still make sense next week in a searchable inbox. A clear subject becomes useful again when someone needs to find the message later."
      ]
    }
  ],
  "academic-essay-word-count-guide": [
    {
      title: "What to do when the essay is over the limit",
      body: [
        "When an essay is over the limit, remove repetition before removing evidence. Look for sentences that restate the thesis, paragraphs that repeat the same claim, and transitions that explain what the structure already makes clear.",
        "If the essay is still long, decide which evidence best supports the argument. A shorter essay with stronger evidence is usually better than a longer essay that includes every note from research."
      ]
    }
  ],
  "speech-timing-calculator-guide": [
    {
      title: "Planning for delivery conditions",
      body: [
        "The same script can run differently depending on the room, microphone, nerves, and audience. A speaker may slow down during an emotional section, pause for slides, or repeat a point when the audience looks uncertain.",
        "Build those realities into the plan. If the time limit is strict, target a script that runs slightly short during rehearsal. That margin gives the speaker space to sound natural instead of rushed, and it leaves time for a composed closing with no abrupt ending at all."
      ]
    }
  ],
  "keyword-density-what-is-too-much": [
    {
      title: "When repetition is actually useful",
      body: [
        "Some repetition helps readers. Definitions, instructions, and technical topics may need the same term repeated so the page stays clear. Replacing every repeated word can make the writing less precise.",
        "The question is whether repetition supports understanding. If it labels a concept consistently, keep it. If it exists only to insert a keyword again, rewrite the sentence with a clearer example or supporting detail."
      ]
    }
  ],
  "readability-scores-explained": [
    {
      title: "Readability and trust",
      body: [
        "Clear writing can increase trust because readers can see the claim, evidence, and next step without fighting the sentence. Dense writing sometimes hides weak logic by making the reader work too hard to follow it.",
        "That does not mean every topic should be simplified to the same level. Trust comes from matching the explanation to the audience. A beginner page should remove friction. An expert page can keep technical terms, but it should still organize the argument clearly."
      ]
    },
    {
      title: "When not to chase the score",
      body: [
        "Do not chase readability if the edit removes necessary meaning. A legal, academic, medical, or technical text may need precise terms. The better revision explains those terms or improves structure rather than deleting them.",
        "Use the score to find friction, then decide whether the friction is necessary. That decision is editorial, not mathematical."
      ]
    }
  ],
  "publishfit-score-explained": [
    {
      title: "Using PublishFit as a pre-publish checklist",
      body: [
        "Before sending or publishing, use PublishFit to ask a short sequence of questions: did I choose the correct channel, does the text fit the range, is it readable, are keywords balanced, and does the recommendation point to a clear edit?",
        "This workflow keeps the score practical. Instead of treating it as a verdict, you use it to find the next useful revision."
      ]
    }
  ]
};

export const guides: Guide[] = baseGuides.map((guide) => ({
  ...guide,
  sections: [
    ...guide.sections,
    ...(depthAdditions[guide.slug] ?? []),
    ...(finalAdditions[guide.slug] ?? [])
  ]
}));

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function getRelatedGuides(guide: Guide) {
  return guide.relatedSlugs
    .map((slug) => guides.find((related) => related.slug === slug))
    .filter((related): related is Guide => Boolean(related));
}
