module.exports = [
  {
    slug: 'update-a-team-mate',
    title: "Update a team mate",
    summary: "Get your whole team feeling involved by having each person update another",
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
    slug: "one-thing-only",
    title: "One thing only",
    summary: "Each team member only talks about the single most important thing they want to tell people",
    description: "Take turns giving updates. Each team member only talks about the single most important thing they want to tell people.",
    benefits:[
      "Helps keep standups short and focused",
      "Helps encourage team members to use other communication channels to talk about things that aren’t crucial for standup - i.e. it encourages people to actually talk to each other outside of standup"
    ],
    tags: [
      'focus',
    ]
  },
  {
    slug: "zoom-way-out",
    title: "Zoom way out",
    summary: "Give an update on each epic",
    description: "If you have a wall or picture of work that needs to be done for an entire project or for a few months, gather the team around that and for volunteers to give an update on each epic of current/upcoming work.",
    benefits: [
      "Helps the team to see and understand their progress towards a larger goal",
      "Helps the team notice when there are only one or two people who understand the ‘big picture’",
      "Helps spot gaps or issues with the larger plan",
    ]
  },
  {
    slug: "one-person-missing",
    title: "One person missing",
    summary: "One person leaves standup. The team then nominates one person to give the missing person an update on the team’s status.",
    description: "One person leaves standup. The team then nominates one person to give the missing person an update on the team’s status. Standup then happens as usual without the missing person. They then come back and the nominated person has to fill them in.",
    benefits: [
      "Helps the team build awareness of the fact that not everyone will be at every standup and to consider how to communicate what happened in standup in an effective way",
      "Promotes listening skills as everyone else in the team is keen to see if the nominated person gets it right!",
      "You may notice which bits of the standup end up getting forgotten. Are these important at all or could you have done without them?"
    ],
    tags: [
      'communication'
    ]
  },
  {
    slug: "zoom-way-in",
    title: "Zoom way in",
    summary: "Shuffle the cards on your team wall. Select one randomly and only talk about that one card as a team",
    description: "Shuffle the cards on your team wall. Select one randomly and only talk about that one card as a team. For teams with digital walls, pop your open story numbers into a little Math.random function to pick a card at random.",
    benefits: [
      "Allows the team to discuss something in as much detail as they like",
      "You may notice sometimes the discussion will be detailed and lengthy and other times the discussion will be very short. This may tell you something about the variety of cards on your wall, the size of the work, or whether some kinds of tasks are more involved.",
      "Promotes a deeper understanding of work people aren’t directly involved in",
    ]
  },
  {
    slug: "yesterday-today-blockers",
    title: "Yesterday, today, blockers",
    summary: "Each person lists what they did yesterday, what they'll do today and what is in their way",
    description: "This is a classic standup format. Go around the team and let each person give an update on what they did yesterday (i.e. since the last standup), what they’ll be doing today and whether there are any blockers making it difficult for their work to progress.",
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
    description: "Every person lists what they'll be working on today and what might block the progress of that work. Nobody says anything about what happened yesterday.",
    benefits: [
      "Helps keep standups short and focused",
      "Leads to a standup that is future/action focused",
    ],
    tags: [
      'focus'
    ]
  },
  {
    slug: "whats-in-my-way",
    title: "What’s in the way?",
    summary: "Only mention things that are stopping you from getting your work done ",
    description: "Go around the team and only mention things that are stopping you from getting your work done or slowing you down. Pass if there’s nothing blocking you.",
    benefits: [
      "Helps standup be focused on urgent items",
      "Notice how long your standup is - a long standup could mean your team is having to wade through a lot to get there work done. A short standup? Great!",
    ]
  },
  {
    slug: "today-i-learned",
    title: "Today I learned",
    summary: "Go around as a team and each share one thing you’ve learned since the last standup",
    description: "This is a more reflective format",
    benefits: [
      "Helps people get used to sharing knowledge with the rest of the team",
      "You may notice that the team still communicates fine without talking specifically about the status of what they’re working on",
    ]
  },
  {
    slug: "personal-updates",
    title: "What’s up with you?",
    summary: "Go around as a team and give personal updates instead of work updates.",
    description: "E.g. “yesterday my wife and I watched the worst movie and today our daughter is having her first ever swimming lesson”",
    benefits: [
      "Helps the team connect on a personal level",
      "You may notice that the team still communicates fine without talking specifically about the status of what they’re working on",
    ]
  },
  {
    slug: "everybody-leaves",
    title: "Almost everyone leaves",
    summary: "Almost everyone leaves standup and one person has to look at the board to tell everyone else what's happening",
    description: "Everyone except one team member leaves standup. The person left needs to take a look at the board and try to understand what the status of everyone's work is. While they do this, it's fun for the rest of the team to chat together - either around the corner if everyone's in the same office or on a separate call if you do your standups remote-first",
    benefits: [
      "Helps the team connect on a personal level",
      "You may notice that the team still communicates fine without talking specifically about the status of what they’re working on",
    ]
  },
  {
    slug: "give-someone-else-update",
    title: "Give someone else's update",
    summary: "Each team member tries to give an update for the next person",
    description: "Go around and with each person trying to update the team on behalf of the next person. No one will know everything, but try to see if you can remember what they're doing and what they'll be working on next.",
    benefits: [
      "Builds empathy between team members - everyone is forced to peek into someone else's life",
      "Can help highlight when some team members are not included in daily work enough or don't have enough opportunities to let others see what they do",
    ]
  },
];
