export default function () {
  this.namespace = 'api';

  this.get('/news', () => {
    return [
      {
        id: 1,
        date: '2015-05-05',
        title: 'So 2016 Was Not the Year Messaging Changed Your Life',
        body: 'THIS WAS SUPPOSED to be the year that texting wasn’t just texting anymore. After big announcements from Facebook, Google, and others, Americans were going to use messaging apps for so much more than chatting with friends. You were going to seamlessly interact with a world of online businesses. You were going to send questions to search engines and book tables at restaurants. You were going to get stuff done without ever opening another app.',
        category: 'business',
      },
      {
        id: 2,
        date: '2013-05-05',
        title: 'How a 70-Year-Old Idea Could Make Engines Way More Efficient',
        body: 'IF YOU POP THE hood on your car and yank out the plastic cover beneath it, you’ll see a beautiful bit of mind-boggling engineering: the internal combustion engine. Today’s engines harness around 100 explosions of fuel and oxygen each second, generating massive power with minimal emissions.\nThat’s great, but tightening pollution standards around the world mean automobiles must become increasingly efficient. Electric cars offer one way forward, but they remain expensive and hobbled by range anxiety—the fear, often unfounded, that you’ll end up stranded with a dead battery. Internal combustion isn’t going anywhere anytime soon, with advancements like turbochargers, direct injection, and variable valve timing squeezing more miles from every gallon.',
        category: 'business',
      },
      {
        id: 3,
        date: '2014-05-05',
        title: 'The Neuroscientist Who’s Building a Better Memory for Humans',
        body: 'IN AN EPIDSODE of the dystopian near-future series, Black Mirror, a small, implantable device behind the ear grants the ability to remember, access, and replay every moment of your life in perfect detail, like a movie right before your eyes.\nTheodore Berger, a biomedical engineer at the University of Southern California, can’t promise that level of perfect recall—perhaps for the better—but he is working on a memory prosthesis. The device, surgically implanted directly into the brain, mimics the function of a structure called the hippocampus by electrically stimulating the brain in a particular way to form memories—at least in rats and monkeys. And now, he’s testing one that could work in humans.',
        category: 'business',
      },
      {
        id: 4,
        date: '2011-05-05',
        title: 'culture i said!',
        body: 'culture body blah blah blah',
        category: 'culture',
      },
      {
        id: 5,
        date: '2013-10-05',
        title: 'Some kind of design topic',
        body: 'This is design topic for demonstrating how this works',
        category: 'design',
      }
    ];
  });

  this.get('/news/business', () => {
    return [
      {
        id: 1,
        date: '2015-05-05',
        title: 'So 2016 Was Not the Year Messaging Changed Your Life',
        body: 'THIS WAS SUPPOSED to be the year that texting wasn’t just texting anymore. After big announcements from Facebook, Google, and others, Americans were going to use messaging apps for so much more than chatting with friends. You were going to seamlessly interact with a world of online businesses. You were going to send questions to search engines and book tables at restaurants. You were going to get stuff done without ever opening another app.',
        category: 'business',
      },
      {
        id: 2,
        date: '2013-05-05',
        title: 'How a 70-Year-Old Idea Could Make Engines Way More Efficient',
        body: 'IF YOU POP THE hood on your car and yank out the plastic cover beneath it, you’ll see a beautiful bit of mind-boggling engineering: the internal combustion engine. Today’s engines harness around 100 explosions of fuel and oxygen each second, generating massive power with minimal emissions.\nThat’s great, but tightening pollution standards around the world mean automobiles must become increasingly efficient. Electric cars offer one way forward, but they remain expensive and hobbled by range anxiety—the fear, often unfounded, that you’ll end up stranded with a dead battery. Internal combustion isn’t going anywhere anytime soon, with advancements like turbochargers, direct injection, and variable valve timing squeezing more miles from every gallon.',
        category: 'business',
      },
      {
        id: 3,
        date: '2014-05-05',
        title: 'The Neuroscientist Who’s Building a Better Memory for Humans',
        body: 'IN AN EPIDSODE of the dystopian near-future series, Black Mirror, a small, implantable device behind the ear grants the ability to remember, access, and replay every moment of your life in perfect detail, like a movie right before your eyes.\nTheodore Berger, a biomedical engineer at the University of Southern California, can’t promise that level of perfect recall—perhaps for the better—but he is working on a memory prosthesis. The device, surgically implanted directly into the brain, mimics the function of a structure called the hippocampus by electrically stimulating the brain in a particular way to form memories—at least in rats and monkeys. And now, he’s testing one that could work in humans.',
        category: 'business',
      },
    ];
  });

  this.get('/news/design', () => {
    return [
      {
        id: 5,
        date: '2013-10-05',
        title: 'Some kind of design topic',
        body: 'This is design topic for demonstrating how this works',
        category: 'design',
      },
    ];
  });

  this.get('/news/culture', () => {
    return [
      {
        id: 4,
        date: '2011-05-05',
        title: 'culture i said!',
        body: 'culture body blah blah blah',
        category: 'culture',
      },
    ];
  });

  this.get('/blogs', () => {
    return [
      {
        id: 1,
        date: '2015-05-05',
        title: 'AngelList acquires Product Hunt',
        body: 'AngelList, the LinkedIn for startups, just bought Product Hunt, the platform where people vote up or down on startup products.\nProduct Hunt declined to comment on the selling price but a source close to the matter tells us it was about $20 million. Recode first reported that same price.\nProduct Hunt was rumored to be raising its next round for the past several months but, as founder Ryan Hoover tells TechCrunch, AngelList seemed like the best option for the future of the company and now the two are combining forces.',
        category: 'startups',
      },
      {
        id: 2,
        date: '2016-05-05',
        title: 'Siren Care makes a “smart” sock to track diabetic health',
        body: 'Diabetic health tracking startup Siren Care has created smart socks that use temperature sensors to detect inflammation — and therefore injury — in realtime for diabetics.\nCo-founder Ran Ma was working on growing biomass to grow back skin that had been damaged while at Northwestern University when she started learning how to treat diabetic feet and thought of making a wearable that could track and prevent injuries.\nBoth type 1 and type 2 diabetes patients are prone to foot swelling, among other foot issues and it can lead to some serious problems such as infection or amputation of the foot if not checked. Early detection is crucial to head off any serious complications and Ma and her co-founder Veronica Tran believe built-in sensors are the key.',
        category: 'startups',
      },
      {
        id: 3,
        date: '2017-05-05',
        title: 'AngelList acquires Product social',
        body: 'Social news',
        category: 'social',
      },
    ];
  });

  this.get('/blogs/social', () => {
    return [
      {
        id: 3,
        date: '2017-05-05',
        title: 'AngelList acquires Product social',
        body: 'Social news',
        category: 'social',
      },
    ];
  });

  this.get('/blogs/startups', () => {
    return [
      {
        id: 1,
        date: '2015-05-05',
        title: 'AngelList acquires Product Hunt',
        body: 'AngelList, the LinkedIn for startups, just bought Product Hunt, the platform where people vote up or down on startup products.\nProduct Hunt declined to comment on the selling price but a source close to the matter tells us it was about $20 million. Recode first reported that same price.\nProduct Hunt was rumored to be raising its next round for the past several months but, as founder Ryan Hoover tells TechCrunch, AngelList seemed like the best option for the future of the company and now the two are combining forces.',
        category: 'startups',
      },
      {
        id: 2,
        date: '2016-05-05',
        title: 'Siren Care makes a “smart” sock to track diabetic health',
        body: 'Diabetic health tracking startup Siren Care has created smart socks that use temperature sensors to detect inflammation — and therefore injury — in realtime for diabetics.\nCo-founder Ran Ma was working on growing biomass to grow back skin that had been damaged while at Northwestern University when she started learning how to treat diabetic feet and thought of making a wearable that could track and prevent injuries.\nBoth type 1 and type 2 diabetes patients are prone to foot swelling, among other foot issues and it can lead to some serious problems such as infection or amputation of the foot if not checked. Early detection is crucial to head off any serious complications and Ma and her co-founder Veronica Tran believe built-in sensors are the key.',
        category: 'startups',
      },
    ];
  });

  this.get('/forums', () => {
    return [
      {
        id: 1,
        date: '2017-05-05',
        title:
          'JustEat is now delivering takeout with self-driving robots in the UK',
        body: 'The robots will serve you now: Greenwich, London residents have officially begun receiving deliveries from autonomous, six-wheeled rolling cooler bots, which are handling the “last mile” of food delivery from nearby takeout restaurants. Engadget notes that the robots are now in “active service,” after they completed a previous testing phase which began earlier this year.\nBefore you ask, these bots are designed to be tamper-proof, so passers-by won’t just smell your delicious delivery curry and crack one open to score an unpaid meal. Also, in case you wanted to request one for selfie opportunities, you’re out of luck – they’re assigned at random, and not available via specific request while ordering from Just Eat even if you happen to live in their Greenwich operating area.',
        category: 'ideas',
      },
    ];
  });

  this.get('/forums/startups', () => {
    return [];
  });

  this.get('/forums/ideas', () => {
    return [
      {
        id: 1,
        date: '2017-05-05',
        title:
          'JustEat is now delivering takeout with self-driving robots in the UK',
        body: 'The robots will serve you now: Greenwich, London residents have officially begun receiving deliveries from autonomous, six-wheeled rolling cooler bots, which are handling the “last mile” of food delivery from nearby takeout restaurants. Engadget notes that the robots are now in “active service,” after they completed a previous testing phase which began earlier this year.\nBefore you ask, these bots are designed to be tamper-proof, so passers-by won’t just smell your delicious delivery curry and crack one open to score an unpaid meal. Also, in case you wanted to request one for selfie opportunities, you’re out of luck – they’re assigned at random, and not available via specific request while ordering from Just Eat even if you happen to live in their Greenwich operating area.',
        category: 'ideas',
      },
    ];
  });

  this.get('/forums/technologies', () => {
    return [];
  });
}
