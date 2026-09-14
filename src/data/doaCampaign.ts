export type PoliticianId =
  | "padilla"
  | "schiff"
  | "obernolte"
  | "brownley"
  | "whitesides"
  | "chu"
  | "rivas"
  | "friedman"
  | "cisneros"
  | "sherman"
  | "gomez"
  | "torres"
  | "lieu"
  | "kamlager"
  | "sanchez"
  | "garcia"
  | "waters"
  | "barragan"
  | "tran";

export type PoliticianActions = {
  phone: string;
  email: string;
  post: string;
};

/** CA congressional district number → featured politician id */
export const featuredDistricts: Record<string, PoliticianId> = {
  "23": "obernolte",
  "26": "brownley",
  "27": "whitesides",
  "28": "chu",
  "29": "rivas",
  "30": "friedman",
  "31": "cisneros",
  "32": "sherman",
  "34": "gomez",
  "35": "torres",
  "36": "lieu",
  "37": "kamlager",
  "38": "sanchez",
  "42": "garcia",
  "43": "waters",
  "44": "barragan",
  "45": "tran",
};

export const californiaSenators: Array<{
  id: PoliticianId;
  displayName: string;
}> = [
  { id: "padilla", displayName: "Sen. Alex Padilla" },
  { id: "schiff", displayName: "Sen. Adam Schiff" },
];

export const politicianActions: Record<PoliticianId, PoliticianActions> = {
  padilla: {
    phone: "tel:+12022243553",
    email: "https://www.padilla.senate.gov/contact/contact-form/",
    post: "https://x.com/intent/post?text=%40SenAlexPadilla%20Two-thirds%20of%20LA%20fire%20survivors%20are%20still%20displaced%20and%20waiting%20on%20federal%20recovery%20funding.%20Please%20keep%20fighting%20to%20get%20substantial%20disaster%20recovery%20funding%20for%20Los%20Angeles%20into%20the%20next%20supplemental.%20%23fundtherecovery",
  },
  schiff: {
    phone: "tel:+12022243841",
    email: "https://www.schiff.senate.gov/contact/",
    post: "https://x.com/intent/post?text=%40SenAdamSchiff%20Two-thirds%20of%20LA%20fire%20survivors%20are%20still%20displaced%20and%20waiting%20on%20federal%20recovery%20funding.%20Please%20keep%20fighting%20to%20get%20substantial%20disaster%20recovery%20funding%20for%20Los%20Angeles%20into%20the%20next%20supplemental.%20%23fundtherecovery",
  },
  obernolte: {
    phone: "tel:+12022255861",
    email: "https://obernolte.house.gov/contact",
    post: "https://x.com/intent/post?text=%40JayObernolte%20Two-thirds%20of%20LA%20fire%20survivors%20are%20still%20displaced%20and%20waiting%20on%20federal%20recovery%20funding.%20Please%20keep%20fighting%20to%20get%20substantial%20disaster%20recovery%20funding%20for%20Los%20Angeles%20into%20the%20next%20supplemental.%20%23fundtherecovery",
  },
  brownley: {
    phone: "tel:+12022255811",
    email: "https://juliabrownley.house.gov/contact/",
    post: "https://x.com/intent/post?text=%40RepBrownley%20Two-thirds%20of%20LA%20fire%20survivors%20are%20still%20displaced%20and%20waiting%20on%20federal%20recovery%20funding.%20Please%20keep%20fighting%20to%20get%20substantial%20disaster%20recovery%20funding%20for%20Los%20Angeles%20into%20the%20next%20supplemental.%20%23fundtherecovery",
  },
  whitesides: {
    phone: "tel:+12022251956",
    email: "https://whitesides.house.gov/contact",
    post: "https://x.com/intent/post?text=%40Rep_Whitesides%20Two-thirds%20of%20LA%20fire%20survivors%20are%20still%20displaced%20and%20waiting%20on%20federal%20recovery%20funding.%20Please%20keep%20fighting%20to%20get%20substantial%20disaster%20recovery%20funding%20for%20Los%20Angeles%20into%20the%20next%20supplemental.%20%23fundtherecovery",
  },
  chu: {
    phone: "tel:+12022255464",
    email: "https://chu.house.gov/contact",
    post: "https://x.com/intent/post?text=%40RepJudyChu%20Two-thirds%20of%20LA%20fire%20survivors%20are%20still%20displaced%20and%20waiting%20on%20federal%20recovery%20funding.%20Please%20keep%20fighting%20to%20get%20substantial%20disaster%20recovery%20funding%20for%20Los%20Angeles%20into%20the%20next%20supplemental.%20%23fundtherecovery",
  },
  rivas: {
    phone: "tel:+12022256131",
    email: "https://rivas.house.gov/contact",
    post: "https://x.com/intent/post?text=%40RepLuzRivas%20Two-thirds%20of%20LA%20fire%20survivors%20are%20still%20displaced%20and%20waiting%20on%20federal%20recovery%20funding.%20Please%20keep%20fighting%20to%20get%20substantial%20disaster%20recovery%20funding%20for%20Los%20Angeles%20into%20the%20next%20supplemental.%20%23fundtherecovery",
  },
  friedman: {
    phone: "tel:+12022254176",
    email: "https://friedman.house.gov/contact",
    post: "https://x.com/intent/post?text=%40RepFriedmanCA%20Two-thirds%20of%20LA%20fire%20survivors%20are%20still%20displaced%20and%20waiting%20on%20federal%20recovery%20funding.%20Please%20keep%20fighting%20to%20get%20substantial%20disaster%20recovery%20funding%20for%20Los%20Angeles%20into%20the%20next%20supplemental.%20%23fundtherecovery",
  },
  cisneros: {
    phone: "tel:+12022255256",
    email: "https://cisneros.house.gov/contact",
    post: "https://x.com/intent/post?text=%40RepGilCisneros%20Two-thirds%20of%20LA%20fire%20survivors%20are%20still%20displaced%20and%20waiting%20on%20federal%20recovery%20funding.%20Please%20keep%20fighting%20to%20get%20substantial%20disaster%20recovery%20funding%20for%20Los%20Angeles%20into%20the%20next%20supplemental.%20%23fundtherecovery",
  },
  sherman: {
    phone: "tel:+12022255911",
    email: "https://sherman.house.gov/contact",
    post: "https://x.com/intent/post?text=%40BradSherman%20Two-thirds%20of%20LA%20fire%20survivors%20are%20still%20displaced%20and%20waiting%20on%20federal%20recovery%20funding.%20Please%20keep%20fighting%20to%20get%20substantial%20disaster%20recovery%20funding%20for%20Los%20Angeles%20into%20the%20next%20supplemental.%20%23fundtherecovery",
  },
  gomez: {
    phone: "tel:+12022256235",
    email: "https://gomez.house.gov/contact",
    post: "https://x.com/intent/post?text=%40RepJimmyGomez%20Two-thirds%20of%20LA%20fire%20survivors%20are%20still%20displaced%20and%20waiting%20on%20federal%20recovery%20funding.%20Please%20keep%20fighting%20to%20get%20substantial%20disaster%20recovery%20funding%20for%20Los%20Angeles%20into%20the%20next%20supplemental.%20%23fundtherecovery",
  },
  torres: {
    phone: "tel:+12022256161",
    email: "https://torres.house.gov/contact",
    post: "https://x.com/intent/post?text=%40NormaJTorres%20Two-thirds%20of%20LA%20fire%20survivors%20are%20still%20displaced%20and%20waiting%20on%20federal%20recovery%20funding.%20Please%20keep%20fighting%20to%20get%20substantial%20disaster%20recovery%20funding%20for%20Los%20Angeles%20into%20the%20next%20supplemental.%20%23fundtherecovery",
  },
  lieu: {
    phone: "tel:+12022253976",
    email: "https://lieu.house.gov/contact",
    post: "https://x.com/intent/post?text=%40RepTedLieu%20Two-thirds%20of%20LA%20fire%20survivors%20are%20still%20displaced%20and%20waiting%20on%20federal%20recovery%20funding.%20Please%20keep%20fighting%20to%20get%20substantial%20disaster%20recovery%20funding%20for%20Los%20Angeles%20into%20the%20next%20supplemental.%20%23fundtherecovery",
  },
  kamlager: {
    phone: "tel:+12022257084",
    email: "https://kamlager-dove.house.gov/contact",
    post: "https://x.com/intent/post?text=%40RepKamlagerDove%20Two-thirds%20of%20LA%20fire%20survivors%20are%20still%20displaced%20and%20waiting%20on%20federal%20recovery%20funding.%20Please%20keep%20fighting%20to%20get%20substantial%20disaster%20recovery%20funding%20for%20Los%20Angeles%20into%20the%20next%20supplemental.%20%23fundtherecovery",
  },
  sanchez: {
    phone: "tel:+12022256676",
    email: "https://lindasanchez.house.gov/contact",
    post: "https://x.com/intent/post?text=%40RepLindaSanchez%20Two-thirds%20of%20LA%20fire%20survivors%20are%20still%20displaced%20and%20waiting%20on%20federal%20recovery%20funding.%20Please%20keep%20fighting%20to%20get%20substantial%20disaster%20recovery%20funding%20for%20Los%20Angeles%20into%20the%20next%20supplemental.%20%23fundtherecovery",
  },
  garcia: {
    phone: "tel:+12022257924",
    email: "https://robertgarcia.house.gov/contact",
    post: "https://x.com/intent/post?text=%40RepRobertGarcia%20Two-thirds%20of%20LA%20fire%20survivors%20are%20still%20displaced%20and%20waiting%20on%20federal%20recovery%20funding.%20Please%20keep%20fighting%20to%20get%20substantial%20disaster%20recovery%20funding%20for%20Los%20Angeles%20into%20the%20next%20supplemental.%20%23fundtherecovery",
  },
  waters: {
    phone: "tel:+12022252201",
    email: "https://waters.house.gov/contact",
    post: "https://x.com/intent/post?text=%40RepMaxineWaters%20Two-thirds%20of%20LA%20fire%20survivors%20are%20still%20displaced%20and%20waiting%20on%20federal%20recovery%20funding.%20Please%20keep%20fighting%20to%20get%20substantial%20disaster%20recovery%20funding%20for%20Los%20Angeles%20into%20the%20next%20supplemental.%20%23fundtherecovery",
  },
  barragan: {
    phone: "tel:+12022258220",
    email: "https://barragan.house.gov/contact",
    post: "https://x.com/intent/post?text=%40RepBarragan%20Two-thirds%20of%20LA%20fire%20survivors%20are%20still%20displaced%20and%20waiting%20on%20federal%20recovery%20funding.%20Please%20keep%20fighting%20to%20get%20substantial%20disaster%20recovery%20funding%20for%20Los%20Angeles%20into%20the%20next%20supplemental.%20%23fundtherecovery",
  },
  tran: {
    phone: "tel:+12022252415",
    email: "https://tran.house.gov/contact",
    post: "https://x.com/intent/post?text=%40RepDerekTranCA%20Two-thirds%20of%20LA%20fire%20survivors%20are%20still%20displaced%20and%20waiting%20on%20federal%20recovery%20funding.%20Please%20keep%20fighting%20to%20get%20substantial%20disaster%20recovery%20funding%20for%20Los%20Angeles%20into%20the%20next%20supplemental.%20%23fundtherecovery",
  },
};

/** Generic advocacy script for non-featured members (from lookup-partner.html) */
export const genericLookupScript = `My name is ____.

[Add in your own personal story here and why this matters to you]

Communities across the country are still waiting for the federal support they need to recover from devastating fires, floods, and storms. Disaster recovery is a national responsibility---and this is a moment to show that the federal government will stand with survivors, regardless of where they live.

Please fight to ensure substantial disaster recovery funding for Los Angeles---including the Eaton and Palisades fires---is included in a supplemental spending package, alongside the resources other disaster-affected communities urgently need. We are asking you to use your voice and your vote to make disaster relief a national priority.

Thank you for standing with disaster survivors across the country.`;

export const senatorsScript = `My name is ____.
 
[IF APPLICABLE] I am a Los Angeles fire survivor.
 
[Add in your own personal story here and why this matters to you]
 
Thank you for your leadership on behalf of Los Angeles fire survivors and for fighting for the federal resources Californians need to recover. Please keep up the fight to ensure substantial disaster recovery funding for Los Angeles is included in the next supplemental spending package.
 
Thank you.`;

export const representativesScript = `My name is ____.
 
[Add in your own personal story here and why this matters to you]
 
Communities across the country are still waiting for the federal support they need to recover from devastating fires, floods, and storms. Disaster recovery is a national responsibility — and this is a moment to show that the federal government will stand with survivors, regardless of where they live.
 
Please fight to ensure substantial disaster recovery funding for Los Angeles — including the Eaton and Palisades fires — is included in a supplemental spending package, alongside the resources other disaster-affected communities urgently need. We are asking you to use your voice and your vote to make disaster relief a national priority.
 
Thank you for standing with disaster survivors across the country.`;

export const leadershipScripts = [
  {
    title: "Senate Majority Leader John Thune, South Dakota",
    copyLabel: "Copy Sen. Thune script",
    script: `My name is ____.
 
[Add in your own personal story here and why this matters to you]
 
Communities across the country—including North Carolina, Texas, Utah, California—are all waiting on federal relief. This is the moment to show that the federal government works for all disaster survivors, regardless of their zip code. We are urging you to ensure disaster aid is included in any supplemental funding bill. Please commit to scheduling a floor vote on disaster relief and signal to the Republican caucus that this is a national priority.
 
Thank you.`,
  },
  {
    title: "Senate Appropriations Chair Susan Collins, Maine",
    copyLabel: "Copy Sen. Collins script",
    script: `My name is ____.
 
[Add in your own personal story here and why this matters to you]
 
Your leadership on disaster relief has been bipartisan and principled for decades. Maine communities understand what it means to wait for federal help. We are asking you to use your gavel to write the relief that California—and LA, NC, TX, and UT communities—are still waiting for. Please commit publicly to including robust disaster relief in any supplemental funding bill.
 
Thank you.`,
  },
  {
    title: "Senate Appropriations Ranking Member Patty Murray, Washington",
    copyLabel: "Copy Sen. Murray script",
    script: `My name is ____.
 
[Add in your own personal story here and why this matters to you]
 
Our hearts are with the Spokane region as it recovers from the recent devastating fires. Washington communities understand what it means to wait for federal help, and how important it is for survivors everywhere to receive it. We are asking you to stand with Los Angeles survivors and fight to include meaningful recovery funding in any supplemental funding bill. Please use your seat at the appropriations table to make sure disaster relief is not traded away in any final negotiations and make that commitment publicly on behalf of fire survivors across the United States.
 
Thank you.`,
  },
  {
    title: "Senate Minority Leader Chuck Schumer, New York",
    copyLabel: "Copy Sen. Schumer script",
    script: `My name is ____.
 
[Add in your own personal story here and why this matters to you]
 
Please make clear that the Senate cannot move forward without meaningful relief for every disaster-affected state. Commit to using every possible lever to ensure disaster relief is included in any supplemental, and to uniting your colleagues behind disaster survivors across the United States.
 
Thank you.`,
  },
  {
    title: "Speaker Mike Johnson, Louisiana",
    copyLabel: "Copy Speaker Johnson script",
    script: `My name is ____.
 
[Add in your own personal story here and why this matters to you]
 
You represent a state that knows the real impact of when Washington takes too long. We are asking you to use your authority to make sure the communities across the United States still recovering from fires, floods, and storms do not fall through the cracks of the fiscal year.
 
Thank you.`,
  },
  {
    title: "House Appropriations Chair Tom Cole, Oklahoma",
    copyLabel: "Copy Rep. Cole script",
    script: `My name is ____.
 
[Add in your own personal story here and why this matters to you]
 
Oklahoma communities know firsthand what it means to face devastating disasters. When disaster strikes, recovery is a national responsibility. Please include substantial funding for Eaton and Palisades fire recovery in the next supplemental and use your position as House Appropriations Chair to help secure the federal resources survivors across the country need to rebuild.
 
Thank you.`,
  },
] as const;

export type SoftrEmbedKey = "caSenators" | "caDelegation" | "congressLeadership";

export const softrEmbeds: Record<
  SoftrEmbedKey,
  { id: string; src: string; initialHeight: number }
> = {
  caSenators: {
    id: "softr-aa809bb3-6a3d-4593-89b0-cfa55405f912-ca-senators",
    src: "https://actionhub.softr.app/embed/pages/aa809bb3-6a3d-4593-89b0-cfa55405f912/blocks/ca-senators",
    initialHeight: 360,
  },
  caDelegation: {
    id: "softr-aa809bb3-6a3d-4593-89b0-cfa55405f912-ca-delegation-show5",
    src: "https://actionhub.softr.app/embed/pages/aa809bb3-6a3d-4593-89b0-cfa55405f912/blocks/ca-delegation-show5",
    initialHeight: 820,
  },
  congressLeadership: {
    id: "softr-aa809bb3-6a3d-4593-89b0-cfa55405f912-congress-leadership",
    src: "https://actionhub.softr.app/embed/pages/aa809bb3-6a3d-4593-89b0-cfa55405f912/blocks/congress-leadership",
    initialHeight: 920,
  },
};

/**
 * Social share channels, mirroring the block at the bottom of
 * deptofangels.org/take-action. The share URLs point at DOA's page rather than
 * ours because the campaign graphics themselves print DOA's URL as the call to
 * action, and DOA's page carries the Open Graph tags that render the preview.
 *
 * Graphics are DOA artwork, copied into public/share/ from deptofangels.org/s/.
 * Instagram has no web share intent, so its button opens instagram.com exactly
 * as DOA's does — the graphic has to be saved first.
 */
export const shareChannels = [
  {
    key: "facebook",
    heading: "Share on Facebook",
    buttonLabel: "Share on Facebook",
    shareUrl:
      "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.deptofangels.org%2Ftake-action",
    graphic: {
      src: "/share/share-facebook.png",
      width: 940,
      height: 788,
      alt: "Campaign graphic for Facebook: Disaster Recovery Needs Federal Support.",
      linkLabel: "Facebook graphic",
    },
  },
  {
    key: "x",
    heading: "Share on X",
    buttonLabel: "Share on X",
    shareUrl:
      "https://x.com/intent/post?text=Help%20us%20show%20Congress%20how%20many%20people%20are%20standing%20with%20survivors.%20%23fundtherecovery&url=https%3A%2F%2Fwww.deptofangels.org%2Ftake-action",
    graphic: {
      src: "/share/share-x.png",
      width: 1600,
      height: 900,
      alt: "Campaign graphic for X: Disaster Recovery Needs Federal Support.",
      linkLabel: "X graphic",
    },
  },
  {
    key: "instagram",
    heading: "Share on Instagram",
    buttonLabel: "Share on Instagram",
    shareUrl: "https://www.instagram.com",
    graphic: {
      src: "/share/share-instagram.png",
      width: 1080,
      height: 1350,
      alt: "Campaign graphic for Instagram: Disaster Recovery Needs Federal Support.",
      linkLabel: "Instagram graphic",
    },
  },
] as const;
