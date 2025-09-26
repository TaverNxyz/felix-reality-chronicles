import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { FileReader } from '@/components/FileReader';
import { FileList } from '@/components/FileList';
import { PasswordProtection } from '@/components/PasswordProtection';
import { SectionPasswordProtection } from '@/components/SectionPasswordProtection';
import { StoryFile } from '@/types/story';

const Index = () => {
  const [selectedFile, setSelectedFile] = useState<StoryFile | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [sectionAccess, setSectionAccess] = useState({
    felix: false,
    reality: false
  });

  useEffect(() => {
    // No authentication persistence - users must enter passwords every time
  }, []);

  const handleAuthenticated = () => {
    setIsAuthenticated(true);
  };

  const handleSectionAuthenticated = (section: string) => {
    setSectionAccess(prev => ({
      ...prev,
      [section]: true
    }));
  };

  // Show password protection if not authenticated
  if (!isAuthenticated) {
    return <PasswordProtection onAuthenticated={handleAuthenticated} />;
  }

  // Hardcoded files as requested
  const predefinedFiles: StoryFile[] = [
    // Felix section files
    {
      id: '1',
      name: 'whenwewerecool.jsx',
      section: 'felix',
      content: `:34:59] 🤣 tcp.dns: yeah bro, youre known for holding it down regardless of shit
[09/03/25 18:35:07] 💀 felixtfelix: But guess what I ain't their hound dog so they have to give me more than that
[09/03/25 18:35:19] 🤣 tcp.dns: if i need some shit i know i can hit you up knowing that itll be a moral stature on it
[09/03/25 18:36:20] 🤣 tcp.dns: and im even fine with every now and again doing some shit out of favoritism but (not really you) other showcases of this type of stuff and shit i have dealt with for the last 3 days and no one has acknowledged me basically trying to peacefully diffuse the situation has of course turned into this
[09/03/25 18:37:07] 💀 felixtfelix: That's what tickets are for
[09/03/25 18:37:22] 💀 felixtfelix: It defers the blame, job everything across the entire team
[09/03/25 19:10:44] 🤣 tcp.dns: i agree, and i know im not perfect and im not tryna be all nimble and shit rn, 
but....bro its just been a fucking lot the last 3 days and im fine with admitting im not built for it. ive been called a pussy and blah blah blah but its also the same one telling me i cant post my dick out of blatant insecurity and that in itself is enough for me`
    },
    {
      id: '2', 
      name: 'andhejustcantgetenough.jsx',
      section: 'felix',
      content: `[09/21/25 14:43:08] (redacted): Idk these colors but
[09/21/25 14:43:22] (redacted): Ew I hate these colors
[09/21/25 14:43:34] ⬛ 🤣 tcp.dns: then if you want it gradient just add hex for black after it (redacted)✨ , idk about the icon and other, are they url based? @Wallaby
[09/21/25 14:43:49] (redacted): No I hate the gradient
[09/21/25 14:43:55] ⬛ 🤣 tcp.dns: oh aight hahahahaa
[09/21/25 14:44:10] (redacted): <:purple_glow:1261490653804761150>
[09/21/25 14:44:13] (redacted): Bruh I was jk lmaoooo I'm sure you gotta 8 in hog tho hehe 😎
↳ Replying to ⬛ 🤣 tcp.dns: its in the nsfw here already but ill leave it here too:

https://tenor.com/view/travis-travis-band-travisband-dougie-payne-dougie-gif-4124441954760778043

[09/21/25 14:44:40] ⬛ 🤣 tcp.dns: https://tenor.com/view/ace-venture-dylan-uhhh-uh-uhh-gif-26049069

↳ Replying to (redacted): Bruh I was jk lmaoooo I'm sure you gotta 8 in hog tho hehe 😎
[09/21/25 14:44:51] (redacted): Hahahahahhahahaha!
[09/21/25 14:44:52] ⬛ 🤣 tcp.dns: lub you
[09/21/25 14:45:02] (redacted): Now for my react icons
[09/21/25 14:45:05] (redacted): Hahahah
[09/21/25 14:45:05] (redacted): Test
[09/21/25 14:45:48] (redacted)#1385: 🌈 Gradient set: 9D4496 → 7167FD (Applied gradient via colors+style.)
[09/21/25 14:45:52] ⬛ 🤣 tcp.dns: (redacted)✨ do $pr view
[09/21/25 14:45:53] (redacted): Chill
[09/21/25 14:46:19] ⬛ 🤣 tcp.dns: 🙂
[09/21/25 14:46:47] ⬛ 🤣 tcp.dns: @Wallaby you already know she gonna be like wtf is this shit. i dont htink most understand what trigger means and even how to get UIDs XD
[09/21/25 14:47:06] ⬛ 🤣 tcp.dns: im assuming triggers are keywords or mentions, idk though (redacted)✨
[09/21/25 14:47:09] (redacted): IVE TAPPED EVERY OPTION
[09/21/25 14:47:15] ⬛ 🤣 tcp.dns: HELL YES
[09/21/25 14:47:29] ⬛ 🤣 tcp.dns: best route ✔https://tenor.com/view/pedro-monkey-puppet-meme-awkward-gif-18054093961720321086

[09/21/25 14:48:13] ⬛ 🤣 tcp.dns: https://cdn.discordapp.com/
... image0.gif https://media.discordapp.net/...499A377E-F7ED-48FC-8717-E43AC06E8514.gif

[09/21/25 14:49:00] ⬛ 🤣 tcp.dns: oh god on mobile too..

yeah god rest your soul. and the soul of your phones chip. and the not-burning-state of your hands while holding said phone
[09/21/25 14:49:13] ⬛ 🤣 tcp.dns: my phone bounces itself off the wall since the new electron update a few months back
[09/21/25 14:49:28] ⬛ 🤣 tcp.dns: you got big ole stones, ole son
[09/21/25 14:49:30] ⬛ 🤣 tcp.dns: ngl
[09/21/25 14:49:32] ⬛ 🤣 tcp.dns: hahahhaah

<div style="background: linear-gradient(135deg, #FFD700, #FFA500); color: #000; padding: 12px; margin: 8px 0; border-radius: 8px; border-left: 4px solid #FF6B00; font-weight: bold; font-size: 14px;">
📋 CONTEXT: Below is when mr discord mod starts unprovokingly sucking my dick after my response to a claim he made the day before of "Esco is always scared of being doxed" not knowing that I very well know literally any and all of his info down to his sensitive numbers. He then waited an entire day to respond to me and below is that response followed by me simply having time for it on that day.

⚠️ NOTE: Mind you, he would have banned me upon first visibly seeing me in any other server, but i have a good feeling he was told to not ban me by someone in-particular. So at this point, it was free game for me to say anything aside from posting his dox, which I never really planned to. I will also post the following messages of felix repeatedly asking me to dox people for his own benefit, which i also never did. And i also might add, the whole "doxing" was brought into the equation by none other than felix and felix alone. He and all the admins know who i am and what can be done through the right searches and queries to build enough to get the info i need to submit it to my PI and get the REAL sensitive stuff, and it was never a problem, infact, trolling the weirdos in shameless was encouraged by a close friend in shameless who also happened to be higher up than most everyone in there. So yeah, lets really talk about the root cause of all of the controversy between that term and my name being associated with it.
</div>

[09/21/25 14:49:32] 🟥 FELIXTFELIX: Go off king faggot
[09/21/25 14:50:03] 🟥 FELIXTFELIX: Hey man due
[09/21/25 14:50:03] ⬛ 🤣 tcp.dns: youre late and still insignificant but i love the hateful dickriding, but gladly 🙂
[09/21/25 14:50:16] 🟥 FELIXTFELIX: Oh I'm unblocked
[09/21/25 14:50:25] 🟥 FELIXTFELIX: Waddya know
[09/21/25 14:50:33] ⬛ 🤣 tcp.dns: yeah i blocked you til you stopped spamming me and lying about the one who is doing it
[09/21/25 14:50:40] ⬛ 🤣 tcp.dns: like 3rd grade shit i just dont care to get blown up with
[09/21/25 14:50:45] 🟥 FELIXTFELIX: I didn't say shit to anyone about it
[09/21/25 14:50:56] ⬛ 🤣 tcp.dns: like shit lmao
[09/21/25 14:51:00] 🟥 FELIXTFELIX: Wow
[09/21/25 14:51:10] 🟥 FELIXTFELIX: Mans never used voicenotes
[09/21/25 14:51:27] ⬛ 🤣 tcp.dns: listen bro osrs, im not gonna sit here and keep arguing with you about some shit idgaf about to begin with
[09/21/25 14:51:30] 🟥 FELIXTFELIX: Oh wait you never leave your house so driving is out the questions
[09/21/25 14:51:43] ⬛ 🤣 tcp.dns: LOLOLOLOL
[09/21/25 14:51:45] ⬛ 🤣 tcp.dns: what does that prove
[09/21/25 14:51:47] ⬛ 🤣 tcp.dns: lmk...
[09/21/25 14:51:52] 🟥 FELIXTFELIX: Lmk what
[09/21/25 14:51:57] ⬛ 🤣 tcp.dns: does everyone know youre still at moms or....?
[09/21/25 14:52:02] ⬛ 🤣 tcp.dns: like tfu bro
[09/21/25 14:52:17] ⬛ 🤣 tcp.dns: on god its always your dickriding and then you ban when you get mad
[09/21/25 14:52:20] ⬛ 🤣 tcp.dns: typical faggotry
[09/21/25 14:53:01] ⬛ 🤣 tcp.dns: you can go ahead and spam apps to my server again tho when you do thjough XD
[09/21/25 14:53:26] ⬛ 🤣 tcp.dns: dont think keep typing king
[09/21/25 14:53:41] ⬛ 🤣 tcp.dns: watch im finna hold a ban again, only this time itll ACTUALLY have relation to said server
[09/21/25 14:54:14] ⬛ 🤣 tcp.dns: crickets and shit...

right
[09/21/25 14:54:20] 🟥 FELIXTFELIX: Actually have relations
[09/21/25 14:54:24] 🟥 FELIXTFELIX: What?
[09/21/25 14:54:38] ⬛ 🤣 tcp.dns: where's the exponentially overly geriatric response like usual tho
[09/21/25 14:54:42] ⬛ 🤣 tcp.dns: bc i been done with t his shit
[09/21/25 14:54:47] ⬛ 🤣 tcp.dns: but you love stirring shit
[09/21/25 14:54:53] ⬛ 🤣 tcp.dns: and i got time for it today babyboy
[09/21/25 14:55:11] 🟥 FELIXTFELIX: Am I geriatric or a baby, pick a lane fruitcake
[09/21/25 14:55:21] ⬛ 🤣 tcp.dns: you banned me for leaving vice and telling you to gtfo my dms
[09/21/25 14:55:38] 🟥 FELIXTFELIX: Nope
[09/21/25 14:55:43] 🟥 FELIXTFELIX: Not it at all
[09/21/25 14:55:47] ⬛ 🤣 tcp.dns: so the reference is that if i am banned here, even for gay shit like last time, also on your behalf, at least you could lie about it being about the server im banned in instead of just being angwy
[09/21/25 14:55:50] ⬛ 🤣 tcp.dns: you did
[09/21/25 14:55:52] ⬛ 🤣 tcp.dns: retard
[09/21/25 14:55:56] ⬛ 🤣 tcp.dns: also in the logs and shit but yeah, you got it
[09/21/25 14:56:04] 🟥 FELIXTFELIX: I banned you but not for that reason
[09/21/25 14:56:08] ⬛ 🤣 tcp.dns: ironic
[09/21/25 14:56:12] 🟥 FELIXTFELIX: Oh you have our logs now?
[09/21/25 14:56:23] ⬛ 🤣 tcp.dns: being right after i said to stfu and then i was banned...
[09/21/25 14:56:35] ⬛ 🤣 tcp.dns: like who you lie to irl may work but even a skid on the internet sees through that
[09/21/25 14:56:38] 🟥 FELIXTFELIX: Oh no it's for much darker reasons
[09/21/25 14:56:43] ⬛ 🤣 tcp.dns: and yes, i have said that multiple times
[09/21/25 14:56:52] ⬛ 🤣 tcp.dns: anyway...
[09/21/25 14:57:10] ⬛ 🤣 tcp.dns: https://tenor.com/view/toby-maguire-edgy-edgelord-emo-or-gif-25925750
 edgelord lookin ass
[09/21/25 14:57:21] 🟥 FELIXTFELIX: What?
[09/21/25 14:57:31] ⬛ 🤣 tcp.dns: too old to understand i shouldve considered that lmao
[09/21/25 14:57:43] ⬛ 🤣 tcp.dns: "now i will play dumb since i have jack shit that is actually valid"
[09/21/25 14:57:44] 🟥 FELIXTFELIX: Is that you, cuz I can see it
[09/21/25 14:57:45] ⬛ 🤣 tcp.dns: dismissed nigga
[09/21/25 14:58:00] 🟥 FELIXTFELIX: You can't dismiss me
[09/21/25 14:58:06] ⬛ 🤣 tcp.dns: you dont see shit but whatever of the 20 servers youre glued to show you buddy
[09/21/25 14:58:07] ⬛ 🤣 tcp.dns: i can
[09/21/25 14:58:09] ⬛ 🤣 tcp.dns: watch this
[09/21/25 14:58:17] ⬛ 🤣 tcp.dns: oh wait you think everyone else seeing you is what i want
[09/21/25 14:58:25] 🟥 FELIXTFELIX: What?
[09/21/25 14:58:26] ⬛ 🤣 tcp.dns: nah i dont pray on downfalls and do gay petty shit because im mad
[09/21/25 14:58:28] ⬛ 🤣 tcp.dns: ik you cant relate
[09/21/25 14:58:33] 🟥 FELIXTFELIX: You seriously don't make any sense
[09/21/25 14:58:45] ⬛ 🤣 tcp.dns: nah i do, youre seriously a geriatric faggot retard XD
[09/21/25 14:58:51] (redacted): Yall like tacos?
[09/21/25 14:58:52] 🟥 FELIXTFELIX: What have I been doing esco
[09/21/25 14:58:57] ⬛ 🤣 tcp.dns: i love tacos
[09/21/25 14:59:02] 🟥 FELIXTFELIX: I love the name calling
[09/21/25 14:59:07] ⬛ 🤣 tcp.dns: hahahahaha
[09/21/25 14:59:08] 🟥 FELIXTFELIX: Seriously making my day
[09/21/25 14:59:09] (redacted): White people tacos slap idc idc
[09/21/25 14:59:09] ⬛ 🤣 tcp.dns: i know you do
[09/21/25 14:59:14] 🟥 FELIXTFELIX: https://tenor.com/view/jeff-goldblum-gif-5592813242271971810
[09/21/25 14:59:19] 🤣 tcp.dns: in your 43 voice messages you called me a faggot and a retard multiple times
[09/21/25 14:59:25] 🟥 felixtfelix: https://tenor.com/view/alex-trebek-jeopardy-hahaha-no-haha-no-no-gif-19121720
[09/21/25 14:59:27] 🤣 tcp.dns: promise i wont crash out over a nigga living at home still
[09/21/25 14:59:32] 🤣 tcp.dns: foh lil boy
[09/21/25 14:59:44] 🟥 felixtfelix: Foh
[09/21/25 14:59:50] 🤣 tcp.dns: look it up ole man
[09/21/25 14:59:51] 🟥 felixtfelix: Foh king
[09/21/25 14:59:56] 🤣 tcp.dns: thanks?
[09/21/25 14:59:57] 🟥 felixtfelix: For king we tard
[09/21/25 15:00:09] 🤣 tcp.dns: anyway...
[09/21/25 15:00:54] 🤣 tcp.dns: now i re enable the "show messages from blocked faggot" mode back on 🙂 good talk tho,
i need a reminder every now and again why i should just leave that on
[09/21/25 15:01:00] felixtfelix: Anyway….
[09/21/25 15:01:49] 🟥 felixtfelix: I didn't say anything about wanting to fuck you
[09/21/25 15:01:59] 🟥 felixtfelix: But now I know what you think about
[09/21/25 15:02:18] 🤣 tcp.dns: bruh youre so bland like i cant even take your shit talk seriously but at least ion have to fake-laugh at all of it anymore
[09/21/25 15:02:21] 🤣 tcp.dns: lololololol
[09/21/25 15:02:55] 🟥 felixtfelix: Okay esco, sorry for making a joke my bad crash out king
[09/21/25 15:03:22] 🤣 tcp.dns: should apologize for being a faggot and doing what we both know you did, but since im still a decent person im not finna roll right back into that

<div style="background: linear-gradient(135deg, #00FF00, #32CD32); color: #000; padding: 12px; margin: 8px 0; border-radius: 8px; border-left: 4px solid #008000; font-weight: bold; font-size: 14px;">
🎯 TACTICAL SHIFT: At this point, he went full bitchmade and took it to my dms as if he thought that would make me stop grilling him publicly. Was it out of fear? Could esco really stoop so low as to exposing what he knows about mr modewator? I continued replying in public VC while also replying to him in DMs telling him to keep it all public.
</div>

[09/21/25 15:03:34] 🤣 tcp.dns: bro wasnt joking when he was spamming me, or yesterday, or any other time
[09/21/25 15:03:42] 🤣 tcp.dns: again, ion crash out about niggas like you bro, sincerely
[09/21/25 15:04:12] 🤣 tcp.dns: ima crash out...

from the nigga shoving coins in his dickhole.

right
[09/21/25 15:04:33] 🟥 felixtfelix: Wow
[09/21/25 15:04:47] 🟥 felixtfelix: Crashout harder please princess
[09/21/25 15:04:58] 🤣 tcp.dns: make a single life move...
[09/21/25 15:05:00] 🟥 felixtfelix: Thanks proncess
[09/21/25 15:05:03] 🤣 tcp.dns: it equals out
[09/21/25 15:05:09] 🟥 felixtfelix: Thank you princess
[09/21/25 15:05:10] 🤣 tcp.dns: youre welcome mr big bad discord modewator
[09/21/25 15:08:27] 🟥 felixtfelix: Thank you little man
[09/21/25 15:10:14] 🟥 felixtfelix: Poor baby blocked me


[09/21/25 15:10:16] (redacted): Does my shit work now someone reply to me


[09/21/25 15:10:31] 🤣 tcp.dns: hahahahaha he's harnessing his inner 3 year old


[09/21/25 15:10:47] (redacted): Sorry to disrupt lmao

ctd:

[09/21/25 15:10:50] 🤣 tcp.dns: he wants a list of all his bluffs so i got him, only natural to block him being that, again, he has the capacity to send me 43 vms unprovoked
[09/21/25 15:10:57] 🤣 tcp.dns: nah its cool, and here
    ↳ Replying to (redacted): Does my shit work now someone reply to me
[09/21/25 15:11:00] 🟥 felixtfelix: Your a liar 


<div style="background: linear-gradient(135deg, #FF1493, #FF69B4); color: #FFF; padding: 12px; margin: 8px 0; border-radius: 8px; border-left: 4px solid #C71585; font-weight: bold; font-size: 14px;">
🔥 EVIDENCE DROP: Im a liar? interesting... https://imgur.com/a/9dzrb6q yeah all of that purple is only a PORTION of vms this weird ass pussy sent me that i could snapshot while being maximum zoomed out on notepad

But im a liar? Or is he just a bum who still lives at home and gets all his affirmation on discord? The world may never know. Oh wait, they do though lololol.
</div>

[09/21/25 15:11:02] 🤣 tcp.dns: nerp
[09/21/25 15:11:08] 🟥 felixtfelix: It's funny watching you wig out
[09/21/25 15:11:15] 🤣 tcp.dns: tfu lil boy XD
    ↳ Replying to felixtfelix: Your a liar
[09/21/25 15:11:16] (redacted): wtf!!! 😩😩
[09/21/25 15:11:28] 🤣 tcp.dns: its funny knowing the same nigga talking shit on discord lives at home still
[09/21/25 15:11:33] 🤣 tcp.dns: do something- anything with your life
[09/21/25 15:11:39] 🤣 tcp.dns: then youll be able to speak to me nigga
[09/21/25 15:11:41] 🟥 felixtfelix: Hahahahahaah
[09/21/25 15:11:46] 🤣 tcp.dns: on god im self righteous about that regarding you
[09/21/25 15:11:58] 🟥 felixtfelix: I don't care what you are you schiz
[09/21/25 15:12:00] 🤣 tcp.dns: right...hilarious
[09/21/25 15:12:06] 🟥 felixtfelix: That's what I'm gonna call you
[09/21/25 15:12:08] 🟥 felixtfelix: Schiz
[09/21/25 15:12:15] 🤣 tcp.dns: im a schitz but you put NICKELS IN YOUR DICK NIGGA 😭😭😭😭
[09/21/25 15:12:19] 🟥 felixtfelix: princess schiz
[09/21/25 15:12:25] 🤣 tcp.dns: good one, ima call you homeless without mommy
[09/21/25 15:12:44] 🟥 felixtfelix: Princess schiz all alone
[09/21/25 15:12:59] 🤣 tcp.dns: i dont need internet validation like you bud
[09/21/25 15:13:23] 🤣 tcp.dns: promise i forgot about you old, weird ass niggas with this server power shit an hour after i dipped out of vice
[09/21/25 15:13:26] 🟥 felixtfelix: Nice leet speak
[09/21/25 15:13:28] 🤣 tcp.dns: look there he goes
[09/21/25 15:13:31] 🤣 tcp.dns: changing my name and shit
[09/21/25 15:13:33] 🤣 tcp.dns: big bad admin
[09/21/25 15:13:38] 🟥 felixtfelix: I think it's funny
[09/21/25 15:13:48] 🤣 tcp.dns: literal showcase of how much of a faggot you are, if i let you into my server i could do that too
[09/21/25 15:14:00] 🤣 tcp.dns: im sure you do. niggas are still yawning old man
[09/21/25 15:14:07] 🟥 felixtfelix: Hahahahaha
[09/21/25 15:14:15] 🟥 felixtfelix: Your quite engaged
[09/21/25 15:14:17] 🤣 tcp.dns: be a good bitch and change it back again
[09/21/25 15:14:24] 🤣 tcp.dns: like i said i got time for it
[09/21/25 15:14:31] 🟥 felixtfelix: Good little man
[09/21/25 15:14:32] 🤣 tcp.dns: as if youre not rapidly responding lmao
[09/21/25 15:14:38] 🤣 tcp.dns: keep going ima cum
[09/21/25 15:14:42] 🤣 tcp.dns: keep going keep going keep going
[09/21/25 15:14:45] 🤣 tcp.dns: lame ass nigga
[09/21/25 15:17:38] 🟥 felixtfelix: 
[09/21/25 15:17:48] 🤣 tcp.dns: we done now? fucking finally. not even as a declaration of a win, simply because this shit makes me tired
[09/21/25 15:18:03] 🤣 tcp.dns: mfg youre insufferable huh
    ↳ Replying to felixtfelix: 
[09/21/25 15:18:10] 🤣 tcp.dns: you got it bro XD
[09/21/25 15:18:33] 🟥 felixtfelix: Got what lil man?
[09/21/25 15:18:46] 🤣 tcp.dns: old ass nigga`
    },
    // Reality section file  
    {
      id: '3',
      name: 'ohno_youfellandcantgetup.jsx', 
      section: 'reality',
      content: `<div style="background: linear-gradient(135deg, #FFD700, #FFFF00); color: #000; padding: 16px; margin: 12px 0; border-radius: 12px; border: 3px solid #FF8C00; font-weight: bold; font-size: 15px; box-shadow: 0 4px 12px rgba(255, 215, 0, 0.4);">
🚨 THE REALITY BREAKDOWN - FULL CONTEXT 🚨

As for reality, all of this transpired out of a very (non) justified reason. I posted my dick in NSFW and a girl in the VC who went to look at it upon SOMEONE ELSE bringing up the fact that i had even posted it saw it, made a blatant "O face" and began to admire the picture while reality was in the VC. This was the turning point.

The night goes on and morning comes, tanmak and reality were in the VC and i popped in. TanMak left shortly after, which somewhat indicates maybe i was already being spoken about. WEIRD.

So tanmak leaves, and reality, without wasting a single second, informs me that i am not allowed to post my dick in V I C E as he doesnt want "any of his admins posting their shit in the server they moderate"...

BUT FELIX, who was an admin under me in V I C E, was actually the FIRST dick entry that ever got posted. So at this point, i accepted who he was, and knew i would depart by the end of the day.

I was admin in shameless and all my REAL friends applauded my outgoing of coming out of my shell and posting my shit for people to see. This was after months of being grilled and being called a faggot because i never wanted to goon with some of the crashout bitches that he had in his rotation, all while manipulating a 19 year old girl who was head over heels for him while i watched him break her heart and manipulate her back into his control multiple times.

She cannot be blamed, he is almost 34 and she is 19, say what you want, but that is perfectly justifiable for her to allow herself to be taken advantage of especially when (and this is the only compliment i will ever give reality) he is a smooth talker and manipulated anyone in regards to their opinion of me prior to treez shutting him down publicly along with plushi standing up for me as well when he framed me as a threat to the entire shameless admin team. Treez, as seen above, shut that shit down and told him he needs to essentially stop trying to riot in the aspect of destroying my name lolololol.

He also actively showed me videos on a phone that he recorded the phone he was using while talking to chancellor and 2 other girls while they were showing him certain videos of themselves that he was told to keep private.

While i was building 404, i heard bits and pieces of him plotting on me and trying to get me fucked over. Dun duh duh dun, then leverage comes into play and i started getting annoyed. His threat was to (allegedly, because i will even say i never confirmed this, but still acted on it because i had confirmed that he still had my whole dick in his mouth days later) send pics of me smoking to my parents. I laughed at it, he may talk to them more than i have this year in that case. Point being, it served no effect.

So then, when lex blocked him, he had a full realization that he now doesnt have her or anyone to manipulate, while at some point realizing, similar to felix, i know everything about him too. But he made it easy by giving me senior admin perms to the linode servers that we ran for the bots and external applications we built for V I C E. By the way, he also claims the months in a row of he and i sitting in VCs actively co-devving, was actually and i quote, 80% him and 20% me. Haha, right.

So with that, i give you the pictures of messages he sent lex while AT WORK, so sweet, thinking about me at work lololol, of him directly stating he was gonna try and make my life hell til i left shameless. Woopty woop, this is what chronic problems and insecurity develops into.

PICTURES:
https://imgur.com/a/ywxRpos - talking about making my life hell
https://imgur.com/a/AUWLwYt - him getting absolutely pwnd by the response from shameless head admin.
</div>`
    }
  ];

  const felixFiles = predefinedFiles.filter(file => file.section === 'felix');
  const realityFiles = predefinedFiles.filter(file => file.section === 'reality');

  return (
    <div className="min-h-screen bg-background" 
         style={{
           backgroundImage: "url('/favicon.png')",
           backgroundAttachment: 'fixed',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat', 
           backgroundSize: 'cover',
           backgroundBlendMode: 'overlay'
         }}>
      <div className="absolute inset-0 bg-background/40 pointer-events-none"></div>
      {/* Header */}
      <div className="relative border-b border-primary/20 bg-discord-dark/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center space-y-4">
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter">
              <span className="vice-gradient bg-clip-text text-transparent drop-shadow-2xl">
                PERMABUSE PALACE
              </span>
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-yellow-400 font-bold text-xl md:text-2xl terminal-text tracking-wider animate-pulse">
                BEFORE YOU READ THIS, NO, THIS IS NOT A DOX.
              </p>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-vice-red to-vice-purple mx-auto rounded-full shadow-glow"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Felix Section */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-vice-red/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative">
              <Card className="p-8 mb-8 bg-discord-dark/90 border-vice-red/40 hover:border-vice-red/60 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-[1.02] rounded-2xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-vice-red/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">👑</span>
                  </div>
                  <div>
                    <h2 className="text-4xl font-black text-vice-red tracking-tight">
                      FELIX
                    </h2>
                    <div className="w-16 h-1 bg-vice-red rounded-full mt-2"></div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  The chronicles of a power-tripping admin's descent into digital tyranny. 
                  Witness the corruption of authority in the digital age.
                </p>
              </Card>

              <div className="space-y-6">
                {sectionAccess.felix ? (
                  <div className="bg-discord-dark/80 rounded-2xl p-6 border border-vice-red/20 backdrop-blur-sm">
                    <FileList
                      files={felixFiles}
                      onFileSelect={(file) => setSelectedFile(file)}
                      onFileDelete={() => {}} // Disabled for hardcoded files
                      sectionTitle="Felix"
                    />
                  </div>
                ) : (
                  <div className="bg-discord-dark/90 rounded-2xl border border-vice-red/30 backdrop-blur-sm">
                    <SectionPasswordProtection
                      section="felix"
                      onAuthenticated={handleSectionAuthenticated}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Reality Section */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-vice-purple/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative">
              <Card className="p-8 mb-8 bg-discord-dark/90 border-vice-purple/40 hover:border-vice-purple/60 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-[1.02] rounded-2xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-vice-purple/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🌀</span>
                  </div>
                  <div>
                    <h2 className="text-4xl font-black text-vice-purple tracking-tight">
                      REALITY
                    </h2>
                    <div className="w-16 h-1 bg-vice-purple rounded-full mt-2"></div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  The crumbling foundations of what once was real. 
                  Explore the distortion of truth in our connected world.
                </p>
              </Card>

              <div className="space-y-6">
                {sectionAccess.reality ? (
                  <div className="bg-discord-dark/90 rounded-2xl p-6 border border-vice-purple/20 backdrop-blur-sm">
                    <FileList
                      files={realityFiles}
                      onFileSelect={(file) => setSelectedFile(file)}
                      onFileDelete={() => {}} // Disabled for hardcoded files
                      sectionTitle="Reality"
                    />
                  </div>
                ) : (
                  <div className="bg-discord-dark/90 rounded-2xl border border-vice-purple/30 backdrop-blur-sm">
                    <SectionPasswordProtection
                      section="reality"
                      onAuthenticated={handleSectionAuthenticated}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* File Reader Modal */}
      {selectedFile && (
        <FileReader
          fileName={selectedFile.name}
          content={selectedFile.content}
          onClose={() => setSelectedFile(null)}
        />
      )}
    </div>
  );
};

export default Index;