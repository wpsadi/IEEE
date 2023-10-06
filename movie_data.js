const movieData = {
    "Avengers: Secret Wars": {
        trailerUrl: "",
        description: "Marvel Studios' Avengers: Secret Wars will arrive in theaters on May 7, 2027.",
        details: {
            releaseDate: "May 7, 2027"
        }
    },
    "Avengers: The Kang Dynasty": {
        trailerUrl: "",
        description: "Marvel Studios' Avengers: The Kang Dynasty will arrive in theaters on May 1, 2026.",
        details: {
            releaseDate: "May 1, 2026"
        }
    },
    "Fantastic Four": {
        trailerUrl: "",
        description: "Marvel Studios' Fantastic Four arrives in theaters on May 2, 2025.",
        details: {
            directors: ["Matt Shakman"],
            releaseDate: "May 2, 2025"
        }
    },
    "Blade": {
        trailerUrl: "",
        description: "Marvel Studios' Blade arrives in theaters on February 14, 2025.",
        details: {
            cast: ["Mahershala Ali"],
            releaseDate: "February 14, 2025"
        }
    },
    "Thunderbolts": {
        trailerUrl: "",
        description: "Marvel Studios' Thunderbolts will arrive in theaters on December 20, 2024.",
        details: {
            cast: ["David Harbour", "Hannah John-Kamen", "Julia Louis-Dreyfus", "Sebastian Stan", "Wyatt Russell", "Olga Kurylenko", "Florence Pugh"],
            releaseDate: "December 20, 2024"
        }
    },
    "Captain America: Brave New World": {
        trailerUrl: "",
        description: "Marvel Studios' Captain America: Brave New World will arrive in theaters on July 26, 2024.",
        details: {
            directors: ["Julius Onah"],
            cast: ["Anthony Mackie", "Carl Lumbly", "Danny Ramirez", "Tim Blake Nelson"],
            releaseDate: "July 26, 2024"
        }
    },
    "Untitled Deadpool Movie": {
        trailerUrl: "",
        description: "Coming to theaters May 3, 2024.",
        details: {
            cast: ["Ryan Reynolds", "Hugh Jackman"],
            releaseDate: "May 3, 2024"
        }
    },
    "The Marvels": {
        trailerUrl: "https://www.youtube.com/embed/wS_qbDztgVY?si=BvzZuDzRKVPENNl6",
        description: `Carol Danvers AKA Captain Marvel has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau.`,
        details: {
            directors: ["Nia DaCosta"],
            producers: ["Kevin Feige"],
            executiveProducers: ["Louis D’Esposito", "Victoria Alonso", "Mary Livanos", "Matthew Jenkins"],
            writers: ["Megan McDonnell", "Nia DaCosta", "Elissa Karasik", "Zeb Wells"],
            cast: ["Brie Larson", "Teyonah Parris", "Iman Vellani", "Zawe Ashton", "Gary Lewis", "Seo-Jun Park", "Zenobia Shroff", "Mohan Kapur", "Saagar Shaikh", "Samuel L. Jackson"],
            releaseDate: "November 10, 2023"
        }
    },
    "Guardians of the Galaxy Vol. 3": {
        trailerUrl: "https://www.youtube.com/embed/JqcncLPi9zw?si=oh-yg7zJsOQn2QVr",
        description: `In Marvel Studios "Guardians of the Galaxy Vol. 3" our beloved band of misfits are looking a bit different these days. Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.`,
        details: {
            directors: ["James Gunn"],
            cast: ["Chris Pratt", "Karen Gillan", "Pom Klementieff", "Sean Gunn", "Will Poulter", "Maria Bakalova", "Chukwudi Iwuji"],
            releaseDate: "May 5, 2023"
        }
    },
    "Ant-Man and The Wasp: Quantumania": {
        trailerUrl: "https://www.youtube.com/embed/ZlNFpri-Y40?si=6ekFDahsJcoYL3Gu",
        description: `In the film, which officially kicks off phase 5 of the Marvel Cinematic Universe, Super-Hero partners Scott Lang and Hope Van Dyne return to continue their adventures as Ant-Man and the Wasp. Together, with Hope's parents Hank Pym and Janet Van Dyne, the family finds themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought was possible. Jonathan Majors joins the adventure as Kang.`,
        details: {
            directors: ["Peyton Reed"],
            cast: ["Paul Rudd", "Evangeline Lilly", "Michael Douglas", "Michelle Pfeiffer", "Kathryn Newton", "Jonathan Majors"],
            releaseDate: "February 17, 2023"
        }
    },
    "Black Panther: Wakanda Forever": {
        trailerUrl: "https://www.youtube.com/embed/_Z3QKkl1WyM?si=GyQMukn3IEHpcFCs",
        description: `Queen Ramonda (Angela Bassett), Shuri (Letitia Wright), M’Baku (Winston Duke), Okoye (Danai Gurira) and the Dora Milaje (including Florence Kasumba), fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia (Lupita Nyong’o) and Everett Ross (Martin Freeman) and forge a new path for the kingdom of Wakanda.`,
        details: {
            directors: ["Ryan Coogler"],
            writers: ["Ryan Coogler"],
            cast: ["Angela Bassett", "Letitia Wright", "Winston Duke", "Danai Gurira", "Florence Kasumba", "Lupita Nyong’o", "Martin Freeman", "Tenoch Huerta", "Dominique Thorne", "Michaela Coel", "Mabel Cadena", "Alex Livanalli"],
            releaseDate: "November 11, 2022"
        }
    },
    "Thor: Love and Thunder": {
        trailerUrl: "https://www.youtube.com/embed/Go8nTmfrQd8?si=bTVO5PV7GeKUVj2d",
        description: `Marvel Studios’ “Thor: Love and Thunder” finds the God of Thunder on a journey unlike anything he’s ever faced—one of self-discovery. But his efforts are interrupted by a galactic killer known as Gorr the God Butcher, who seeks the extinction of the gods. To combat the threat, Thor enlists the help of King Valkyrie, Korg and ex-girlfriend Jane Foster, who—to Thor’s surprise—inexplicably wields his magical hammer, Mjolnir, as the Mighty Thor.`,
        details: {
            producers: ["Kevin Feige", "Brad Winderbaum"],
            writers: ["Taika Waititi", "Jennifer Kaytin Robinson"],
            directors: ["Taika Waititi"],
            cast: ["Chris Hemsworth", "Tessa Thompson", "Taika Waititi", "Natalie Portman", "Christian Bale"],
            releaseDate: "July 8, 2022"
        }
    },
    "Doctor Strange in the Multiverse of Madness": {
        trailerUrl: "https://www.youtube.com/embed/aWzlQ2N6qqg?si=cvpKCZ5Yh3IBIwPM",
        description: `Marvel Studios' "Doctor Strange in the Multiverse of Madness"—a thrilling ride through the Multiverse with Doctor Strange, his trusted friend Wong and Wanda Maximoff, aka Scarlet Witch. "Doctor Strange in the Multiverse of Madness" opens in U.S. theaters on May 6, 2022.`,
        details: {
            directors: ["Sam Raimi"],
            cast: ["Benedict Cumberbatch", "Elizabeth Olsen", "Benedict Wong", "Rachel McAdams", "Chiwetel Ejiofor", "Xochitl Gomez"],
            releaseDate: "May 6, 2022"
        }
    },
    "Spider-Man: No Way Home": {
        trailerUrl: "https://www.youtube.com/embed/ZYzbalQ6Lg8?si=YqYr1ZKAfg2Dc1q3",
        description: ``,
        details: {
            directors: ["Jon Watts"],
            cast: ["Tom Holland", "Zendaya", "Jacob Batalon"],
            releaseDate: "December 17, 2021"
        }
    },
    "Eternals": {
        trailerUrl: "https://www.youtube.com/embed/x_me3xsvDgk?si=T01Gf8hQR4RQxmNh",
        description: `Marvel Studios' Eternals features an exciting new team of Super Heroes in the Marvel Cinematic Universe, ancient aliens who have been living on Earth in secret for thousands of years. Following the events of Avengers: Endgame, an unexpected tragedy forces them out of the shadows to reunite against mankind's most ancient enemy, the Deviants.`,
        details: {
            directors: ["Chloé Zhao"],
            cast: ["Angelina Jolie", "Gemma Chan", "Richard Madden", "Kumail Nanjiani", "Lauren Ridloff", "Brian Tyree Henry", "Salma Hayek", "Lia McHugh", "Don Lee", "Kit Harrington"],
            releaseDate: "November 5, 2021"
        }
    },
    "Shang-Chi and The Legend of The Ten Rings": {
        trailerUrl: "https://www.youtube.com/embed/8YjFbMbfXaQ?si=NSmxnRN4gPFXodEC",
        description: `Marvel Studios' "Shang-Chi and The Legend of The Ten Rings" stars Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film also stars Tony Leung as Wenwu, Awkwafina as Shang-Chi's friend Katy and Michelle Yeoh as Jiang Nan, as well as Fala Chen, Meng'er Zhang, Florian Munteanu and Ronny Chieng.`,
        details: {
            directors: ["Destin Daniel Cretton"],
            writers: ["David Callaham", "Destin Daniel Cretton", "Andrew Lanham"],
            cast: ["Simu Liu", "Awkwafina", "Tony Leung", "Michelle Yeoh", "Fala Chen", "Meng’er Zhang", "Florian Munteanu", "Ronny Chieng"],
            producers: ["Kevin Feige", "Jonathan Schwartz"],
            executiveProducers: ["Louis D'Esposito", "Victoria Alonso", "Charles Newirth"],
            releaseDate: "September 3, 2021"
        }
    },
    "Black Widow": {
        trailerUrl: "https://www.youtube.com/embed/Fp9pNPdNwjI?si=sNRh6pHnqHZ49Zgb",
        description: `In Marvel Studios’ action-packed spy thriller “Black Widow,” Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.`,
        details: {
            directors: ["Cate Shortland"],
            cast: ["Scarlett Johansson", "David Harbour", "Florence Pugh", "O-T Fagbenle", "Rachel Weisz"],
            releaseDate: "July 9, 2021"
        }
    },
    "Spider-Man: Far From Home": {
        trailerUrl: "https://www.youtube.com/embed/Nt9L1jCKGnE?si=IW4ZIZydm8yotO97",
        description: `Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.`,
        details: {
            directors: ["Jon Watts"],
            writers: ["Chris McKenna", "Erik Sommers"],
            releaseDate: "July 2, 2019",
            basedOn: "Stan Lee and Steve Ditko",
            producers: ["Kevin Feige", "Amy Pascal"],
            executiveProducers: ["Louis D’Esposito", "Victoria Alonso", "Thomas M. Hammel", "Eric Hauserman Carroll", "Rachel O’Connor", "Stan Lee", "Avi Arad", "Matt Tolmach"],
            cast: ["Tom Holland", "Samuel L. Jackson", "Zendaya", "Cobie Smulders", "Jon Favreau", "JB Smoove", "Jacob Batalon", "Martin Starr", "Marisa Tomei", "Jake Gyllenhaal"]
        }
    },
    "Avengers: Endgame": {
        trailerUrl: "https://www.youtube.com/embed/hA6hldpSTF8?si=GOKsJ31tmwCa9An4",
        description: `The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios' grand conclusion to twenty-two films, "Avengers: Endgame."`,
        details: {
            directors: ["Anthony Russo", "Joe Russo"],
            producers: ["Kevin Feige"],
            screenplayWriters: ["Christopher Markus", "Stephen McFeely"],
            executiveProducers: ["Louis D’Esposito", "Victoria Alonso", "Michael Grillo", "Trinh Tran", "Jon Favreau", "James Gunn", "Stan Lee"],
            releaseDate: "April 26, 2019"
        }
    },
    "Captain Marvel": {
        trailerUrl: "https://www.youtube.com/embed/Z1BCujX3pw8?si=qiV1r_EFt-DtLlUr",
        description: `Set in the 1990s, Marvel Studios' "Captain Marvel" is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe that follows the journey of Carol Danvers as she becomes one of the universe's most powerful heroes. While a galactic war between two alien races reaches Earth, Danvers finds herself and a small cadre of allies at the center of the maelstrom.`,
        details: {
            directors: ["Anna Boden", "Ryan Fleck"],
            producers: ["Anna Boden", "Ryan Fleck", "Geneva Robertson-Dworet"],
            rating: "PG-13",
            runTime: "125 min",
            releaseDate: "March 8, 2019"
        }
    },
    "Ant-Man and The Wasp": {
        trailerUrl: "https://www.youtube.com/embed/8_rTIAOohas?si=NWJgebHfF7kOKp_g",
        description: `From the Marvel Cinematic Universe comes a new chapter featuring heroes with the astonishing ability to shrink: “Ant-Man and The Wasp.” In the aftermath of “Captain America: Civil War,” Scott Lang (Paul Rudd) grapples with the consequences of his choices as both a Super Hero and a father. As he struggles to rebalance his home life with his responsibilities as Ant-Man, he’s confronted by Hope van Dyne (Evangeline Lilly) and Dr. Hank Pym (Michael Douglas) with an urgent new mission. Scott must once again put on the suit and learn to fight alongside The Wasp as the team works together to uncover secrets from their past.`,
        details: {
            directors: ["Peyton Reed"],
            writers: ["Chris McKenna", "Erik Sommers", "Andrew Barrer", "Gabriel Ferrari", "Paul Rudd"],
            rating: "PG-13",
            releaseDate: "July 6, 2018"
        }
    },
    "Avengers: Infinity War": {
        trailerUrl: "https://www.youtube.com/embed/6ZfuNTqbHE8?si=kx2SruCM56VKd6gx",
        description: `An unprecedented cinematic journey ten years in the making and spanning the entire Marvel Cinematic Universe, Marvel Studios' "Avengers: Infinity War" brings to the screen the ultimate, deadliest showdown of all time. As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.`,
        details: {
            directors: ["Anthony Russo", "Joe Russo"],
            writers: ["Christopher Markus", "Stephen McFeely"],
            rating: "PG-13",
            runTime: "149 min",
            releaseDate: "April 27, 2018"
        }
    },
    "Black Panther": {
        trailerUrl: "https://www.youtube.com/embed/dxWvtMOGAhw?si=9maWV8jqJ2zla-JI",
        description: `Marvel Studios’ “Black Panther” follows T’Challa who, after the death of his father, the King of Wakanda, returns home to the isolated, technologically advanced African nation to succeed to the throne and take his rightful place as king. But when a powerful old enemy reappears, T’Challa’s mettle as king—and Black Panther—is tested when he is drawn into a formidable conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people and their way of life.`,
        details: {
            directors: ["Ryan Coogler"],
            writers: ["Ryan Coogler", "Joe Robert Cole"],
            rating: "PG-13",
            runTime: "134 min",
            releaseDate: "February 16, 2018"
        }
    },
    "Thor: Ragnarok": {
        trailerUrl: "https://www.youtube.com/embed/ue80QwXMRHg?si=SeTHhabZyXulVaOx",
        description: `Thor is imprisoned on the other side of the universe without his mighty hammer and finds himself in a race against time to get back to Asgard to stop Ragnarok—the destruction of his homeworld and the end of Asgardian civilization—at the hands of an all-powerful new threat, the ruthless Hela. But first he must survive a deadly gladiatorial contest that pits him against his former ally and fellow Avenger—the Incredible Hulk!`,
        details: {
            directors: ["Taika Waititi"],
            writers: ["Eric Pearson", "Craig Kyle", "Christopher L. Yost"],
            runTime: "130 min",
            releaseDate: "November 3, 2017"
        }
    },
    "Spider-Man: Homecoming": {
        trailerUrl: "https://www.youtube.com/embed/rk-dF1lIbIg?si=6gaC-vIXZayx8Eh1",
        description: `A young Peter Parker/Spider-Man (Tom Holland), who made his sensational debut in Captain America: Civil War, begins to navigate his newfound identity as the web-slinging super hero in Spider-Man: Homecoming. Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May (Marisa Tomei), under the watchful eye of his new mentor Tony Stark (Robert Downey, Jr.). Peter tries to fall back into his normal daily routine—distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man—but when the Vulture (Michael Keaton) emerges as a new villain, everything that Peter holds most important will be threatened.`,
        details: {
            directors: ["Jon Watts"],
            writers: ["Jonathan Goldstein", "John Francis Daley", "Jon Watts", "Christopher Ford", "Chris McKenna", "Erik Sommers"],
            rating: "PG-13",
            runTime: "133 min",
            releaseDate: "July 7, 2017"
        }
    },
    "Guardians of the Galaxy Vol. 2": {
        trailerUrl: "https://www.youtube.com/embed/dW1BIid8Osg?si=m2oXvUuaPRRhrwjb",
        description: `Set to the backdrop of ‘Awesome Mixtape #2,’ Marvel’s Guardians of the Galaxy Vol. 2 continues the team’s adventures as they traverse the outer reaches of the cosmos. The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill’s true parentage. Old foes become new allies and fan-favorite characters from the classic comics will come to our heroes’ aid as the Marvel cinematic universe continues to expand.`,
        details: {
            directors: ["James Gunn"],
            writers: ["James Gunn"],
            rating: "PG-13",
            runTime: "136 min",
            releaseDate: "May 5, 2017"
        }
    },
    "Doctor Strange": {
        trailerUrl: "https://www.youtube.com/embed/Lt-U_t2pUHI?si=X6BijfIqgEdYMR50",
        description: `From Marvel Studios comes “Doctor Strange,” the story of world-famous neurosurgeon Dr. Stephen Strange whose life changes forever after a horrific car accident robs him of the use of his hands. When traditional medicine fails him, he is forced to look for healing, and hope, in an unlikely place—a mysterious enclave known as Kamar-Taj. Before long Strange—armed with newly acquired magical powers—is forced to choose whether to return to his life of fortune and status or leave it all behind to defend the world as the most powerful sorcerer in existence.`,
        details: {
            directors: ["Scott Derrickson"],
            writers: ["Jon Spaihts", "Scott Derrickson", "C. Robert Cargill"],
            rating: "PG-13",
            runTime: "115 min",
            releaseDate: "November 4, 2016"
        }
    },
    "Captain America: Civil War": {
        trailerUrl: "https://www.youtube.com/embed/43NWzay3W4s?si=eb4zZOTSXkAWSMCz",
        description: `Steve Rogers leads the newly formed team of Avengers in their continued efforts to safeguard humanity. But after another incident involving the Avengers results in collateral damage, political pressure mounts to install a system of accountability, headed by a governing body to oversee and direct the team. The new status quo fractures the Avengers, resulting in two camps—one led by Steve Rogers and his desire for the Avengers to remain free to defend humanity without government interference, and the other following Tony Stark’s surprising decision to support government oversight and accountability.`,
        details: {
            directors: ["Anthony Russo", "Joe Russo"],
            writers: ["Christopher Markus", "Stephen McFeely"],
            rating: "PG-13",
            runTime: "147 min",
            releaseDate: "May 6, 2016"
        }
    },
    "Ant-Man": {
        trailerUrl: "https://www.youtube.com/embed/pWdKf3MneyI?si=fMzxS5Lr_i1yFW0f",
        description: `The next evolution of the Marvel Cinematic Universe brings a founding member of The Avengers to the big screen for the first time with Marvel Studios' "Ant-Man." Armed with the astonishing ability to shrink in scale but increase in strength, master thief Scott Lang must embrace his inner-hero and help his mentor, Doctor Hank Pym, protect the secret behind his spectacular Ant-Man suit from a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull off a heist that will save the world.`,
        details: {
            directors: ["Peyton Reed"],
            writers: ["Edgar Wright", "Joe Cornish", "Adam McKay", "Paul Rudd"],
            rating: "PG-13",
            runTime: "117 min",
            releaseDate: "July 17, 2015"
        }
    },
    "Avengers: Age of Ultron": {
        trailerUrl: "https://www.youtube.com/embed/tmeOjFno6Do?si=CO_ljkAZndkQKL6f",
        description: `Marvel Studios presents “Avengers: Age of Ultron,” the epic follow-up to the biggest Super Hero movie of all time. When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes, including Iron Man, Captain America, Thor, The Incredible Hulk, Black Widow and Hawkeye, are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to the Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.`,
        details: {
            directors: ["Joss Whedon"],
            writers: ["Joss Whedon"],
            rating: "PG-13",
            runTime: "141 min",
            releaseDate: "May 1, 2015"
        }
    },
    "Guardians of the Galaxy": {
        trailerUrl: "https://www.youtube.com/embed/d96cjJhvlMA?si=6HnQ0HsYFb_3eU8N",
        description: `An action-packed, epic space adventure, Marvel's "Guardians of the Galaxy," expands the Marvel Cinematic Universe into the cosmos, where brash adventurer Peter Quill finds himself the object of an unrelenting bounty hunt after stealing a mysterious orb coveted by Ronan, a powerful villain with ambitions that threaten the entire universe. To evade the ever-persistent Ronan, Quill is forced into an uneasy truce with a quartet of disparate misfits--Rocket, a gun-toting raccoon; Groot, a tree-like humanoid; the deadly and enigmatic Gamora; and the revenge-driven Drax the Destroyer. But when Quill discovers the true power of the orb and the menace it poses to the cosmos, he must do his best to rally his ragtag rivals for a last, desperate stand--with the galaxy's fate in the balance.`,
        details: {
            directors: ["James Gunn"],
            writers: ["James Gunn, Nicole Perlman"],
            rating: "PG-13",
            runTime: "121 min",
            releaseDate: "August 1, 2014"
        }
    },
    "Captain America: The Winter Soldier": {
        trailerUrl: "https://www.youtube.com/embed/tbayiPxkUMM?si=dSlvYMFR0G7K3VHb",
        description: `After the cataclysmic events in New York with The Avengers, Marvel's "Captain America: The Winter Soldier," finds Steve Rogers, aka Captain America, living quietly in Washington, D.C. and trying to adjust to the modern world. But when a S.H.I.E.L.D. colleague comes under attack, Steve becomes embroiled in a web of intrigue that threatens to put the world at risk. Joining forces with the Black Widow, Captain America struggles to expose the ever-widening conspiracy while fighting off professional assassins sent to silence him at every turn. When the full scope of the villainous plot is revealed, Captain America and the Black Widow enlist the help of a new ally, the Falcon. However, they soon find themselves up against an unexpected and formidable enemy--the Winter Soldier.`,
        details: {
            directors: ["Anthony Russo", "Joe Russo"],
            writers: ["Christopher Markus", "Stephen McFeely"],
            rating: "PG-13",
            runTime: "136 min",
            releaseDate: "April 4, 2014"
        }
    },
    "Thor: The Dark World": {
        trailerUrl: "https://www.youtube.com/embed/npvJ9FTgZbM?si=6zZBol7a52peFMPw",
        description: `In the aftermath of Marvel's "Thor" and "Marvel's The Avengers," Thor fights to restore order across the cosmos...but an ancient race led by the vengeful Malekith returns to plunge the universe back into darkness. Faced with an enemy that even Odin and Asgard cannot withstand, Thor must embark on his most perilous and personal journey yet, one that will reunite him with Jane Foster and force him to sacrifice everything to save us all.`,
        details: {
            directors: ["Alan Taylor"],
            writers: ["Christopher L. Yost", "Christopher Markus", "Stephen McFeely"],
            rating: "PG-13",
            runTime: "112 min",
            releaseDate: "November 8, 2013"
        }
    },
    "Iron Man 3": {
        trailerUrl: "https://www.youtube.com/embed/Ke1Y3P9D0Bc?si=rmTHg-n7Soao9SsH",
        description: `Marvel's "Iron Man 3" pits brash-but-brilliant industrialist Tony Stark/Iron Man against an enemy whose reach knows no bounds. When Stark finds his personal world destroyed at his enemy's hands, he embarks on a harrowing quest to find those responsible. This journey, at every turn, will test his mettle. With his back against the wall, Stark is left to survive by his own devices, relying on his ingenuity and instincts to protect those closest to him. As he fights his way back, Stark discovers the answer to the question that has secretly haunted him: does the man make the suit or does the suit make the man.`,
        details: {
            directors: ["Shane Black"],
            writers: ["Drew Pearce", "Shane Black"],
            rating: "PG-13",
            runTime: "130 min",
            releaseDate: "May 3, 2013"
        }
    },
    "The Avengers": {
        trailerUrl: "https://www.youtube.com/embed/eOrNdBpGMv8?si=VzpOpmgcyN0ICN-k",
        description: `Marvel Studios presents in association with Paramount Pictures "Marvel's The Avengers"--the super hero team up of a lifetime, featuring iconic Marvel super heroes Iron Man, the Incredible Hulk, Thor, Captain America, Hawkeye and Black Widow. When an unexpected enemy emerges that threatens global safety and security, Nick Fury, Director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins.`,
        details: {
            directors: ["Joss Whedon"],
            writers: ["Joss Whedon"],
            rating: "PG-13",
            runTime: "143 min",
            releaseDate: "May 4, 2012"
        }
    },
    "Captain America: The First Avenger": {
        trailerUrl: "https://www.youtube.com/embed/JerVrbLldXw?si=Sv_dXXiRUwiM7mL1",
        description: `Marvel's "Captain America: The First Avenger" focuses on the early days of the Marvel Universe when Steve Rogers volunteers to participate in an experimental program that turns him into the Super Soldier known as Captain America.`,
        details: {
            directors: ["Joe Johnston"],
            writers: ["Christopher Markus", "Stephen McFeely"],
            rating: "PG-13",
            runTime: "124 min",
            releaseDate: "July 22, 2011"
        }
    },
    "Thor": {
        trailerUrl: "https://www.youtube.com/embed/JOddp-nlNvQ?si=iXx-fdq7ihYWDu16",
        description: `As the son of Odin, king of the Norse gods, Thor will soon inherit the throne of Asgard from his aging father. However, on the day that he is to be crowned, Thor reacts with brutality when the gods' enemies, the Frost Giants, enter the palace in violation of their treaty. As punishment, Odin banishes Thor to Earth. While Loki, Thor's brother, plots mischief in Asgard, Thor, now stripped of his powers, faces his greatest threat.`,
        details: {
            directors: ["Kenneth Branagh"],
            writers: ["Ashley Miller", "Zack Stentz", "Don Payne"],
            rating: "PG-13",
            runTime: "115 min",
            releaseDate: "May 6, 2011"
        }
    },
    "Iron Man 2": {
        trailerUrl: "https://www.youtube.com/embed/qsRZghNciIo?si=goNnrDkRcsPIKgHg",
        description: `With the world now aware that he is Iron Man, billionaire inventor Tony Stark faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts and "Rhodey" Rhodes by his side, Tony must forge new alliances and confront a powerful new enemy.`,
        details: {
            directors: ["Jon Favreau"],
            writers: ["Justin Theroux"],
            rating: "PG-13",
            runTime: "124 min",
            releaseDate: "May 7, 2010"
        }
    },
    "The Incredible Hulk": {
        trailerUrl: "https://www.youtube.com/embed/xbqNb2PFKKA?si=PexiXwzGFmJt9bgj",
        description: `In this new beginning, scientist Bruce Banner desperately hunts for a cure to the gamma radiation that poisoned his cells and unleashes the unbridled force of rage within him: The Hulk. Living in the shadows--cut off from a life he knew and the woman he loves, Betty Ross--Banner struggles to avoid the obsessive pursuit of his nemesis, General Thunderbolt Ross and the military machinery that seeks to capture him and brutally exploit his power. As all three grapple with the secrets that led to the Hulk's creation, they are confronted with a monstrous new adversary known as the Abomination, whose destructive strength exceeds even the Hulk's own. One scientist must make an agonizing final choice: accept a peaceful life as Bruce Banner or find heroism in the creature he holds inside--The Incredible Hulk.`,
        details: {
            directors: ["Louis Leterrier"],
            writers: ["Zak Penn"],
            rating: "PG-13",
            runTime: "112 min",
            releaseDate: "June 13, 2008"
        }
    },
    "Iron Man": {
        trailerUrl: "https://www.youtube.com/embed/8ugaeA-nMTc?si=FIs0OIBBwZFRppMh",
        description: `2008's Iron Man tells the story of Tony Stark, a billionaire industrialist and genius inventor who is kidnapped and forced to build a devastating weapon. Instead, using his intelligence and ingenuity, Tony builds a high-tech suit of armor and escapes captivity. When he uncovers a nefarious plot with global implications, he dons his powerful armor and vows to protect the world as Iron Man.`,
        details: {
            directors: ["Jon Favreau"],
            writers: ["Mark Fergus", "Hawk Ostby", "Art Marcum", "Matt Holloway"],
            rating: "PG-13",
            runTime: "126 min",
            releaseDate: "May 2, 2008"
        }
    }
}