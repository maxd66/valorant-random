const strategySeeds = [
  {
    side: "na",
    class: "funny",
    recommendedMinimumPlayers: 1,
    title: "Crab Walk",
    description:
      "All participating players crouch for the entirety of the round.",
  },
  {
    side: "defend",
    class: "funny",
    recommendedMinimumPlayers: 1,
    title: "Gotta Go Fast",
    description:
      "All participating players start at the entrance to one of the spike sites. When the round starts, you run through the entrance all the way through the attacker's spawn until you enter the other site(s).",
  },
  {
    side: "na",
    class: "funny",
    recommendedMinimumPlayers: 4,
    title: "Iron Man",
    description:
      "Only one player leaves your spawn, everyone waits until they either win or die. Once they die, another player can leave spawn. Continue until you either win or everyone is dead.",
  },
  {
    side: "na",
    class: "funny",
    recommendedMinimumPlayers: 1,
    title: "Slightly Reckless",
    description:
      "All participating players must activate all of the utility they can at the very beginning of the round. If your utility is replenished in any way throughout the round, you must use it immediately. This includes ultimates.",
  },
  {
    side: "defend",
    class: "tactical",
    recommendedMinimumPlayers: 5,
    title: "Double rotators",
    description:
      "Leave the three agents with the most stalling potential on A site, B site, and mid(or C site). The final two agents will be the rotators and will wait near the middle of the map. At the first sign of enemies, the two rotators will go as fast as possible to that area and agress against the attackers until they rotate away or die.",
  },
  {
    side: "attack",
    class: "tactical",
    recommendedMinimumPlayers: 5,
    title: "Mid Push",
    description:
      "Split agents evenly among all of the entrances to mid (if the map doesn't have a middle, attempt this same attack on the site you attacked in the previous round.) Use any utility necessary to gain mid control, and make sure everyone pushes with a partner to trade them out. Once mid has been taken, push through the enemy spawn until you reach a site(unless of course you reach a site before their spawn i.e. Haven).",
  },
  {
    side: "attack",
    class: "funny",
    recommendedMinimumPlayers: 3,
    title: "The Dirty Hurricane",
    description:
      "All participating players start at the entrance to a site and full rush through the entrance, past the site, back through middle, and then into the opposite site. You can not plant until your team has visited both sites.",
  },
  {
    side: "defend",
    class: "tactical",
    recommendedMinimumPlayers: 5,
    title: "Stack and Push",
    description:
      "Stack four agents on one site, leave the agent with the greatest slow potential alone on the opposite site and ignore mid. The stacked site will push into the enemy spawn and mid after 10 seconds, or whenever the lone player hears or sees enemies. Use discretion to decide the speed at which the stacked players push (i.e. if the lone player sees all five enemies, the stacked players should push very fast.)",
  },
  {
    side: "na",
    class: "funny",
    recommendedMinimumPlayers: 1,
    title: "Coda",
    description: "All participating players must turn game volume to 0.",
  },
  {
    side: "na",
    class: "funny",
    recommendedMinimumPlayers: 1,
    title: "Method Callout-ing",
    description:
      "All participating players must make callouts in their agent's accent.",
  },
  {
    side: "na",
    class: "funny",
    recommendedMinimumPlayers: 1,
    title: "Sticky Trigger Finger",
    description:
      "When a partipating player shoots their gun, they can't stop shooting until their magazine is empty.",
  },
  {
    side: "na",
    class: "funny",
    recommendedMinimumPlayers: 2,
    title: "DON'T SAY THIS NAME OUT LOUD",
    description:
      'Tell your teammates the strategy is to make as many callouts as possible. If any of your teammates say "Rotate" YOU can not move for 10 seconds. The timer resets if your teammates say "Rotate" while you are frozen. This includes any form of the word (i.e. "Rotating", "Rotated", etc.) You may shoot, but you can\'t aim.',
  },
  {
    side: "na",
    class: "funny",
    recommendedMinimumPlayers: 1,
    title: "Inversion",
    description:
      "All participating players must invert their mouse input in the game settings. If you are a psychopath and play inverted, you must un-invert.",
  },
  {
    side: "defend",
    class: "tactical",
    recommendedMinimumPlayers: 5,
    title: "Balance and Flow",
    description:
      "Align in a standard 2-1-2 set up. 2 A, 1 mid (or b, or spawn), 2 B (or C). Hold the set up, until a site is pushed. If you are pushed by more people than you have on site, give it up and retake with your team. Players not on the site that was pushed, should flank.",
  },
  {
    side: "attack",
    class: "tactical",
    recommendedMinimumPlayers: 5,
    title: "Euro Step",
    description:
      "Player 1 and Player 2 show agression towards A. They run away, notiecably making noise. Players 4 and 5, show agression towards a different site. Players 1, 2, and 3 wait near the entrance at A with the bomb. Catch any people attempting a flank, or wait a few seconds for people to rotate off site. If no flanks come, and no one rotates, regroup and five player push A.",
  },
  {
    side: "attack",
    class: "tactical",
    recommendedMinimumPlayers: 5,
    title: "Bait and Switch",
    description:
      "Player 1 and Player 2 show agression towards A. After a few seconds, the rest of the team pushes a different site. Player 1 waits for rotates and pushes through A with the goal of flanking, Player 2 runs back towards the other site to regroup and catch any enemy flanks.",
  },
  {
    side: "na",
    class: "funny",
    recommendedMinimumPlayers: 1,
    title: "Let's Get Dizzy",
    description:
      'All participating players must perform a "360", a.k.a. spin in a complete circle, immediately before every trigger pull. This means for automatic weapons you are allowed to spin and spray. If your weapon is semi-automatic, good luck.',
  },
  {
    side: "attack",
    class: "funny",
    recommendedMinimumPlayers: 5,
    title: "Hot Potato",
    description:
      "The spike is hot! It has to switch people every 20 seconds. If you are the last agent left, you must throw the bomb every 20 seconds. Keep eachother accountable.",
  },
  {
    side: "defend",
    class: "funny",
    recommendedMinimumPlayers: 2,
    title: "WASD Locked",
    description:
      "Everyone participating picks a corner. You can not leave your corner until you get a kill, or the bomb is planted.",
  },
  {
    side: "defend",
    class: "tactical",
    recommendedMinimumPlayers: 5,
    title: "Pringle",
    description:
      "Stack all 5 players on B. If they come and rotate away, spread back out to a standard setup. If not, all 5 players flank the site that was taken.",
  },
  {
    side: "attack",
    class: "tactical",
    recommendedMinimumPlayers: 5,
    title: "Patience is Key",
    description:
      "Spread into a 3-1-1 (3 towards B, 1 towards mid, 1 towards A) and wait, save all utility possible except for traps. Pick any enemies that push. At 1 minute left in the round, all players regroup at the entrance to B. With 30 seconds left, execute on site.",
  },
  {
    side: "na",
    class: "funny",
    recommendedMinimumPlayers: 1,
    title: "Rite Lehft",
    description:
      "All participating players must wear their headphones backwards. If you don't have headphones, you are already at enough of a disadvantage.",
  },
  {
    side: "na",
    class: "funny",
    recommendedMinimumPlayers: 1,
    title: "Bunnies",
    description:
      "Unless there is an enemy on your screen, all movement must be bunny hopping.",
  },
  {
    side: "defend",
    class: "tactical",
    recommendedMinimumPlayers: 5,
    title: "Switch it Up",
    description:
      "Whatever sites you have been playing on, switch with your teammates regardless of meta. This can get you out of a rut and confuse your enemies.",
  },
  {
    side: "attack",
    class: "tactical",
    recommendedMinimumPlayers: 5,
    title: "Stick and Go",
    description:
      "Use all smokes or applicable utility possible to create a lane. Avoid fights with enemies, just plant on a visible sight line and leave site. Defend from a distance and let's see how good their retake is.",
  },
  {
    side: "attack",
    class: "funny",
    recommendedMinimumPlayers: 5,
    title: "QB Sneak",
    description:
      "4 players push one site as hard and fast as possible. The fastest duelist waits at the entrance to the opposite site, waits 10-20 seconds, and rushes the site alone.",
  },
  {
    side: "na",
    class: "funny",
    recommendedMinimumPlayers: 1,
    title: "Smoke Screen",
    description:
      "Participating players are not allowed to move if inside of a smoke. If you walk into a smoke, you can not leave it until it dissapates.",
  },
  {
    side: "na",
    class: "funny",
    recommendedMinimumPlayers: 1,
    title: "Pacifist",
    description: "Participating players can not destroy any enemy utility.",
  },
  {
    side: "defend",
    class: "tactical",
    recommendedMinimumPlayers: 5,
    title: "Stalwart",
    description:
      "Play in a standard set up, but fight tooth and nail for every inch of space. Don't let the enemies take any space for free. Better yet, don't let them take any at all.",
  },
  {
    side: "attack",
    class: "tactical",
    recommendedMinimumPlayers: 5,
    title: "Slow and Steady",
    description:
      "All 5 players stay together, 1 dedicated to watching the flank. Walk virtually everywhere. If you can, walk on site. Don't let the enemy know where you are, or how many are there until absolutely necessary.",
  },
  {
    side: "na",
    class: "funny",
    recommendedMinimumPlayers: 1,
    title: "Word Salad",
    description:
      "Participating players can not use the proper name of any callouts. You must come up with a new name for every call out that you use throughout the round.",
  },
  {
    side: "na",
    class: "tactical",
    recommendedMinimumPlayers: 5,
    title: "Comm Check",
    description:
      "Take this round to focus specifically on making as many effective callouts that you can. Communication is key, take this round to establish a new precedent.",
  },
  {
    side: "na",
    class: "tactical",
    recommendedMinimumPlayers: 5,
    title: "Creative Thinking",
    description:
      "You know that message on Tik Tok that tells you to take a break, or that Cartoon Network ad that would block out time where they wouldn't play a show and tell you to go play outside. This is that. Kinda. Most of the fun that comes from Valorant is quick thinking and solving problems strategically. Take a second to strategize with your team and come up with your own plan. Someone call out a strat they want to try. Be creative.",
  },
  {
    side: "attack",
    class: "funny",
    recommendedMinimumPlayers: 5,
    title: "Conga Line",
    description:
      "Everyone line up and follow the leader. The agent in front leads the line in whatever direction they desire and everyone follows immediately behind them. If the front person dies, the next front person is a new leader and can choose whatever direction they want.",
  },
  {
    side: "na",
    class: "funny",
    recommendedMinimumPlayers: 2,
    title: "True Jedi",
    description:
      "The player reading this strat will choose one player (they can choose themselves) that will either have to shut their eyes or turn off their monitor for the entire round. All other participating players are responsible for guiding them, and helping them get kills.",
  },
  {
    side: "na",
    class: "tactical",
    recommendedMinimumPlayers: 5,
    title: "Rewind",
    description:
      "Whatever your strategy was for the last round, do the exact same thing. They'll never see it coming. Or they will, who knows.",
  },
  {
    side: "na",
    class: "funny",
    recommendedMinimumPlayers: 1,
    title: "More Pain",
    description: "Do the exact same strategy as you did last round.",
  },
  {
    side: "defend",
    class: "tactical",
    recommendedMinimumPlayers: 5,
    title: "Indecision",
    description:
      "Set traps if applicable on either site and all 5 players stack mid. If traps are triggered, or enemies are spotted on either site by any means, split retake the site.",
  },
  {
    side: "na",
    class: "funny",
    recommendedMinimumPlayers: 1,
    title: "Mr.Krabs Would be Proud",
    description:
      "Save. Your budget is 1800. I don't care what the circumstances are. Figure it out.",
  },
  {
    side: "na",
    class: "funny",
    recommendedMinimumPlayers: 1,
    title: "Opposite Day",
    description:
      'All callouts must be the opposite of what you actually mean. (ex. "They are not taking B", "Mid is totally clear", "Wow, your aim is really good.", etc.)',
  },
  {
    side: "na",
    class: "funny",
    recommendedMinimumPlayers: 1,
    title: "Add Some Creatine",
    description:
      "All participating players must double their current sensitivity. If this for some reason is not possible, they must half their sensitivity.",
  },
  {
    side: "na",
    class: "tactical",
    recommendedMinimumPlayers: 5,
    title: "Stingy",
    description:
      "Don't use any utility until you see or hear the enemy team. This can help keep you from wasting utility, and can educate you on when preemptive utility is actually useful.",
  },
  {
    side: "na",
    class: "funny",
    recommendedMinimumPlayers: 1,
    title: "Trippy",
    description:
      'Change "Mouse 1" to "Move Forward", and change the "W" key to "Shoot".',
  },
  {
    side: "na",
    class: "funny",
    recommendedMinimumPlayers: 1,
    title: "We Take Those",
    description:
      'All participating players can not let go of the "W" key for the entire round. (The only exception to this rule is if you need to plant the spike.)',
  },
  {
    side: "attack",
    class: "tactical",
    recommendedMinimumPlayers: 5,
    title: "Dazed and Confused",
    description:
      "Show precesence in as many areas on the map as possible. Avoid fights, but prefire angles, use rechargable utility, and make noise everywhere. After about thirty seconds regroup in mid and all 5 agents walk towards A site (B site on Haven). Once spotted, explode onto site.",
  },
  {
    side: "defend",
    class: "tactical",
    recommendedMinimumPlayers: 5,
    title: "Greedy",
    description:
      "On both sites (not B on Haven) use as much utility needed to gain space. One player for each site cuts a gash, as deep as possible, into both main entrances to both sites, the other player stays as close as possible to protect and trade. The 5th player holds mid.",
  },
  {
    side: "na",
    class: "funny",
    recommendedMinimumPlayers: 2,
    title: "Serious Pipes",
    description: "All participating players must sing all callouts.",
  },
  {
    side: "na",
    class: "funny",
    recommendedMinimumPlayers: 1,
    title: "Ampidexterous",
    description:
      "All participating players switch which hand you normally use for your mouse and keyboard. If you play with your feet, switch feet. If you use some other apparatus, just keep doing what your doing.",
  },
  {
    side: "na",
    class: "funny",
    recommendedMinimumPlayers: 1,
    title: "Inchworm",
    description: "All participating players must walk for the entire round.",
  },
  {
    side: "na",
    class: "funny",
    recommendedMinimumPlayers: 1,
    title: "Salt the Wound",
    description:
      "Every slain enemy must be teabagged at least three times. If you fail this objective, the outcome of the round doesn't matter. You lose.",
  },
  {
    side: "na",
    class: "tactical",
    recommendedMinimumPlayers: 5,
    title: "Guarantee the Round",
    description:
      "This strategy is one that you carry throughout rounds until accomplished. From this point forward, all players save your ultimates until the entire team is ready. In one round, all five players use their ultimates with as much synergy as you possibly can.",
  },
];

module.exports = strategySeeds;
