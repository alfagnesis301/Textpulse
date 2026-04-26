export type GuideSection = {
  title: string;
  body: string[];
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  updated: string;
  readingTime: string;
  category: string;
  sections: GuideSection[];
  checklist: string[];
  faq: {
    question: string;
    answer: string;
  }[];
};

export const guides: Guide[] = [
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

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
