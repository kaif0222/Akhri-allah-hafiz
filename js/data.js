/* ============================================================
   ALL EDITABLE CONTENT LIVES HERE.
   Change text, links and names in this file only; no build step.
   ============================================================ */
window.SITE = {
  film: {
    title: "Aakhri Allah Hafiz",
    titleUrdu: "آخری اللہ حافظ",
    subtitle: "The Last Goodbye",
    logline:
      "A hardworking orphan from Karachi wins a scholarship to become a pilot, and is killed at the airport on his return by the uncle who raised him, over a house.",
    runtime: "9 min 40 s",
    scenes: 12,
    shots: 86,
    // YouTube video IDs
    filmId: "q9Wmxdyi_24",
    trailerId: "E7Y5H-4izKQ",
    ostId: "ebB1r_TCPDQ",
    // CSS aspect-ratio of the FULL FILM player. Use "16 / 9" for landscape or "9 / 16" if the film is vertical.
    filmRatio: "16 / 9"
  },

  course: {
    university: "Dawood University of Engineering and Technology",
    short: "DUET",
    department: "Department of Computer Science",
    program: "BSCS First Year (2026)",
    course: "AICT",
    lab: "Open-Ended Lab 01",
    teacher: "Sir Imran Alvi",
    acknowledgment:
      "We sincerely thank our respected teacher, Sir Imran Alvi, for his valuable guidance, encouragement, and support throughout this project. His guidance has been instrumental in helping us complete this work successfully."
  },

  tools: [
    { name: "ChatGPT", use: "Ideas and drafting support" },
    { name: "Claude", use: "AI-assisted writing and story development" },
    { name: "Google Flow (Omni Flash)", use: "AI video generation and voice-over" },
    { name: "Nano Banana Pro", use: "AI image generation" },
    { name: "Suno AI", use: "Music and OST" },
    { name: "CapCut", use: "Video editing, audio editing and post-production" }
  ],

  /* ---------- TEAM ----------
     resume: put the PDF in /resumes/ with EXACTLY this filename. */
  team: [
    {
      name: "Muhammad Kaif", initials: "MK", roll: "26F-CS-056",
      title: "Writer · Editor · Final Compilation",
      roles: ["Scriptwriting & dialogue", "Storyboarding & scene planning", "Character & location design",
              "Voice-over & dialogue production", "Video editing & scene sync", "Final compilation & quality review"],
      bio: "BSCS student at DUET interested in AI/ML, data science and computer vision. Wrote the script and pre-production package, planned every scene, edited the film and ran the final quality review.",
      resume: "resumes/muhammad-kaif.pdf",
      links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/kaif0222" }, { label: "Email", href: "mailto:mkaif123mkaif@gmail.com" }]
    },
    {
      name: "Raza Ahmed", initials: "RA", roll: "26F-CS-035",
      title: "Story Concept · Sound Design",
      roles: ["Project concept & story development", "Sound effects & audio design", "Voice-over & dialogue production", "AI video generation & animation"],
      bio: "Came up with the core story of Bakhtawar and shaped the film's sound world: the effects, the silences and the voice work that carry the emotion.",
      resume: "resumes/raza-ahmed.pdf", links: []
    },
    {
      name: "Fizah", initials: "FZ", roll: "26F-CS-018",
      title: "Voice-over · AI Video Generation",
      roles: ["Voice-over & dialogue production", "AI video generation & animation"],
      bio: "Gave voice to the film's dialogue and worked on generating and animating the scenes.",
      resume: "resumes/fizah.pdf", links: []
    },
    {
      name: "Javeria", initials: "JV", roll: "26F-CS-021",
      title: "AI Video Generation",
      roles: ["AI video generation & animation"],
      bio: "Part of the AI video generation and animation team that turned the written shot list into moving scenes.",
      resume: "resumes/javeria.pdf", links: []
    },
    {
      name: "Nobisha", initials: "NB", roll: "26F-CS-036",
      title: "AI Video Generation",
      roles: ["AI video generation & animation"],
      bio: "Part of the AI video generation and animation team that turned the written shot list into moving scenes.",
      resume: "resumes/nobisha.pdf", links: []
    }
  ],

  contact: {
    email: "mkaif123mkaif@gmail.com",
    linkedin: "https://www.linkedin.com/in/kaif0222",
    linkedinLabel: "linkedin.com/in/kaif0222"
  },

  statement: {
    byline: "Team Aakhri Allah Hafiz",
    paragraphs: [
      "Most stories about greed end with a villain who is easy to spot. We wanted one who smiles, wakes the boy for school and calls him “beta”. Gull Khan never raises his voice. That is what makes Bakhtawar's trust, and his fate, so hard to watch.",
      "We chose to keep the violence off-screen. A hard cut to silence, a dropped suitcase and a ringing phone say what a weapon never could, and they keep the film safe to share with a family audience. What the audience imagines in that silence is the real climax.",
      "The paper aeroplane is the film's quiet promise: planted in the shop, folded for Hareem, handed to Shahna as a “first ticket”, and laid on a grave at the end. Everything else in the film is built around that small object.",
      "This project taught us that AI can generate pictures, but it cannot decide what a picture should mean. Almost all of our effort went into writing, planning and directing, so that the tools only had to carry out decisions we had already made."
    ],
    theme: "Greed and envy destroy what sincerity and hard work build."
  },

  /* ---------- SCENES ---------- */
  // tone: amber (childhood), ochre (Karachi), blue (China), orange (airport), grey (grief)
  scenes: [
    { n: 1, title: "Karachi ki Subah", sub: "Prologue", dur: 50, tone: "amber", frames: ["s01a", "s01b"], main: 1,
      loc: "Karachi rooftops, family gate, grocery shop, Gull Khan's house", when: "Dawn · flashback (Bakhtawar 10, Hareem 7)",
      mood: "Nostalgic, quietly sad; builds empathy", light: "Soft golden dawn; flashbacks warm and slightly desaturated with light film grain",
      bgm: "Solo bansuri (flute), slow and sparse", sfx: "Faint azan, crows, city hum, shop shutter, rickshaw leaving",
      summary: "The narrator introduces Karachi and the boy at the centre of the story. In flashback we learn how Bakhtawar lost his father, was left by his mother, and was sent to work in a grocery shop at ten while holding on to one dream: to become a pilot.",
      lines: [
        { who: "Narrator", ur: "Ye kahani ek naujawan ki hai jo Karachi mein rehta tha. Naam tha Bakhtawar Khan.", en: "This is the story of a young man who lived in Karachi. His name was Bakhtawar Khan." },
        { who: "Narrator", ur: "Bakhtawar bohat zaheen tha. Use bachpan se hi pilot banne ka shauq tha.", en: "Bakhtawar was very bright. Since childhood he had dreamed of becoming a pilot." }
      ] },
    { n: 2, title: "Subah ka Nashta", sub: "Gull Khan's house", dur: 70, tone: "ochre", frames: ["s02"],
      loc: "Gull Khan's house: lane, bedroom, stairs, kitchen", when: "Morning, present day (Bakhtawar 17)",
      mood: "Quiet hurt on the surface; menace underneath", light: "Cool window light upstairs; warm bulb in the kitchen; the kitchen talk half in shadow",
      bgm: "Flute continues; low cello drone enters when Haleema speaks", sfx: "Crows, pressure-cooker whistle, pans, wall-clock tick",
      summary: "Gull Khan wakes Bakhtawar with warm words. Downstairs, his motive shows: he is kind only until Bakhtawar turns eighteen and can claim his share of the house.",
      lines: [
        { who: "Gull Khan", ur: "Bakhtawar beta, uth jao! Time ho gaya hai, school nahi jana?", en: "Bakhtawar, beta, get up! It's time. Aren't you going to school?" },
        { who: "Bakhtawar", ur: "Uth raha hoon, chachu… Ammi kal bhi nahi aayin na?", en: "I'm up, uncle… Mother didn't come yesterday either, did she?" },
        { who: "Haleema", ur: "Aur agar ye samajhdaar hokar apna hissa maangne laga to?", en: "And what if he grows up and asks for his share?" },
        { who: "Gull Khan", ur: "Tum fikar na karo, begum. Jaisa main kahunga, waisa hi karega.", en: "Don't worry, wife. He'll do exactly as I say." }
      ] },
    { n: 3, title: "School", sub: "Dosti aur Fikar", dur: 45, tone: "ochre", frames: ["s03"],
      loc: "Government school courtyard, bench under a neem tree", when: "Late morning, recess",
      mood: "Tender, wistful; hope with worry underneath", light: "Dappled sunlight through neem leaves; warm and high-key",
      bgm: "Acoustic guitar and flute duet; stops at the school bell", sfx: "School chatter fading, birds, wind, school bell",
      summary: "Shahna notices Bakhtawar's sadness. He fears for Hareem if he leaves to study; Shahna promises to look after her.",
      lines: [
        { who: "Shahna", ur: "Bakhtawar, aaj tum phir udaas ho.", en: "Bakhtawar, you look sad again today." },
        { who: "Bakhtawar", ur: "Main pilot ki parhai ke liye bahar chala gaya to Hareem ka khayal kaun rakhega?", en: "If I go abroad to train as a pilot, who will look after Hareem?" },
        { who: "Shahna", ur: "Main to hoon na — main rakhungi uska khayal.", en: "I'm here, aren't I? I'll look after her." }
      ] },
    { n: 4, title: "Ghar ka Raasta", sub: "Hareem aur Bhai", dur: 40, tone: "amber", frames: ["s04"],
      loc: "Narrow Karachi lane, house gate", when: "Afternoon, about 2:30 pm",
      mood: "Warm and playful, turning bittersweet", light: "Strong afternoon sun, long shadows, golden warmth",
      bgm: "Playful flute and tabla; softens and turns sad", sfx: "Street vendors, bicycle bell, footsteps, distant azan",
      summary: "Brother and sister walk home. He folds her a paper aeroplane, and she tells him she will miss him.",
      lines: [
        { who: "Hareem", ur: "Bhai, aap mujhse kitna pyar karte hain?", en: "Brother, how much do you love me?" },
        { who: "Bakhtawar", ur: "Arey behan, meri to jaan bhi qurban hai tum par.", en: "Oh sister, I'd give my life for you." },
        { who: "Hareem", ur: "Aap ki mujhe bohat yaad aayegi.", en: "I will miss you so much." }
      ] },
    { n: 5, title: "Karyana ki Dukaan", sub: "Beizzati", dur: 50, tone: "ochre", frames: ["s05"],
      loc: "Ali Ustad's grocery shop", when: "Afternoon, 3:10 pm",
      mood: "Tension, humiliation, then quiet resolve", light: "Harsh midday glare through a half-shutter; dusty light beams; high contrast",
      bgm: "Low percussion and ticking pulse; silence at the slap; a single cello", sfx: "Fan squeak, scale clink, customers' gasp, muffled street",
      summary: "Bakhtawar arrives ten minutes late. Ali Ustad slaps him in front of everyone. He removes his apron and quits, his dignity intact.",
      lines: [
        { who: "Ali Ustad", ur: "O nikamme! Idhar aao! Kahan ghoom rahe ho?", en: "You good-for-nothing! Come here! Where have you been wandering?" },
        { who: "Bakhtawar", ur: "Ustad ji, khana kha raha tha, isliye der ho gayi.", en: "Ustad ji, I was eating, that's why I was late." }
      ] },
    { n: 6, title: "Faisla aur Khushkhabri", sub: "Decision and good news", dur: 50, tone: "amber", frames: ["s06"],
      loc: "Gull Khan's living room, then the shared rooftop four months later", when: "Evening, then dusk",
      mood: "Misplaced trust, then joy", light: "Living room low-key tungsten; rooftop golden hour with warm rim light",
      bgm: "Soft strings, switching to bright flute and guitar at the rooftop", sfx: "TV murmur, dusk birds, distant azan, kite strings, paper rustle",
      summary: "Bakhtawar tells his uncle he has quit; Gull Khan offers hollow comfort while eyeing a property file. Months later the scholarship letter arrives, and he tells Shahna first.",
      lines: [
        { who: "Bakhtawar", ur: "Chachu, main ab Ali Ustad ki dukaan par kaam nahi karunga.", en: "Uncle, I won't work at Ali Ustad's shop anymore." },
        { who: "Bakhtawar", ur: "Shahna, mera selection ho gaya hai! Wo bhi scholarship par!", en: "Shahna, I've been selected, and on a scholarship!" },
        { who: "Bakhtawar", ur: "Ye lo — teri pehli ticket.", en: "Here, your first ticket." }
      ] },
    { n: 7, title: "Airport", sub: "Rukhsati", dur: 40, tone: "blue", frames: ["s07"],
      loc: "Jinnah International Airport, departures hall", when: "Early morning",
      mood: "Bittersweet farewell; pride and tears", light: "Cool blue pre-dawn through glass with warm interior lights",
      bgm: "Piano and strings, slow build; flute joins at the gate", sfx: "Muffled PA, trolley wheels, suitcase zip, boarding call",
      summary: "The family gathers at the airport to see Bakhtawar off. His first “Allah Hafiz”, said with pride.",
      lines: [
        { who: "Narrator", ur: "Ab wo waqt aa gaya tha…", en: "Now the time had come…" }
      ] },
    { n: 8, title: "Chaar Saal", sub: "China, Karachi and the plot", dur: 60, tone: "blue", frames: ["s08a", "s08b"],
      loc: "China: campus, library, flight simulator. Karachi: pharmacy lab, doorstep, dining room at night", when: "Four years (montage) and a night scene",
      mood: "Determination and progress with an ominous undertone", light: "China in cool blue-white daylight; Karachi night in warm lamplight and deep shadow",
      bgm: "Inspirational flute and strings, then a bass drone at the night scene", sfx: "Keyboard, pencil scratch, simulator hum, applause, distant thunder, clock tick",
      summary: "A montage of Bakhtawar's study and pilot training intercuts with Shahna's pharmacy studies. At night, Gull Khan and Haleema plan against his return as Shahna's family proposes the engagement.",
      lines: [
        { who: "Shahna's mother", ur: "Hum Shahna aur Bakhtawar ki mangni ka rishta le kar aaye hain.", en: "We have come with a proposal to engage Shahna and Bakhtawar." },
        { who: "Haleema", ur: "Wo wapas aa raha hai. Ab wo apna hissa maangega.", en: "He's coming back. Now he will ask for his share." },
        { who: "Gull Khan", ur: "Uska aana hamare liye theek nahi. Main sab sambhaal lunga.", en: "His return is not good for us. I'll handle everything." }
      ] },
    { n: 9, title: "Aakhri Call", sub: "The last call", dur: 35, tone: "blue", frames: ["s09"],
      loc: "Airport transit lounge; on screen, Shahna in a library corridor", when: "Afternoon, flight day",
      mood: "Playful warmth and happy anticipation (dramatic irony)", light: "Warm window sun in the lounge; cool tube light in Shahna's corridor",
      bgm: "Light acoustic guitar with flute; the final chord is held when the call ends", sfx: "Lounge PA, video-call connect tone, boarding call, call-end beep",
      summary: "On a layover, Bakhtawar video-calls Shahna and teases her about the engagement. The happiest scene sits right before the tragedy, so the loss lands harder.",
      lines: [
        { who: "Bakhtawar", ur: "Achha, mujhe airport par lene nahi aaogi? Aa jao yaar.", en: "So you won't come to pick me up at the airport? Come on, do come." },
        { who: "Bakhtawar", ur: "Haan, chalo theek hai. Phir milte hain. Allah Hafiz.", en: "Alright, fine. See you soon. Allah Hafiz." },
        { who: "Narrator", ur: "Ye “Allah Hafiz” uska aakhri “Allah Hafiz” tha.", en: "That “Allah Hafiz” was his last." }
      ] },
    { n: 10, title: "Airport Arrival", sub: "Khaamoshi", dur: 50, tone: "orange", frames: ["s10"],
      loc: "Karachi airport arrival hall and exit pavement; intercut with Gull Khan's house", when: "Sunset",
      mood: "Hope, unease, shock, silence", light: "Dramatic sunset orange, long shadows, lens flare",
      bgm: "Cello and heartbeat pulse; sudden silence; one sad violin note", sfx: "Aircraft landing, trolleys, car horns, a hard cut to silence, crowd gasps, high-pitched ringing, a phone ringtone. No gunshots.",
      summary: "Bakhtawar lands to find nobody waiting; his uncle's phone is off. He walks into the sunset. The film stays on a dropped suitcase, a ringing phone and the sky. Violence is implied only, through sound and aftermath.",
      lines: [
        { who: "Narrator", ur: "Bakhtawar ko airport par lene koi nahi aaya, aur chacha ka phone bhi band tha.", en: "Nobody came to receive Bakhtawar at the airport, and his uncle's phone was switched off." }
      ] },
    { n: 11, title: "Sadma aur Tadfeen", sub: "Shock and burial", dur: 35, tone: "grey", frames: ["s11"],
      loc: "Airport pavement, hospital corridor, cemetery at dawn", when: "Night to early next morning",
      mood: "Shock, grief, hidden guilt", light: "Cold green-white fluorescent in the hospital; pale grey dawn at the cemetery",
      bgm: "Silence, then low sustained strings; the violin theme returns", sfx: "Hospital monitor beep, trolley wheels, murmured prayers, wind",
      summary: "Bystanders cannot believe it: Bakhtawar had no enemies. Shahna collapses from the shock and he is buried while she is unconscious.",
      lines: [
        { who: "Hareem", ur: "Bhai… bhai kahan hain?!", en: "Brother… where is my brother?!" }
      ] },
    { n: 12, title: "Qabar par", sub: "Aakhri Manzar", dur: 55, tone: "grey", frames: ["s12"],
      loc: "Cemetery, Karachi; a fresh grave", when: "Dusk, next day",
      mood: "Grief, regret, hollow love", light: "Overcast, desaturated blue-grey; low sun behind Shahna gives a soft rim light",
      bgm: "Piano and sustained strings; the flute theme returns once, broken; silence under the final line", sfx: "Wind, a distant aeroplane overhead, dry leaves; final fade to silence",
      summary: "Shahna reaches the grave with flowers and the paper aeroplane, the motif planted in the opening scene, and lays it on the earth.",
      lines: [
        { who: "Shahna", ur: "Kaash main paper chhor kar tumhein lene aa jaati…", en: "I wish I had left my paper and come to get you…" },
        { who: "Shahna", ur: "Ab main kya karun? Main kaise rahungi?", en: "What do I do now? How will I live?" },
        { who: "Narrator", ur: "Usne muhabbat dil se ki thi… lekin uske hisse mein muhabbat na aayi.", en: "She loved with all her heart… but love was not in her share." }
      ] }
  ],

  /* ---------- SCRIPT TO SCREEN: planned vs generated ---------- */
  planned: {
    1:  { frame: "Boy looks up at an aeroplane", desc: "Close-up of a child in a dusty shop, a paper aeroplane on the counter, a real plane in the window.", framing: "CU · 85mm", prompt: "Aerial view of Karachi rooftops at dawn, water tanks and laundry lines, orange sky, a passenger plane crossing high above, warm golden light, hazy atmosphere. Slow push-in." },
    2:  { frame: "Smile and shadow", desc: "Gull Khan in the doorway smiling; Bakhtawar half-asleep and hurt.", framing: "MS · 35mm", prompt: "Interior of a modest old Karachi bedroom in the morning, a 17-year-old boy sitting up in bed in cold window light, a smiling middle-aged man in white shalwar kameez standing in the doorway, tension beneath the smile." },
    3:  { frame: "Bench under the neem tree", desc: "Two teenagers talk; dappled sunlight; worried and tender faces.", framing: "OTS · 50mm", prompt: "Government school courtyard under a neem tree, a 17-year-old boy and girl in school uniform talking on a bench, dappled sunlight, tender mood, 85mm shallow depth of field." },
    4:  { frame: "Paper aeroplane handover", desc: "Brother kneels to hand his sister a paper aeroplane in a sunlit lane.", framing: "MCU · 50mm", prompt: "Narrow Karachi lane in afternoon sun, a teenage boy kneeling to hand a folded paper aeroplane to his 11-year-old sister, long golden shadows, warm tones." },
    5:  { frame: "Raised hand", desc: "Ustad, towering, hand raised; frozen customers; a small boy before him.", framing: "MS · low angle", prompt: "Dusty Karachi grocery shop interior, harsh midday light through a half-shutter, a heavy older shopkeeper behind the counter seen from a low angle, a young man in the doorway seen from a high angle, tense, high contrast. Slow push-in." },
    6:  { frame: "Rooftop joy", desc: "Bakhtawar holding the scholarship letter, Shahna clapping, golden light.", framing: "WS · 24mm", prompt: "Two adjoining rooftops in Karachi at golden hour, a teenage boy laughing and holding an envelope, a girl clapping, warm rim light, gentle lens flare, joy." },
    7:  { frame: "The four at the airport", desc: "Group embrace, tears, cool blue light behind.", framing: "MS group · 35mm", prompt: "Airport departure hall at early morning, four people embracing a young man with a backpack, tearful faces, soft blue light with warm interior lights, shallow depth of field." },
    8:  { frame: "Parallel lives", desc: "Split frame: library in China, study in Karachi; same posture, same lamp.", framing: "Match cut", prompt: "Split composition: a young man studying late at night in a university library in China under a desk lamp; a young woman in a white pharmacy lab coat studying in Karachi; cool and warm colour contrast." },
    9:  { frame: "The last call", desc: "Bakhtawar smiling at a phone, a plane behind the lounge window.", framing: "MCU · 85mm", prompt: "Young man in an airport transit lounge video-calling on his phone, large window with an aeroplane at the gate behind him, warm sunlight, smiling, medium close-up." },
    10: { frame: "Empty exit", desc: "Bakhtawar with a suitcase walking into orange light; blurred figures behind. Aftermath variant: a dropped suitcase and a ringing phone.", framing: "WS · 24mm", prompt: "Karachi airport exit at sunset, a lone young man with a suitcase walking into orange light, two blurred figures on a motorbike far behind, long shadows, tense mood. Alternate aftermath frame: a dropped suitcase and a ringing phone on the pavement, crowd feet blurred, no people injured visible, no weapons, no blood." },
    11: { frame: "Hospital collapse", desc: "Shahna's collapse; the funeral, Haleema's fixed gaze.", framing: "MS · handheld", prompt: "Hospital corridor with cold fluorescent light, a young woman collapsing into the arms of a crying girl; second frame: dawn cemetery with men in white, grey light, subdued colours, no gore." },
    12: { frame: "The aeroplane on the grave", desc: "Overhead of Shahna by the grave; the paper aeroplane on the earth.", framing: "Top-down · 24mm", prompt: "Young woman in a white dupatta kneeling beside a fresh grave under an overcast sky, placing a small paper aeroplane on the mound; overhead variant with an aeroplane contrail crossing the sky; deeply sad, desaturated tones, soft rim light." }
  },

  /* ---------- CHARACTERS ---------- */
  characters: [
    { name: "Bakhtawar Khan", urdu: "بختاور خان", role: "The dreamer", age: "10 · 17–18 · 22", frame: "s01b",
      look: "Lean, short black hair, expressive dark eyes. Faded white school shirt as a teen; navy jacket with a small silver pilot-wings pin on his return.",
      voice: "Soft, mid-low pitch, natural Karachi Urdu rhythm. Speeds up when excited, drops to a near-whisper when hurt. Never shouts, even at his breaking point.",
      arc: ["Lonely", "Humiliated", "Elated", "Driven", "Joyful", "Shocked"],
      note: "Looks slightly down when hurt. In Scene 10 his smile at the empty arrivals hall is self-reassuring, not naive." },
    { name: "Shahna Sultan", urdu: "شہنا سلطان", role: "Best friend and future fiancée", age: "17 · 21", frame: "s03",
      look: "Kind brown eyes, long dark braid under a light dupatta; school uniform, later pastel shalwar kameez and a white pharmacy lab coat.",
      voice: "Clear, medium pitch, light and musical. Teasing lines are quick and bright. At the grave she speaks slowly, with broken breath and long pauses; no shouting.",
      arc: ["Caring", "Delighted", "Hopeful", "Devoted", "Teasing", "Collapsed", "Despairing"],
      note: "The emotional anchor of the film, and the person who mourns him." },
    { name: "Hareem", urdu: "حریم", role: "Bakhtawar's younger sister", age: "7 · 11–12 · 16", frame: "s04",
      look: "Round face, two braids, large expressive eyes; school uniform with a white scarf.",
      voice: "High, bright, quick. Plays with pitch when teasing; when pleading she goes softer and slower, and her voice cracks.",
      arc: ["Clingy", "Playful", "Pleading", "Proud", "Hopeful", "Grieving"],
      note: "The reason Bakhtawar fights; the innocent heart of the story." },
    { name: "Gull Khan", urdu: "گل خان", role: "The smiling villain", age: "Late 40s", frame: "s02",
      look: "Greying trimmed beard, white shalwar kameez with a brown waistcoat and prayer cap. Warm smile, cold eyes.",
      voice: "Soft, melodic and slow in public, with “beta” held half a beat too long. In private it goes flat, cold and quiet. Never raises his voice.",
      arc: ["Falsely tender", "Hollow sympathy", "Fake pride", "Calculating", "Cold", "Performed grief"],
      note: "The smile should only become unsettling on a second viewing." },
    { name: "Haleema", urdu: "حلیمہ", role: "Gull Khan's wife", age: "Early 40s", frame: "s08b",
      look: "Sharp features, dark shalwar kameez, maroon dupatta, hair tightly pinned, arms often folded.",
      voice: "Sharp, low whisper, fast and hard-consonanted. Heavy sarcasm in her lines.",
      arc: ["Resentful", "Envious", "Venomous", "Cold satisfaction"],
      note: "Her resentment sets the plot moving." },
    { name: "Ali Ustad", urdu: "علی استاد", role: "The shop owner", age: "Mid-50s", frame: "s05",
      look: "Heavy build, thick moustache, sweat-stained vest and apron.",
      voice: "Loud, gruff, low pitch, with sentences that end in a bark. Gets louder when an audience is watching.",
      arc: ["Irritated", "Enraged", "Smug"],
      note: "The oppressor whose slap triggers Bakhtawar's decision to leave." },
    { name: "The Narrator", urdu: "راوی", role: "Storyteller (voice-over)", age: "40s", frame: null,
      look: "Heard, never seen.",
      voice: "Mature male, warm and slightly husky, in the cadence of an Urdu dastan-go. About 105 to 115 words per minute; tragic lines slow to about 95.",
      arc: ["Warm", "Reflective", "Proud", "Calm and heavy", "Hushed"],
      note: "He reports, he does not weep; the audience supplies the emotion." }
  ],

  /* ---------- BEHIND THE SCENES ---------- */
  bts: {
    globalStyle: "Cinematic realism, present-day Karachi, Pakistan, 16:9, 24fps, shallow depth of field, natural skin texture, subtle film grain, soft realistic lighting, Rec.709 colour, no text.",
    negative: "cartoon, anime, extra fingers, deformed hands, distorted faces, text, subtitles, watermark, logos, blood, gore, weapons, injuries, nudity, western signage.",
    consistency: "Pakistani young man, 17 years old, lean build, short black hair, expressive dark eyes, faded white school shirt and grey trousers, quiet dignified expression. (Return version: same man at 22, light stubble, navy jacket with small silver pilot-wings pin.)",
    workflow: [
      "Write everything first: story, characters, emotions, dialogue, camera, sound and technical specs were locked on paper before any generation.",
      "Generate character reference sheets (front, three-quarter, profile) for the four main characters and approve them.",
      "Generate one key frame per scene, pasting the global style block, the negative prompt and the character block into every prompt.",
      "Turn the hero frames into short clips with the movement from the shot list; keep the rest as stills with slow push-ins.",
      "Edit in order: voice-over first, then music, then sound effects, then subtitles.",
      "Check every frame against the script and the family-safe rule: no weapons, wounds or blood."
    ],
    safety: [
      { t: "Violence is implied, never shown", d: "The murder in Scene 10 is told through a hard cut to silence, a dropped suitcase and a ringing phone. The negative prompt bans weapons, blood and gore in every generation." },
      { t: "Sound cue corrected", d: "An early version of the cue sheet listed gunshots for Scene 10. It was changed to silence, a high-pitched ringing and a phone ringtone, so the film stays family-safe." }
    ],
    /* Real observations from our own generated frames. */
    review: [
      { img: "crop-certificate", alt: "Pilot certificate with garbled lettering", t: "Text inside images", d: "The pilot certificate in Scene 10 looks right from a distance, but the lettering is garbled. AI image tools still cannot reliably spell, even with “no text” in the prompt.", fix: "How to fix: keep documents out of focus or out of frame, generate the paper blank and add real text in the editor, or re-roll until the text is legible." },
      { img: "crop-tombstone", alt: "Headstone with unreadable Urdu lettering", t: "Names on the headstone", d: "The headstone in Scene 12 carries Urdu-looking script, but it does not clearly spell the character's name.", fix: "How to fix: crop the shot so the stone is not readable, or overlay a correct Urdu name in post-production." },
      { img: ["crop-pilot-cockpit", "crop-pilot-call"], alt: "Two adult versions of Bakhtawar that look like different people", t: "Character drift", d: "The adult Bakhtawar in the cockpit (Scene 8) and on the video call (Scene 9) has different hair and face shape. Consistency is the hardest problem in multi-shot AI video.", fix: "How to fix: attach the approved reference sheet to every generation, reuse the exact character block word for word, and reject any frame that drifts." }
    ]
  },

  /* ---------- PRE-PRODUCTION VAULT ---------- */
  vault: {
    pdf: "docs/Aakhri-Allah-Hafiz-Pre-Production-Package.pdf",
    docx: "docs/Aakhri-Allah-Hafiz-Pre-Production-Package.docx",
    contents: [
      "Project overview and production approach",
      "Synopsis: logline, short and full synopsis, three-act structure, themes, motifs",
      "Character sheets with emotion and direction",
      "Emotion map for every character in every scene",
      "Full script: 12 scenes, 86 shots, dialogue and voice direction",
      "Voice-over direction sheet",
      "Music and sound-design cue sheet",
      "Technical specification",
      "Storyboard overview",
      "AI generation plan with prompts",
      "Time and effort breakdown, evaluator checklist"
    ]
  },

  /* ---------- AUDIO ---------- */
  audio: {
    credits: [
      { role: "Voice-over & dialogue production", who: "Muhammad Kaif, Raza Ahmed, Fizah" },
      { role: "Sound effects & audio design", who: "Raza Ahmed" },
      { role: "Voice generation", who: "Omni Flash (Google Flow)" },
      { role: "Music & OST", who: "Suno AI" },
      { role: "Editing, audio mix & final compilation", who: "Muhammad Kaif, in CapCut" }
    ],
    cues: [
      { n: 1, i: "Solo bansuri (flute)", m: "Nostalgic, quiet sadness" },
      { n: 2, i: "Flute and low cello drone", m: "Hidden menace" },
      { n: 3, i: "Acoustic guitar and flute duet", m: "Tender, wistful" },
      { n: 4, i: "Flute and tabla", m: "Warmth, then bittersweet" },
      { n: 5, i: "Low percussion and ticking pulse", m: "Tension" },
      { n: 6, i: "Strings, then bright flute and guitar", m: "Mistrust to joy" },
      { n: 7, i: "Piano and strings", m: "Bittersweet farewell" },
      { n: 8, i: "Inspirational flute and strings", m: "Drive, progress" },
      { n: 9, i: "Acoustic guitar and flute", m: "Lighthearted romance" },
      { n: 10, i: "Cello pulse, silence, one violin note", m: "Dread, then shock" },
      { n: 11, i: "Sustained strings", m: "Grief" },
      { n: 12, i: "Piano and strings; a broken flute theme", m: "Loss" }
    ],
    trailerCaption: "Some goodbyes are never meant to be the last. 🕊️✈️\nAakhri Allah Hafiz (The Last Goodbye) is an AI-generated Urdu short film about an orphan from Karachi, a paper aeroplane and a dream that greed could not let fly.\nFull film on YouTube.\n\n#AakhriAllahHafiz #TheLastGoodbye #UrduShortFilm #AIFilmmaking #DUET #AICT #GoogleFlow",
    ostCaption: "The sound of a promise. 🎵\nThe original soundtrack of Aakhri Allah Hafiz: a lone flute for a boy who looked at the sky, and strings for the goodbye he never saw coming.\nMusic made with Suno AI. Put your headphones on.\n\n#AakhriAllahHafiz #OST #OriginalSoundtrack #SunoAI #UrduShortFilm #AICT #DUET"
  },

  /* ---------- RUBRIC PROOF ---------- */
  rubric: [
    { req: "The film", ok: "Full film, 9 min 40 s, 12 scenes, 86 shots, Urdu", where: "#film" },
    { req: "Trailer with caption", ok: "Trailer embedded with a ready-to-post caption", where: "#audio" },
    { req: "OST with caption", ok: "OST embedded with a ready-to-post caption", where: "#audio" },
    { req: "Portfolio website", ok: "This site, deployed on Vercel", where: "#top" },
    { req: "Script with scenes, dialogue and voice-over", ok: "Full script in the pre-production package; dialogue and voice direction per scene", where: "#vault" },
    { req: "Synopsis (logline, short, full, structure)", ok: "Section 3 of the package; logline and director's statement on this site", where: "#statement" },
    { req: "Character building with emotions and direction", ok: "Character sheets and an emotion map; gallery with voice notes", where: "#characters" },
    { req: "Storyboard: scenes, BGM, voice-over, frames", ok: "Interactive timeline and planned-vs-generated frame comparison", where: "#timeline" },
    { req: "Camera angles, movement and lens for every shot", ok: "Shot lists for all 86 shots in the package", where: "#vault" },
    { req: "Technical information", ok: "Section 9 of the package, plus the tool list on this site", where: "#details" },
    { req: "AI prompts and tools named", ok: "Prompts P01 to P12, style and negative blocks, six tools credited", where: "#bts" },
    { req: "95% writing and pre-production, 5% generation", ok: "Our working method; every creative decision was written before generation", where: "#bts" },
    { req: "Team introduced, with resumes", ok: "Five members with roles, bios, roll numbers and resume viewer", where: "#team" },
    { req: "Family-safe content", ok: "Violence implied only; the Scene 10 sound cue was corrected to silence", where: "#bts" }
  ],

  learned: [
    { t: "Write first, generate last", d: "A detailed shot list meant the tools only had to carry out decisions that were already made. Nearly every problem we hit was a writing problem in disguise." },
    { t: "Consistency is a craft", d: "Keeping one character looking like one person across many shots took reference sheets and word-for-word character blocks. We also saw where it still breaks." },
    { t: "Sound can carry what pictures should not show", d: "The most powerful moment in the film is a silence. Choosing what not to show was a creative and an ethical decision." },
    { t: "Know the limits of the tool", d: "AI cannot spell on a certificate or a headstone. Planning shots that avoid readable text saved us time." },
    { t: "Teamwork needs clear roles", d: "Splitting story, sound, voice, generation and editing across five people only worked because the responsibilities were written down." }
  ]
};
