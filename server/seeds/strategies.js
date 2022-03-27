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
      "Leave three agents with the most stalling potential on A site, B site, and mid(or C site). The final two agents will be the rotators and will wait near the middle of the map. At the first sign of enemies, the two rotators will go as fast as possible to that area and agress against the attackers until they rotate away or die.",
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
];

module.exports = strategySeeds;
