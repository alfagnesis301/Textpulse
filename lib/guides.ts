export type GuideSection = {
  title: string;
  body: string[];
};

export type GuideTable = {
  title: string;
  columns: string[];
  rows: string[][];
};

export type GuideBeforeAfter = {
  before: string;
  after: string;
  note: string;
};

export type GuideCaseStudy = {
  title: string;
  body: string;
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  updated: string;
  readingTime: string;
  category: string;
  sections: GuideSection[];
  table?: GuideTable;
  commonMistakes?: string[];
  caseStudy?: GuideCaseStudy;
  beforeAfter?: GuideBeforeAfter;
  checklist: string[];
  faq: {
    question: string;
    answer: string;
  }[];
};

type GuideEnhancement = Pick<Guide, "table" | "commonMistakes" | "caseStudy" | "beforeAfter"> & {
  extraFaq?: Guide["faq"];
};

const baseGuides: Guide[] = [
  {
    slug: "how-to-count-words-accurately",
    title: "How to Count Words Accurately",
    description:
      "Learn what usually counts as a word, why tools may disagree, and how to prepare clean text before checking word count.",
    updated: "April 26, 2026",
    readingTime: "5 min read",
    category: "Word Count",
    sections: [
      {
        title: "Why word counts differ",
        body: [
          "Word count sounds simple until punctuation, hyphenated terms, emojis, URLs, contractions, headings, tables, and copied formatting enter the draft. Different editors and publishing systems use different parsing rules, so a count in one tool can be slightly different from a count in another.",
          "For everyday writing, the most useful approach is consistency. Use one tool for drafting decisions, keep formatting clean, and confirm the final count in the platform where the text will be submitted or published."
        ]
      },
      {
        title: "What usually counts as a word",
        body: [
          "Most word counters treat groups of letters or numbers as words. Contractions usually count as one word. Hyphenated phrases may count as one word or multiple words depending on the tool. URLs and email addresses are often counted as one item, even though they contain punctuation.",
          "TextPulses uses browser-side parsing designed for practical writing checks. It handles multiple spaces, line breaks, symbols, and emojis without sending the draft to a server."
        ]
      },
      {
        title: "How to prepare text before counting",
        body: [
          "Before checking a final count, remove duplicate line breaks, trim accidental spaces, and make sure pasted text does not include navigation labels, comments, boilerplate, or hidden copied content.",
          "If the count matters for school, publishing, or client work, paste only the body text you intend to submit. Then compare the final number with the editor or platform that will receive the finished piece."
        ]
      }
    ],
    checklist: [
      "Paste only the content you plan to submit or publish.",
      "Remove duplicate line breaks and accidental copied navigation text.",
      "Check whether headings, captions, or references should be included.",
      "Use the same counter throughout the drafting process.",
      "Confirm final requirements in the destination platform."
    ],
    faq: [
      {
        question: "Do all word counters produce the same result?",
        answer:
          "No. Tools may treat punctuation, contractions, hyphenated words, numbers, and URLs differently."
      },
      {
        question: "Should headings count toward word count?",
        answer:
          "It depends on the assignment or publishing requirement. If headings are part of the submitted text, include them unless the requirement says otherwise."
      }
    ]
  },
  {
    slug: "blog-post-word-count-guide",
    title: "Word Count Guide for Blog Posts",
    description:
      "A practical guide to blog post length, structure, readability, and when a post needs more depth before publishing.",
    updated: "April 26, 2026",
    readingTime: "6 min read",
    category: "Blogging",
    sections: [
      {
        title: "There is no perfect blog length",
        body: [
          "A useful blog post is long enough to answer the reader's question and short enough to avoid padding. A quick announcement may work at a few hundred words, while a tutorial, comparison, or evergreen guide usually needs more depth.",
          "TextPulses recommends 600+ words for blog depth because many articles below that point struggle to explain context, examples, and next steps. That does not mean every post must be long. It means short posts should be intentionally focused."
        ]
      },
      {
        title: "How to judge depth",
        body: [
          "A stronger blog post usually explains the problem, gives useful examples, answers likely follow-up questions, and helps the reader decide what to do next. Word count is only one signal; paragraph structure and readability matter just as much.",
          "If a draft feels thin, add specifics rather than filler. A checklist, short example, comparison table, or common mistake section can make a post more useful without making it bloated."
        ]
      },
      {
        title: "Structure for scanning",
        body: [
          "Most web readers scan before they commit. Keep paragraphs short, use descriptive subheadings, and vary sentence length so the article feels easy to move through.",
          "A practical blog draft should have enough paragraphs to create visual rhythm. One long block of text can feel heavy even when the word count is reasonable."
        ]
      }
    ],
    checklist: [
      "Use the headline and introduction to define the reader's problem.",
      "Add examples when advice would otherwise feel generic.",
      "Break long paragraphs into focused sections.",
      "Check keyword density without forcing repeated phrases.",
      "Review reading level and long sentence warnings before publishing."
    ],
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
      }
    ]
  },
  {
    slug: "meta-description-length-checker-guide",
    title: "Meta Description Length Checker Guide",
    description:
      "Understand practical meta description length, snippet clarity, and how to write concise descriptions for search results.",
    updated: "April 26, 2026",
    readingTime: "5 min read",
    category: "SEO",
    sections: [
      {
        title: "What a meta description should do",
        body: [
          "A meta description is a short summary that can appear in search results. Search engines may rewrite it, but a clear description still helps you define the page promise and improve the snippet candidates available to search engines.",
          "The best descriptions are specific, readable, and aligned with the page content. They should not overpromise, repeat keywords unnaturally, or read like a list of search terms."
        ]
      },
      {
        title: "Practical length range",
        body: [
          "TextPulses evaluates meta descriptions against a 120 to 160 character ideal range, with warnings below 90 or above 170 characters. This is not a guarantee of display length, but it is a useful writing range for concise snippets.",
          "A description below the range may feel vague. A description above the range may be truncated or rewritten, especially on narrow screens."
        ]
      },
      {
        title: "How to improve a draft",
        body: [
          "Lead with the main value of the page. Use active language, include the topic naturally, and remove filler phrases such as vague openers or repeated brand language.",
          "If the description is too long, cut secondary benefits first. If it is too short, add the audience, outcome, or specific use case."
        ]
      }
    ],
    checklist: [
      "Keep the page benefit near the front.",
      "Write one natural sentence or two compact clauses.",
      "Stay close to 120-160 characters when possible.",
      "Avoid keyword stuffing.",
      "Make sure the description matches the page."
    ],
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
      }
    ]
  },
  {
    slug: "seo-title-length-guide",
    title: "SEO Title Length Guide",
    description:
      "Learn how to write concise SEO titles, avoid truncation risk, and keep the main topic visible.",
    updated: "April 26, 2026",
    readingTime: "5 min read",
    category: "SEO",
    sections: [
      {
        title: "Why title length matters",
        body: [
          "The SEO title is often the first text a searcher sees. It has to communicate topic, relevance, and usefulness quickly. A title that is too vague may be ignored; a title that is too long may be truncated or rewritten.",
          "TextPulses uses a 40 to 60 character ideal range for SEO titles, with a warning above 65 characters. This keeps the title compact while leaving room for meaningful wording."
        ]
      },
      {
        title: "Put the main idea early",
        body: [
          "Searchers scan quickly, especially on mobile. Put the primary topic near the beginning and avoid delaying the useful phrase with generic wording.",
          "For example, a title that starts with the specific guide topic is usually stronger than one that opens with broad language before revealing the subject."
        ]
      },
      {
        title: "Avoid mechanical titles",
        body: [
          "A title should be clear without sounding like a keyword list. Repeating the same term can reduce trust and make the title feel less editorial.",
          "Use a natural phrase, one clear promise, and only add the brand when it helps recognition or trust."
        ]
      }
    ],
    checklist: [
      "Aim for 40-60 characters.",
      "Place the primary topic early.",
      "Use one clear promise or angle.",
      "Avoid repeating the same keyword.",
      "Check the title on mobile-sized screens."
    ],
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
      }
    ]
  },
  {
    slug: "youtube-title-description-length-guide",
    title: "YouTube Title and Description Length Guide",
    description:
      "Plan clearer YouTube titles and descriptions with practical length checks, hooks, and first-line guidance.",
    updated: "April 26, 2026",
    readingTime: "6 min read",
    category: "Video",
    sections: [
      {
        title: "Titles need clarity before cleverness",
        body: [
          "A YouTube title should help a viewer understand the topic quickly. Curiosity can help, but only when the subject is still clear.",
          "TextPulses uses an ideal title range of 45 to 70 characters and warns above 100 characters. The goal is to keep the hook readable across search, recommendations, and mobile layouts."
        ]
      },
      {
        title: "Descriptions need a strong opening",
        body: [
          "The first part of a YouTube description often receives the most attention. TextPulses recommends making the first 150 characters useful, direct, and aligned with the video promise.",
          "A description can be much longer than a title, but length should support the viewer. Add context, links, timestamps, sources, and next steps when they genuinely help."
        ]
      },
      {
        title: "How to avoid weak video copy",
        body: [
          "Weak titles hide the topic, repeat filler words, or overstate the value. Weak descriptions start with generic channel language instead of explaining the video.",
          "Before publishing, check whether a new viewer could understand the video without already knowing your channel."
        ]
      }
    ],
    checklist: [
      "Keep the title clear at a glance.",
      "Put the main topic or outcome early.",
      "Make the first 150 description characters useful.",
      "Avoid repeating the same keyword unnaturally.",
      "Use longer descriptions for context, timestamps, and resources."
    ],
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
      }
    ]
  },
  {
    slug: "linkedin-post-length-guide",
    title: "LinkedIn Post Length Guide",
    description:
      "Write LinkedIn posts with clear structure, readable length, and professional pacing.",
    updated: "April 26, 2026",
    readingTime: "5 min read",
    category: "Social Media",
    sections: [
      {
        title: "LinkedIn posts need a visible point",
        body: [
          "A LinkedIn post competes with updates, opinions, job news, and professional stories. Readers need to see the point quickly or they will move on.",
          "TextPulses uses a 150 to 1300 character ideal range for LinkedIn posts. That range supports concise professional ideas without forcing every post into a long essay."
        ]
      },
      {
        title: "Structure improves readability",
        body: [
          "Short paragraphs often work better than dense blocks. Start with the situation, tension, result, or useful claim. Then support it with a detail, example, or takeaway.",
          "A post can be longer when it tells a story or explains a framework, but every paragraph should earn its place."
        ]
      },
      {
        title: "Tone and clarity",
        body: [
          "Professional does not have to mean stiff. Use direct language, avoid jargon where possible, and make the takeaway useful to people outside your immediate team.",
          "Before posting, read the draft once as a stranger. If the value appears only at the end, consider moving it earlier."
        ]
      }
    ],
    checklist: [
      "Make the point clear in the first few lines.",
      "Use short paragraphs for scanning.",
      "Cut generic openers.",
      "Check sentence length and flow.",
      "End with a useful conclusion or clear question."
    ],
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
      }
    ]
  },
  {
    slug: "email-subject-line-length-guide",
    title: "Email Subject Line Length Guide",
    description:
      "Improve subject lines with practical length ranges, inbox clarity, and wording checks.",
    updated: "April 26, 2026",
    readingTime: "5 min read",
    category: "Email",
    sections: [
      {
        title: "Subject lines are scanning text",
        body: [
          "A subject line is read quickly, often on a phone, surrounded by many other messages. It should communicate the reason to open without hiding the main point.",
          "TextPulses uses an ideal subject line range of 30 to 60 characters. This range is compact enough for scanning while leaving room for a specific benefit or topic."
        ]
      },
      {
        title: "Clarity beats filler",
        body: [
          "Words like update, quick note, newsletter, or announcement can be useful, but they should not replace the actual reason the email matters.",
          "If the subject is too long, remove soft openers first. If it is too short, add the specific item, deadline, benefit, or audience."
        ]
      },
      {
        title: "Avoid misleading urgency",
        body: [
          "Urgency can be helpful when it is true. Fake urgency may increase opens once but reduce trust over time.",
          "A good subject line sets a clear expectation for the email body. If the body cannot deliver on the subject, revise the subject."
        ]
      }
    ],
    checklist: [
      "Aim for 30-60 characters.",
      "Put the strongest noun or benefit near the front.",
      "Avoid vague filler.",
      "Do not use false urgency.",
      "Match the promise in the email body."
    ],
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
      }
    ]
  },
  {
    slug: "academic-essay-word-count-guide",
    title: "Academic Essay Word Count Guide",
    description:
      "Plan essay length, paragraph structure, sentence clarity, and lexical variety before submission.",
    updated: "April 26, 2026",
    readingTime: "6 min read",
    category: "Academic Writing",
    sections: [
      {
        title: "Word count supports argument depth",
        body: [
          "An essay word count is not just a limit. It is a signal about the expected depth of argument, evidence, explanation, and structure.",
          "TextPulses evaluates academic essays with word count, paragraph count, average sentence length, and lexical variety. These signals cannot grade the essay, but they can highlight drafts that need more development or clearer structure."
        ]
      },
      {
        title: "Paragraphs show organization",
        body: [
          "A strong essay normally uses paragraphs to separate claims, evidence, analysis, and transitions. If an essay has very few paragraphs, the argument may be difficult to follow even when the word count is high.",
          "Each paragraph should advance one main idea. If a paragraph contains multiple unrelated points, split it. If several paragraphs repeat the same point, combine or revise them."
        ]
      },
      {
        title: "Sentence length and readability",
        body: [
          "Academic writing can include complex ideas, but long sentences still need control. A sentence that tries to carry too many claims can obscure the argument.",
          "Use longer sentences when they clarify relationships between ideas, and shorter sentences when you need emphasis or transition."
        ]
      }
    ],
    checklist: [
      "Confirm the assignment's word count rules.",
      "Use paragraphs to organize claims and evidence.",
      "Watch for very long sentences.",
      "Check repeated words and low variety.",
      "Leave time for manual proofreading."
    ],
    faq: [
      {
        question: "Can TextPulses grade my essay?",
        answer:
          "No. It provides writing signals, not academic grading or subject-matter evaluation."
      },
      {
        question: "Should references count toward word count?",
        answer:
          "That depends on the institution or assignment. Always check the official instructions."
      }
    ]
  },
  {
    slug: "speech-timing-calculator-guide",
    title: "Speech Timing Calculator Guide",
    description:
      "Estimate speaking time, revise scripts for delivery, and adjust pacing for short and long speeches.",
    updated: "April 26, 2026",
    readingTime: "5 min read",
    category: "Speech Writing",
    sections: [
      {
        title: "Speaking time is only an estimate",
        body: [
          "Speech timing depends on delivery speed, pauses, audience reaction, emphasis, and whether the speaker reads or speaks conversationally.",
          "TextPulses estimates speaking time at 150 words per minute by default. This is a practical planning baseline, not a promise of exact delivery time."
        ]
      },
      {
        title: "Plan for pauses",
        body: [
          "A script that fits perfectly in a calculator may run long when delivered aloud. Pauses, gestures, slide transitions, and audience response all add time.",
          "For important talks, write slightly under the maximum time and rehearse with a timer. If the speech feels rushed, cut examples before cutting the main structure."
        ]
      },
      {
        title: "Use shorter spoken sentences",
        body: [
          "Sentences that read well on screen can be hard to deliver. Spoken scripts usually benefit from shorter sentences, clearer transitions, and repeated signposts.",
          "If you stumble while reading aloud, the script likely needs simpler phrasing or better rhythm."
        ]
      }
    ],
    checklist: [
      "Estimate time, then rehearse aloud.",
      "Leave room for pauses and transitions.",
      "Shorten sentences that are hard to speak.",
      "Keep the opening and closing clear.",
      "Cut supporting examples if the script runs long."
    ],
    faq: [
      {
        question: "How many words is a 5 minute speech?",
        answer:
          "At 150 words per minute, a 5 minute speech is roughly 750 words before pauses and delivery variation."
      },
      {
        question: "Should I write exactly to the time limit?",
        answer:
          "No. Leave a margin so you do not have to rush during delivery."
      }
    ]
  },
  {
    slug: "keyword-density-guide",
    title: "Keyword Density: What Is Too Much?",
    description:
      "Understand keyword density, overuse warnings, phrase frequency, and how to keep SEO writing natural.",
    updated: "April 26, 2026",
    readingTime: "6 min read",
    category: "SEO",
    sections: [
      {
        title: "Keyword density is a warning signal",
        body: [
          "Keyword density measures how often a word or phrase appears compared with the rest of the text. It can help reveal repetition, but it should not be treated as a formula for ranking.",
          "A useful article can mention a topic several times naturally. A weak article may repeat the same phrase so often that it distracts the reader."
        ]
      },
      {
        title: "When repetition becomes a problem",
        body: [
          "Repetition becomes a problem when the same phrase appears in nearly every sentence, headings feel mechanical, or synonyms and related ideas are missing.",
          "TextPulses flags overused keywords when the top meaningful term appears unusually often. This helps you revise before the copy feels forced."
        ]
      },
      {
        title: "Better than stuffing",
        body: [
          "Instead of repeating a keyword, answer related questions, define important terms, give examples, and use natural variations where they help the reader.",
          "Good keyword balance supports clarity. It should make the page easier to understand, not harder to read."
        ]
      }
    ],
    checklist: [
      "Check one-word, two-word, and three-word phrase frequency.",
      "Reduce repetition that feels unnatural.",
      "Use related terms where they improve clarity.",
      "Do not force keywords into every heading.",
      "Read the text aloud to catch mechanical phrasing."
    ],
    faq: [
      {
        question: "Is there an ideal keyword density percentage?",
        answer:
          "No universal percentage works for every topic. Use density as a warning signal and prioritize natural, useful writing."
      },
      {
        question: "Can keyword stuffing hurt readability?",
        answer:
          "Yes. Excess repetition can make copy feel unnatural and less trustworthy."
      }
    ]
  },
  {
    slug: "readability-scores-explained",
    title: "Readability Scores Explained",
    description:
      "Learn what readability estimates can and cannot tell you about sentence length, word choice, and audience fit.",
    updated: "April 26, 2026",
    readingTime: "5 min read",
    category: "Readability",
    sections: [
      {
        title: "Readability is an estimate",
        body: [
          "Readability formulas usually look at sentence length, word length, and syllable patterns. They can help identify dense writing, but they do not understand nuance, expertise, humor, or audience expectations.",
          "TextPulses provides an approximate reading level to support revision. It should be used with judgment, not as a strict rule."
        ]
      },
      {
        title: "What scores miss",
        body: [
          "A short sentence can still be confusing. A long sentence can be clear when it is well structured. Technical terms may be necessary for expert audiences, even if they lower a readability score.",
          "Readability is most useful when it points you toward sentences worth reviewing manually."
        ]
      },
      {
        title: "How to improve readability",
        body: [
          "Break long sentences, remove unnecessary qualifiers, replace vague wording with specific terms, and use paragraphs to separate ideas.",
          "The goal is not always to make text simple. The goal is to make it appropriate for the audience and purpose."
        ]
      }
    ],
    checklist: [
      "Review sentences above 28 words.",
      "Replace vague phrasing with specific wording.",
      "Use shorter paragraphs for web content.",
      "Keep necessary technical terms when they help the audience.",
      "Use scores as prompts for human review."
    ],
    faq: [
      {
        question: "Is a high readability score always better?",
        answer:
          "Not always. Expert or academic writing may need specialized language. Audience fit matters."
      },
      {
        question: "Can readability tools understand tone?",
        answer:
          "No. They estimate structure and complexity, but they do not fully understand tone or intent."
      }
    ]
  },
  {
    slug: "publishfit-score-explained",
    title: "How PublishFit Score Works",
    description:
      "See how TextPulses evaluates publication readiness with transparent rules for different channels.",
    updated: "April 26, 2026",
    readingTime: "6 min read",
    category: "TextPulses",
    sections: [
      {
        title: "Why one score is not enough",
        body: [
          "The same text can be perfect for one channel and wrong for another. A 55 character line might be excellent for an SEO title, too short for a LinkedIn post, and irrelevant for a speech script.",
          "PublishFit Score starts by asking where the text will be used. The selected preset changes the length expectations and recommendations."
        ]
      },
      {
        title: "Signals used in the score",
        body: [
          "PublishFit combines length fit, clarity, keyword balance, readability, and lexical variety. These are rule-based signals calculated in the browser.",
          "The score does not use external AI, does not send the draft to a server, and does not claim to predict rankings, engagement, grades, or conversions."
        ]
      },
      {
        title: "How to use it well",
        body: [
          "Use the score as a revision checklist. If a draft is too long, decide whether to trim or change the selected channel. If keyword balance is low, reduce repetition. If readability is weak, review long sentences.",
          "A high score means the draft fits the selected rules reasonably well. Human review still matters for accuracy, tone, originality, and context."
        ]
      }
    ],
    checklist: [
      "Choose the correct channel preset.",
      "Review the length status first.",
      "Use recommendations as revision prompts.",
      "Check long sentences and repeated words manually.",
      "Do not treat the score as a publishing guarantee."
    ],
    faq: [
      {
        question: "Does PublishFit use AI?",
        answer:
          "No. It uses transparent browser-side rules based on length, readability, repetition, and related writing signals."
      },
      {
        question: "Can PublishFit predict performance?",
        answer:
          "No. It estimates format readiness, not rankings, engagement, or audience response."
      }
    ]
  }
];

const guideEnhancements: Record<string, GuideEnhancement> = {
  "how-to-count-words-accurately": {
    table: {
      title: "Common counting situations",
      columns: ["Text element", "Typical treatment", "What to check"],
      rows: [
        ["Hyphenated phrase", "One or multiple words", "Confirm the rule used by the final platform."],
        ["URL or email address", "Often one item", "Remove tracking URLs if they are not part of the draft."],
        ["Heading", "Usually included", "Exclude only if the assignment says headings do not count."],
        ["Reference list", "Depends on context", "Academic requirements often define this separately."]
      ]
    },
    commonMistakes: [
      "Counting copied navigation text or comments as part of the draft.",
      "Switching tools at the end and treating a small difference as an error.",
      "Forgetting that references, captions, or appendices may have separate rules."
    ],
    caseStudy: {
      title: "Mini case: client article handoff",
      body:
        "A writer drafts a 950 word article in a document editor, then pastes it into a CMS and sees 943 words. The difference comes from a URL, a hyphenated product name, and a hidden comment that was copied into the editor. The practical fix is not to chase an exact universal number, but to clean the text and use the CMS count as the final submission count."
    },
    beforeAfter: {
      before: "This draft includes copied menu labels, two blank sections, and three hidden comments from the source document.",
      after: "This draft includes only the article body, headings, and final call to action intended for publication.",
      note: "Clean input makes the count more useful than trying to force every tool to agree."
    },
    extraFaq: [
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
  "blog-post-word-count-guide": {
    table: {
      title: "Practical blog length examples",
      columns: ["Approximate length", "Best fit", "What it should include"],
      rows: [
        ["300 words", "News update or quick answer", "One clear point, minimal context, direct next step."],
        ["600 words", "Focused how-to or opinion", "Problem, answer, example, and short checklist."],
        ["1,000 words", "Useful evergreen post", "Multiple sections, examples, common mistakes, FAQ."],
        ["2,000 words", "Deep guide or comparison", "Definitions, cases, alternatives, tables, and references."]
      ]
    },
    commonMistakes: [
      "Adding filler paragraphs just to reach a target word count.",
      "Publishing one dense block of text without scannable sections.",
      "Repeating the same keyword instead of adding useful related information."
    ],
    caseStudy: {
      title: "Mini case: expanding a thin post",
      body:
        "A 420 word post explains what meta descriptions are but does not show examples. Expanding it to 900 words with a before/after rewrite, a length table, and mistakes to avoid makes the page more useful without padding."
    },
    beforeAfter: {
      before: "Meta descriptions are important for SEO. Keep them short and include keywords.",
      after: "A meta description should summarize the page benefit in 120-160 characters. For example, replace 'SEO tips for websites' with 'Learn how to write concise SEO titles, meta descriptions, and snippets that match your page content.'",
      note: "The improved version gives a range, context, and a concrete example."
    },
    extraFaq: [
      {
        question: "Should every blog post be over 1,000 words?",
        answer:
          "No. The topic and search intent matter. A narrow answer can be useful at 600 words, while a comparison may need 2,000."
      },
      {
        question: "How many paragraphs should a blog post have?",
        answer:
          "Use enough paragraphs to keep each idea readable. On the web, shorter paragraphs usually improve scanning."
      }
    ]
  },
  "meta-description-length-checker-guide": {
    table: {
      title: "Meta description examples by length",
      columns: ["Length", "Example", "Risk"],
      rows: [
        ["70 characters", "Fast writing tools for better drafts.", "Likely too vague for many pages."],
        ["135 characters", "Count words, check readability, and review keyword balance before publishing blog posts, snippets, emails, and social copy.", "Strong practical range."],
        ["190 characters", "Use this complete free browser-based analyzer to count words, check readability, review keyword density, clean text, and evaluate whether your writing is ready for many publishing channels.", "May be truncated or rewritten."]
      ]
    },
    commonMistakes: [
      "Writing a generic description that could apply to any page.",
      "Repeating the target keyword in an unnatural way.",
      "Promising content or features the page does not provide."
    ],
    caseStudy: {
      title: "Mini case: search snippet rewrite",
      body:
        "A product page originally used the description 'Best text tool online for writers.' The revised version names the benefit, privacy angle, and use case in one compact sentence, giving searchers a clearer reason to click."
    },
    beforeAfter: {
      before: "Best word counter for everyone. Count words online and improve writing.",
      after: "Count words, check readability, and review keyword balance privately in your browser before publishing.",
      note: "The after version is more specific and avoids repeated generic claims."
    },
    extraFaq: [
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
  "seo-title-length-guide": {
    table: {
      title: "SEO title rewrite examples",
      columns: ["Draft", "Issue", "Improved option"],
      rows: [
        ["TextPulses - Tools - SEO - Writing - Count Words", "Keyword list", "Free Word Counter and Readability Checker"],
        ["Everything You Need to Know About Writing Better Titles for Search Engines", "Too long", "SEO Title Length Guide for Clearer Snippets"],
        ["Guide", "Too vague", "Meta Description Length Guide"]
      ]
    },
    commonMistakes: [
      "Starting every title with the brand instead of the topic.",
      "Using a title that is clear to the author but vague to a searcher.",
      "Adding multiple similar keywords separated by punctuation."
    ],
    caseStudy: {
      title: "Mini case: title trimming",
      body:
        "A guide title at 78 characters was readable in a CMS but likely to truncate in search. Trimming the weak phrase 'Everything You Need to Know' created a clearer 48 character title with the main topic intact."
    },
    beforeAfter: {
      before: "Everything You Need to Know About Blog Post Word Counts and Article Length",
      after: "Blog Post Word Count Guide",
      note: "The shorter title keeps the topic visible and removes a soft opener."
    },
    extraFaq: [
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
  "youtube-title-description-length-guide": {
    table: {
      title: "YouTube copy planning ranges",
      columns: ["Element", "Practical range", "Revision focus"],
      rows: [
        ["Title", "45-70 characters", "Clear topic and hook."],
        ["First description line", "First 150 characters", "Strong summary before links."],
        ["Full description", "150-5000 characters", "Context, sources, chapters, and next steps."]
      ]
    },
    commonMistakes: [
      "Hiding the topic behind a vague curiosity hook.",
      "Starting the description with generic channel boilerplate.",
      "Repeating the same keyword instead of explaining the video."
    ],
    caseStudy: {
      title: "Mini case: tutorial title",
      body:
        "A tutorial title changed from 'You won't believe this writing trick' to 'How to Check Keyword Density Before Publishing'. The second title is less dramatic, but it tells the right viewer exactly what they will learn."
    },
    beforeAfter: {
      before: "This Changes Everything for Writers",
      after: "How to Check Readability Before Publishing",
      note: "The after version keeps curiosity but makes the topic searchable and clear."
    },
    extraFaq: [
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
  "linkedin-post-length-guide": {
    table: {
      title: "LinkedIn post formats",
      columns: ["Format", "Typical length", "Best use"],
      rows: [
        ["Short insight", "150-400 characters", "One idea with a direct takeaway."],
        ["Mini story", "500-900 characters", "Situation, tension, lesson."],
        ["Framework post", "900-1300 characters", "Steps, examples, and conclusion."]
      ]
    },
    commonMistakes: [
      "Opening with a vague lesson before showing the situation.",
      "Using too many one-line paragraphs without substance.",
      "Ending with a forced engagement question that does not match the post."
    ],
    caseStudy: {
      title: "Mini case: professional takeaway",
      body:
        "A founder post originally described a launch in one long paragraph. Splitting it into the problem, decision, result, and lesson made it easier to scan and clarified why the story mattered."
    },
    beforeAfter: {
      before: "We launched a tool and learned a lot about writing and users and how people need quick feedback before publishing.",
      after: "We launched a writing tool with one lesson in mind: writers do not only need counts. They need to know whether a draft fits the channel before they publish.",
      note: "The after version turns a general update into a clear professional point."
    },
    extraFaq: [
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
  "email-subject-line-length-guide": {
    table: {
      title: "Subject line examples",
      columns: ["Draft", "Issue", "Improved option"],
      rows: [
        ["Important update", "Too vague", "Your draft review is ready"],
        ["A quick reminder about the upcoming deadline for the content audit", "Too long", "Content audit deadline reminder"],
        ["Sale sale sale today only", "Low trust", "Last day for the writing toolkit offer"]
      ]
    },
    commonMistakes: [
      "Using urgency when there is no real deadline.",
      "Starting with filler like 'quick note' when the topic matters more.",
      "Writing a subject that does not match the email body."
    ],
    caseStudy: {
      title: "Mini case: support email",
      body:
        "A support email subject changed from 'Question' to 'Question about TextPulses contact form'. The second version helps the recipient triage the message before opening it."
    },
    beforeAfter: {
      before: "Quick question",
      after: "Question about AdSense setup",
      note: "The after version is still short but gives the inbox enough context."
    },
    extraFaq: [
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
  "academic-essay-word-count-guide": {
    table: {
      title: "Essay length planning examples",
      columns: ["Target", "Typical structure", "Revision focus"],
      rows: [
        ["500 words", "Intro, 2 body points, conclusion", "Keep evidence focused."],
        ["1,000 words", "Intro, 3-4 body paragraphs, conclusion", "Develop each claim."],
        ["2,000 words", "Intro, sections, counterpoint, conclusion", "Manage structure and transitions."],
        ["5,000 words", "Extended argument", "Plan sections before drafting."]
      ]
    },
    commonMistakes: [
      "Trying to meet the word count by repeating the same claim.",
      "Using long sentences to sound academic.",
      "Ignoring whether references, footnotes, or appendices count."
    ],
    caseStudy: {
      title: "Mini case: underdeveloped essay",
      body:
        "A 780 word essay meets a rough length target but has only two body paragraphs. Adding a paragraph for counterargument and one for evidence analysis improves structure more than simply adding longer sentences."
    },
    beforeAfter: {
      before: "This shows the policy was important and had many effects on society.",
      after: "The policy mattered because it changed access, shifted costs, and created a public debate about who should be responsible for implementation.",
      note: "The after version turns a vague claim into specific lines of argument."
    },
    extraFaq: [
      {
        question: "Is it okay to be under the word count?",
        answer:
          "Small differences may be acceptable, but being far under often suggests missing evidence or analysis."
      },
      {
        question: "Can I use TextPulses for citations?",
        answer:
          "No. TextPulses can help with structure and counts, but citation style must be checked separately."
      }
    ]
  },
  "speech-timing-calculator-guide": {
    table: {
      title: "Speech timing estimates",
      columns: ["Words", "Approximate time at 150 wpm", "Best use"],
      rows: [
        ["150 words", "1 minute", "Opening statement or short toast."],
        ["450 words", "3 minutes", "Brief talk with one example."],
        ["750 words", "5 minutes", "Standard short presentation."],
        ["1,500 words", "10 minutes", "Longer speech with sections."]
      ]
    },
    commonMistakes: [
      "Writing to the exact maximum time with no room for pauses.",
      "Using written sentences that are hard to speak aloud.",
      "Forgetting slide transitions, applause, or audience interaction."
    ],
    caseStudy: {
      title: "Mini case: 5 minute talk",
      body:
        "A 900 word script looked fine on paper but ran over 6 minutes when read aloud. Cutting one example and shortening the opening brought it closer to 750 words and made the delivery calmer."
    },
    beforeAfter: {
      before: "In today's presentation I am going to attempt to explain several different reasons why this decision is important.",
      after: "Today I will explain three reasons this decision matters.",
      note: "The after version is easier to say and saves time."
    },
    extraFaq: [
      {
        question: "Should I memorize the exact script?",
        answer:
          "That depends on the event. Many speakers use a script for timing and notes for delivery."
      },
      {
        question: "What speaking speed should I use?",
        answer:
          "150 words per minute is a practical baseline, but rehearsal is the only reliable test."
      }
    ]
  },
  "keyword-density-guide": {
    table: {
      title: "Keyword balance signals",
      columns: ["Signal", "What it may mean", "Revision response"],
      rows: [
        ["Top term above 6%", "Possible overuse", "Replace repeated phrases with specific details."],
        ["Many repeated bigrams", "Mechanical phrasing", "Rewrite headings and transitions."],
        ["Low related vocabulary", "Thin coverage", "Add examples, definitions, or adjacent questions."],
        ["Natural variations", "Healthy coverage", "Keep the wording if it reads clearly."]
      ]
    },
    commonMistakes: [
      "Treating density as a ranking formula.",
      "Repeating exact-match phrases in every paragraph.",
      "Removing necessary terms so aggressively that the topic becomes unclear."
    ],
    caseStudy: {
      title: "Mini case: natural variation",
      body:
        "A page about subject lines repeated 'email subject line' in nearly every sentence. Rewriting some mentions as 'inbox text', 'opening line', and 'message title' made the copy read naturally while keeping the topic clear."
    },
    beforeAfter: {
      before: "Our keyword density checker checks keyword density so you can improve keyword density before publishing.",
      after: "Use the checker to spot repeated terms and revise copy that feels mechanical before publishing.",
      note: "The after version keeps the intent without repeating the same phrase."
    },
    extraFaq: [
      {
        question: "Should I remove every repeated keyword?",
        answer:
          "No. Some repetition is natural. Revise repetition that feels forced or distracts from the reader's task."
      },
      {
        question: "Are two-word phrases important?",
        answer:
          "Yes. Repeated two-word phrases often reveal mechanical wording faster than single-word counts."
      }
    ]
  },
  "readability-scores-explained": {
    table: {
      title: "Readability revision signals",
      columns: ["Signal", "Possible issue", "Useful edit"],
      rows: [
        ["Average sentence above 24 words", "Dense pacing", "Split sentences or remove clauses."],
        ["Many long words", "Technical load", "Define terms or simplify where appropriate."],
        ["Very short repeated sentences", "Choppy flow", "Combine related ideas carefully."],
        ["Long paragraphs", "Hard scanning", "Break by idea or step."]
      ]
    },
    commonMistakes: [
      "Trying to maximize readability score at the expense of accuracy.",
      "Removing necessary technical terms for expert readers.",
      "Ignoring paragraph structure and focusing only on sentence length."
    ],
    caseStudy: {
      title: "Mini case: business update",
      body:
        "A policy update scored as difficult because it used long sentences with multiple conditions. Breaking each condition into a separate sentence lowered the reading load without changing the meaning."
    },
    beforeAfter: {
      before: "Because the policy applies across several teams and requires staged adoption, users should review the instructions before implementation begins.",
      after: "The policy applies across several teams. Review the instructions before implementation begins. Adoption will happen in stages.",
      note: "The after version is easier to scan while keeping the same information."
    },
    extraFaq: [
      {
        question: "Can a text be too simple?",
        answer:
          "Yes. If simplification removes precision or sounds unnatural for the audience, keep the necessary detail."
      },
      {
        question: "Do readability scores work for every language?",
        answer:
          "No. Many formulas are designed around English patterns and may be less reliable for other languages."
      }
    ]
  },
  "publishfit-score-explained": {
    table: {
      title: "PublishFit preset examples",
      columns: ["Preset", "Primary measure", "Main warning"],
      rows: [
        ["Meta Description", "120-160 characters", "Too short or too long for a useful snippet."],
        ["Email Subject", "30-60 characters", "Hard to scan in an inbox."],
        ["Blog Article", "600+ words", "Thin content or weak structure."],
        ["Speech Script", "Speaking time", "Runs too short or too long when delivered aloud."]
      ]
    },
    commonMistakes: [
      "Choosing the wrong preset and treating the score as universal.",
      "Optimizing the number without reading the recommendations.",
      "Assuming a high score guarantees search or social performance."
    ],
    caseStudy: {
      title: "Mini case: same text, different channel",
      body:
        "A 155 character sentence scores well as a meta description but poorly as a LinkedIn post because the professional context is too thin. Changing the preset reveals that readiness depends on the destination."
    },
    beforeAfter: {
      before: "This tool counts words and helps writers.",
      after: "Count words, check readability, and see whether your draft fits SEO snippets, social posts, emails, essays, and speeches.",
      note: "The after version is stronger for a meta description because it names use cases and value."
    },
    extraFaq: [
      {
        question: "Why does my score change when I switch presets?",
        answer:
          "Each preset has different length expectations and recommendations because each publishing channel has different constraints."
      },
      {
        question: "Should I always aim for 100?",
        answer:
          "No. Aim for a useful draft. A score in the good range can still be ready if the text fits the real audience and context."
      }
    ]
  }
};

export const guides: Guide[] = baseGuides.map((guide) => {
  const enhancement = guideEnhancements[guide.slug];

  if (!enhancement) {
    return guide;
  }

  return {
    ...guide,
    table: enhancement.table,
    commonMistakes: enhancement.commonMistakes,
    caseStudy: enhancement.caseStudy,
    beforeAfter: enhancement.beforeAfter,
    faq: [...guide.faq, ...(enhancement.extraFaq ?? [])]
  };
});

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
