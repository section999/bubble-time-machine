/* ════════════════════════════════════════════════
   Bubble Time Machine — Content Data
   ════════════════════════════════════════════════ */

/* ── Hero data per year ── */
const CONTENT = {
  "1985": {
    heroMood: "The year everything changed. A single meeting in New York rewrites Japan's economy.",
    heroSub:  "Finance ministers gather at the Plaza Hotel in Manhattan. They agree to weaken the dollar. Nobody in Tokyo yet knows what this means for their daily life.",
  },
  "1986": {
    heroMood: "The yen strengthens. The Bank of Japan cuts rates. The fuse is lit.",
    heroSub:  "Japanese exports are struggling as the yen surges. The government responds with cheap money — and a different kind of growth begins. Asset prices start their long climb.",
  },
  "1987": {
    heroMood: "Land prices defy gravity. The money keeps coming and nobody wants it to stop.",
    heroSub:  "Tokyo real estate is doubling in price. Corporations are borrowing against land to buy stocks. Banks are lending against stocks to buy more land. The loop is self-reinforcing.",
  },
  "1988": {
    heroMood: "Japan at peak bubble. The Nikkei keeps climbing and City Pop is on every FM radio.",
    heroSub:  "Salarymen are taking taxis home at midnight without checking the meter. Record labels are spending freely on artists nobody's heard of yet. Everything feels like it will last forever.",
  },
  "1989": {
    heroMood: "The Nikkei hits its all-time high on the last day of the year. Nobody knows what comes next.",
    heroSub:  "December 29, 1989. The Nikkei closes at 38,915. Across Tokyo, the karaoke bars are full and the future feels infinite. It is the last night of the bubble.",
  },
  "1990": {
    heroMood: "The Nikkei falls by half in a single year. The party is over before anyone admits it.",
    heroSub:  "Stock prices are collapsing, but land hasn't moved yet. Banks are still lending against old valuations. The culture hasn't gotten the memo. City Pop is still on the radio.",
  },
  "1991": {
    heroMood: "Land prices collapse. The Lost Decade begins. Japan will spend thirty years with this wound.",
    heroSub:  "The real estate market that had seemed untouchable begins its long fall. Corporations carry loans against assets worth a fraction of their collateral. Banks are quietly insolvent.",
  },
};

/* ── Entry point cards ── */
const ENTRY_POINTS = [
  { id: "music",      icon: "🎵", title: "Music",      sub: "City Pop & beyond" },
  { id: "anime",      icon: "📺", title: "Anime",      sub: "The Akira era" },
  { id: "aesthetic",  icon: "🏙️", title: "Aesthetic",  sub: "Visual culture" },
  { id: "economy",    icon: "💹", title: "Economy",    sub: "The numbers" },
  { id: "daily-life", icon: "🏠", title: "Daily Life", sub: "What it felt like" },
];

/* ── Deep-dive sections: 4 per year per entry point ── */
const ENTRY_SECTIONS = {

  /* ══════════════════════════════════════
     MUSIC
  ══════════════════════════════════════ */
  music: {
    "1985": [
      {
        title: "City Pop Crystallizes",
        body: "By 1985 City Pop is no longer an experimental genre — it is the sound of urban Japan. Tatsuro Yamashita's Christmas Eve, released in 1983, is establishing itself as essential year-end FM listening, its annual return to radio already expected. The genre's characteristic elements — jazz-funk rhythms, synthesizer warmth, smooth electric bass, aspirational imagery — are fully formed. FM radio expansion across the decade has built an audience calibrated to appreciate sophisticated production. The music and its listeners have grown up together.",
        chainActive: ["music", "spending"],
      },
      {
        title: "Tatsuro Yamashita at the Center",
        body: "Yamashita is the producer-artist who defines City Pop's quality standard in 1985. His studio perfectionism — multilayered vocals, precisely engineered arrangements, music that rewards close listening on good equipment — sets the bar that other labels and artists aspire to. His commercial success demonstrates that sophistication and popularity are not in conflict. The example he provides shapes what the entire genre attempts.",
        chainActive: ["music"],
      },
      {
        title: "FM Radio as Cultural Infrastructure",
        body: "FM broadcasting in Japan is expanding in 1985, and City Pop is its ideal programming. The format's high audio fidelity rewards well-produced, complex music. Late-night FM programs turn jazz-funk hybrids into the shared soundtrack of urban Japan. Listeners are investing in quality stereo equipment to hear the difference. The radio station, the equipment manufacturer, and the record label are participating in the same ecosystem of aspiration.",
        chainActive: ["music", "wealth-effect"],
      },
      {
        title: "The Session Musician Infrastructure",
        body: "Much of City Pop's sonic consistency comes from a core group of elite session musicians available to major labels. These are players with jazz training, technical facility, and an ear for the particular groove the genre requires. A listener hearing multiple City Pop albums from 1985 is often hearing the same players on each. This shared personnel creates coherence across artists and labels — City Pop sounds like itself because the same hands are making it.",
        chainActive: ["music"],
      },
    ],
    "1986": [
      {
        title: "Label Budgets Expand with Cheap Money",
        body: "The Bank of Japan's rate cuts in 1986 flow through the economy in ways that reach the music industry. Major labels affiliated with consumer electronics conglomerates find their parent companies in robust financial shape despite the export slowdown. A-and-R budgets expand. The willingness to fund projects without immediate commercial certainty increases. Music that requires expensive studio time and large session rosters becomes easier to justify.",
        chainActive: ["boj-rates", "cheap-money", "music"],
      },
      {
        title: "Taeko Ohnuki and Sophistication",
        body: "Taeko Ohnuki represents City Pop's most intellectually ambitious strand in 1986. Her arrangements incorporate jazz harmony, French pop influence, and a willingness to subordinate commercial accessibility to artistic interest. The bubble era's A-and-R culture can afford to fund work like this. Ohnuki's albums sell respectably without dominating charts — a performance that would have been commercially unsustainable in a tighter industry.",
        chainActive: ["music"],
      },
      {
        title: "Omega Tribe and the Resort Sound",
        body: "Carlos Toshiki & Omega Tribe establishes in 1986 a lighter, breezier strand of City Pop directly connected to leisure and resort culture. Their music is about weekends — coastal drives, beach resorts, the aspirational geography of the newly affluent Japanese middle class. The sound is less harmonically ambitious than Yamashita's but precisely calibrated to the lifestyle imagery the bubble is producing. It sells to people who are living, or aspiring to live, the life it describes.",
        chainActive: ["music", "spending", "wealth-effect"],
      },
      {
        title: "Tower Records and Import Culture",
        body: "Tower Records' Shibuya flagship has become a cultural institution by 1986. Japanese consumers are buying American imports — Steely Dan catalog titles, Anita Baker, Luther Vandross — with enthusiasm funded by a strong yen and rising disposable incomes. The imports both inspire domestic artists and establish a quality benchmark for what sophisticated listeners expect. City Pop exists in productive dialogue with its American sources, absorbing influences and transforming them into something distinctly Japanese.",
        chainActive: ["spending", "music"],
      },
    ],
    "1987": [
      {
        title: "The CD and the Repurchase Market",
        body: "Japan adopts the compact disc format more rapidly than any other market. By 1987 major releases are primarily on CD, and consumers with discretionary income are repurchasing vinyl catalogs in the new format. City Pop — well-produced, sonically rich — is particularly well served by digital reproduction. The repurchase market creates revenue from existing catalogs without requiring new production. Bubble-era consumers fund this secondary market without significant resistance.",
        chainActive: ["spending", "music"],
      },
      {
        title: "Concert Production Values",
        body: "Live music production scales up considerably in 1987. The elaborate stage designs, expensive equipment, and high production values of concerts are funded by corporate entertainment budgets that have expanded with the bubble. Artists perform in venues that match the aspirational geography of their music — coastal amphitheaters, resort halls, purpose-built spaces that did not exist a decade earlier. The concert is no longer just a performance; it is an experience product.",
        chainActive: ["spending", "wealth-effect", "music"],
      },
      {
        title: "Music Video as Visual Manifesto",
        body: "Japanese music television reaches peak production value in 1987. Music videos are elaborate, well-shot, and expensive — coastal drives, rooftop settings, nighttime Tokyo sequences that establish a visual grammar for the era's aspirations. The fashion and architecture of these videos creates a self-reinforcing image of what prosperity looks like. City Pop does not just describe a lifestyle; its visual presentation demonstrates it.",
        chainActive: ["music", "spending", "aesthetic"],
      },
      {
        title: "The Nightclub Economy",
        body: "Tokyo's nightclub scene in 1987 is flush. Venues invest in superior sound systems and aggressive booking. Club-goers spend on entry and drinks without checking prices. The interiors — designed with the same visual confidence as the music videos playing on their screens — are themselves expressions of the bubble aesthetic. City Pop is the soundtrack to these spaces, music that exists because of the bubble's discretionary income and whose commercial success depends on the same conditions that fill the clubs.",
        chainActive: ["spending", "wealth-effect", "music", "aesthetic"],
      },
    ],
    "1988": [
      {
        title: "The Year of Maximum Production",
        body: "1988 is City Pop's production peak. Label budgets are at their maximum. Studio time is expensive and available. Artists record without the commercial pressure that will define the 1990s. The music produced this year is technically sophisticated and emotionally confident — work that could only have been made in an economy whose optimism was, for the moment, still intact. Recordings from 1988 carry the specific weight of a culture that believes its prosperity is permanent.",
        chainActive: ["cheap-money", "spending", "music"],
      },
      {
        title: "Mariya Takeuchi in the Studio",
        body: "Mariya Takeuchi is recording in the mid-to-late 1980s with the care and resources that only the bubble years could sustain. Her collaboration with husband Tatsuro Yamashita produces music of unusual craft. Plastic Love, recorded in 1984 and already circulating on mix-tapes, will not find its global audience until 2017 — but in 1988 it exists as evidence of what the era's studio culture made possible. The YouTube discovery is thirty years away.",
        chainActive: ["music", "wealth-effect"],
      },
      {
        title: "Corporate Entertainment and Live Music",
        body: "Corporate Japan in 1988 is spending heavily on entertainment. Salarymen hold expense accounts for nightlife, karaoke, concerts. This corporate spending is the financial floor beneath much of City Pop's live economy — and the same entertainment budgets that fill concert halls also fund the anime screenings, theatrical productions, and variety shows that share Tokyo's nighttime geography. Music production and live performance are one of the bubble's primary expressions, operating in the same economic ecosystem as every other form of organized leisure.",
        chainActive: ["spending", "wealth-effect", "music", "anime"],
      },
      {
        title: "Artistic Freedom as a Bubble Dividend",
        body: "In 1988 major labels can absorb albums that don't chart. A-and-R decisions are not purely commercial calculations. This tolerance creates space for more sophisticated work — City Pop that explores extended jazz harmony, complex rhythms, arrangements that reward repeated listening over immediate impact. The bubble's willingness to absorb risk indirectly funds musical ambition. The connection is rarely acknowledged, but it is real.",
        chainActive: ["cheap-money", "music"],
      },
    ],
    "1989": [
      {
        title: "The Last Confident Year",
        body: "Music production in 1989 continues at full funding, with no audible signal that conditions are about to change. The Nikkei will peak on December 29, but for most of the year that peak is not visible. Albums recorded in 1989 carry the specific confidence of work made without awareness of approaching limits. The music does not know it is an ending. It sounds exactly like a middle.",
        chainActive: ["wealth-effect", "spending", "music"],
      },
      {
        title: "The Sound Transitions",
        body: "The idol pop format — shorter songs, simpler harmonic structures, choreography-driven presentation — is dominating charts in 1989 in ways that would have seemed unlikely four years earlier. Acts like Wink, whose sound derives from European synth-pop rather than City Pop's jazz-funk foundations, are outselling the genre's established artists on the singles charts. The shift reflects a market reality: idol pop requires less studio time and smaller session rosters, making it structurally cheaper to produce. Labels recognizing this cost differential begin quietly redirecting investment. The change is not a fall in taste but a change in the economics of what taste can afford to promote.",
        chainActive: ["music", "spending"],
      },
      {
        title: "International Ambitions",
        body: "Some City Pop artists attempt international crossover in 1989, using the bubble's financial confidence to fund overseas recording sessions and promotional activities. The attempts find limited audiences in Western markets — the distribution infrastructure and cultural context are absent — but they represent an ambition that the bubble made financially possible. Japan's economic confidence has become global; the music industry's reach has not yet followed.",
        chainActive: ["music", "spending"],
      },
      {
        title: "New Year's Eve 1989 at the Karaoke Bar",
        body: "The last night of the 1980s is celebrated in karaoke rooms booked weeks in advance. Tatsuro Yamashita's Christmas Eve has just finished its run on the radio. The City Pop playing through these evenings is the unacknowledged soundtrack of something closing. Nobody in the room knows that the Nikkei closed at 38,915 two days ago — its all-time peak. The song ends. Another one begins. The decade turns. Nothing has yet visibly changed, and that is precisely the point.",
        chainActive: ["spending", "wealth-effect", "music"],
      },
    ],
    "1990": [
      {
        title: "The Budget Meeting",
        body: "Label executives are having conversations in 1990 that would have been unthinkable in 1988. A-and-R budgets are reviewed. Acts with declining sales are dropped. The infinite production funds of the bubble years are contracting. The music that results is slightly more conservative — less willing to absorb the cost of ambitious production in exchange for uncertain commercial return. The change is not dramatic yet, but it is directional.",
        chainActive: ["tightening", "music"],
      },
      {
        title: "The Mood the Music Cannot Sustain",
        body: "City Pop requires a specific emotional condition: prosperity, aspiration, the sense that the future will exceed the present. In 1990 the economic news contradicts this mood. The Nikkei has fallen by half. Real estate is beginning to soften. The confidence that City Pop's sonic texture assumes is slowly draining from the culture that produced and consumed it. The music continues being made and played, but its emotional register is increasingly at odds with its context.",
        chainActive: ["tightening", "music", "collapse"],
      },
      {
        title: "Radio and the Changing Playlist",
        body: "FM radio programming in 1990 is shifting. Imported American pop is receiving more airplay. Domestic artists are covering foreign hits more frequently. The confidence in domestic production that characterized peak City Pop is giving way to internationalism as a safer commercial bet. The radio station senses the cultural temperature before the labels do, adjusting its programming toward what listeners want to hear rather than what the labels are spending to promote.",
        chainActive: ["music", "tightening"],
      },
      {
        title: "Southern All Stars and the Art of Surviving",
        body: "Southern All Stars represent a model of adaptation — a rock-adjacent act with City Pop influences that has built a sufficiently broad audience to survive the economic contraction. Their durability illustrates what distinguishes artists who outlast the bubble from those who do not: an audience that follows them for reasons beyond the lifestyle aspirations the bubble temporarily made universal. When those aspirations deflate, artists without deeper audience loyalty have nothing left.",
        chainActive: ["music", "collapse"],
      },
    ],
    "1991": [
      {
        title: "The Economics of Closure",
        body: "The economic reality of 1991 — land price collapse, banking crisis, corporate restructuring — reaches the music industry with force. Labels dramatically cut A-and-R spending. Studio time is rationed. The expensive, complex productions that defined City Pop become financially unsustainable overnight. Artists who depended on label investment for their sound find themselves without the resources their music requires. The end of the bubble is audible in what is no longer being recorded.",
        chainActive: ["collapse", "lost-decade", "music"],
      },
      {
        title: "J-Pop and the New Economics",
        body: "The genre replacing City Pop — loosely called J-Pop — is more efficiently produced, less harmonically adventurous, and better calibrated to the mass market that label economics now require. Dreams Come True, Chage and Aska, and the idol management systems building around acts like SMAP construct their commercial logic on simpler structures that cost less to produce and reach wider audiences. The transition is not a fall in quality so much as a change in what quality means when the budget assumptions change. The era of expensive sophistication is over.",
        chainActive: ["collapse", "lost-decade", "music"],
      },
      {
        title: "What the Crash Took from Music",
        body: "The most lasting damage of the bubble's collapse to Japanese music is not the artists lost but the infrastructure dismantled. Studios close. Session musician rosters contract. The production culture that took a decade to build requires sustained investment to maintain — investment that post-bubble label economics cannot provide. The particular sound of City Pop was not just talent; it was talent plus infrastructure plus money. Two of those three disappear in 1991.",
        chainActive: ["collapse", "music", "lost-decade"],
      },
      {
        title: "The Archive That Would Travel",
        body: "In 1991, nobody is thinking about how these recordings will be received in 2017. City Pop in 1991 feels like cultural residue from a discredited era of excess. The YouTube algorithm's discovery is twenty-six years away. The recordings are being quietly archived in a culture that has moved on — boxed in warehouses, pressed into CD catalogs, waiting for a digital distribution system that does not yet exist to remove every barrier that limited their reach in their original moment.",
        chainActive: ["music"],
      },
    ],
  },

  /* ══════════════════════════════════════
     ANIME
  ══════════════════════════════════════ */
  anime: {
    "1985": [
      {
        title: "The OVA Format Consolidates",
        body: "The Original Video Animation format — released directly to retail without broadcast or theatrical intermediary — had its commercial debut in 1983 with Bandai's Dallos. By 1985 it is establishing itself as a genuinely viable distribution channel with its own economics and audience. The format allows content outside broadcast standards: darker themes, more violence, genres that find enthusiastic niche audiences. It is not incidental to the bubble era — it is funded by the same consumer spending that is expanding across every category.",
        chainActive: ["spending", "anime"],
      },
      {
        title: "Megazone 23 and Urban Unease",
        body: "Megazone 23, released in March 1985, establishes a template for mid-decade OVA: a contemporary city that conceals a fundamental lie, corporate conspiracy, a protagonist who discovers the truth at the cost of everything. The visual language is urban, neon-lit, and pessimistic — a counterpoint to the bubble's official optimism. The film articulates anxieties that the economic data does not yet support. Dystopian fiction in bubble-era Japan does not wait for the crash to find its subject matter.",
        chainActive: ["anime"],
      },
      {
        title: "Studio Ghibli Is Founded",
        body: "Studio Ghibli is established on June 15, 1985 following the commercial success of Nausicaä of the Valley of the Wind. Hayao Miyazaki and Isao Takahata begin production on Laputa: Castle in the Sky. The studio's founding commitment — hand-drawn animation of the highest possible quality, stories that take children and their imaginations seriously — requires sustained investment. The bubble era's capacity to fund ambitious creative projects makes Ghibli's first decade financially viable.",
        chainActive: ["anime"],
      },
      {
        title: "The Manga-to-Anime Pipeline",
        body: "The relationship between manga and anime is formalizing in 1985 into a reliable commercial structure. Dragon Ball is entering animation production ahead of its February 1986 broadcast launch; Saint Seiya is in development for its October 1986 debut. The manga serialization system, which tests story and character over years of weekly publication, produces source material with proven audience attachment before a single animation cel is drawn.",
        chainActive: ["anime", "spending"],
      },
    ],
    "1986": [
      {
        title: "Dragon Ball Begins",
        body: "Dragon Ball starts its Fuji TV run in February 1986. The series' early episodes are conventional action animation — modest budget, standard production schedule, nothing that predicts the franchise it will become. Its importance in 1986 is not its quality but its audience reach: a Weekly Shōnen Jump adaptation with a proven readership, broadcast in a prime time slot, establishing viewing habits in a generation of children who will be the anime industry's core consumers throughout the 1990s.",
        chainActive: ["anime", "spending"],
      },
      {
        title: "Wings of Honneamise in Production",
        body: "Gainax's debut feature, Royal Space Force: The Wings of Honneamise, is in full production in 1986 with a budget that reflects bubble-era ambition. The film's premise — a fully realized alternative world, not a fantasy or science fiction adaptation but an entirely original creation — requires resources that only the flush economy can provide a first-time studio. The decision to fund it represents a confidence in creative investment that will be tested by the film's commercial performance at its 1987 release.",
        chainActive: ["anime", "cheap-money"],
      },
      {
        title: "The OVA Market Matures",
        body: "By 1986 the OVA market has established stable commercial patterns. Manga adaptations in fantasy and science fiction. Genre work in horror, mecha, and adult content. Direct-to-video delivery to rental shops and specialist retailers. The format is profitable without requiring theatrical production values — studios can produce efficiently and release to a guaranteed base of rental customers. Multiple studios are operating primarily in OVA, building the production infrastructure that will support larger projects.",
        chainActive: ["anime", "spending"],
      },
      {
        title: "Bubblegum Crisis Takes Shape",
        body: "Bubblegum Crisis, in development at AIC through 1986 for its planned 1987 release, imagines a Tokyo rebuilt after an earthquake by a corporation whose privatized police force has more power than the government. The series' visual design — power armor, corporate megastructures, neon-lit streets — engages with anxieties running beneath the bubble's surface optimism. Science fiction in 1986 Japan does not need to search for dystopian material. It finds it by looking at the present and extending its logic forward.",
        chainActive: ["anime"],
      },
    ],
    "1987": [
      {
        title: "Wings of Honneamise: Ambition and Its Costs",
        body: "Royal Space Force: The Wings of Honneamise premieres in March 1987 to critical admiration and commercial disappointment. Its reported budget of 800 million yen is not recovered at the box office. But the film establishes Gainax as a studio capable of extraordinary ambition and demonstrates what bubble-era production funding can achieve when applied to original work. The commercial failure is real; so is the artistic achievement. The bubble can absorb both.",
        chainActive: ["anime", "spending"],
      },
      {
        title: "Bubblegum Crisis Episodes",
        body: "The first episode of Bubblegum Crisis is released on December 25, 1987. The series' visual language — vigilante women in combat suits defending a privatized Tokyo against corporate-made androids — creates a template that will influence mecha and cyberpunk anime for a decade. Its production quality, high for an OVA series, reflects the funded confidence of its moment. That the story it tells involves corporate overreach and privatized violence is a detail the bubble economy does not pause to examine.",
        chainActive: ["anime", "wealth-effect"],
      },
      {
        title: "Animation Budgets and Corporate Sponsorship",
        body: "By 1987 anime production benefits visibly from bubble-era entertainment spending. Advertising budgets fund anime tie-ins. Corporations sponsor theatrical productions as prestige projects. These are the same corporate entertainment budgets funding City Pop concerts and nightclub expansions — the entertainment industry operates as a single ecosystem of discretionary spending, and anime's improving production values reflect that shared pool. Production values in 1987 anime are measurably higher than in 1982 anime — not only because of technical progress but because the economy can now afford to pay for quality.",
        chainActive: ["anime", "spending", "wealth-effect", "music"],
      },
      {
        title: "Akira: The Production Begins",
        body: "Katsuhiro Otomo's film Akira enters full production in 1987 with a budget of approximately 1.1 billion yen — the largest ever committed to a Japanese animated feature. The scale requires technical innovations: 24-frames-per-second fully detailed animation, dialogue recorded before animation began rather than after, a level of background detail unprecedented in theatrical anime. The project is only possible because the bubble economy can absorb the risk of a production this ambitious.",
        chainActive: ["anime", "cheap-money", "asset-surge"],
      },
    ],
    "1988": [
      {
        title: "Akira Opens",
        body: "Akira opens on July 16, 1988 and is immediately understood as something unprecedented. Neo-Tokyo 2019 is rendered with a visual density — layered backgrounds, fully animated crowds, seamless day-to-night atmospheric shifts — that no previous theatrical anime has achieved. The film's politics are not subtle: a city built on suppressed disaster, ruled by corrupt officials, detonated by what it tried to contain. The bubble economy funds a film whose subject is what happens when growth and control become indistinguishable.",
        chainActive: ["anime", "asset-surge", "wealth-effect"],
      },
      {
        title: "Totoro and Grave of the Fireflies",
        body: "Studio Ghibli releases two films simultaneously on April 16, 1988: My Neighbor Totoro and Grave of the Fireflies. The double release is a commercial risk; Totoro initially underperforms against expectations. Together the films represent the range of what bubble-era funding supports — rural childhood fantasy and wartime child mortality, both executed with complete artistic seriousness. The economy's capacity to absorb commercial risk makes this kind of creative range possible.",
        chainActive: ["anime", "spending"],
      },
      {
        title: "The Anime Merchandise Ecosystem",
        body: "In 1988 the commercial ecosystem surrounding anime has expanded well beyond the productions themselves. Model kits, character goods, specialist magazines, soundtrack CDs, art books — all are sold to consumers with bubble-era discretionary income. The soundtrack CD in particular bridges the anime and music industries: the same consumer who buys a City Pop album at Tower Records buys the Akira soundtrack the following week. Merchandise revenue subsidizes production budgets and extends the financial life of successful titles across both industries.",
        chainActive: ["anime", "spending", "wealth-effect", "music"],
      },
      {
        title: "OVA and the Niche Economy",
        body: "The OVA format's industrial logic in 1988 is distinct from theatrical and broadcast anime: no distributor approval, no broadcast standards, no theatrical run required. A studio can produce a title for a specific audience — mecha fans, horror enthusiasts, collectors — and deliver directly to specialist retailers whose customers will buy regardless of general audience confidence. Broadcast anime depends on advertising budgets that track corporate spending. OVA depends on the collector's specific commitment, which is a structurally different and stickier foundation.",
        chainActive: ["anime", "spending"],
      },
    ],
    "1989": [
      {
        title: "Patlabor and the Near Future",
        body: "The Patlabor OVA series (1988–1989) takes mecha anime in an unusual direction: grounded, bureaucratic, concerned with labor relations and institutional politics in a near-future Japan that looks very much like 1989 Japan. The mechs are operated by a police unit subject to budget reviews and internal politics. The choice to use science fiction not for escapism but for social realism is distinctive in a genre typically oriented toward fantasy combat. Patlabor works because its world is recognizable.",
        chainActive: ["anime"],
      },
      {
        title: "Kiki's Delivery Service",
        body: "Studio Ghibli releases Kiki's Delivery Service on July 29, 1989, and its commercial performance transforms the studio's financial position. The film demonstrates that family-oriented theatrical anime can compete consistently with Hollywood in the Japanese market. Miyazaki's craft is now bankable at scale. The studio that was a creative experiment in 1985 is by 1989 a reliable theatrical institution — a transformation made possible by a combination of artistic excellence and economic conditions willing to pay for it.",
        chainActive: ["anime", "spending"],
      },
      {
        title: "The Nikkei Peak and the Anime Industry",
        body: "The Nikkei closes at its all-time high on December 29, 1989. The anime industry's connection to this peak is indirect but structural: advertising spending that funds broadcast anime, discretionary income that sustains the OVA and merchandise markets, corporate entertainment budgets that underwrite theatrical prestige projects. None of this has yet contracted. The industry enters 1990 at full capacity, without anticipating that the conditions sustaining that capacity are about to change.",
        chainActive: ["anime", "asset-surge", "spending"],
      },
      {
        title: "The Franchise Logic",
        body: "The Gundam franchise, through its various OVA continuations and theatrical compilations, establishes in 1989 a commercial model that will prove more durable than single-title production: consistent universe, recurring characters, loyal collector base, model kit sales that continue regardless of individual title performance. The franchise provides a financial floor that does not depend on each new production's success. This logic will sustain the anime industry through the harder conditions coming.",
        chainActive: ["anime", "spending"],
      },
    ],
    "1990": [
      {
        title: "The First Budget Pressure",
        body: "Advertising spending begins contracting in 1990 as the Nikkei falls. Broadcast anime budgets tighten. Some planned OVA series are cancelled or shortened before completion. Production studios that expanded rapidly during the bubble years are discovering that their overhead is calibrated for conditions that no longer exist. The anime industry's relationship to economic conditions, always indirect, becomes suddenly and visibly direct.",
        chainActive: ["tightening", "anime", "collapse"],
      },
      {
        title: "Akira's International Life",
        body: "Akira continues to find audiences in the United States in 1990, where Streamline Pictures has been distributing a dubbed version since its 1989 limited theatrical run. Home video sales are expanding its reach. Its influence on Western science fiction, comics, and visual culture is becoming visible. The film that was a domestic commercial disappointment in 1988 is becoming a global reference point. The bubble economy funded a film that is outlasting the bubble.",
        chainActive: ["anime"],
      },
      {
        title: "Gainax and Economic Anxiety",
        body: "Gainax in 1990 is dealing with the financial aftermath of Wings of Honneamise and severe production difficulties on Nadia: The Secret of Blue Water, which began airing in April 1990. Hideaki Anno is directing Nadia under conditions of considerable stress. The combination of institutional pressure, creative constraint, and the general atmosphere of deflating ambition in the broader economy is shaping Anno's sensibility in ways that will eventually find expression in his subsequent work.",
        chainActive: ["anime", "collapse"],
      },
      {
        title: "The Collector Market's Inertia",
        body: "Anime merchandise and collectibles are still selling reasonably well in 1990 even as production conditions tighten. The collector market, established and habituated during the bubble years, has enough behavioral momentum to continue for now. Casual consumer spending that supported rapid expansion is pulling back, but dedicated collectors are stickier. The industry is discovering the difference between its core audience and its boom-era peripheral audience as the latter disappears.",
        chainActive: ["anime", "tightening"],
      },
    ],
    "1991": [
      {
        title: "Production Contraction",
        body: "The anime industry enters 1991 with significantly reduced budgets across every production category. OVA series that would have been greenlit without hesitation in 1988 are now rejected. Studios are reducing staff. The production infrastructure that the bubble built — the specialist animators, the background artists, the effects teams — is more than the post-bubble market can sustain. The skills and people trained during the flush years are dispersing into a contracting industry.",
        chainActive: ["collapse", "anime", "lost-decade"],
      },
      {
        title: "Anno After Nadia",
        body: "Nadia: The Secret of Blue Water concludes its broadcast run in April 1991, leaving Hideaki Anno in a state of severe creative and personal exhaustion. The production's difficulties — scheduling pressure, quality compromises, institutional friction — have reinforced his existing skepticism about the conventions of the medium. The mecha genre's heroic frameworks feel inadequate to his experience. The ideas that will define his next major project are not yet a proposal, but the psychological conditions producing them are fully formed.",
        chainActive: ["anime", "collapse"],
      },
      {
        title: "International Licensing as Survival",
        body: "Facing a contracting domestic market, anime producers are beginning to look seriously at overseas licensing revenue. The international interest generated by Akira creates licensing opportunities that did not exist before 1988. The anime industry discovers in 1991 that the global audience whose existence it had not planned for may partially compensate for a domestic audience spending less. The export economy that the bubble neglected is becoming, by default, a recovery strategy.",
        chainActive: ["anime", "collapse"],
      },
      {
        title: "What the Bubble Era Built",
        body: "The lasting legacy of bubble-era anime is not primarily the titles it produced but the production capacity and talent it developed. Studios, directors, animators, and technical personnel who trained during the flush years carry those skills into the harder 1990s. The films and series that will define the decade's output — including Ghost in the Shell (1995) and Cowboy Bebop (1998) — are made by people whose craft was formed in the bubble. The economic conditions that trained them no longer exist; the training endures.",
        chainActive: ["anime", "lost-decade"],
      },
    ],
  },

  /* ══════════════════════════════════════
     AESTHETIC
  ══════════════════════════════════════ */
  aesthetic: {
    "1985": [
      {
        title: "Japanese Designers on the World Stage",
        body: "By 1985 Rei Kawakubo and Yohji Yamamoto have been presenting in Paris for four years, since their Spring/Summer 1981 debut. The Western fashion establishment is still processing the encounter — the dark colors, the asymmetry, the deliberate rejection of conventional beauty. These designers are not imitating European fashion; they are proposing an alternative to it. The domestic market's prosperity funds the Paris presence; the Paris presence validates the domestic market's investment in avant-garde clothing.",
        chainActive: ["aesthetic", "spending"],
      },
      {
        title: "The Department Store as Cultural Institution",
        body: "Shibuya's Parco and Seibu department stores are defining a visual retail culture in 1985 that connects fashion, art, music, and architecture in a single consumer space. These stores commission artists for installations, design elaborate seasonal windows, publish influential magazines. The department store is not primarily a retail venue — it is a cultural institution that happens to sell things. The distinction matters: it attracts a customer who is buying an experience and an identity, not just a product.",
        chainActive: ["aesthetic", "spending"],
      },
      {
        title: "Issey Miyake and Material Thinking",
        body: "Issey Miyake is working in 1985 with a premise that separates him from couture tradition: that clothing is a system for organizing the body's relationship to space, not a decoration applied to an existing form. His garments — geometrically structured, architecturally conceived, referencing industrial materials and manufacturing logic — treat the body as a three-dimensional problem to be solved rather than a silhouette to be enhanced. The approach requires sustained investment in material research and technical development. The era's willingness to fund premium-priced innovative clothing makes this kind of systematic experimentation commercially viable.",
        chainActive: ["aesthetic"],
      },
      {
        title: "Harajuku and the Street",
        body: "The Harajuku street fashion scene is well established by 1985 — its pedestrian paradise culture active since 1977, its visual subcultures differentiated and recognized. What changes in the mid-1980s is its relationship to the mainstream: the economic confidence of the bubble era creates conditions in which individuality of dress is increasingly acceptable as urban identity, not deviance. The subcultures that will define Japanese street fashion internationally are finding their audiences within a society that has become more tolerant of visible self-expression.",
        chainActive: ["aesthetic", "spending"],
      },
    ],
    "1986": [
      {
        title: "The Luxury Brand Expansion",
        body: "By 1986 European luxury brands that entered Japan in the late 1970s and early 1980s are aggressively expanding their Japanese operations. Vuitton, Hermès, Gucci — the Japanese consumer has become the most important luxury market in the world per capita, and the brands are restructuring their global operations to serve it. Store design, service standards, and product allocation are adjusted to meet Japanese expectations. The brands that understand what Japanese consumers want — quality, authenticity, visible provenance — are consolidating market positions they will hold for decades.",
        chainActive: ["aesthetic", "spending", "wealth-effect"],
      },
      {
        title: "The Bubble Interior",
        body: "Japanese interior design magazines in 1986 are educating a newly affluent readership in how to spend on their living environments. The template they propose — white walls, imported contemporary furniture, track lighting, visible stereo equipment as design object — becomes an aspirational standard for urban middle-class households. The design media is not documenting existing taste; it is creating it. The magazines are instruction manuals for a lifestyle that the bubble's prosperity has made financially accessible.",
        chainActive: ["aesthetic", "spending", "wealth-effect"],
      },
      {
        title: "Golf as Economic Signal",
        body: "Golf club membership certificates are emerging as financial instruments in 1986: bought and sold as speculative assets, their price linked to land values and corporate entertainment budgets. The certificate's value has begun separating from the golf course's operational reality — what matters is not the quality of the greens but the trajectory of the price. This early dissociation between an object's use value and its market value anticipates the logic that will drive the broader asset bubble to its extreme.",
        chainActive: ["aesthetic", "asset-surge", "spending"],
      },
      {
        title: "The Magazine Ecosystem",
        body: "Japanese magazines in 1986 are design objects in themselves — printed on high-quality paper with sophisticated layouts that reflect advertising revenues from luxury brands. anan, Brutus, Popeye define visual culture for their readerships. The advertising ecosystem that funds them depends on the consumer confidence the bubble provides. The magazine is not simply a publication; it is a material demonstration of the standards it promotes, its own physical quality confirming the lifestyle it advocates.",
        chainActive: ["aesthetic", "spending"],
      },
    ],
    "1987": [
      {
        title: "Bubble Architecture",
        body: "Resort hotel and leisure facility construction accelerates to unprecedented scale in 1987 as land speculation profits are reinvested in infrastructure. Architects are commissioned for projects of unusual ambition: full-service ski complexes, coastal hotel compounds, golf resorts that incorporate serious art collections. The buildings are often striking — commissioned from architects given real creative latitude by clients whose profits have made cost a secondary consideration. The physical legacy of the bubble is being written in concrete and steel across Japan's resort geography.",
        chainActive: ["aesthetic", "asset-surge", "real-estate"],
      },
      {
        title: "The Automobile as Status Object",
        body: "The automobile reaches peak status function in 1987. The Toyota Soarer and Nissan Fairlady Z are established as the domestic luxury benchmark; the Honda NSX is in development, its production version still two years away. Corporate purchasing of European imports — BMW, Mercedes, Porsche — is significant and visible. Car design and advertising in 1987 is inseparable from the aspirational aesthetic of City Pop music videos, the coastal drive as emblem of the good life made available by prosperity.",
        chainActive: ["aesthetic", "spending", "wealth-effect"],
      },
      {
        title: "The Commercial Design Boom",
        body: "The bubble underwrites a generation of Japanese commercial artists with budgets that have no precedent in domestic creative practice. Ikko Tanaka — whose poster work translates classical Japanese visual grammar into modernist geometric form — receives corporate commissions that treat design as competitive differentiation. Furniture designer Shiro Kuramata, known for pieces like his 1986 steel mesh armchair How High the Moon, finds clients willing to fund objects at the boundary of design and conceptual art. Tadao Ando's concrete architecture gains institutional commissions that expand his practice beyond Japan. These are not decorative exercises — they are the consequence of an economy where companies compete on visual intelligence as well as product quality.",
        chainActive: ["aesthetic", "spending", "cheap-money"],
      },
      {
        title: "Fashion Week and Global Recognition",
        body: "Japanese designers are fully integrated into the international fashion calendar by 1987. Their Paris and Milan collections are received seriously by the Western press. The relationship between bubble-era domestic spending and international recognition is direct: the Japanese market's scale provides financial stability that frees designers to take creative risks internationally. The domestic consumer who buys Comme des Garçons in Aoyama is subsidizing the Paris shows that give the brand its global meaning.",
        chainActive: ["aesthetic", "spending"],
      },
    ],
    "1988": [
      {
        title: "Peak Luxury",
        body: "In 1988 the Japanese luxury goods market is consuming roughly 20% of the world's supply of certain Hermès products. Department stores report waiting lists for Vuitton bags measured in months. The consumption is not primarily about the objects — it is about participation in a visible culture of prosperity. The bags and scarves are social signals, precisely legible within their context. The brand is not selling a product; it is selling membership in a status category that the bubble has made broadly accessible.",
        chainActive: ["aesthetic", "spending", "wealth-effect"],
      },
      {
        title: "Art as Investment and Statement",
        body: "Japanese corporations and individuals are accelerating their entry into the international art market in 1988, following the pattern established by Yasuda Fire & Marine Insurance's 1987 acquisition of Van Gogh's Sunflowers. Impressionist and Post-Impressionist works are being acquired at prices that alarm Western observers. The acquisitions serve two simultaneous functions: financial investment and cultural statement. Japanese buyers are purchasing not just art but cultural authority — demonstrating that Japan's economic ascendancy is not merely commercial but civilizational.",
        chainActive: ["aesthetic", "spending", "asset-surge"],
      },
      {
        title: "The Golf Membership Market",
        body: "Golf club membership certificates in 1988 are one of Japan's most actively traded speculative assets, with prices rising rapidly and volumes high. The certificate has largely separated from the golf course it nominally represents — investors are buying price appreciation, not playing rights. This detachment of financial value from use value is visible and documented in 1988, though the absolute peak of certificate prices is still two years ahead. The golf certificate market is a legible early model of the bubble's internal logic.",
        chainActive: ["aesthetic", "asset-surge", "real-estate"],
      },
      {
        title: "Fashion as Social Architecture",
        body: "The young urban professional of 1988 Tokyo is defined in part by their brand relationships. Which labels they wear, which stores they frequent, which restaurants they can afford — these choices constitute a social grammar with precise gradations. Fashion is not merely consumption; it is a system for locating oneself in a hierarchy whose rankings matter enormously to participants. The bubble did not create this function for fashion — it made it available to a much larger population than had previously been able to participate.",
        chainActive: ["aesthetic", "spending", "wealth-effect"],
      },
    ],
    "1989": [
      {
        title: "Auction Rooms and the Japanese Presence",
        body: "By 1989 Japanese buyers have become the dominant force at Christie's and Sotheby's in New York and London. Across Impressionist, Post-Impressionist, and Old Masters categories, Japanese corporate and individual collectors are setting prices the Western art market had not anticipated. The pattern established by Yasuda Fire & Marine's 1987 Van Gogh purchase has become a sustained structural feature of the international auction calendar: major sales in which Japanese capital is absent are now unusual. The financial press on both sides of the Pacific is treating Japanese art buying as a geopolitical phenomenon, not a cultural curiosity.",
        chainActive: ["aesthetic", "spending", "asset-surge"],
      },
      {
        title: "The Concept Store Experience",
        body: "Retail design in 1989 has moved beyond the simple display of goods toward the creation of immersive experience environments. Flagship stores for fashion brands are designed by significant architects and treated as cultural institutions. Shopping is positioned as an aesthetic practice, not merely a transaction. The store that is also an art gallery, that commissions exclusive installations, that serves coffee in a designed cafe adjacent to the product floor — these are inventions of the bubble retail economy.",
        chainActive: ["aesthetic", "spending", "wealth-effect"],
      },
      {
        title: "The Interior Design Profession at Its Peak",
        body: "The Japanese interior design profession reaches its maximum scale in 1989. Firms that began as small residential studios in the 1970s now carry full staffs of architects, stylists, and project managers. The bubble has created a client class that renovates newly purchased apartments as a matter of course — not correction of a previous design but the assertion of a new occupant's aesthetic identity. The practice of commissioning a complete interior has migrated from corporate hospitality to private domestic life. Design firms calibrated for this demand will find, in 1991, that their market contracts faster than any other.",
        chainActive: ["aesthetic", "real-estate", "spending"],
      },
      {
        title: "The Holiday as Aesthetic Performance",
        body: "Overseas travel in 1989 is an aesthetic experience as much as a vacation. Where you went, which hotel you stayed in, what you brought back — these details are reportable on return. Travel agencies sell aspirational packages calibrated to match the social function holidays have acquired: Guam for the mass market, Paris and Rome for the ambitious. The holiday photo album is a record not just of experience but of achieved aspiration, shared with colleagues who understand its precise social meaning.",
        chainActive: ["aesthetic", "spending", "wealth-effect"],
      },
    ],
    "1990": [
      {
        title: "The Art Market's Delayed Response",
        body: "The art market's relationship to the Nikkei collapse is not immediate. In May 1990 — five months after the stock market peaked — collector Ryoei Saito pays $82.5 million for Van Gogh's Portrait of Dr. Gachet and $78.1 million for Renoir's Bal au Moulin de la Galette at New York auctions, setting world records. Japanese art buying has not yet received the message that the bubble has ended. By late 1990, however, planned acquisitions are being quietly cancelled and corporate art programs are under review. The art market is not immune to the underlying conditions; it is lagging them.",
        chainActive: ["aesthetic", "collapse", "asset-surge"],
      },
      {
        title: "Fashion Turns Quieter",
        body: "The visual excess of peak bubble fashion gives way in 1990 to something more considered. Designers begin exploring restraint. The maximalist consumption signaling of 1988 starts to read as slightly crude — a problem of timing, not taste. Some of this shift is genuine aesthetic evolution; some is economic anxiety finding expression in a lower visual register. The fashion industry senses the cultural temperature before it can articulate it, and adjusts its proposals accordingly.",
        chainActive: ["aesthetic", "tightening"],
      },
      {
        title: "Department Store Contraction",
        body: "Footfall in major Ginza and Shibuya department stores begins declining in 1990. Luxury goods sales hold for longer than other categories — brand consumption is socially sticky and the last to go — but the growth trajectory has reversed. The retail infrastructure built during the bubble is dimensioned for a market that no longer exists at the same scale. Empty floors in stores designed for crowds are one of 1990's clearest visual indicators of changing conditions.",
        chainActive: ["aesthetic", "tightening", "collapse"],
      },
      {
        title: "Assets Become Problems",
        body: "Resort hotel properties and golf course memberships acquired at peak valuations are becoming balance sheet problems in 1990. Assets purchased as investments cannot be sold without realizing substantial losses. The aesthetic consumption of the bubble years — the architecture, the resort hotels — is being reassessed as financial liability rather than cultural achievement. The same objects mean different things when the economy surrounding them changes.",
        chainActive: ["aesthetic", "collapse", "real-estate"],
      },
    ],
    "1991": [
      {
        title: "Aesthetic Deflation",
        body: "The visual culture of 1991 is measurably different from 1988. The confident luxury aesthetic gives way to something more modest and functional. Fashion magazines adjust their aspirational content to match a readership whose economic reality contradicts the lifestyle they were previously selling. The shift is not dramatic — no single issue announces the change — but the cumulative effect is a lowering of the visual temperature across every category that the bubble had heated.",
        chainActive: ["aesthetic", "collapse", "lost-decade"],
      },
      {
        title: "Luxury After the Crash",
        body: "The relationship between Japanese consumers and European luxury brands shifts substantially after 1991. Purchases become less frequent and more deliberate. The waiting lists that defined peak bubble consumption empty. Brands that opened expanded Tokyo operations at considerable expense adjust their expectations for the Japanese market. The structural importance of Japanese luxury consumption does not disappear — it contracts and becomes less reflexive, more considered. The brands adapt; the market they adapted to does not return.",
        chainActive: ["aesthetic", "collapse", "lost-decade"],
      },
      {
        title: "The Architecture Remains",
        body: "The resort hotels, corporate headquarters, and retail palaces of the bubble years remain as physical monuments to the era's ambitions. Some are white elephants — overbuilt, underused, impossible to sell. Others are genuinely valuable additions to the built environment, commissioned from serious architects given real creative latitude. The physical legacy of the bubble is uneven: follies alongside achievements, excess alongside genuine quality. Time will sort them, but slowly.",
        chainActive: ["aesthetic", "real-estate", "lost-decade"],
      },
      {
        title: "Street Fashion Survives",
        body: "The street fashion subcultures of Harajuku are less dependent on general prosperity than luxury consumption, and they survive the bubble's end with their creative energy largely intact. The young people constructing identities through fashion in 1991 Harajuku are doing so with less money than their counterparts in 1988, but with the same intensity of purpose. The bubble did not create street fashion and the crash does not kill it. Some forms of cultural production are resilient to economic conditions in ways that luxury consumption is not.",
        chainActive: ["aesthetic"],
      },
    ],
  },

  /* ══════════════════════════════════════
     ECONOMY
  ══════════════════════════════════════ */
  economy: {
    "1985": [
      {
        title: "The Plaza Accord",
        body: "On September 22, 1985, finance ministers from the United States, Japan, West Germany, France, and the United Kingdom meet at the Plaza Hotel in New York and agree to coordinate market intervention to weaken the overvalued dollar. The agreement is reached within a single day of negotiations. Japan agrees to allow the yen to appreciate. No one present fully anticipates the chain of domestic consequences — the rate cuts, the cheap money, the asset inflation — that will follow from this single diplomatic agreement.",
        chainActive: ["plaza-accord"],
      },
      {
        title: "The Yen Appreciates",
        body: "The yen strengthens dramatically after the Plaza Accord. Against the dollar, it moves from approximately 240 yen per dollar before September 1985 to around 150 yen by late 1986 — a 38% appreciation in roughly a year. For Japanese exporters — Toyota, Sony, Hitachi — this is devastating: products priced for a 240-yen dollar become uncompetitive at 150. The export economy that had driven Japan's growth for a generation is suddenly under severe pressure.",
        chainActive: ["plaza-accord", "yen"],
      },
      {
        title: "The Export Recession",
        body: "Japan enters an export-driven recession in 1985–1986. Manufacturing contracts. Unemployment rises from very low levels to merely low ones, but the direction is wrong. Political pressure on the Bank of Japan and the government to stimulate domestic demand is significant and real. The Ministry of Finance and the Bank of Japan begin designing a response. Their diagnosis is correct — domestic demand must replace export demand — but the instruments they choose will prove far more powerful than intended.",
        chainActive: ["plaza-accord", "yen"],
      },
      {
        title: "The Policy Response Forms",
        body: "The Japanese government and Bank of Japan begin formulating their response to the yen shock in 1985. The outlines of what becomes bubble policy are visible: interest rate cuts to stimulate domestic investment, fiscal measures to replace lost export demand, financial deregulation to allow capital to allocate more freely. Each decision is reasonable in isolation and justified by economic logic. Their interaction — cheap money meeting deregulated finance meeting rising asset prices — produces consequences none of the policymakers anticipated.",
        chainActive: ["plaza-accord", "boj-rates"],
      },
    ],
    "1986": [
      {
        title: "The Bank of Japan Cuts Rates",
        body: "The Bank of Japan cuts its official discount rate five times between January 1986 and February 1987, moving from 5% to a then-historic low of 2.5%. The cuts proceed in steps: 5% to 4.5% in January, 4.0% in March, 3.5% in April, 3.0% in November 1986, and finally 2.5% in February 1987. The policy intention is to stimulate domestic investment and offset the export recession. It succeeds in the short term: domestic demand recovers. It also provides the cheap money that will inflate the asset bubble.",
        chainActive: ["boj-rates", "cheap-money"],
      },
      {
        title: "Financial Deregulation",
        body: "Japan's financial deregulation through the mid-1980s removes restrictions on bank lending, expands permissible collateral categories, and begins internationalizing Japanese finance. In 1986 these are measured reforms to an overly constrained system — sensible adjustments that most economists support. Their interaction with cheap money will prove dangerous: deregulated banks with access to cheap funding and permission to lend against land and equity collateral are structurally incentivized to expand lending indefinitely as asset prices rise.",
        chainActive: ["boj-rates", "cheap-money"],
      },
      {
        title: "Land Prices Begin Rising",
        body: "Japanese commercial land prices in major urban areas begin their characteristic bubble appreciation in 1986. The initial increases are modest and defensible — there is genuine demand for urban space in a growing economy, and years of controlled land use have created real scarcity. The appreciation is initially interpreted as a correction of undervaluation. What distinguishes a correction from a bubble is only apparent in retrospect: corrections stop when they reach fundamental value. This one does not stop.",
        chainActive: ["cheap-money", "asset-surge"],
      },
      {
        title: "Corporations Discover Financial Engineering",
        body: "As interest rates fall and land values rise, Japanese corporations discover an activity more profitable in the short term than their actual operations: financial investment. The practice of zaitech — engineering treasury profits from cheap borrowing against rising collateral — begins at scale in 1986. Corporations borrow cheaply against land to buy stocks. Stocks rise partly because corporations are buying them with borrowed money. The loop is in operation. Its self-reinforcing character is not yet alarming because the direction is up.",
        chainActive: ["cheap-money", "asset-surge", "spending"],
      },
    ],
    "1987": [
      {
        title: "The Nikkei Through Black Monday",
        body: "The Nikkei rises consistently through 1987. The October 19 global market crash — Black Monday — causes a severe initial drop in Tokyo, but the Nikkei recovers faster than any other major market. The divergence is noted internationally: Japan's financial system appears to operate by different rules. Domestic observers interpret the rapid recovery as evidence of fundamental strength. The interpretation is not entirely wrong — Japan's economy in 1987 is genuinely strong — but it reinforces the confidence that is becoming recklessness.",
        chainActive: ["asset-surge", "cheap-money"],
      },
      {
        title: "Land Prices Defy Fundamental Value",
        body: "Tokyo land prices in 1987 reach valuations that resist any justification based on rental income or productive use. The frequently cited calculation — that the land under the Imperial Palace grounds is worth more than all of California — circulates widely in financial and press commentary. Fundamental analysis has been irrelevant to land pricing for over a year. The market is pricing in continued appreciation, a self-fulfilling expectation that holds only as long as the expectation is shared.",
        chainActive: ["asset-surge", "real-estate"],
      },
      {
        title: "Zaitech at Scale",
        body: "The practice of corporate financial speculation reaches significant scale in 1987. Companies across sectors — manufacturing, retail, construction — are running treasury operations that exploit the spread between cheap borrowing costs and rising asset returns. The reported profits improve their stock prices, making their equity collateral more valuable, allowing them to borrow more. For corporate executives, refusing to participate in zaitech means voluntarily reporting lower profits than competitors who are participating. The incentive to join is nearly irresistible.",
        chainActive: ["cheap-money", "asset-surge", "wealth-effect"],
      },
      {
        title: "Bank Lending and the Collateral Loop",
        body: "Japanese banks in 1987 are primarily lending against land collateral valued at current market prices. When land appreciates, the same land supports more lending. The increased lending drives spending and investment that supports land prices. The circularity is visible to analysts who examine it carefully. It is rationalized by participants through the belief that land prices cannot fall — a belief grounded in the historical experience of a country where land has never declined in price since the war. History is about to stop being a reliable guide.",
        chainActive: ["cheap-money", "asset-surge", "real-estate"],
      },
    ],
    "1988": [
      {
        title: "The Nikkei Passes 25,000",
        body: "The Nikkei crosses 25,000 in 1988, more than doubling its 1985 level of approximately 12,000. Institutional investors, retail investors, and corporate treasury operations are all participating. The distinction between investment and speculation has dissolved — speculative behavior produces the same returns as investment, and is rationalized in the same terms. The financial press in 1988 is full of analysis explaining why current valuations are justified. Most of the analysis will prove to have been wrong.",
        chainActive: ["asset-surge", "wealth-effect", "spending"],
      },
      {
        title: "Real Estate as Pure Financial Asset",
        body: "Property in Tokyo is being bought and sold as a financial asset in 1988 with minimal reference to its physical characteristics. Location, building quality, and rental income — the traditional determinants of property value — matter less than the expected trajectory of appreciation. Holding periods shorten as trading profits compete with rental yields. The connection between a property's productive capacity and its market price, always indirect in real estate, has in 1988 become so attenuated as to be nearly absent.",
        chainActive: ["asset-surge", "real-estate", "wealth-effect"],
      },
      {
        title: "The Wealth Effect in Full Operation",
        body: "The combined appreciation of stocks and land has made many Japanese households notionally wealthy in 1988. People who bought apartments in the early 1980s are sitting on assets worth multiples of their purchase price. This paper wealth changes behavior: spending rises, saving rates fall, confidence expands. The wealth effect is real and measurable in consumption data even though the underlying asset values will prove temporary. You can spend notional wealth. The spending creates real economic activity. The contraction of spending when notional wealth evaporates creates real economic damage.",
        chainActive: ["asset-surge", "wealth-effect", "spending"],
      },
      {
        title: "Capital Goes Global",
        body: "By 1988 Japanese corporations and real estate investors have become the most consequential buyers in the US commercial real estate market. Office towers in Los Angeles — including Shuwa Corporation's acquisition of the Arco Plaza complex — and resort properties across Hawaii are being purchased at prices that signal confidence rather than calculation. Japanese capital is not merely investing abroad; it is acquiring the symbolic assets of American prosperity at a scale that suggests the two countries' economic positions may be reversing. The most famous individual transactions — Rockefeller Center, Columbia Pictures — are still ahead in 1989.",
        chainActive: ["asset-surge", "spending", "wealth-effect", "aesthetic"],
      },
    ],
    "1989": [
      {
        title: "The Policy Tightening Begins",
        body: "The Bank of Japan, recognizing the asset price inflation as a problem requiring intervention, begins raising interest rates in May 1989. The official discount rate rises from 2.5% to 3.25% on May 31, then to 3.75% in October, then to 4.25% on December 25, and will continue rising into 1990. The tightening comes after four years of excessive looseness. When it finally arrives, it is too rapid. The policy errors that inflated the bubble operate in reverse to collapse it.",
        chainActive: ["tightening", "asset-surge"],
      },
      {
        title: "December 29, 1989 — The Peak",
        body: "The Nikkei closes at 38,915.87 on December 29, 1989 — the last trading day of the year. This is the all-time high. The following day is a holiday. On January 4, 1990, the market opens and begins declining. It will not see 38,915 again for thirty-five years — the index finally surpassed this level in early 2024, in a currency worth substantially less than in 1989. Nobody on December 29 knows they are selling into the all-time peak. The knowledge is only available in retrospect.",
        chainActive: ["tightening", "asset-surge", "collapse"],
      },
      {
        title: "Land Price Peak",
        body: "Land prices in the Tokyo metropolitan area reach their historical maximum in late 1989 and early 1990. Contemporary estimates placed the total assessed value of Japanese real estate at roughly four times the value of all land in the United States — a country twenty-five times larger in area. The land beneath the Imperial Palace grounds alone was estimated to exceed the real estate value of California. Neither figure survives scrutiny against replacement cost or productive use analysis; both are directionally accurate. Japanese land prices had detached entirely from any metric except the expectation of further appreciation.",
        chainActive: ["asset-surge", "real-estate", "tightening"],
      },
      {
        title: "The Consumer Economy at Its Peak",
        body: "Japanese consumer spending in 1989 is at its real historical maximum across nearly every category: department store sales, foreign travel, automobile purchases, home purchases, restaurant spending. The macroeconomic conditions for this consumption — full employment, rising nominal wages, low consumer price inflation, high asset values, cheap credit — will not recombine in this configuration for a generation. 1989 is the peak not just of the stock market but of the society the stock market expressed.",
        chainActive: ["wealth-effect", "spending", "asset-surge"],
      },
    ],
    "1990": [
      {
        title: "The Nikkei Falls by Half",
        body: "The Nikkei falls approximately 48% during 1990, from its December 1989 peak of 38,915 to roughly 20,222 by year end. This is the most severe sustained decline in a major market since the 1929–1932 contraction in the United States. The scale surprises even analysts who had predicted a correction. Corrections are measured in percentages of perhaps 10–20%. A 48% decline in a single year is not a correction; it is a repudiation. The distinction between what was expected and what actually happened will shape Japanese economic policy for a decade.",
        chainActive: ["tightening", "collapse"],
      },
      {
        title: "Land Prices Hold — For Now",
        body: "Despite the Nikkei collapse, Japanese land prices show almost no movement through 1990. Banks continue carrying land collateral at near-peak valuations. The refusal to mark down land values allows the banking sector to appear adequately capitalized when it is not. The delay in land price adjustment is not accidental — it is the result of active regulatory forbearance. The banking regulators know that transparent land revaluation would reveal insolvency throughout the system. They choose delay. The delay will make the eventual reckoning more severe.",
        chainActive: ["tightening", "collapse", "real-estate"],
      },
      {
        title: "The Banking System's Hidden Crisis",
        body: "The Japanese banking system in 1990 is carrying enormous loans against collateral that has declined by half or more in equity value, while land collateral remains nominally intact but practically illiquid. The systemic choice is between transparent acknowledgment, which risks depositor panic and bank runs, and continued forbearance, which defers the reckoning. The system chooses forbearance. It will choose it again in 1991, 1992, 1993, and beyond.",
        chainActive: ["collapse", "tightening"],
      },
      {
        title: "Political Paralysis",
        body: "The policy response to the bubble collapse is inadequate in 1990 partly because the scale of the problem is not acknowledged and partly because acknowledging it would require politically costly admissions. The Liberal Democratic Party, which has governed Japan continuously since 1955, is not constituted to manage a crisis that requires telling the electorate that the preceding decade was built on unsustainable foundations. The administrative guidance model — bureaucratic consensus management of the economy — is not designed for crises. It is designed to manage growth.",
        chainActive: ["collapse", "tightening", "lost-decade"],
      },
    ],
    "1991": [
      {
        title: "Land Prices Begin Their Fall",
        body: "By 1991 land prices in major metropolitan areas begin declining in earnest. The commercial land that appreciated dramatically since 1986 starts a sustained contraction that will continue for most of the decade. The collateral underpinning trillions of yen in bank lending is deteriorating rapidly against the valuations at which the loans were made. The banking crisis that has been managed through regulatory forbearance since 1990 becomes structurally unavoidable as the asset base continues to erode.",
        chainActive: ["collapse", "real-estate", "lost-decade"],
      },
      {
        title: "Non-Performing Loans Emerge",
        body: "Banks begin disclosing non-performing loan levels in 1991, though the figures they report will later be revealed as dramatically understated. Most of these loans are secured against land now worth a fraction of its collateral valuation. The disclosure process is managed to minimize market panic rather than accurately reflect reality. The opacity that seemed to protect financial stability in the short term will make the eventual resolution more expensive and will undermine the credibility of Japanese financial reporting for a decade.",
        chainActive: ["collapse", "real-estate", "lost-decade"],
      },
      {
        title: "The Keiretsu Under Pressure",
        body: "Japan's keiretsu system — the cross-shareholding networks linking major corporations, banks, and suppliers in webs of mutual equity ownership — becomes a transmission mechanism for the crisis in 1991. As stock prices fall, cross-held shares lose value simultaneously across every firm in a network. Banks at the center of these arrangements face deteriorating assets on multiple fronts at once: their own portfolios, the portfolios of their corporate clients, and the land collateral securing both. The Ministry of Finance's guidance to maintain existing lending relationships and avoid public write-downs preserves appearances while deepening the structural problem.",
        chainActive: ["collapse", "tightening", "lost-decade"],
      },
      {
        title: "The Structure of the Lost Decade",
        body: "The problems visible in 1991 — zombie banks, excess corporate capacity, overvalued land, debt loads that crowd out investment — will not be resolved quickly. Japan will spend most of the 1990s managing the consequences of the bubble without addressing its structural causes. Each attempt at fiscal stimulus produces temporary improvement followed by renewed stagnation. The lost decade is not the result of a single policy failure. It is the cumulative product of a system that chose, at each decision point, to defer pain rather than absorb it.",
        chainActive: ["collapse", "lost-decade"],
      },
    ],
  },

  /* ══════════════════════════════════════
     DAILY LIFE
  ══════════════════════════════════════ */
  "daily-life": {
    "1985": [
      {
        title: "September 1985: The Invisible Turning Point",
        body: "On September 22, 1985, Japanese salarymen read about the Plaza Accord in the business pages and turned to the sports section. The agreement's domestic consequences were not yet visible. Wages were stable, trains were running, and the company cafeteria served the same lunch it served the previous year. The economy was entering a historic inflection point with no change in how it felt from the inside. That gap — between what was happening and what could be felt — defines 1985 daily life.",
        chainActive: ["plaza-accord"],
      },
      {
        title: "The Walkman, the CD, and the VCR",
        body: "The Sony Walkman, six years old in 1985, is now ubiquitous on commuter trains — the first technology to transform the Tokyo commute from enforced passivity into personal time. The CD player is crossing the line from luxury to aspirational purchase: present in the apartments of early adopters, dropping toward mass-market pricing. The VCR is enabling a new relationship with television — time-shifting, renting, rewatching. Each of these devices is Japanese-made, affordable to Japanese wages, confirming the direct connection between industrial success and domestic quality of life.",
        chainActive: ["spending"],
      },
      {
        title: "The Ski Boom",
        body: "Naeba, Shiga Kogen, and Hakuba are expanding their facilities in 1985 to serve an urban middle class with two-day weekends and money to spend on them. The Friday night overnight train to the slopes — packed with young couples and colleague groups in matching ski gear — is becoming a winter standard. The ski resort is one of the earliest places where prosperity becomes a shared experience rather than a private financial condition. The investment in resort infrastructure anticipates a demand that is still forming.",
        chainActive: ["spending"],
      },
      {
        title: "Women and the Workforce",
        body: "Japan's Equal Employment Opportunity Law is enacted in May 1985 and takes effect April 1986, beginning a slow institutional shift in the position of women in the formal workforce. Professional women in Tokyo navigate a system that formally recognizes their participation while informally resisting their advancement. The term 'office flower' describes the decorative function corporate culture assigns to women employees. The law's passage is formal recognition of a problem the labor market has not yet decided to solve.",
        chainActive: ["spending"],
      },
    ],
    "1986": [
      {
        title: "The First Overseas Vacations",
        body: "Foreign travel by Japanese tourists accelerates sharply in 1986. The strong yen makes international destinations more affordable than at any previous point in Japanese history. Hawaii, Hong Kong, Paris — destinations that were luxury exceptions become accessible to young urban professionals. The expansion of passport applications and the rapid growth of international flight routes from Japanese airports reflect this shift. A generation is traveling internationally for the first time, carrying with them consumption habits they will bring home.",
        chainActive: ["spending", "wealth-effect"],
      },
      {
        title: "The Restaurant Boom",
        body: "The restaurant economy of major Japanese cities expands rapidly in 1986. New cuisine categories — French, Italian, nouvelle cuisine hybrids — find middle-class urban audiences willing to spend on dining as social experience. The izakaya and ramen shop remain staples, but the meal as leisure activity and social performance expands significantly. Corporate expense accounts fund the upper end of this expansion. The distinction between eating and dining — functional versus performative consumption of food — becomes commercially meaningful.",
        chainActive: ["spending", "wealth-effect"],
      },
      {
        title: "Dual Incomes and New Spending",
        body: "Dual-income households are becoming more common in urban Japan in 1986. The additional income does not primarily flow to savings — it funds the consumer lifestyle the bubble era defines as normal: foreign travel, restaurant spending, fashion, home improvement. The two-income household also tends to outsource domestic functions previously performed at home — cleaning, cooking, childcare — creating demand in service sectors that the single-income model did not generate. The bubble and the dual-income household grow together.",
        chainActive: ["spending", "wealth-effect"],
      },
      {
        title: "Urban Housing Pressure",
        body: "For all its prosperity, housing in major urban areas remains expensive relative to incomes in 1986. Young couples buy apartments in outer Tokyo suburbs and commute ninety minutes each way. The commute is normalized as the price of urban employment. The Bank of Japan's rate cuts are simultaneously making mortgage payments cheaper to service and land more expensive to buy — the same policy that stimulates the economy is pricing the next generation out of central neighborhoods. The bubble's benefits are unevenly distributed in ways that will matter when prices fall.",
        chainActive: ["real-estate", "cheap-money", "spending"],
      },
    ],
    "1987": [
      {
        title: "Golf as Corporate Obligation",
        body: "The Japanese salaryman in 1987 does not choose to play golf — the choice has been made for him by the social architecture of corporate entertainment. Client relationships require it, manager expectations assume it, and the company's club membership is a budget line item that must be used. The actual experience — early-morning trains to suburban courses, poorly executed shots under colleagues' observation, the performance of enthusiasm for a game practiced only on evenings — is incidental to the social function the round performs. Golf's requirement is not skill; it is presence. The salaryman's weekend belongs to the corporation as surely as his weekday.",
        chainActive: ["spending", "wealth-effect"],
      },
      {
        title: "The Midnight Taxi",
        body: "The midnight taxi is one of bubble-era Tokyo's defining images: a salaryman at Shinjuku station at one in the morning, business concluded, hailing a cab for the forty-minute ride home without checking the meter. The fare is not trivial — it may exceed a week of packed lunches — but the expense account or the accumulated overtime justifies it. Taxi revenues in Tokyo in 1987 are significant and measurable. The midnight taxi is not just a cultural symbol; it is an economic phenomenon with an industry built around it.",
        chainActive: ["spending", "wealth-effect"],
      },
      {
        title: "The Department Store as Social Calendar",
        body: "The Japanese department store in 1987 is at the height of its cultural influence. Seasonal commercial events — White Day, Mother's Day, the summer gift season (ochugen), the year-end gift season (oseibo) — structure the consumer calendar. The department store is not just retail; it houses art exhibitions, food halls, travel agencies, wedding services, and rooftop beer gardens. Its role in defining normal middle-class consumption is comprehensive. The annual sales events are social rituals as much as commercial opportunities.",
        chainActive: ["spending", "wealth-effect"],
      },
      {
        title: "The Baby Boom Generation Spends",
        body: "Japan's baby boom cohort — the dankai no sedai, born 1947 to 1949 — is in its late thirties in 1987, at peak earning power. This generation rebuilt postwar Japan and is now spending on the prosperity that rebuilding created. Their consumption drives demand for fashion, interior design, leisure goods, and premium food. The demographic weight of the cohort amplifies every consumption trend — what they want the market provides, because there are so many of them wanting it simultaneously.",
        chainActive: ["spending", "wealth-effect"],
      },
    ],
    "1988": [
      {
        title: "The Good Life and What It Cost",
        body: "The standard of living available to a middle-class Tokyo family in 1988 is exceptional by any historical measure. Foreign vacations once a year, a car, an apartment with modern appliances, restaurant meals regularly, children in cram schools preparing for good universities. The cost is real — the hours, the commute, the debt, the performance — but the lifestyle itself is not illusory. People are better housed, better fed, and better entertained than their parents. The bubble's prosperity is real; only its sustainability is not.",
        chainActive: ["wealth-effect", "spending"],
      },
      {
        title: "Juku and the Education Economy",
        body: "Private cram schools — juku — are a major household expenditure in 1988. Competition for university placement is intense, and families spend seriously on supplementary education. The cost is manageable for two-income bubble-era households and is treated as non-negotiable — an investment in the child's future rather than a discretionary purchase. The education spending habit will outlast the bubble's prosperity, continuing as an obligation even when other consumption contracts. The juku is one of the bubble's most durable economic creations.",
        chainActive: ["spending", "wealth-effect"],
      },
      {
        title: "The Karaoke Box Economy",
        body: "The karaoke box — a private room in a purpose-built venue, allowing groups to sing without public performance anxiety — spread from Osaka in the mid-1980s and is now a standard feature of major Japanese cities. The industry is expanding rapidly, with new facilities opening across urban areas. Corporate entertainment budgets flow through it; colleague gatherings depend on it. The karaoke box is among the most characteristic social institutions the bubble created, its economics entirely dependent on the discretionary spending the bubble provides.",
        chainActive: ["spending", "wealth-effect"],
      },
      {
        title: "Debt and the New Normal",
        body: "Japanese households in 1988 carry more debt than their parents would have considered prudent: mortgages at high loan-to-value ratios against apartments bought near peak prices, consumer credit extended by banks expanding their retail books on the back of cheap borrowing costs. The debt feels manageable because asset values support it and employment is secure. Both conditions will change. The 1988 household debt load is not reckless by the standards of the moment — it is normal, recommended by banks and assumed by peers. Its recklessness only becomes visible in retrospect.",
        chainActive: ["cheap-money", "spending", "real-estate"],
      },
    ],
    "1989": [
      {
        title: "The Last Good New Year",
        body: "Japanese New Year is the most important social event of the calendar. New Year's Eve 1989 is the last before the Nikkei collapse becomes common knowledge. Family reunions, temple visits, the traditional foods of the season — all proceed with the confidence of a society at its peak. Nobody in the household celebrating on December 31, 1989 knows that the Nikkei closed at its all-time high two days ago, or that it will not close higher again for thirty-five years. The ordinary celebration of ordinary life continues, unaware of what begins in two days.",
        chainActive: ["spending", "wealth-effect"],
      },
      {
        title: "Women at the Bubble Peak",
        body: "The professional Japanese woman in 1989 occupies a workplace that has expanded its formal tolerance of her presence while maintaining most informal limits on advancement. The labor shortages of the late bubble years have opened positions in finance, advertising, and management that the EEOL's formal requirements had not reliably delivered — some Tokyo offices now use 'career woman' with genuine seriousness, meaning a woman expected to develop expertise rather than serve tea. This expansion is structurally fragile: it exists because the economy needs workers, not because corporate culture has accepted women's leadership. The Nikkei peaked two days before this year ends. The conditions sustaining these roles will begin resolving in the opposite direction.",
        chainActive: ["spending", "wealth-effect"],
      },
      {
        title: "Brand Logic and the Subway",
        body: "The handbag carried on the Tokyo subway in 1989 communicates social position with considerable precision to anyone who can read the signals. Vuitton, Hermès, and Chanel are the established markers of a certain kind of professional achievement. The brands have calibrated their Japanese market strategies to exploit the social function of their products: limited supply, visible provenance, consistent quality. The consumption is not irrational within its social logic. It is the rational behavior of people operating in a status system where these signals have agreed meaning.",
        chainActive: ["spending", "wealth-effect", "aesthetic"],
      },
      {
        title: "The Year of Maximum Confidence",
        body: "1989 is the year the bubble economy is most fully itself — most internally consistent, most broadly shared, most certain of its own continuation. The Nikkei will peak on December 29 and the land market will peak months later, but both peaks are invisible from within the year that precedes them. Consumer confidence surveys, retail data, and foreign travel figures all set records. The year that is the end is experienced as the middle.",
        chainActive: ["wealth-effect", "spending", "asset-surge"],
      },
    ],
    "1990": [
      {
        title: "The First Anxiety",
        body: "Daily life in 1990 begins registering economic anxiety that was absent in 1988. The Nikkei decline appears in the business pages, then in general conversation, then in the behavior of people with stock market exposure. Households that borrowed to buy equities are recalculating. The decline in notional wealth does not immediately affect spending — confidence is sticky — but the direction is established. Japan is entering a period in which the news reliably contradicts the optimism that structured the preceding five years.",
        chainActive: ["tightening", "collapse"],
      },
      {
        title: "Karoshi and What It Reveals",
        body: "The public conversation about karoshi — death from overwork — intensifies in 1990 in ways the bubble's peak made difficult. The phenomenon existed throughout the 1980s; the term itself was coined in 1978 and a dedicated support hotline was established in 1988. But prosperity muffled the critique: if the economy was thriving and the salaryman thriving with it, the hours seemed a reasonable exchange. As the economic return contracts, the hours remain. The conversation emerging in 1990 is not about new deaths — it is about a cost that was always there, now visible because the prosperity justifying it has evaporated.",
        chainActive: ["tightening", "lost-decade"],
      },
      {
        title: "Housing Uncertainty Grows",
        body: "Japanese households that bought property near the peak are registering a new and unfamiliar uncertainty in 1990. Land prices have not declined — they remain near their historical highs through most of the year — but they are no longer rising. The appreciation that was assumed as background fact is pausing. For households carrying high-ratio mortgages against apartments bought on the premise of continued appreciation, the stasis is disquieting even before any actual loss appears. The arithmetic that made the debt feel manageable assumed a direction that is no longer guaranteed.",
        chainActive: ["real-estate", "tightening"],
      },
      {
        title: "Consumer Spending Shifts",
        body: "Retail data for 1990 shows a modest but unmistakable change in consumer behavior. Luxury goods sales hold — brand consumption is socially sticky and the last to contract — but discretionary categories like dining out, domestic travel, and entertainment are declining. The consumer is adjusting before the recession is officially acknowledged or broadly discussed. Consumer behavior often leads official statistics; households feel the change in their own finances before the aggregate data captures it.",
        chainActive: ["tightening", "collapse", "spending"],
      },
    ],
    "1991": [
      {
        title: "The Contraction's Uneven Cost",
        body: "The labor shortage of the late bubble years had briefly expanded professional roles for Japanese women in ways the EEOL had not achieved on its own. The contraction of 1991 reverses this with a speed the expansion never matched. Voluntary retirement programs — the first instrument of workforce reduction available to corporations reluctant to announce formal redundancies — disproportionately target workers with the least institutional protection. This category includes many of the women whose professional roles the bubble created. The window opened by economic necessity closes faster than it opened.",
        chainActive: ["collapse", "lost-decade"],
      },
      {
        title: "The Empty Office District",
        body: "Commercial real estate taken at bubble-era rents is being renegotiated or abandoned in 1991. Satellite offices and branch operations opened during the expansion years are being consolidated. The direct impact on the neighborhoods that served office workers — the lunch restaurants, dry cleaners, and convenience stores — is immediate and severe. The commercial geography of Tokyo's business districts reflects the economic contraction in empty storefronts and reduced foot traffic before any official recession statistics confirm what residents can already see.",
        chainActive: ["collapse", "real-estate", "lost-decade"],
      },
      {
        title: "A Generation's Expectations Revised",
        body: "Young Japanese adults entering the workforce in 1991 face conditions that their bubble-era predecessors did not. Starting salaries are flat or declining. Corporate hiring is dramatically reduced. The assumption that education, loyalty, and consistent effort would be rewarded with lifetime employment and steadily rising income is no longer reliable. The social contract of postwar Japan is being rewritten in real time, not by legislation or explicit agreement, but by the daily decisions of corporations adjusting to a post-bubble reality.",
        chainActive: ["collapse", "lost-decade"],
      },
      {
        title: "What Prosperity Left Behind",
        body: "The bubble era's daily life, viewed from 1991, left behind both debt and expectation. The debt — mortgages, consumer loans, corporate obligations — is quantifiable and must be serviced regardless of current conditions. The expectation — that prosperity was the new normal, that the next decade would exceed the last — is harder to adjust. The psychological cost of the lost decade will prove, for many Japanese, as significant as the financial one. Japan spent the 1990s mourning a standard of living it had held for only a decade.",
        chainActive: ["collapse", "lost-decade"],
      },
    ],
  },

};
