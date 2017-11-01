var storeaccess = JSON.parse(localStorage.getItem('namestorage')) || []
function name(string, count = 0) {
  var testname = string
  let str = string.split('')
  if (str.length === 0) {

    return playernames[Math.round(testname.length/3) + (Math.round(count/14))]
  } else {
    let strloc = str[0].toString()
    count += strloc.charCodeAt(0)
    str.shift()
    string = str.join('')
    return name(string, count)
  }
}
function parsePersonPlayer(personplayer){
  var playerId = personplayer.firstName + "+" + personplayer.lastName //something in the json
  var playerNewsID = personplayer.firstName+personplayer.lastName
  var playerskill = personplayer.primarySkill
  var isplayergood = personplayer.scrubBenchStarter
  var namestorage = [personplayer.firstName, personplayer.lastName]
  return {
    "playerId": playerId,
    "playerNewsID": playerNewsID,
    "playerskill": playerskill,
    "isplayergood": isplayergood,
    "namestorage": namestorage
  }
}

var playernames = [{
      "firstName": "Alex",
      "lastName": "Abrines",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'bullseye'
    },
    {
      "firstName": "Quincy",
      "lastName": "Acy",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'dunking'
    },
    {
      "firstName": "Steven",
      "lastName": "Adams",
      "scrubBenchStarter": 'Good',
      "primarySkill": 'kicking steven adams'
    },
    {
      "firstName": "Bam",
      "lastName": "Adebayo",
      "scrubBenchStarter": 'turrible',
      "primarySkill": 'meh'
    },
    {
      "firstName": "Arron",
      "lastName": "Afflalo",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'bullseye'
    },
    {
      "firstName": "Alexis",
      "lastName": "Ajinca",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'tall'
    },
    {
      "firstName": "Cole",
      "lastName": "Aldrich",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'meh'
    },
    {
      "firstName": "LaMarcus",
      "lastName": "Aldridge",
      "scrubBenchStarter": 'Good',
      "primarySkill": 'postup'
    },
    {
      "firstName": "Jarrett",
      "lastName": "Allen",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'meh'
    },
    {
      "firstName": "Kadeem",
      "lastName": "Allen",
      "scrubBenchStarter": 'turrible',
      "primarySkill": 'meh'
    },
    {
      "firstName": "Tony",
      "lastName": "Allen",
      "scrubBenchStarter": 'Good',
      "primarySkill": 'defense'
    },
    {
      "firstName": "Al-Farouq",
      "lastName": "Aminu",
      "scrubBenchStarter": 'Good',
      "primarySkill": 'bullseye'
    },
    {
      "firstName": "Justin",
      "lastName": "Anderson",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'meh'
    },
    {
      "firstName": "Kyle",
      "lastName": "Anderson",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'meh'
    },
    {
      "firstName": "Ryan",
      "lastName": "Anderson",
      "scrubBenchStarter": 'Good',
      "primarySkill": 'bullseye'
    },
    {
      "firstName": "Ike",
      "lastName": "Anigbogu",
      "scrubBenchStarter": 'turrible',
      "primarySkill": 'meh'
    },
    {
      "firstName": "Giannis",
      "lastName": "Antetokounmpo",
      "scrubBenchStarter": 'The next big thing',
      "primarySkill": 'inspector gadget'
    },
    {
      "firstName": "Carmelo",
      "lastName": "Anthony",
      "scrubBenchStarter": 'Good',
      "primarySkill": 'blackhole'
    },
    {
      "firstName": "OG",
      "lastName": "Anunoby",
      "scrubBenchStarter": 'turrible',
      "primarySkill": 'original gangster'
    },
    {
      "firstName": "Ryan",
      "lastName": "Arcidiacono",
      "scrubBenchStarter": 'turrible',
      "primarySkill": 'meh'
    },
    {
      "firstName": "Trevor",
      "lastName": "Ariza",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'long'
    },
    {
      "firstName": "Darrell",
      "lastName": "Arthur",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'boring'
    },
    {
      "firstName": "Jamel",
      "lastName": "Artis",
      "scrubBenchStarter": 'turrible',
      "primarySkill": 'snore'
    },
    {
      "firstName": "Omer",
      "lastName": "Asik",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'turkish'
    },
    {
      "firstName": "D.J.",
      "lastName": "Augustin",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'turntable'
    },
    {
      "firstName": "Luke",
      "lastName": "Babbitt",
      "scrubBenchStarter": 'turrible',
      "primarySkill": 'iamyourfather'
    },
    {
      "firstName": "Dwayne",
      "lastName": "Bacon",
      "scrubBenchStarter": 'turrible',
      "primarySkill": 'bacon'
    },
    {
      "firstName": "Ron",
      "lastName": "Baker",
      "scrubBenchStarter": 'turrible',
      "primarySkill": 'ilovescotch'
    },
    {
      "firstName": "Wade",
      "lastName": "Baldwin IV",
      "scrubBenchStarter": 'turrible',
      "primarySkill": 'dunno'
    },
    {
      "firstName": "Lonzo",
      "lastName": "Ball",
      "scrubBenchStarter": 'Good',
      "primarySkill": 'lorenzoball'
    },
    {
      "firstName": "J.J.",
      "lastName": "Barea",
      "scrubBenchStarter": 'Good',
      "primarySkill": 'roadrunner'
    },
    {
      "firstName": "Harrison",
      "lastName": "Barnes",
      "scrubBenchStarter": 'Good',
      "primarySkill": 'overpriced'
    },
    {
      "firstName": "Will",
      "lastName": "Barton",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'acceptable'
    },
    {
      "firstName": "Nicolas",
      "lastName": "Batum",
      "scrubBenchStarter": 'Good',
      "primarySkill": 'french'
    },
    {
      "firstName": "Jerryd",
      "lastName": "Bayless",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'eddy murphy reaction'
    },
    {
      "firstName": "Aron",
      "lastName": "Baynes",
      "scrubBenchStarter": 'Good',
      "primarySkill": 'this is aknife'
    },
    {
      "firstName": "Kent",
      "lastName": "Bazemore",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'more'
    },
    {
      "firstName": "Bradley",
      "lastName": "Beal",
      "scrubBenchStarter": 'Good',
      "primarySkill": 'bullseye'
    },
    {
      "firstName": "Malik",
      "lastName": "Beasley",
      "scrubBenchStarter": 'turrible',
      "primarySkill": 'nope'
    },
    {
      "firstName": "Michael",
      "lastName": "Beasley",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'blazin'
    },
    {
      "firstName": "Marco",
      "lastName": "Belinelli",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'italian'
    },
    {
      "firstName": "Jordan",
      "lastName": "Bell",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'snore'
    },
    {
      "firstName": "DeAndre'",
      "lastName": "Bembry",
      "scrubBenchStarter": 'turrible',
      "primarySkill": 'meh'
    },
    {
      "firstName": "Dragan",
      "lastName": "Bender",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'dragon'
    },
    {
      "firstName": "Davis",
      "lastName": "Bertans",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'meh'
    },
    {
      "firstName": "Patrick",
      "lastName": "Beverley",
      "scrubBenchStarter": 'Good',
      "primarySkill": 'defense'
    },
    {
      "firstName": "Jabari",
      "lastName": "Bird",
      "scrubBenchStarter": 'turrible',
      "primarySkill": 'larry bird'
    },
    {
      "firstName": "Bismack",
      "lastName": "Biyombo",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'defense'
    },
    {
      "firstName": "Nemanja",
      "lastName": "Bjelica",
      "scrubBenchStarter": 'turrible',
      "primarySkill": 'whatever'
    },
    {
      "firstName": "Tarik",
      "lastName": "Black",
      "scrubBenchStarter": 'turrible',
      "primarySkill": 'jack black'
    },
    {
      "firstName": "Antonio",
      "lastName": "Blakeney",
      "scrubBenchStarter": 'turrible',
      "primarySkill": 'meh'
    },
    {
      "firstName": "Eric",
      "lastName": "Bledsoe",
      "scrubBenchStarter": 'Good',
      "primarySkill": 'athletic'
    },
    {
      "firstName": "Vander",
      "lastName": "Blue",
      "scrubBenchStarter": 'turrible',
      "primarySkill": 'moonlander'
    },
    {
      "firstName": "Bojan",
      "lastName": "Bogdanovic",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'tracksuit'
    },
    {
      "firstName": "Andrew",
      "lastName": "Bogut",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'steveirwin'
    },
    {
      "firstName": "Devin",
      "lastName": "Booker",
      "scrubBenchStarter": 'Good',
      "primarySkill": 'buckets'
    },
    {
      "firstName": "Trevor",
      "lastName": "Booker",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'turn a new page'
    },
    {
      "firstName": "Chris",
      "lastName": "Boucher",
      "scrubBenchStarter": 'turrible',
      "primarySkill": 'eddymurphyreaction'
    },
    {
      "firstName": "Avery",
      "lastName": "Bradley",
      "scrubBenchStarter": 'Good',
      "primarySkill": 'defense'
    },
    {
      "firstName": "Tony",
      "lastName": "Bradley",
      "scrubBenchStarter": 'turrible',
      "primarySkill": 'whoisthis'
    },
    {
      "firstName": "Corey",
      "lastName": "Brewer",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'traveling'
    },
    {
      "firstName": "Malcolm",
      "lastName": "Brogdon",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'old'
    },
    {
      "firstName": "Aaron",
      "lastName": "Brooks",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'small'
    },
    {
      "firstName": "Dillon",
      "lastName": "Brooks",
      "scrubBenchStarter": 'turrible',
      "primarySkill": 'meh'
    },
    {
      "firstName": "Anthony",
      "lastName": "Brown",
      "scrubBenchStarter": 'turrible',
      "primarySkill": 'meh'
    },
    {
      "firstName": "Jaylen",
      "lastName": "Brown",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'meh'
    },
    {
      "firstName": "Lorenzo",
      "lastName": "Brown",
      "scrubBenchStarter": 'turrible',
      "primarySkill": 'snore'
    },
    {
      "firstName": "Sterling",
      "lastName": "Brown",
      "scrubBenchStarter": 'turrible',
      "primarySkill": 'pounds'
    },
    {
      "firstName": "Nicolas",
      "lastName": "Brussino",
      "scrubBenchStarter": 'turrible',
      "primarySkill": 'meh'
    },
    {
      "firstName": "Thomas",
      "lastName": "Bryant",
      "scrubBenchStarter": 'turrible',
      "primarySkill": 'unknown'
    },
    {
      "firstName": "Alec",
      "lastName": "Burks",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'dunking'
    },
    {
      "firstName": "Jimmy",
      "lastName": "Butler",
      "scrubBenchStarter": 'Good',
      "primarySkill": 'spacejam'
    },
    {
      "firstName": "Jose",
      "lastName": "Calderon",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'ancient'
    },
    {
      "firstName": "Clint",
      "lastName": "Capela",
      "scrubBenchStarter": 'Good',
      "primarySkill": 'acapella'
    },
    {
      "firstName": "DeMarre",
      "lastName": "Carroll",
      "scrubBenchStarter": 'Good',
      "primarySkill": 'defense'
    },
    {
      "firstName": "Vince",
      "lastName": "Carter",
      "scrubBenchStarter": 'Good',
      "primarySkill": 'legend'
    },
    {
      "firstName": "Michael",
      "lastName": "Carter-Williams",
      "scrubBenchStarter": 'turrible',
      "primarySkill": 'oliveoilarms'
    },
    {
      "firstName": "Alex",
      "lastName": "Caruso",
      "scrubBenchStarter": 'turrible',
      "primarySkill": ''
    },
    {
      "firstName": "Omri",
      "lastName": "Casspi",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'bullseye'
    },
    {
      "firstName": "Willie",
      "lastName": "Cauley-Stein",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'tall'
    },
    {
      "firstName": "Mario",
      "lastName": "Chalmers",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'yellatchalmers'
    },
    {
      "firstName": "Tyson",
      "lastName": "Chandler",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'defense'
    },
    {
      "firstName": "Wilson",
      "lastName": "Chandler",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'bullseye'
    },
    {
      "firstName": "Jordan",
      "lastName": "Clarkson",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'splish'
    },
    {
      "firstName": "Nick",
      "lastName": "Collison",
      "scrubBenchStarter": 'turrible',
      "primarySkill": 'tall'
    },
    {
      "firstName": "Mike",
      "lastName": "Conley",
      "scrubBenchStarter": 'Allstar Guard',
      "primarySkill": 'finishing'
    },
    {
      "firstName": "DeMarcus",
      "lastName": "Cousins",
      "scrubBenchStarter": 'Gamechanger',
      "primarySkill": 'strength'
    },
    {
      "firstName": "Allen",
      "lastName": "Crabbe",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'crabwithknife'
    },
    {
      "firstName": "Jamal",
      "lastName": "Crawford",
      "scrubBenchStarter": 'good',
      "primarySkill": 'streetball'
    },
    {
      "firstName": "Jae",
      "lastName": "Crowder",
      "scrubBenchStarter": 'good',
      "primarySkill": 'defense'
    },
    {
      "firstName": "Seth",
      "lastName": "Curry",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'imitation'
    },
    {
      "firstName": "Stephen",
      "lastName": "Curry",
      "scrubBenchStarter": 'Supernatural',
      "primarySkill": 'Splash'
    },
    {
      "firstName": "Anthony",
      "lastName": "Davis",
      "scrubBenchStarter": 'The last big thing',
      "primarySkill": 'unibrow'
    },
    {
      "firstName": "DeMar",
      "lastName": "DeRozan",
      "scrubBenchStarter": 'good',
      "primarySkill": 'dunking'
    },
    {
      "firstName": "Sam",
      "lastName": "Dekker",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'replicant'
    },
    {
      "firstName": "Luol",
      "lastName": "Deng",
      "scrubBenchStarter": 'turrible',
      "primarySkill": 'fathertime'
    },
    {
      "firstName": "Spencer",
      "lastName": "Dinwiddie",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'letsgobuffs'
    },
    {
      "firstName": "Goran",
      "lastName": "Dragic",
      "scrubBenchStarter": 'good',
      "primarySkill": 'clever'
    },
    {
      "firstName": "Andre",
      "lastName": "Drummond",
      "scrubBenchStarter": 'good',
      "primarySkill": 'cannotshoot'
    },
    {
      "firstName": "Jared",
      "lastName": "Dudley",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'irish'
    },
    {
      "firstName": "Kevin",
      "lastName": "Durant",
      "scrubBenchStarter": 'Allstar',
      "primarySkill": 'obamamoney'
    },
    {
      "firstName": "Joel",
      "lastName": "Embiid",
      "scrubBenchStarter": 'good',
      "primarySkill": 'olajuwon'
    },
    {
      "firstName": "Yogi",
      "lastName": "Ferrell",
      "scrubBenchStarter": 'good',
      "primarySkill": 'muggsybogues'
    },
    {
      "firstName": "De'Aaron",
      "lastName": "Fox",
      "scrubBenchStarter": 'rookie',
      "primarySkill": 'roadrunner'
    },
    {
      "firstName": "Danilo",
      "lastName": "Gallinari",
      "scrubBenchStarter": 'good',
      "primarySkill": 'italian'
    },
    {
      "firstName": "Marc",
      "lastName": "Gasol",
      "scrubBenchStarter": 'Wizard',
      "primarySkill": 'defense'
    },
    {
      "firstName": "Pau",
      "lastName": "Gasol",
      "scrubBenchStarter": 'good',
      "primarySkill": 'oldmangame'
    },
    {
      "firstName": "Rudy",
      "lastName": "Gay",
      "scrubBenchStarter": 'good',
      "primarySkill": 'slam'
    },
    {
      "firstName": "Paul",
      "lastName": "George",
      "scrubBenchStarter": 'Amazing',
      "primarySkill": 'stepback'
    },
    {
      "firstName": "Manu",
      "lastName": "Ginobili",
      "scrubBenchStarter": 'good',
      "primarySkill": 'eurostep'
    },
    {
      "firstName": "Rudy",
      "lastName": "Gobert",
      "scrubBenchStarter": 'good',
      "primarySkill": 'tower'
    },
    {
      "firstName": "Aaron",
      "lastName": "Gordon",
      "scrubBenchStarter": 'good',
      "primarySkill": 'athletic'
    },
    {
      "firstName": "Eric",
      "lastName": "Gordon",
      "scrubBenchStarter": 'good',
      "primarySkill": 'splish'
    },
    {
      "firstName": "Marcin",
      "lastName": "Gortat",
      "scrubBenchStarter": 'good',
      "primarySkill": 'hammer'
    },
    {
      "firstName": "Danny",
      "lastName": "Green",
      "scrubBenchStarter": 'good',
      "primarySkill": 'bullseye'
    },
    {
      "firstName": "Draymond",
      "lastName": "Green",
      "scrubBenchStarter": 'all kick team',
      "primarySkill": 'Draymond green kick'
    },
    {
      "firstName": "Blake",
      "lastName": "Griffin",
      "scrubBenchStarter": 'Amazin',
      "primarySkill": 'facial dunk'
    },
    {
      "firstName": "Eric",
      "lastName": "Griffin",
      "scrubBenchStarter": 'turrible',
      "primarySkill": 'imitation'
    },
    {
      "firstName": "Kyrie",
      "lastName": "Irving",
      "scrubBenchStarter": 'streetball handles',
      "primarySkill": 'uncle drew'
    },
    {
      "firstName": "LeBron",
      "lastName": "James",
      "scrubBenchStarter": "Unstoppable" ,
      "primarySkill": 'The Lebrons'
    },
    {
      "firstName": "Joe",
      "lastName": "Johnson",
      "scrubBenchStarter": 'good',
      "primarySkill": 'old man moves'
    },
    {
      "firstName": "Nikola",
      "lastName": "Jokic",
      "scrubBenchStarter": 'Amazballs',
      "primarySkill": 'the joker'
    },
    {
      "firstName": "DeAndre",
      "lastName": "Jordan",
      "scrubBenchStarter": 'Amazing',
      "primarySkill": 'rim protection'
    },
    {
      "firstName": "Frank",
      "lastName": "Kaminsky",
      "scrubBenchStarter": 'good',
      "primarySkill": 'tank'
    },
    {
      "firstName": "Enes",
      "lastName": "Kanter",
      "scrubBenchStarter": 'good',
      "primarySkill": 'turkish'
    },
    {
      "firstName": "Kyle",
      "lastName": "Korver",
      "scrubBenchStarter": 'good',
      "primarySkill": 'orbital strike'
    },
    {
      "firstName": "Kawhi",
      "lastName": "Leonard",
      "scrubBenchStarter": 'Amazing',
      "primarySkill": 'theclaw'
    },
    {
      "firstName": "Damian",
      "lastName": "Lillard",
      "scrubBenchStarter": 'Amazing',
      "primarySkill": 'coldblooded'
    },
    {
      "firstName": "Jeremy",
      "lastName": "Lin",
      "scrubBenchStarter": 'good',
      "primarySkill": 'linsanity'
    },
    {
      "firstName": "Kevin",
      "lastName": "Love",
      "scrubBenchStarter": 'Amazing',
      "primarySkill": 'love'
    },
    {
      "firstName": "Kyle",
      "lastName": "Lowry",
      "scrubBenchStarter": 'good',
      "primarySkill": 'philly'
    },
    {
      "firstName": "Thon",
      "lastName": "Maker",
      "scrubBenchStarter": 'starter',
      "primarySkill": 'beanstalk'
    },
    {
      "firstName": "Boban",
      "lastName": "Marjanovic",
      "scrubBenchStarter": 'starter',
      "primarySkill": 'giant'
    },
    {
      "firstName": "Patrick",
      "lastName": "McCaw",
      "scrubBenchStarter": 'turrible',
      "primarySkill": 'parrot'
    },
    {
      "firstName": "CJ",
      "lastName": "McCollum",
      "scrubBenchStarter": 'Amazing',
      "primarySkill": 'midrange'
    },
    {
      "firstName": "JaVale",
      "lastName": "McGee",
      "scrubBenchStarter": 'average',
      "primarySkill": 'shaqtinafoo'
    },
    {
      "firstName": "Timofey",
      "lastName": "Mozgov",
      "scrubBenchStarter": 'ok',
      "primarySkill": 'russia'
    },
    {
      "firstName": "Jamal",
      "lastName": "Murray",
      "scrubBenchStarter": 'starter',
      "primarySkill": 'wet'
    },
    {
      "firstName": "Larry",
      "lastName": "Nance Jr.",
      "scrubBenchStarter": 'ok',
      "primarySkill": 'highflyer'
    },
    {
      "firstName": "Dirk",
      "lastName": "Nowitzki",
      "scrubBenchStarter": 'good',
      "primarySkill": 'legend'
    },
    {
      "firstName": "Jusuf",
      "lastName": "Nurkic",
      "scrubBenchStarter": 'starter',
      "primarySkill": 'trashtalk'
    },
    {
      "firstName": "Tony",
      "lastName": "Parker",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'clever'
    },
    {
      "firstName": "Chandler",
      "lastName": "Parsons",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'turribleknees'
    },
    {
      "firstName": "Patrick",
      "lastName": "Patterson",
      "scrubBenchStarter": 'mediocre',
      "primarySkill": 'postup'
    },
    {
      "firstName": "Justin",
      "lastName": "Patton",
      "scrubBenchStarter": 'turrible',
      "primarySkill": 'whoisthis'
    },
    {
      "firstName": "Brandon",
      "lastName": "Paul",
      "scrubBenchStarter": 'turrible',
      "primarySkill": 'paulwall'
    },
    {
      "firstName": "Chris",
      "lastName": "Paul",
      "scrubBenchStarter": 'Good',
      "primarySkill": 'ankle'
    },
    {
      "firstName": "Adreian",
      "lastName": "Payne",
      "scrubBenchStarter": 'turrible',
      "primarySkill": 'maxpayne'
    },
    {
      "firstName": "Zach",
      "lastName": "Randolph",
      "scrubBenchStarter": 'good',
      "primarySkill": 'immovible'
    },
    {
      "firstName": "JJ",
      "lastName": "Redick",
      "scrubBenchStarter": 'good',
      "primarySkill": 'splash'
    },
    {
      "firstName": "Derrick",
      "lastName": "Rose",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'breakdown'
    },
    {
      "firstName": "Ricky",
      "lastName": "Rubio",
      "scrubBenchStarter": 'starter',
      "primarySkill": 'passing'
    },
    {
      "firstName": "D'Angelo",
      "lastName": "Russell",
      "scrubBenchStarter": 'good',
      "primarySkill": 'texting'
    },
    {
      "firstName": "Isaiah",
      "lastName": "Thomas",
      "scrubBenchStarter": 'Amazing',
      "primarySkill": 'blur'
    },
    {
      "firstName": "Klay",
      "lastName": "Thompson",
      "scrubBenchStarter": 'good',
      "primarySkill": 'splash'
    },
    {
      "firstName": "Karl-Anthony",
      "lastName": "Towns",
      "scrubBenchStarter": 'good',
      "primarySkill": 'unicorn'
    },
    {
      "firstName": "Dwyane",
      "lastName": "Wade",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'bananaboat'
    },
    {
      "firstName": "Dion",
      "lastName": "Waiters",
      "scrubBenchStarter": 'good',
      "primarySkill": 'airball'
    },
    {
      "firstName": "Kemba",
      "lastName": "Walker",
      "scrubBenchStarter": 'good',
      "primarySkill": 'handles'
    },
    {
      "firstName": "John",
      "lastName": "Wall",
      "scrubBenchStarter": 'Fastest Player',
      "primarySkill": 'Go to warp'
    },
    {
      "firstName": "Russell",
      "lastName": "Westbrook",
      "scrubBenchStarter": 'An explosion with legs',
      "primarySkill": 'explosive'
    }
  ]
$(document).ready(function() {

var storeaccess = JSON.parse(localStorage.getItem('namestorage')) || []
let playerfirstname = storeaccess[0] || ""
let playerlastname = storeaccess[1] || ""
let prevplay = $('<h3>').html(playerfirstname+' '+playerlastname)
$('#welcome').append(prevplay)
  $('button').click(doSomething)

  function doSomething(event) {
    event.preventDefault()
    var thename = $("#searchTxt").val();
    var namelength = thename.length

    var personplayer = name(thename)
    debugger;
    var { playerId, playerNewsID, playerskill, isplayergood, namestorage } = parsePersonPlayer(personplayer);
      localStorage.setItem('namestorage', JSON.stringify(namestorage))
    $.ajax({
        url: "https://api.cognitive.microsoft.com/bing/v7.0/images/search?q="+playerId+"+nba+player+gif&mkt=en-us/",
        beforeSend: function(xhrObj) {
          // Request headers
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "d9c75868d25d4db1b924ecd9d4bacf02");
        },
        type: "GET",
        // Request body
        data: "",
      })
      .done(function(data) {
        var yournamestring = thename + " is " + personplayer.firstName +" "+ personplayer.lastName
        var imageUrl1 = data.value[0].contentUrl;
        var imageUrl1a = data.value[1].contentUrl;
        var youareLine =  $('<h2>').html(yournamestring)
        var playerImage1 = $('<img>').attr('src', imageUrl1);
        var playerImage1a =$('<img>').attr('src', imageUrl1a);
        $("#playerinfo1").append(youareLine,playerImage1)
        $("#playerinfo2").append(playerImage1a)
        $.ajax({
            url: "https://api.cognitive.microsoft.com/bing/v7.0/images/search?q="+playerskill+"+gif&mkt=en-us/",
            beforeSend: function(xhrObj) {
              // Request headers
              xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "d9c75868d25d4db1b924ecd9d4bacf02");
            },
            type: "GET",
            // Request body
            data: "",
          })
          .done(function(data2) {


            var reaction = "Such "+isplayergood+" much..."+playerskill
            var imageUrl2 = data2.value[0].contentUrl;1
            var funnyLine =  $('<h2>').html(reaction)
            var playerImage2 = $('<img>').attr('src', imageUrl2);
            $(".playerskill").append(funnyLine,playerImage2)
            $.ajax({
                url: "https://api.cognitive.microsoft.com/bing/v7.0/images/search?q="+isplayergood+"gif&mkt=en-us/",
                beforeSend: function(xhrObj) {
                  // Request headers
                  xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "d9c75868d25d4db1b924ecd9d4bacf02");
                },
                type: "GET",
                // Request body
                data: "",
              })
              .done(function(data3) {

                        var playerrole = personplayer.firstName+" is: "+isplayergood
                        var imageUrl3 = data3.value[0].contentUrl;
                        var imageUrl4 = data3.value[1].contentUrl;
                        var roleplayer =  $('<h2>').html(playerrole)
                        var playerImage3 = $('<img>').attr('src', imageUrl3);
                        var playerImage4 = $('<img>').attr('src', imageUrl4);
                        $(".playerrole1").append(roleplayer,playerImage3)
                        $(".playerrole2").append(playerImage4)

                        $.ajax({
                            url: "https://api.cognitive.microsoft.com/bing/v7.0/news/search?q="+playerNewsID+"&mkt=en-us",
                            beforeSend: function(xhrObj) {
                              // Request headers
                              xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "d9c75868d25d4db1b924ecd9d4bacf02");
                            },
                            type: "GET",
                            // Request body
                            data: "",
                          })
                          .done(function(data4) {
                                    var playerNews = "Recent News"
                                    var headline1 = data4.value[0].name;
                                    var headline2= data4.value[1].name;
                                    var headline1Link = data4.value[0].url;
                                    var headline2Link = data4.value[1].url;
                                    var newsheader = $('<h3>').html(playerNews)
                                    var postHL1 =  $('<ul>').html(headline1)
                                    var postHL2 =  $('<li>').html(headline2)
                                    $(".playernews").append(newsheader,postHL1)

                          })
                          .fail(function() {
                            alert("error");
                          });
              })
              .fail(function() {
                alert("error");
              });
          })
          .fail(function() {
            alert("error");
          });
      })
      .fail(function() {
        alert("error");
      });


  }
})
