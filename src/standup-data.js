module.exports = [
  {
    slug: "one-person-missing",
    title: "One person missing",
    summary: "One person leaves standup and the rest of the team has to piece it all back together for them.",
    contributor: {
      github: "rouanw",
    },
    description: "One person leaves your standup call (or goes to get themselves some coffee if you're in an office). The team then nominates one person to give the missing person an update when they return. Standup then happens as usual without the missing person. When they come back, the nominated person has to fill them in.",
    benefits: [
      "Helps the team build awareness of the fact that not everyone will be at every standup and to consider how to communicate what happened in standup in an effective way. People are often missing at standup for other reasons (holidays, sick etc.). Might as well get good at it.",
      "Promotes listening skills as everyone else in the team is keen to see if the nominated person gets it right!",
      "You may notice which bits of the standup end up getting forgotten. Are these important at all or could you have done without them?",
    ],
    tags: [
      'communication',
      'team bonding',
    ]
  },
  {
    slug: "where-did-everyone-go",
    title: "Where did everyone go?",
    summary: "Almost everyone leaves standup and one person has to look at the board to tell everyone else what's happening",
    contributor: {
      github: "rouanw",
    },
    description: "Everyone except one team member leaves standup. The person left behind has five minutes to take a look at the board and try to understand the status of everyone's work. While they do this, it's fun for the rest of the team to chat together on a separate video call, or around the corner if everyone's in the same office.",
    benefits: [
      "Helps the team connect on a personal level",
      "You may notice that the team still communicates fine without talking specifically about the status of what they’re working on",
      "Maybe you already know most of what you need to know before you even get to standup",
    ],
    tags: [
      'communication',
      'team bonding',
    ]
  },
  {
    slug: 'update-a-team-mate',
    title: "Update a team mate",
    summary: "Get your whole team feeling involved by having each person update another",
    contributor: {
      github: "rouanw",
    },
    description: "Each person gives their update to the another person in the team, using their name and talking to them directly. E.g. “Natalie, yesterday I was working on X and today I’ll be doing Y”. Each person who receives an update picks the next person to give their update to. The last person then updates the first person.  (If people keep picking the same group of team mates to give their update, use a little spreadsheet or script to pick folks randomly.)",
    benefits: [
      "Helps build relationships because everyone in your team gets a chance to have a little conversation.",
      "Helps the team notice information asymmetry. E.g. it becomes very clear that a software engineer uses too much technical jargon in when they have to give their update directly to the visual designer on the team.",
      "This helps team members to focus on useful information. It’s easier to keep an update to the point when you’re talking to a particular person."
    ],
    tags: [
      'team bonding',
      'communication'
    ]
  },
  {
    slug: "give-someone-else-update",
    title: "Give someone else's update",
    summary: "Each team member tries to give an update for the next person",
    contributor: {
      github: "rouanw",
    },
    description: "Take turns with each person trying to update the team on behalf of the next person. (This works best when one person pick the order for the standup so people don't pick people who are easy.) No one will know everything, but try to see if you can remember what they're doing and what they'll be working on next.",
    benefits: [
      "Builds empathy between team members - everyone is forced to peek into someone else's life",
      "Can help highlight when some team members are not included in daily work enough or don't have enough opportunities to let others see what they do",
    ],
    tags: [
      'team bonding',
      'communication',
    ]
  },
  {
    slug: "one-thing-only",
    title: "One thing only",
    summary: "Each team member only talks about the single most important thing they want to tell people",
    contributor: {
      github: "rouanw",
    },
    description: "Take turns giving updates. Each team member only talks about the single most important thing they want to tell people.",
    benefits:[
      "Helps keep meetings short and focused",
      "Helps encourage team members to use other communication channels to talk about things that aren’t crucial for standup - i.e. it encourages people to actually talk to each other outside of standup."
    ],
    tags: [
      'focus',
    ]
  },
  {
    slug: "zoom-way-out",
    title: "Zoom way out",
    summary: "Make sure your team gets the big picture by talking about your overall progress",
    contributor: {
      github: "rouanw",
    },
    description: "What is your daily work contributing to? Hopefully your team has something (a digital board? a spreadsheet?) that shows how you're doing on your overall goals (maybe it's for a financial quarter, maybe it's for a particular project). Have standup while looking at this (someone share their screen if you're on a call) and ask one person to volunteer to give an update on each part of current/upcoming work.",
    benefits: [
      "Helps the team to see and understand their progress towards a larger goal",
      "Helps the team notice when there are only one or two people who understand the ‘big picture’",
      "Helps spot gaps or issues with the larger plan",
      "Helps you notice when the view of the larger plan isn't in a format that makes sense to people",
    ],
    tags: [
      'communication',
      'new view',
    ]
  },
  {
    slug: "zoom-way-in",
    title: "Zoom way in",
    summary: "Shuffle the cards on your team wall. Select one randomly and only talk about that one card as a team",
    contributor: {
      github: "rouanw",
    },
    description: "Shuffle the cards on your team wall. Select one randomly and only talk about that one card as a team. For teams with digital walls, pop your open story numbers into a little Math.random function to pick a card at random.",
    benefits: [
      "Allows the team to discuss something in as much detail as they like",
      "You may notice sometimes the discussion will be detailed and lengthy and other times the discussion will be very short. This may tell you something about the variety of cards on your wall, the size of the work, or whether some kinds of tasks are more involved.",
      "Promotes a deeper understanding of work people aren’t directly involved in",
    ],
    tags:[
      'focus',
      'new view'
    ]
  },
  {
    slug: "yesterday-today-blockers",
    title: "Yesterday, today, blockers",
    summary: "Each person lists what they did yesterday, what they'll do today and what is in their way",
    contributor: {
      github: "rouanw",
    },
    description: "This is a classic standup format. Each person give an update on what they did yesterday (i.e. since the last standup), what they’ll be doing today and whether there are any blockers making it difficult for their work to progress.",
    benefits: [
      "This is a tried-and-tested format and a good one to fall back on",
    ],
    tags: [
      'classic'
    ]
  },
  {
    slug: "forget-about-the-past",
    title: "Forget about the past",
    summary: "This is the same format as “Yesterday, today, blockers”, except the team members do not update the rest of the team on what they’ve already completed",
    contributor: {
      github: "rouanw",
    },
    description: "Every person lists what they'll be working on today and what might block the progress of that work. Nobody says anything about what happened yesterday.",
    benefits: [
      "Helps keep standups short and focused",
      "Leads to a standup that is future/action focused",
    ],
    tags: [
      'focus',
      'classic',
    ]
  },
  {
    slug: "whats-in-my-way",
    title: "What’s in the way?",
    summary: "Only mention things that are stopping you from getting your work done ",
    contributor: {
      github: "rouanw",
    },
    description: "Go around the team and only mention things that are stopping you from getting your work done or slowing you down. Pass if there’s nothing blocking you.",
    benefits: [
      "Helps standup be focused on urgent items",
      "Notice how long your standup is - a long standup could mean your team is having to wade through a lot to get there work done. A short standup? Great!",
    ],
    tags: [
      'classic',
    ]
  },
  {
    slug: "walk-the-wall",
    title: "Walk the wall",
    summary: "Talk through the work currently in progress, one item at a time",
    contributor: {
      github: "rouanw",
    },
    description: "One person on the call shares their screen (or everyone gathers around a physical Agile wall). The person then asks for updates on each card in your 'In Progress' column. (Sometimes it will also be interesting to peek at your 'To Do' column, or see what new work is coming up soon.",
    benefits: [
      "Provides a great detailed view",
      "A good way of ensuring that no work goes forgotten",
    ],
    tags: [
      'classic',
    ]
  },
  {
    slug: "today-i-learned",
    title: "Today I learned",
    summary: "Take turns each sharing one thing you’ve learned since the last standup",
    contributor: {
      github: "rouanw",
    },
    description: "This is a more reflective format, which focuses on sharing the things we learn during our day to day work.",
    benefits: [
      "Helps people get used to sharing knowledge with the rest of the team",
      "You may notice that the team still communicates fine without talking specifically about the status of what they’re working on",
      "You'll probably learn things that will make your job easier",
    ],
    tags: [
      'team bonding',
    ]
  },
  {
    slug: "personal-updates",
    title: "How are you today?",
    summary: "Take turns giving personal updates (no work!)",
    contributor: {
      github: "rouanw",
    },
    description: "E.g. “Yesterday my wife and I watched the worst movie and today our daughter is having her first ever swimming lesson”.",
    benefits: [
      "Helps the team connect on a personal level and get to know each other.",
      "You may notice that the team still communicates fine without talking specifically about the status of what they’re working on",
    ],
    tags: [
      'team bonding',
    ]
  },
  {
    slug: "metrics-standup",
    title: "Show me the numbers!",
    summary: "Take a look at your team's key product metrics (graphs, totals etc.)",
    contributor: {
      github: "rouanw",
    },
    description: "Instead of looking at user stories or an Agile wall, have your standup while someone shares a dashboard showing the numbers your team cares about most. This dashboard could contain a graph showing sales pipeline conversions, a table showing the top errors in the last hour, or the number of new user registrations in the day.",
    benefits: [
      "Helps the team connect with the bigger goals they're trying to achieve.",
      "Could reveal if the metrics being used to measure success are flawed, or maybe not visible enough to the team.",
    ],
    tags: [
      'new view',
    ]
  },
  {
    slug: "js-paint-standup",
    title: "Draw your update",
    summary: "Each team member draws what they're working on in JS Paint and the others guess what it is.",
    contributor: {
      github: "RabeaGleissner",
    },
    description: "Team members share their screens in turn and use https://jspaint.app/ to draw something that they're working on. The others guess what it is. The rules are similar to those of a Pictionary game: the person who is presenting is not allowed to talk or write words. And the drawing needs to happen while everyone is watching.",
    benefits: [
      "It is very hard to draw the abstract things that we do all day - especially in JS Paint. This will make team members more comfortable with being vulnerability in front of the team.",
      "It's loads of fun.",
    ],
    tags: [
      'team bonding',
    ]
  },
  {
    slug: "ten-words",
    title: "Use 10 words or less",
    summary: "Give your update but don't use more than 10 words.",
    contributor: {
      github: "RabeaGleissner",
    },
    description: "Are your standups getting longer and longer? Try this one! Each team member can only use 10 words or less to give their update.",
    benefits: [
      "People will focus on communicating the most important thing.",
      "It can potentially save you a lot of time.",
    ],
    tags: [
      'communication',
      'focus',
    ]
  },
  {
    slug: "last-three-commits",
    title: "Last three commits",
    summary: "Read your last three commit messages to the rest of the team.",
    contributor: {
      github: "RabeaGleissner",
    },
    description: "If you are a team member who doesn't make commits, read the last three email titles or the names of the last three files that you saved. If those messages are not self-explanatory, talk briefly about the context.",
    benefits: [
      "You'll get an insight into what others are working on right now. It can be especially interesting to see the messages from team members who do a different job from yourself. For example, if you're a programmer, the day-to-day work of a product manager might be unfamiliar to you.",
    ],
    tags: [
      'team bonding',
      'new view',
    ]
  },
  {
    slug: "guess-the-update",
    title: "Guess who gave the update",
    summary: "Each team member submits their updates ahead of time. In standup, everyone else has to guess who gave which update.",
    contributor: {
      github: "RabeaGleissner",
    },
    description: "This one takes a bit of preparation and needs a facilitator. The facilitator sets up a channel for everyone to submit messages anonymously (Google Forms work well). Each team member needs to submit 2 - 3 updates ahead of the standup. The facilitator then reads out each update and the others have to guess who's update it is.",
    benefits: [
      "This makes people more aware of who is working on which task",
      "It helps to bond the team through a bit of fun.",
    ],
    tags: [
      'team bonding',
      'new view',
    ]
  },
  {
    slug: "what-you-learnt-last-week",
    title: "Share one thing you learnt since last week",
    summary: "Think of something you didn't know this time last week and that you know today.",
    contributor: {
      github: "RabeaGleissner",
    },
    description: "We learn things all the time but sometimes we don't even notice it. Think about what you did last week and what you learnt since. Share it with everyone else. Chances are that they didn't know this either and you're teaching them something new!",
    benefits: [
      "It makes people aware of how they're growing and what they're learning.",
      "A good way to share knowledge across the team.",
    ],
    tags: [
      'team bonding',
      'communication',
    ]
  },
  {
    slug: "share-your-last-song",
    title: "The last song you listened to before standup",
    summary: "Tell the others which song you listened to last. Maybe even play it for them briefly, if they don't know it!",
    contributor: {
      github: "RabeaGleissner",
    },
    description: "It doesn't matter if you listen to music all the time while you're working or not at all... Let your team members know which song you listened to last, wether it was just now while you were coding, during your run this morning or last week at the opera! You could even make a team playlist.",
    benefits: [
      "It's a nice excuse to talk about something more personal during stand up and bond with your team members that way.",
    ],
    tags: [
      'team bonding',
    ]
  },
];
