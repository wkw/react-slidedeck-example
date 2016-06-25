const data = [
  {
    "q": "“If Java had true garbage collection, most programs would delete themselves upon execution.”",
    "cite": "— Robert Sewell"
  },
  {
    "q": "“XML is like violence – if it doesn’t solve your problems, you are not using enough of it.”",
    "cite": "— Unknown"
  },
  {
    "q": "“Documentation is like sex; when it's good, it's very, very good, and when it's bad, it's better than nothing.”",
    "cite": "— Dick Brandon"
  },
  {
    "q": "“Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.”",
    "cite": "— Rick Osborne"
  },
  {
    "q": "“Linux is only free if your time has no value.”",
    "cite": "— Jamie Zawinski"
  },
  {
    "q": "“I love deadlines. I like the whooshing sound they make as they fly by.”",
    "cite": "— Douglas Adams"
  },
  {
    "q": "“There are only two kinds of programming languages: those people always bitch about and those nobody uses.”",
    "cite": "— Bjarne Stroustrup"
  },
  {
    "q": "“Saying that Java is good because it works on all platforms is like saying anal sex is good because it works on all genders.”",
    "cite": "— Unknown"
  },
  {
    "q": "“Some people, when confronted with a problem, think “I know, I’ll use regular expressions.” Now they have two problems.”",
    "cite": "— Jamie Zawinski"
  },
  {
    "q": "“Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.”",
    "cite": "— Rich Cook"
  },
  {
    "q": "“Walking on water and developing software from a specification are easy if both are frozen.”",
    "cite": "— Edward V Berard"
  },
  {
    "q": "“It always takes longer than you expect, even when you take into account Hofstadter’s Law.”",
    "cite": "— Hofstadter’s Law"
  },
  {
    "q": "“The most amazing achievement of the computer software industry is its continuing cancellation of the steady and staggering gains made by the computer hardware industry.”",
    "cite": "— Henry Petroski"
  },
  {
    "q": "“Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.”",
    "cite": "— Brian Kernighan"
  },
  {
    "q": "“Perl – The only language that looks the same before and after RSA encryption.”",
    "cite": "— Keith Bostic"
  },
  {
    "q": "“I don’t care if it works on your machine! We are not shipping your machine!”",
    "cite": "— Ovidiu Platon"
  },
  {
    "q": "“You should name a variable using the same care with which you name a first-born child.”",
    "cite": "— James O. Coplien"
  },
  {
    "q": "“I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone.”",
    "cite": "— Bjarne Stroustrup"
  },
  {
    "q": "“Writing the first 90 percent of a computer program takes 90 percent of the time. The remaining ten percent also takes 90 percent of the time and the final touches also take 90 percent of the time.”",
    "cite": "— N.J. Rubenking"
  },
  {
    "q": "“There are two major products that come out of Berkeley: LSD and UNIX.  We don’t believe this to be a coincidence.”",
    "cite": "— Jeremy S. Anderson"
  },
  {
    "q": "“If debugging is the process of removing software bugs, then programming must be the process of putting them in.”",
    "cite": "— E. W. Dijkstra"
  },
  {
    "q": "“In C++ it’s harder to shoot yourself in the foot, but when you do, you blow off your whole leg.”",
    "cite": "— Bjarne Stroustrup"
  },
  {
    "q": "“Two things are infinite: the universe and human stupidity; and I’m not sure about the universe.”",
    "cite": "— Albert Einstein"
  },
  {
    "q": "“Measuring programming progress by lines of code is like measuring aircraft building progress by weight.”",
    "cite": "— Bill Gates"
  },
  {
    "q": "“Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves.”",
    "cite": "— Alan Kay"
  },
  {
    "q": "“In theory, theory and practice are the same. In practice, they’re not.”",
    "cite": "— Yogi Berra"
  },
  {
    "q": "“Programming is like sex: one mistake and you’re providing support for a lifetime.”",
    "cite": "— Michael Sinz"
  },
  {
    "q": "“On two occasions I have been asked, ‘Pray, Mr. Babbage, if you put into the machine wrong figures, will the right answers come out?’ I am not able rightly to apprehend the kind of confusion of ideas that could provoke such a question.””",
    "cite": "— Charles Babbage"
  },
  {
    "q": "“No matter how slick the demo is in rehearsal, when you do it in front of a live audience, the probability of a flawless presentation is inversely proportional to the number of people watching, raised to the power of the amount of money involved.”",
    "cite": "— Mark Gibbs"
  },
  {
    "q": "“We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil.”",
    "cite": "— C. A. R. Hoare"
  },
  {
    "q": "“A computer lets you make more mistakes faster than any other invention in human history, with the possible exceptions of handguns and tequila.”",
    "cite": "— Mitch Ratcliffe"
  },
  {
    "q": "“C++ : Where friends have access to your private members.”",
    "cite": "— Gavin Russell Baker"
  },
  {
    "q": "“Computers are like bikinis. They save people a lot of guesswork.”",
    "cite": "— Sam Ewing"
  },
  {
    "q": "“PHP is a minor evil perpetrated and created by incompetent amateurs, whereas Perl is a great and insidious evil, perpetrated by skilled but perverted professionals.”",
    "cite": "— Jon Ribbens"
  },
  {
    "q": "“Einstein argued that there must be simplified explanations of nature, because God is not capricious or arbitrary. No such faith comforts the software engineer.”",
    "cite": "— Fred Brooks"
  },
  {
    "q": "“QA Engineer walks into a bar. Orders a beer. Orders 0 beers. Orders 999999999 beers. Orders a lizard. Orders -1 beers. Orders a sfdeljknesv.”",
    "cite": "— Bill Sempf"
  },
  {
    "q": "“There are two ways of constructing a software design; one way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult.”",
    "cite": "— C. A. R. Hoare"
  },
  {
    "q": "“We know about as much about software quality problems as they knew about the Black Plague in the 1600s. We’ve seen the victims’ agonies and helped burn the corpses. We don’t know what causes it; we don’t really know if there is only one disease. We just suffer — and keep pouring our sewage into our water supply.”",
    "cite": "— Tom Van Vleck"
  },
  {
    "q": "“Beware of bugs in the above code; I have only proved it correct, not tried it.”",
    "cite": "— Donald Knuth"
  },
  {
    "q": "“I’ve noticed lately that the paranoid fear of computers becoming intelligent and taking over the world has almost entirely disappeared from the common culture.  Near as I can tell, this coincides with the release of MS-DOS.”",
    "cite": "— Larry DeLuca"
  },
  {
    "q": "“There are only two hard things in Computer Science: cache invalidation, naming things and off-by-one errors.”",
    "cite": "— Phil Karlton"
  },
  {
    "q": "“In software, we rarely have meaningful requirements. Even if we do, the only measure of success that matters is whether our solution solves the customer’s shifting idea of what their problem is.”",
    "cite": "— Jeff Atwood"
  },
  {
    "q": "“The difference between theory and practice is that in theory, there is no difference between theory and practice.”",
    "cite": "— Richard Moore"
  },
  {
    "q": "“It is practically impossible to teach good programming style to students that have had prior exposure to BASIC. As potential programmers, they are mentally mutilated beyond hope of regeneration.”",
    "cite": "— E. W. Dijkstra"
  }
]
export default data;
