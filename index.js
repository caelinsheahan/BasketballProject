$(document).ready(function() {

  var playernames = [{
      "firstName": "Alex",
      "lastName": "Abrines",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'shooting'
    },
    {
      "firstName": "Quincy",
      "lastName": "Acy",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'dunking'
    },
    {
      "firstName": "Steven",
      "lastName": "Adams",
      "scrubBenchStarter": 'starter',
      "primarySkill": 'kickingstevenadams'
    },
    {
      "firstName": "Bam",
      "lastName": "Adebayo",
      "scrubBenchStarter": 'scrub',
      "primarySkill": 'meh'
    },
    {
      "firstName": "Arron",
      "lastName": "Afflalo",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'shooting'
    },
    {
      "firstName": "Alexis",
      "lastName": "Ajinca",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'tall'
    },
    {
      "firstName": "Cole",
      "lastName": "Aldrich",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'meh'
    },
    {
      "firstName": "LaMarcus",
      "lastName": "Aldridge",
      "scrubBenchStarter": 'starter',
      "primarySkill": 'postup'
    },
    {
      "firstName": "Jarrett",
      "lastName": "Allen",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'meh'
    },
    {
      "firstName": "Kadeem",
      "lastName": "Allen",
      "scrubBenchStarter": 'scrub',
      "primarySkill": 'meh'
    },
    {
      "firstName": "Tony",
      "lastName": "Allen",
      "scrubBenchStarter": 'starter',
      "primarySkill": 'defense'
    },
    {
      "firstName": "Al-Farouq",
      "lastName": "Aminu",
      "scrubBenchStarter": 'starter',
      "primarySkill": 'shooting'
    },
    {
      "firstName": "Justin",
      "lastName": "Anderson",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'meh'
    },
    {
      "firstName": "Kyle",
      "lastName": "Anderson",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'meh'
    },
    {
      "firstName": "Ryan",
      "lastName": "Anderson",
      "scrubBenchStarter": 'starter',
      "primarySkill": 'shooting'
    },
    {
      "firstName": "Ike",
      "lastName": "Anigbogu",
      "scrubBenchStarter": 'scrub',
      "primarySkill": 'meh'
    },
    {
      "firstName": "Giannis",
      "lastName": "Antetokounmpo",
      "scrubBenchStarter": 'starter',
      "primarySkill": 'inspectorgadget'
    },
    {
      "firstName": "Carmelo",
      "lastName": "Anthony",
      "scrubBenchStarter": 'starter',
      "primarySkill": 'blackhole'
    },
    {
      "firstName": "OG",
      "lastName": "Anunoby",
      "scrubBenchStarter": 'scrub',
      "primarySkill": 'originalgangster'
    },
    {
      "firstName": "Ryan",
      "lastName": "Arcidiacono",
      "scrubBenchStarter": 'scrub',
      "primarySkill": 'meh'
    },
    {
      "firstName": "Trevor",
      "lastName": "Ariza",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'long'
    },
    {
      "firstName": "Darrell",
      "lastName": "Arthur",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'boring'
    },
    {
      "firstName": "Jamel",
      "lastName": "Artis",
      "scrubBenchStarter": 'scrub',
      "primarySkill": 'snore'
    },
    {
      "firstName": "Omer",
      "lastName": "Asik",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'turkish'
    },
    {
      "firstName": "D.J.",
      "lastName": "Augustin",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'turntable'
    },
    {
      "firstName": "Luke",
      "lastName": "Babbitt",
      "scrubBenchStarter": 'scrub',
      "primarySkill": 'iamyourfather'
    },
    {
      "firstName": "Dwayne",
      "lastName": "Bacon",
      "scrubBenchStarter": 'scrub',
      "primarySkill": 'bacon'
    },
    {
      "firstName": "Ron",
      "lastName": "Baker",
      "scrubBenchStarter": 'scrub',
      "primarySkill": 'ilovescotch'
    },
    {
      "firstName": "Wade",
      "lastName": "Baldwin IV",
      "scrubBenchStarter": 'scrub',
      "primarySkill": 'dunno'
    },
    {
      "firstName": "Lonzo",
      "lastName": "Ball",
      "scrubBenchStarter": 'starter',
      "primarySkill": 'lorenzoball'
    },
    {
      "firstName": "J.J.",
      "lastName": "Barea",
      "scrubBenchStarter": 'starter',
      "primarySkill": 'roadrunner'
    },
    {
      "firstName": "Harrison",
      "lastName": "Barnes",
      "scrubBenchStarter": 'starter',
      "primarySkill": 'overpriced'
    },
    {
      "firstName": "Will",
      "lastName": "Barton",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'acceptable'
    },
    {
      "firstName": "Nicolas",
      "lastName": "Batum",
      "scrubBenchStarter": 'starter',
      "primarySkill": 'french'
    },
    {
      "firstName": "Jerryd",
      "lastName": "Bayless",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'eddymurphyreaction'
    },
    {
      "firstName": "Aron",
      "lastName": "Baynes",
      "scrubBenchStarter": 'starter',
      "primarySkill": 'thisisaknife'
    },
    {
      "firstName": "Kent",
      "lastName": "Bazemore",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'more'
    },
    {
      "firstName": "Bradley",
      "lastName": "Beal",
      "scrubBenchStarter": 'starter',
      "primarySkill": 'quickdraw'
    },
    {
      "firstName": "Malik",
      "lastName": "Beasley",
      "scrubBenchStarter": 'scrub',
      "primarySkill": 'nope'
    },
    {
      "firstName": "Michael",
      "lastName": "Beasley",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'blazin'
    },
    {
      "firstName": "Marco",
      "lastName": "Belinelli",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'italian'
    },
    {
      "firstName": "Jordan",
      "lastName": "Bell",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'snore'
    },
    {
      "firstName": "DeAndre'",
      "lastName": "Bembry",
      "scrubBenchStarter": 'scrub',
      "primarySkill": 'meh'
    },
    {
      "firstName": "Dragan",
      "lastName": "Bender",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'dragon'
    },
    {
      "firstName": "Davis",
      "lastName": "Bertans",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'meh'
    },
    {
      "firstName": "Patrick",
      "lastName": "Beverley",
      "scrubBenchStarter": 'starter',
      "primarySkill": 'defense'
    },
    {
      "firstName": "Khem",
      "lastName": "Birch",
      "scrubBenchStarter": 'scrub',
      "primarySkill": 'breakingbad'
    },
    {
      "firstName": "Jabari",
      "lastName": "Bird",
      "scrubBenchStarter": 'scrub',
      "primarySkill": 'bird'
    },
    {
      "firstName": "Bismack",
      "lastName": "Biyombo",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'defense'
    },
    {
      "firstName": "Nemanja",
      "lastName": "Bjelica",
      "scrubBenchStarter": 'scrub',
      "primarySkill": 'whatever'
    },
    {
      "firstName": "Tarik",
      "lastName": "Black",
      "scrubBenchStarter": 'scrub',
      "primarySkill": 'jackblack'
    },
    {
      "firstName": "Antonio",
      "lastName": "Blakeney",
      "scrubBenchStarter": 'scrub',
      "primarySkill": 'meh'
    },
    {
      "firstName": "Eric",
      "lastName": "Bledsoe",
      "scrubBenchStarter": 'starter',
      "primarySkill": 'athletic'
    },
    {
      "firstName": "Vander",
      "lastName": "Blue",
      "scrubBenchStarter": 'scrub',
      "primarySkill": 'moonlander'
    },
    {
      "firstName": "Bogdan",
      "lastName": "Bogdanovic",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'tall'
    },
    {
      "firstName": "Bojan",
      "lastName": "Bogdanovic",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'supertall'
    },
    {
      "firstName": "Andrew",
      "lastName": "Bogut",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'steveirwin'
    },
    {
      "firstName": "Joel",
      "lastName": "Bolomboy",
      "scrubBenchStarter": 'scrub',
      "primarySkill": 'thatsmyboy'
    },
    {
      "firstName": "Devin",
      "lastName": "Booker",
      "scrubBenchStarter": 'starter',
      "primarySkill": 'alien'
    },
    {
      "firstName": "Trevor",
      "lastName": "Booker",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'book'
    },
    {
      "firstName": "Chris",
      "lastName": "Boucher",
      "scrubBenchStarter": 'scrub',
      "primarySkill": 'eddymurphyreaction'
    },
    {
      "firstName": "Avery",
      "lastName": "Bradley",
      "scrubBenchStarter": 'starter',
      "primarySkill": 'defense'
    },
    {
      "firstName": "Tony",
      "lastName": "Bradley",
      "scrubBenchStarter": 'scrub',
      "primarySkill": 'whoisthis'
    },
    {
      "firstName": "Corey",
      "lastName": "Brewer",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'traveling'
    },
    {
      "firstName": "Malcolm",
      "lastName": "Brogdon",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'old'
    },
    {
      "firstName": "Aaron",
      "lastName": "Brooks",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'small'
    },
    {
      "firstName": "Dillon",
      "lastName": "Brooks",
      "scrubBenchStarter": 'scrub',
      "primarySkill": 'meh'
    },
    {
      "firstName": "Anthony",
      "lastName": "Brown",
      "scrubBenchStarter": 'scrub',
      "primarySkill": 'meh'
    },
    {
      "firstName": "Bobby",
      "lastName": "Brown",
      "scrubBenchStarter": 'scrub',
      "primarySkill": 'jamesbrown'
    },
    {
      "firstName": "Jaylen",
      "lastName": "Brown",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'meh'
    },
    {
      "firstName": "Lorenzo",
      "lastName": "Brown",
      "scrubBenchStarter": 'scrub',
      "primarySkill": 'snore'
    },
    {
      "firstName": "Sterling",
      "lastName": "Brown",
      "scrubBenchStarter": 'scrub',
      "primarySkill": 'pounds'
    },
    {
      "firstName": "Nicolas",
      "lastName": "Brussino",
      "scrubBenchStarter": 'scrub',
      "primarySkill": 'meh'
    },
    {
      "firstName": "Thomas",
      "lastName": "Bryant",
      "scrubBenchStarter": 'scrub',
      "primarySkill": 'unknown'
    },
    {
      "firstName": "Alec",
      "lastName": "Burks",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'dunking'
    },
    {
      "firstName": "Jimmy",
      "lastName": "Butler",
      "scrubBenchStarter": 'starter',
      "primarySkill": 'spacejam'
    },
    {
      "firstName": "Jose",
      "lastName": "Calderon",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'ancient'
    },
    {
      "firstName": "Clint",
      "lastName": "Capela",
      "scrubBenchStarter": 'starter',
      "primarySkill": 'center'
    },
    {
      "firstName": "DeMarre",
      "lastName": "Carroll",
      "scrubBenchStarter": 'starter',
      "primarySkill": 'defense'
    },
    {
      "firstName": "Vince",
      "lastName": "Carter",
      "scrubBenchStarter": 'starter',
      "primarySkill": 'legend'
    },
    {
      "firstName": "Michael",
      "lastName": "Carter-Williams",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'length'
    },
    {
      "firstName": "Alex",
      "lastName": "Caruso",
      "scrubBenchStarter": 'scrub',
      "primarySkill": ''
    },
    {
      "firstName": "Omri",
      "lastName": "Casspi",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'shooting'
    },
    {
      "firstName": "Willie",
      "lastName": "Cauley-Stein",
      "scrubBenchStarter": 666,
      "primarySkill": 60678
    },
    {
      "firstName": "Mario",
      "lastName": "Chalmers",
      "scrubBenchStarter": 096,
      "primarySkill": 60676
    },
    {
      "firstName": "Tyson",
      "lastName": "Chandler",
      "scrubBenchStarter": 99,
      "primarySkill": 60676
    },
    {
      "firstName": "Wilson",
      "lastName": "Chandler",
      "scrubBenchStarter": 06,
      "primarySkill": 6067
    },
    {
      "firstName": "Marquese",
      "lastName": "Chriss",
      "scrubBenchStarter": 6777,
      "primarySkill": 60676
    },
    {
      "firstName": "Ian",
      "lastName": "Clark",
      "scrubBenchStarter": 06,
      "primarySkill": 60670
    },
    {
      "firstName": "Jordan",
      "lastName": "Clarkson",
      "scrubBenchStarter": 090,
      "primarySkill": 60677
    },
    {
      "firstName": "Gian",
      "lastName": "Clavell",
      "scrubBenchStarter": 689,
      "primarySkill": 6067
    },
    {
      "firstName": "John",
      "lastName": "Collins",
      "scrubBenchStarter": 688,
      "primarySkill": 60677
    },
    {
      "firstName": "Zach",
      "lastName": "Collins",
      "scrubBenchStarter": 6880,
      "primarySkill": 60677
    },
    {
      "firstName": "Darren",
      "lastName": "Collison",
      "scrubBenchStarter": 09,
      "primarySkill": 6067
    },
    {
      "firstName": "Nick",
      "lastName": "Collison",
      "scrubBenchStarter": 'bench',
      "primarySkill": 606760
    },
    {
      "firstName": "Mike",
      "lastName": "Conley",
      "scrubBenchStarter": 0,
      "primarySkill": 60676
    },
    {
      "firstName": "Pat",
      "lastName": "Connaughton",
      "scrubBenchStarter": 669,
      "primarySkill": 60677
    },
    {
      "firstName": "Quinn",
      "lastName": "Cook",
      "scrubBenchStarter": 6688,
      "primarySkill": 6067
    },
    {
      "firstName": "Charles",
      "lastName": "Cooke",
      "scrubBenchStarter": 689,
      "primarySkill": 60670
    },
    {
      "firstName": "Jack",
      "lastName": "Cooley",
      "scrubBenchStarter": 00,
      "primarySkill": 60678
    },
    {
      "firstName": "Matt",
      "lastName": "Costello",
      "scrubBenchStarter": 6786,
      "primarySkill": 60679
    },
    {
      "firstName": "DeMarcus",
      "lastName": "Cousins",
      "scrubBenchStarter": 06,
      "primarySkill": 60670
    },
    {
      "firstName": "Robert",
      "lastName": "Covington",
      "scrubBenchStarter": 096,
      "primarySkill": 6067
    },
    {
      "firstName": "Allen",
      "lastName": "Crabbe",
      "scrubBenchStarter": 09,
      "primarySkill": 6067
    },
    {
      "firstName": "Torrey",
      "lastName": "Craig",
      "scrubBenchStarter": 6870,
      "primarySkill": 6067
    },
    {
      "firstName": "Jamal",
      "lastName": "Crawford",
      "scrubBenchStarter": 07,
      "primarySkill": 60670
    },
    {
      "firstName": "Jordan",
      "lastName": "Crawford",
      "scrubBenchStarter": 08,
      "primarySkill": 0
    },
    {
      "firstName": "Jae",
      "lastName": "Crowder",
      "scrubBenchStarter": 009,
      "primarySkill": 60679
    },
    {
      "firstName": "Dante",
      "lastName": "Cunningham",
      "scrubBenchStarter": 0967,
      "primarySkill": 60670
    },
    {
      "firstName": "Seth",
      "lastName": "Curry",
      "scrubBenchStarter": 0,
      "primarySkill": 6067
    },
    {
      "firstName": "Stephen",
      "lastName": "Curry",
      "scrubBenchStarter": 099,
      "primarySkill": 6067
    },
    {
      "firstName": "Troy",
      "lastName": "Daniels",
      "scrubBenchStarter": 08,
      "primarySkill": 60676
    },
    {
      "firstName": "Anthony",
      "lastName": "Davis",
      "scrubBenchStarter": 0076,
      "primarySkill": 60670
    },
    {
      "firstName": "Deyonta",
      "lastName": "Davis",
      "scrubBenchStarter": 6778,
      "primarySkill": 60676
    },
    {
      "firstName": "Ed",
      "lastName": "Davis",
      "scrubBenchStarter": 0,
      "primarySkill": 60677
    },
    {
      "firstName": "DeMar",
      "lastName": "DeRozan",
      "scrubBenchStarter": 09,
      "primarySkill": 60676
    },
    {
      "firstName": "Dewayne",
      "lastName": "Dedmon",
      "scrubBenchStarter": 07,
      "primarySkill": 60677
    },
    {
      "firstName": "Sam",
      "lastName": "Dekker",
      "scrubBenchStarter": 66,
      "primarySkill": 60676
    },
    {
      "firstName": "Malcolm",
      "lastName": "Delaney",
      "scrubBenchStarter": 67098,
      "primarySkill": 60677
    },
    {
      "firstName": "Matthew",
      "lastName": "Dellavedova",
      "scrubBenchStarter": 0,
      "primarySkill": 60679
    },
    {
      "firstName": "Luol",
      "lastName": "Deng",
      "scrubBenchStarter": 76,
      "primarySkill": 60677
    },
    {
      "firstName": "Cheick",
      "lastName": "Diallo",
      "scrubBenchStarter": 67767,
      "primarySkill": 60670
    },
    {
      "firstName": "Gorgui",
      "lastName": "Dieng",
      "scrubBenchStarter": 076,
      "primarySkill": 60670
    },
    {
      "firstName": "Spencer",
      "lastName": "Dinwiddie",
      "scrubBenchStarter": 09,
      "primarySkill": 6067
    },
    {
      "firstName": "Tyler",
      "lastName": "Dorsey",
      "scrubBenchStarter": 686,
      "primarySkill": 60677
    },
    {
      "firstName": "Damyean",
      "lastName": "Dotson",
      "scrubBenchStarter": 68,
      "primarySkill": 6067
    },
    {
      "firstName": "PJ",
      "lastName": "Dozier",
      "scrubBenchStarter": 6808,
      "primarySkill": 606760
    },
    {
      "firstName": "Goran",
      "lastName": "Dragic",
      "scrubBenchStarter": 0609,
      "primarySkill": 60678
    },
    {
      "firstName": "Andre",
      "lastName": "Drummond",
      "scrubBenchStarter": 008,
      "primarySkill": 60676
    },
    {
      "firstName": "Jared",
      "lastName": "Dudley",
      "scrubBenchStarter": 06,
      "primarySkill": 60676
    },
    {
      "firstName": "Kris",
      "lastName": "Dunn",
      "scrubBenchStarter": 6779,
      "primarySkill": 6067
    },
    {
      "firstName": "Kevin",
      "lastName": "Durant",
      "scrubBenchStarter": 0,
      "primarySkill": 6067
    },
    {
      "firstName": "Henry",
      "lastName": "Ellenson",
      "scrubBenchStarter": 6770,
      "primarySkill": 60676
    },
    {
      "firstName": "Wayne",
      "lastName": "Ellington",
      "scrubBenchStarter": 096,
      "primarySkill": 60678
    },
    {
      "firstName": "Joel",
      "lastName": "Embiid",
      "scrubBenchStarter": 09,
      "primarySkill": 6067
    },
    {
      "firstName": "Tyler",
      "lastName": "Ennis",
      "scrubBenchStarter": 0898,
      "primarySkill": 60677
    },
    {
      "firstName": "James",
      "lastName": "Ennis III",
      "scrubBenchStarter": 06,
      "primarySkill": 60676
    },
    {
      "firstName": "Jawun",
      "lastName": "Evans",
      "scrubBenchStarter": 689,
      "primarySkill": 60676
    },
    {
      "firstName": "Tyreke",
      "lastName": "Evans",
      "scrubBenchStarter": 096,
      "primarySkill": 60676
    },
    {
      "firstName": "Dante",
      "lastName": "Exum",
      "scrubBenchStarter": 097,
      "primarySkill": 60676
    },
    {
      "firstName": "Kenneth",
      "lastName": "Faried",
      "scrubBenchStarter": 070,
      "primarySkill": 6067
    },
    {
      "firstName": "Derrick",
      "lastName": "Favors",
      "scrubBenchStarter": 0,
      "primarySkill": 60676
    },
    {
      "firstName": "Kay",
      "lastName": "Felder",
      "scrubBenchStarter": 67770,
      "primarySkill": 6067
    },
    {
      "firstName": "Cristiano",
      "lastName": "Felicio",
      "scrubBenchStarter": 66,
      "primarySkill": 6067
    },
    {
      "firstName": "Carrick",
      "lastName": "Felix",
      "scrubBenchStarter": 067,
      "primarySkill": 60676
    },
    {
      "firstName": "Raymond",
      "lastName": "Felton",
      "scrubBenchStarter": 009,
      "primarySkill": 606760
    },
    {
      "firstName": "Terrance",
      "lastName": "Ferguson",
      "scrubBenchStarter": 6890,
      "primarySkill": 606760
    },
    {
      "firstName": "Yogi",
      "lastName": "Ferrell",
      "scrubBenchStarter": 678,
      "primarySkill": 6067
    },
    {
      "firstName": "Dorian",
      "lastName": "Finney-Smith",
      "scrubBenchStarter": 6787,
      "primarySkill": 6067
    },
    {
      "firstName": "Bryn",
      "lastName": "Forbes",
      "scrubBenchStarter": 678,
      "primarySkill": 60679
    },
    {
      "firstName": "Evan",
      "lastName": "Fournier",
      "scrubBenchStarter": 009,
      "primarySkill": 6067
    },
    {
      "firstName": "De'Aaron",
      "lastName": "Fox",
      "scrubBenchStarter": 6868,
      "primarySkill": 60678
    },
    {
      "firstName": "Tim",
      "lastName": "Frazier",
      "scrubBenchStarter": 00,
      "primarySkill": 60676
    },
    {
      "firstName": "Channing",
      "lastName": "Frye",
      "scrubBenchStarter": 0,
      "primarySkill": 60679
    },
    {
      "firstName": "Markelle",
      "lastName": "Fultz",
      "scrubBenchStarter": 686,
      "primarySkill": 6067
    },
    {
      "firstName": "Danilo",
      "lastName": "Gallinari",
      "scrubBenchStarter": 068,
      "primarySkill": 60676
    },
    {
      "firstName": "Langston",
      "lastName": "Galloway",
      "scrubBenchStarter": 008,
      "primarySkill": 60676
    },
    {
      "firstName": "Marc",
      "lastName": "Gasol",
      "scrubBenchStarter": 088,
      "primarySkill": 60676
    },
    {
      "firstName": "Pau",
      "lastName": "Gasol",
      "scrubBenchStarter": 00,
      "primarySkill": 60679
    },
    {
      "firstName": "Rudy",
      "lastName": "Gay",
      "scrubBenchStarter": 007,
      "primarySkill": 60679
    },
    {
      "firstName": "Paul",
      "lastName": "George",
      "scrubBenchStarter": 0,
      "primarySkill": 606760
    },
    {
      "firstName": "Marcus",
      "lastName": "Georges-Hunt",
      "scrubBenchStarter": 6787,
      "primarySkill": 60670
    },
    {
      "firstName": "Taj",
      "lastName": "Gibson",
      "scrubBenchStarter": 099,
      "primarySkill": 60670
    },
    {
      "firstName": "Harry",
      "lastName": "Giles",
      "scrubBenchStarter": 688,
      "primarySkill": 60678
    },
    {
      "firstName": "Manu",
      "lastName": "Ginobili",
      "scrubBenchStarter": 98,
      "primarySkill": 60679
    },
    {
      "firstName": "Rudy",
      "lastName": "Gobert",
      "scrubBenchStarter": 097,
      "primarySkill": 60676
    },
    {
      "firstName": "Aaron",
      "lastName": "Gordon",
      "scrubBenchStarter": 09,
      "primarySkill": 6067
    },
    {
      "firstName": "Eric",
      "lastName": "Gordon",
      "scrubBenchStarter": 069,
      "primarySkill": 6067
    },
    {
      "firstName": "Marcin",
      "lastName": "Gortat",
      "scrubBenchStarter": 06,
      "primarySkill": 60676
    },
    {
      "firstName": "Treveon",
      "lastName": "Graham",
      "scrubBenchStarter": 660,
      "primarySkill": 606766
    },
    {
      "firstName": "Jerami",
      "lastName": "Grant",
      "scrubBenchStarter": 09,
      "primarySkill": 606760
    },
    {
      "firstName": "Jerian",
      "lastName": "Grant",
      "scrubBenchStarter": 6670,
      "primarySkill": 6067
    },
    {
      "firstName": "Danny",
      "lastName": "Green",
      "scrubBenchStarter": 0980,
      "primarySkill": 60679
    },
    {
      "firstName": "Draymond",
      "lastName": "Green",
      "scrubBenchStarter": 00,
      "primarySkill": 6067
    },
    {
      "firstName": "JaMychal",
      "lastName": "Green",
      "scrubBenchStarter": 00,
      "primarySkill": 60676
    },
    {
      "firstName": "Jeff",
      "lastName": "Green",
      "scrubBenchStarter": 0,
      "primarySkill": 60679
    },
    {
      "firstName": "Blake",
      "lastName": "Griffin",
      "scrubBenchStarter": 09,
      "primarySkill": 60676
    },
    {
      "firstName": "Eric",
      "lastName": "Griffin",
      "scrubBenchStarter": 07,
      "primarySkill": 60676
    },
    {
      "firstName": "Daniel",
      "lastName": "Hamilton",
      "scrubBenchStarter": 6777,
      "primarySkill": 606760
    },
    {
      "firstName": "AJ",
      "lastName": "Hammons",
      "scrubBenchStarter": 6777,
      "primarySkill": 60678
    },
    {
      "firstName": "Tim",
      "lastName": "Hardaway Jr.",
      "scrubBenchStarter": 00,
      "primarySkill": 6067
    },
    {
      "firstName": "James",
      "lastName": "Harden",
      "scrubBenchStarter": 09,
      "primarySkill": 6067
    },
    {
      "firstName": "Maurice",
      "lastName": "Harkless",
      "scrubBenchStarter": 0090,
      "primarySkill": 60677
    },
    {
      "firstName": "Montrezl",
      "lastName": "Harrell",
      "scrubBenchStarter": 669,
      "primarySkill": 60676
    },
    {
      "firstName": "Devin",
      "lastName": "Harris",
      "scrubBenchStarter": 7,
      "primarySkill": 6067
    },
    {
      "firstName": "Gary",
      "lastName": "Harris",
      "scrubBenchStarter": 09,
      "primarySkill": 6067
    },
    {
      "firstName": "Joe",
      "lastName": "Harris",
      "scrubBenchStarter": 09,
      "primarySkill": 6067
    },
    {
      "firstName": "Tobias",
      "lastName": "Harris",
      "scrubBenchStarter": 0699,
      "primarySkill": 60676
    },
    {
      "firstName": "Andrew",
      "lastName": "Harrison",
      "scrubBenchStarter": 660,
      "primarySkill": 60676
    },
    {
      "firstName": "Josh",
      "lastName": "Hart",
      "scrubBenchStarter": 680,
      "primarySkill": 60677
    },
    {
      "firstName": "Udonis",
      "lastName": "Haslem",
      "scrubBenchStarter": 67,
      "primarySkill": 60678
    },
    {
      "firstName": "Gordon",
      "lastName": "Hayward",
      "scrubBenchStarter": 00,
      "primarySkill": 60678
    },
    {
      "firstName": "John",
      "lastName": "Henson",
      "scrubBenchStarter": 0089,
      "primarySkill": 60679
    },
    {
      "firstName": "Juan",
      "lastName": "Hernangomez",
      "scrubBenchStarter": 678,
      "primarySkill": 6067
    },
    {
      "firstName": "Willy",
      "lastName": "Hernangomez",
      "scrubBenchStarter": 669,
      "primarySkill": 6067
    },
    {
      "firstName": "Mario",
      "lastName": "Hezonja",
      "scrubBenchStarter": 6609,
      "primarySkill": 6067
    },
    {
      "firstName": "Isaiah",
      "lastName": "Hicks",
      "scrubBenchStarter": 689,
      "primarySkill": 6067
    },
    {
      "firstName": "Buddy",
      "lastName": "Hield",
      "scrubBenchStarter": 677,
      "primarySkill": 60678
    },
    {
      "firstName": "Nene",
      "lastName": "",
      "scrubBenchStarter": 0,
      "primarySkill": 6067
    },
    {
      "firstName": "George",
      "lastName": "Hill",
      "scrubBenchStarter": 088,
      "primarySkill": 60678
    },
    {
      "firstName": "Solomon",
      "lastName": "Hill",
      "scrubBenchStarter": 0,
      "primarySkill": 60670
    },
    {
      "firstName": "Darrun",
      "lastName": "Hilliard",
      "scrubBenchStarter": 6699,
      "primarySkill": 60679
    },
    {
      "firstName": "Jrue",
      "lastName": "Holiday",
      "scrubBenchStarter": 090,
      "primarySkill": 60670
    },
    {
      "firstName": "Justin",
      "lastName": "Holiday",
      "scrubBenchStarter": 000,
      "primarySkill": 6067
    },
    {
      "firstName": "John",
      "lastName": "Holland",
      "scrubBenchStarter": 0066,
      "primarySkill": 60679
    },
    {
      "firstName": "Rondae",
      "lastName": "Hollis-Jefferson",
      "scrubBenchStarter": 6678,
      "primarySkill": 6067
    },
    {
      "firstName": "Richaun",
      "lastName": "Holmes",
      "scrubBenchStarter": 668,
      "primarySkill": 6067
    },
    {
      "firstName": "Rodney",
      "lastName": "Hood",
      "scrubBenchStarter": 098,
      "primarySkill": 60676
    },
    {
      "firstName": "Al",
      "lastName": "Horford",
      "scrubBenchStarter": 0,
      "primarySkill": 60678
    },
    {
      "firstName": "Dwight",
      "lastName": "Howard",
      "scrubBenchStarter": 70,
      "primarySkill": 606766
    },
    {
      "firstName": "Josh",
      "lastName": "Huestis",
      "scrubBenchStarter": 096,
      "primarySkill": 606760
    },
    {
      "firstName": "Vince",
      "lastName": "Hunter",
      "scrubBenchStarter": 6908,
      "primarySkill": 60676
    },
    {
      "firstName": "Serge",
      "lastName": "Ibaka",
      "scrubBenchStarter": 086,
      "primarySkill": 60676
    },
    {
      "firstName": "Andre",
      "lastName": "Iguodala",
      "scrubBenchStarter": 78,
      "primarySkill": 6067
    },
    {
      "firstName": "Ersan",
      "lastName": "Ilyasova",
      "scrubBenchStarter": 0,
      "primarySkill": 60677
    },
    {
      "firstName": "Joe",
      "lastName": "Ingles",
      "scrubBenchStarter": 0060,
      "primarySkill": 60676
    },
    {
      "firstName": "Brandon",
      "lastName": "Ingram",
      "scrubBenchStarter": 677,
      "primarySkill": 60677
    },
    {
      "firstName": "Kyrie",
      "lastName": "Irving",
      "scrubBenchStarter": 068,
      "primarySkill": 60678
    },
    {
      "firstName": "Jonathan",
      "lastName": "Isaac",
      "scrubBenchStarter": 687,
      "primarySkill": 6067
    },
    {
      "firstName": "Wes",
      "lastName": "Iwundu",
      "scrubBenchStarter": 68,
      "primarySkill": 6067
    },
    {
      "firstName": "Jarrett",
      "lastName": "Jack",
      "scrubBenchStarter": 07,
      "primarySkill": 6067
    },
    {
      "firstName": "Demetrius",
      "lastName": "Jackson",
      "scrubBenchStarter": 677,
      "primarySkill": 6067
    },
    {
      "firstName": "Frank",
      "lastName": "Jackson",
      "scrubBenchStarter": 680,
      "primarySkill": 60670
    },
    {
      "firstName": "Josh",
      "lastName": "Jackson",
      "scrubBenchStarter": 6867,
      "primarySkill": 60676
    },
    {
      "firstName": "Justin",
      "lastName": "Jackson",
      "scrubBenchStarter": 688,
      "primarySkill": 60678
    },
    {
      "firstName": "Reggie",
      "lastName": "Jackson",
      "scrubBenchStarter": 070,
      "primarySkill": 60676
    },
    {
      "firstName": "LeBron",
      "lastName": "James",
      "scrubBenchStarter": "starter" ,
      "primarySkill": 'LeBron'
    },
    {
      "firstName": "Mike",
      "lastName": "James",
      "scrubBenchStarter": 68,
      "primarySkill": 60676
    },
    {
      "firstName": "Al",
      "lastName": "Jefferson",
      "scrubBenchStarter": 7,
      "primarySkill": 6067
    },
    {
      "firstName": "Richard",
      "lastName": "Jefferson",
      "scrubBenchStarter": 0,
      "primarySkill": 6067
    },
    {
      "firstName": "Jonas",
      "lastName": "Jerebko",
      "scrubBenchStarter": 097,
      "primarySkill": 60676
    },
    {
      "firstName": "Amir",
      "lastName": "Johnson",
      "scrubBenchStarter": 06,
      "primarySkill": 6067
    },
    {
      "firstName": "Brice",
      "lastName": "Johnson",
      "scrubBenchStarter": 677,
      "primarySkill": 60676
    },
    {
      "firstName": "Dakari",
      "lastName": "Johnson",
      "scrubBenchStarter": 6677,
      "primarySkill": 606760
    },
    {
      "firstName": "James",
      "lastName": "Johnson",
      "scrubBenchStarter": 099,
      "primarySkill": 60678
    },
    {
      "firstName": "Joe",
      "lastName": "Johnson",
      "scrubBenchStarter": 07,
      "primarySkill": 60676
    },
    {
      "firstName": "Stanley",
      "lastName": "Johnson",
      "scrubBenchStarter": 6669,
      "primarySkill": 60676
    },
    {
      "firstName": "Tyler",
      "lastName": "Johnson",
      "scrubBenchStarter": 000,
      "primarySkill": 60678
    },
    {
      "firstName": "Wesley",
      "lastName": "Johnson",
      "scrubBenchStarter": 0,
      "primarySkill": 60676
    },
    {
      "firstName": "Nikola",
      "lastName": "Jokic",
      "scrubBenchStarter": 0999,
      "primarySkill": 6067
    },
    {
      "firstName": "Damian",
      "lastName": "Jones",
      "scrubBenchStarter": 677,
      "primarySkill": 6067
    },
    {
      "firstName": "Jalen",
      "lastName": "Jones",
      "scrubBenchStarter": 6788,
      "primarySkill": 60670
    },
    {
      "firstName": "Tyus",
      "lastName": "Jones",
      "scrubBenchStarter": 66,
      "primarySkill": 60670
    },
    {
      "firstName": "Derrick",
      "lastName": "Jones Jr.",
      "scrubBenchStarter": 6788,
      "primarySkill": 60676
    },
    {
      "firstName": "DeAndre",
      "lastName": "Jordan",
      "scrubBenchStarter": 099,
      "primarySkill": 60676
    },
    {
      "firstName": "Cory",
      "lastName": "Joseph",
      "scrubBenchStarter": 0709,
      "primarySkill": 6067
    },
    {
      "firstName": "Frank",
      "lastName": "Kaminsky",
      "scrubBenchStarter": 666,
      "primarySkill": 606766
    },
    {
      "firstName": "Enes",
      "lastName": "Kanter",
      "scrubBenchStarter": 068,
      "primarySkill": 6067
    },
    {
      "firstName": "Luke",
      "lastName": "Kennard",
      "scrubBenchStarter": 6879,
      "primarySkill": 60676
    },
    {
      "firstName": "Michael",
      "lastName": "Kidd-Gilchrist",
      "scrubBenchStarter": 0077,
      "primarySkill": 606766
    },
    {
      "firstName": "Sean",
      "lastName": "Kilpatrick",
      "scrubBenchStarter": 090,
      "primarySkill": 6067
    },
    {
      "firstName": "Maxi",
      "lastName": "Kleber",
      "scrubBenchStarter": 6867,
      "primarySkill": 6067
    },
    {
      "firstName": "Brandon",
      "lastName": "Knight",
      "scrubBenchStarter": 0688,
      "primarySkill": 60676
    },
    {
      "firstName": "Furkan",
      "lastName": "Korkmaz",
      "scrubBenchStarter": 67788,
      "primarySkill": 6067
    },
    {
      "firstName": "Luke",
      "lastName": "Kornet",
      "scrubBenchStarter": 686,
      "primarySkill": 6067
    },
    {
      "firstName": "Kyle",
      "lastName": "Korver",
      "scrubBenchStarter": 9,
      "primarySkill": 60679
    },
    {
      "firstName": "Kosta",
      "lastName": "Koufos",
      "scrubBenchStarter": 08,
      "primarySkill": 60678
    },
    {
      "firstName": "Kyle",
      "lastName": "Kuzma",
      "scrubBenchStarter": 6898,
      "primarySkill": 60677
    },
    {
      "firstName": "Mindaugas",
      "lastName": "Kuzminskas",
      "scrubBenchStarter": 678,
      "primarySkill": 6067
    },
    {
      "firstName": "Zach",
      "lastName": "LaVine",
      "scrubBenchStarter": 0897,
      "primarySkill": 6067
    },
    {
      "firstName": "Skal",
      "lastName": "Labissiere",
      "scrubBenchStarter": 6776,
      "primarySkill": 60678
    },
    {
      "firstName": "Jeremy",
      "lastName": "Lamb",
      "scrubBenchStarter": 0087,
      "primarySkill": 606766
    },
    {
      "firstName": "Shane",
      "lastName": "Larkin",
      "scrubBenchStarter": 099,
      "primarySkill": 60678
    },
    {
      "firstName": "Joffrey",
      "lastName": "Lauvergne",
      "scrubBenchStarter": 00,
      "primarySkill": 60679
    },
    {
      "firstName": "Jake",
      "lastName": "Layman",
      "scrubBenchStarter": 6777,
      "primarySkill": 60677
    },
    {
      "firstName": "Caris",
      "lastName": "LeVert",
      "scrubBenchStarter": 6777,
      "primarySkill": 6067
    },
    {
      "firstName": "TJ",
      "lastName": "Leaf",
      "scrubBenchStarter": 6888,
      "primarySkill": 6067
    },
    {
      "firstName": "Courtney",
      "lastName": "Lee",
      "scrubBenchStarter": 08,
      "primarySkill": 6067
    },
    {
      "firstName": "Alex",
      "lastName": "Len",
      "scrubBenchStarter": 08,
      "primarySkill": 60676
    },
    {
      "firstName": "Kawhi",
      "lastName": "Leonard",
      "scrubBenchStarter": 069,
      "primarySkill": 60679
    },
    {
      "firstName": "Meyers",
      "lastName": "Leonard",
      "scrubBenchStarter": 0086,
      "primarySkill": 60677
    },
    {
      "firstName": "Jon",
      "lastName": "Leuer",
      "scrubBenchStarter": 070,
      "primarySkill": 60676
    },
    {
      "firstName": "DeAndre",
      "lastName": "Liggins",
      "scrubBenchStarter": 07,
      "primarySkill": 60679
    },
    {
      "firstName": "Damian",
      "lastName": "Lillard",
      "scrubBenchStarter": 008,
      "primarySkill": 60677
    },
    {
      "firstName": "Jeremy",
      "lastName": "Lin",
      "scrubBenchStarter": 09,
      "primarySkill": 6067
    },
    {
      "firstName": "Shaun",
      "lastName": "Livingston",
      "scrubBenchStarter": 7,
      "primarySkill": 6067
    },
    {
      "firstName": "Kevon",
      "lastName": "Looney",
      "scrubBenchStarter": 667,
      "primarySkill": 6067
    },
    {
      "firstName": "Brook",
      "lastName": "Lopez",
      "scrubBenchStarter": 07,
      "primarySkill": 60677
    },
    {
      "firstName": "Robin",
      "lastName": "Lopez",
      "scrubBenchStarter": 077,
      "primarySkill": 6067
    },
    {
      "firstName": "Kevin",
      "lastName": "Love",
      "scrubBenchStarter": 067,
      "primarySkill": 60679
    },
    {
      "firstName": "Kyle",
      "lastName": "Lowry",
      "scrubBenchStarter": 00768,
      "primarySkill": 60676
    },
    {
      "firstName": "Timothe",
      "lastName": "Luwawu-Cabarrot",
      "scrubBenchStarter": 67789,
      "primarySkill": 6067
    },
    {
      "firstName": "Tyler",
      "lastName": "Lydon",
      "scrubBenchStarter": 6899,
      "primarySkill": 6067
    },
    {
      "firstName": "Trey",
      "lastName": "Lyles",
      "scrubBenchStarter": 6668,
      "primarySkill": 6067
    },
    {
      "firstName": "Sheldon",
      "lastName": "Mac",
      "scrubBenchStarter": 678,
      "primarySkill": 60676
    },
    {
      "firstName": "Shelvin",
      "lastName": "Mack",
      "scrubBenchStarter": 07,
      "primarySkill": 6067
    },
    {
      "firstName": "Josh",
      "lastName": "Magette",
      "scrubBenchStarter": 070,
      "primarySkill": 60677
    },
    {
      "firstName": "Ian",
      "lastName": "Mahinmi",
      "scrubBenchStarter": 0,
      "primarySkill": 60676
    },
    {
      "firstName": "Thon",
      "lastName": "Maker",
      "scrubBenchStarter": 6778,
      "primarySkill": 60679
    },
    {
      "firstName": "Boban",
      "lastName": "Marjanovic",
      "scrubBenchStarter": 666,
      "primarySkill": 60676
    },
    {
      "firstName": "Lauri",
      "lastName": "Markkanen",
      "scrubBenchStarter": 687,
      "primarySkill": 6067
    },
    {
      "firstName": "Jarell",
      "lastName": "Martin",
      "scrubBenchStarter": 668,
      "primarySkill": 60676
    },
    {
      "firstName": "Frank",
      "lastName": "Mason",
      "scrubBenchStarter": 68,
      "primarySkill": 60678
    },
    {
      "firstName": "Mangok",
      "lastName": "Mathiang",
      "scrubBenchStarter": 689,
      "primarySkill": 606766
    },
    {
      "firstName": "Wesley",
      "lastName": "Matthews",
      "scrubBenchStarter": 008,
      "primarySkill": 6067
    },
    {
      "firstName": "Luc",
      "lastName": "Mbah a Moute",
      "scrubBenchStarter": 060,
      "primarySkill": 6067
    },
    {
      "firstName": "James Michael",
      "lastName": "McAdoo",
      "scrubBenchStarter": 099,
      "primarySkill": 6067
    },
    {
      "firstName": "Patrick",
      "lastName": "McCaw",
      "scrubBenchStarter": 6777,
      "primarySkill": 6067
    },
    {
      "firstName": "CJ",
      "lastName": "McCollum",
      "scrubBenchStarter": 068,
      "primarySkill": 60677
    },
    {
      "firstName": "T.J.",
      "lastName": "McConnell",
      "scrubBenchStarter": 06,
      "primarySkill": 6067
    },
    {
      "firstName": "Chris",
      "lastName": "McCullough",
      "scrubBenchStarter": 669,
      "primarySkill": 60676
    },
    {
      "firstName": "Doug",
      "lastName": "McDermott",
      "scrubBenchStarter": 096,
      "primarySkill": 6067
    },
    {
      "firstName": "JaVale",
      "lastName": "McGee",
      "scrubBenchStarter": 080,
      "primarySkill": 6067
    },
    {
      "firstName": "Rodney",
      "lastName": "McGruder",
      "scrubBenchStarter": 08,
      "primarySkill": 60678
    },
    {
      "firstName": "Alfonzo",
      "lastName": "McKinnie",
      "scrubBenchStarter": 680,
      "primarySkill": 60676
    },
    {
      "firstName": "Ben",
      "lastName": "McLemore",
      "scrubBenchStarter": 06,
      "primarySkill": 60676
    },
    {
      "firstName": "Josh",
      "lastName": "McRoberts",
      "scrubBenchStarter": 077,
      "primarySkill": 6067
    },
    {
      "firstName": "Jodie",
      "lastName": "Meeks",
      "scrubBenchStarter": 097,
      "primarySkill": 60676
    },
    {
      "firstName": "Salah",
      "lastName": "Mejri",
      "scrubBenchStarter": 667,
      "primarySkill": 6067
    },
    {
      "firstName": "Jordan",
      "lastName": "Mickey",
      "scrubBenchStarter": 667,
      "primarySkill": 60678
    },
    {
      "firstName": "Khris",
      "lastName": "Middleton",
      "scrubBenchStarter": 0,
      "primarySkill": 60679
    },
    {
      "firstName": "CJ",
      "lastName": "Miles",
      "scrubBenchStarter": 09,
      "primarySkill": 60676
    },
    {
      "firstName": "Darius",
      "lastName": "Miller",
      "scrubBenchStarter": 0,
      "primarySkill": 60670
    },
    {
      "firstName": "Malcolm",
      "lastName": "Miller",
      "scrubBenchStarter": 669,
      "primarySkill": 60676
    },
    {
      "firstName": "Patty",
      "lastName": "Mills",
      "scrubBenchStarter": 0988,
      "primarySkill": 60679
    },
    {
      "firstName": "Paul",
      "lastName": "Millsap",
      "scrubBenchStarter": 0079,
      "primarySkill": 6067
    },
    {
      "firstName": "Nikola",
      "lastName": "Mirotic",
      "scrubBenchStarter": 070,
      "primarySkill": 6067
    },
    {
      "firstName": "Donovan",
      "lastName": "Mitchell",
      "scrubBenchStarter": 6878,
      "primarySkill": 60676
    },
    {
      "firstName": "Malik",
      "lastName": "Monk",
      "scrubBenchStarter": 6870,
      "primarySkill": 606766
    },
    {
      "firstName": "Greg",
      "lastName": "Monroe",
      "scrubBenchStarter": 08,
      "primarySkill": 60679
    },
    {
      "firstName": "Luis",
      "lastName": "Montero",
      "scrubBenchStarter": 66,
      "primarySkill": 60676
    },
    {
      "firstName": "E'Twaun",
      "lastName": "Moore",
      "scrubBenchStarter": 07,
      "primarySkill": 60670
    },
    {
      "firstName": "Eric",
      "lastName": "Moreland",
      "scrubBenchStarter": 096,
      "primarySkill": 60676
    },
    {
      "firstName": "Marcus",
      "lastName": "Morris",
      "scrubBenchStarter": 069,
      "primarySkill": 60678
    },
    {
      "firstName": "Markieff",
      "lastName": "Morris",
      "scrubBenchStarter": 069,
      "primarySkill": 60676
    },
    {
      "firstName": "Monte",
      "lastName": "Morris",
      "scrubBenchStarter": 680,
      "primarySkill": 6067
    },
    {
      "firstName": "Johnathan",
      "lastName": "Motley",
      "scrubBenchStarter": 680,
      "primarySkill": 6067
    },
    {
      "firstName": "Timofey",
      "lastName": "Mozgov",
      "scrubBenchStarter": 089,
      "primarySkill": 6067
    },
    {
      "firstName": "Emmanuel",
      "lastName": "Mudiay",
      "scrubBenchStarter": 66,
      "primarySkill": 6067
    },
    {
      "firstName": "Shabazz",
      "lastName": "Muhammad",
      "scrubBenchStarter": 098,
      "primarySkill": 60670
    },
    {
      "firstName": "Dejounte",
      "lastName": "Murray",
      "scrubBenchStarter": 6779,
      "primarySkill": 60679
    },
    {
      "firstName": "Jamal",
      "lastName": "Murray",
      "scrubBenchStarter": 6770,
      "primarySkill": 6067
    },
    {
      "firstName": "Mike",
      "lastName": "Muscala",
      "scrubBenchStarter": 088,
      "primarySkill": 60677
    },
    {
      "firstName": "Abdel",
      "lastName": "Nader",
      "scrubBenchStarter": 6786,
      "primarySkill": 60678
    },
    {
      "firstName": "Larry",
      "lastName": "Nance Jr.",
      "scrubBenchStarter": 660,
      "primarySkill": 60677
    },
    {
      "firstName": "Shabazz",
      "lastName": "Napier",
      "scrubBenchStarter": 089,
      "primarySkill": 60677
    },
    {
      "firstName": "Jameer",
      "lastName": "Nelson",
      "scrubBenchStarter": 79,
      "primarySkill": 60670
    },
    {
      "firstName": "Raul",
      "lastName": "Neto",
      "scrubBenchStarter": 06,
      "primarySkill": 60676
    },
    {
      "firstName": "Joakim",
      "lastName": "Noah",
      "scrubBenchStarter": 09,
      "primarySkill": 6067
    },
    {
      "firstName": "Nerlens",
      "lastName": "Noel",
      "scrubBenchStarter": 07,
      "primarySkill": 6067
    },
    {
      "firstName": "Lucas",
      "lastName": "Nogueira",
      "scrubBenchStarter": 0,
      "primarySkill": 60676
    },
    {
      "firstName": "Dirk",
      "lastName": "Nowitzki",
      "scrubBenchStarter": 77,
      "primarySkill": 6067
    },
    {
      "firstName": "Frank",
      "lastName": "Ntilikina",
      "scrubBenchStarter": 687,
      "primarySkill": 6067
    },
    {
      "firstName": "Jusuf",
      "lastName": "Nurkic",
      "scrubBenchStarter": 099,
      "primarySkill": 60677
    },
    {
      "firstName": "David",
      "lastName": "Nwaba",
      "scrubBenchStarter": 680,
      "primarySkill": 6067
    },
    {
      "firstName": "Johnny",
      "lastName": "O'Bryant III",
      "scrubBenchStarter": 098,
      "primarySkill": 606766
    },
    {
      "firstName": "Royce",
      "lastName": "O'Neale",
      "scrubBenchStarter": 660,
      "primarySkill": 60676
    },
    {
      "firstName": "Kyle",
      "lastName": "O'Quinn",
      "scrubBenchStarter": 0,
      "primarySkill": 6067
    },
    {
      "firstName": "Semi",
      "lastName": "Ojeleye",
      "scrubBenchStarter": 6800,
      "primarySkill": 60678
    },
    {
      "firstName": "Jahlil",
      "lastName": "Okafor",
      "scrubBenchStarter": 66,
      "primarySkill": 6067
    },
    {
      "firstName": "Victor",
      "lastName": "Oladipo",
      "scrubBenchStarter": 006,
      "primarySkill": 6067
    },
    {
      "firstName": "Kelly",
      "lastName": "Olynyk",
      "scrubBenchStarter": 08,
      "primarySkill": 60678
    },
    {
      "firstName": "Chinanu",
      "lastName": "Onuaku",
      "scrubBenchStarter": 67778,
      "primarySkill": 6067
    },
    {
      "firstName": "Cedi",
      "lastName": "Osman",
      "scrubBenchStarter": 66,
      "primarySkill": 60679
    },
    {
      "firstName": "Yakuba",
      "lastName": "Ouattara",
      "scrubBenchStarter": 687,
      "primarySkill": 6067
    },
    {
      "firstName": "Kelly",
      "lastName": "Oubre Jr.",
      "scrubBenchStarter": 666,
      "primarySkill": 60676
    },
    {
      "firstName": "Zaza",
      "lastName": "Pachulia",
      "scrubBenchStarter": 8,
      "primarySkill": 6067
    },
    {
      "firstName": "Marcus",
      "lastName": "Paige",
      "scrubBenchStarter": 67779,
      "primarySkill": 606766
    },
    {
      "firstName": "Georgios",
      "lastName": "Papagiannis",
      "scrubBenchStarter": 678,
      "primarySkill": 60678
    },
    {
      "firstName": "Jabari",
      "lastName": "Parker",
      "scrubBenchStarter": 09,
      "primarySkill": 60679
    },
    {
      "firstName": "Tony",
      "lastName": "Parker",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'crafty'
    },
    {
      "firstName": "Chandler",
      "lastName": "Parsons",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'badknees'
    },
    {
      "firstName": "Patrick",
      "lastName": "Patterson",
      "scrubBenchStarter": 'bench',
      "primarySkill": 'postup'
    },
    {
      "firstName": "Justin",
      "lastName": "Patton",
      "scrubBenchStarter": 'scrub',
      "primarySkill": 'whoisthis'
    },
    {
      "firstName": "Brandon",
      "lastName": "Paul",
      "scrubBenchStarter": 'scrub',
      "primarySkill": 'paulwall'
    },
    {
      "firstName": "Chris",
      "lastName": "Paul",
      "scrubBenchStarter": 'starter',
      "primarySkill": 'ankle'
    },
    {
      "firstName": "Adreian",
      "lastName": "Payne",
      "scrubBenchStarter": 'scrub',
      "primarySkill": 'maxpayne'
    },
    {
      "firstName": "Cameron",
      "lastName": "Payne",
      "scrubBenchStarter": 6666,
      "primarySkill": 6067
    },
    {
      "firstName": "Elfrid",
      "lastName": "Payton",
      "scrubBenchStarter": 090,
      "primarySkill": 6067
    },
    {
      "firstName": "Gary",
      "lastName": "Payton II",
      "scrubBenchStarter": 67780,
      "primarySkill": 60679
    },
    {
      "firstName": "London",
      "lastName": "Perrantes",
      "scrubBenchStarter": 6806,
      "primarySkill": 60679
    },
    {
      "firstName": "Alec",
      "lastName": "Peters",
      "scrubBenchStarter": 6809,
      "primarySkill": 60676
    },
    {
      "firstName": "Mason",
      "lastName": "Plumlee",
      "scrubBenchStarter": 086,
      "primarySkill": 6067
    },
    {
      "firstName": "Miles",
      "lastName": "Plumlee",
      "scrubBenchStarter": 00,
      "primarySkill": 60677
    },
    {
      "firstName": "Jakob",
      "lastName": "Poeltl",
      "scrubBenchStarter": 677,
      "primarySkill": 60676
    },
    {
      "firstName": "Quincy",
      "lastName": "Pondexter",
      "scrubBenchStarter": 07,
      "primarySkill": 6067
    },
    {
      "firstName": "Otto",
      "lastName": "Porter Jr.",
      "scrubBenchStarter": 090,
      "primarySkill": 60676
    },
    {
      "firstName": "Bobby",
      "lastName": "Portis",
      "scrubBenchStarter": 667,
      "primarySkill": 6067
    },
    {
      "firstName": "Kristaps",
      "lastName": "Porzingis",
      "scrubBenchStarter": 000,
      "primarySkill": 6067
    },
    {
      "firstName": "Dwight",
      "lastName": "Powell",
      "scrubBenchStarter": 099,
      "primarySkill": 6067
    },
    {
      "firstName": "Norman",
      "lastName": "Powell",
      "scrubBenchStarter": 668,
      "primarySkill": 60676
    },
    {
      "firstName": "Alex",
      "lastName": "Poythress",
      "scrubBenchStarter": 6786,
      "primarySkill": 6067
    },
    {
      "firstName": "Taurean",
      "lastName": "Prince",
      "scrubBenchStarter": 677,
      "primarySkill": 60677
    },
    {
      "firstName": "Jacob",
      "lastName": "Pullen",
      "scrubBenchStarter": 666,
      "primarySkill": 6067
    },
    {
      "firstName": "Ivan",
      "lastName": "Rabb",
      "scrubBenchStarter": 6897,
      "primarySkill": 60676
    },
    {
      "firstName": "Julius",
      "lastName": "Randle",
      "scrubBenchStarter": 09,
      "primarySkill": 60677
    },
    {
      "firstName": "Zach",
      "lastName": "Randolph",
      "scrubBenchStarter": 6,
      "primarySkill": 60678
    },
    {
      "firstName": "JJ",
      "lastName": "Redick",
      "scrubBenchStarter": 007,
      "primarySkill": 6067
    },
    {
      "firstName": "Davon",
      "lastName": "Reed",
      "scrubBenchStarter": 68,
      "primarySkill": 60676
    },
    {
      "firstName": "Willie",
      "lastName": "Reed",
      "scrubBenchStarter": 086,
      "primarySkill": 60676
    },
    {
      "firstName": "Josh",
      "lastName": "Richardson",
      "scrubBenchStarter": 6696,
      "primarySkill": 60678
    },
    {
      "firstName": "Malachi",
      "lastName": "Richardson",
      "scrubBenchStarter": 6778,
      "primarySkill": 60678
    },
    {
      "firstName": "Austin",
      "lastName": "Rivers",
      "scrubBenchStarter": 008,
      "primarySkill": 60676
    },
    {
      "firstName": "Andre",
      "lastName": "Roberson",
      "scrubBenchStarter": 060,
      "primarySkill": 606760
    },
    {
      "firstName": "Devin",
      "lastName": "Robinson",
      "scrubBenchStarter": 68,
      "primarySkill": 60676
    },
    {
      "firstName": "Glenn",
      "lastName": "Robinson III",
      "scrubBenchStarter": 09,
      "primarySkill": 6067
    },
    {
      "firstName": "Rajon",
      "lastName": "Rondo",
      "scrubBenchStarter": 0076,
      "primarySkill": 60670
    },
    {
      "firstName": "Derrick",
      "lastName": "Rose",
      "scrubBenchStarter": 06,
      "primarySkill": 60679
    },
    {
      "firstName": "Terrence",
      "lastName": "Ross",
      "scrubBenchStarter": 008,
      "primarySkill": 6067
    },
    {
      "firstName": "Terry",
      "lastName": "Rozier",
      "scrubBenchStarter": 6679,
      "primarySkill": 60678
    },
    {
      "firstName": "Ricky",
      "lastName": "Rubio",
      "scrubBenchStarter": 097,
      "primarySkill": 60676
    },
    {
      "firstName": "D'Angelo",
      "lastName": "Russell",
      "scrubBenchStarter": 666,
      "primarySkill": 6067
    },
    {
      "firstName": "Domantas",
      "lastName": "Sabonis",
      "scrubBenchStarter": 677,
      "primarySkill": 6067
    },
    {
      "firstName": "JaKarr",
      "lastName": "Sampson",
      "scrubBenchStarter": 0960,
      "primarySkill": 60678
    },
    {
      "firstName": "Dario",
      "lastName": "Saric",
      "scrubBenchStarter": 0967,
      "primarySkill": 6067
    },
    {
      "firstName": "Tomas",
      "lastName": "Satoransky",
      "scrubBenchStarter": 007,
      "primarySkill": 60676
    },
    {
      "firstName": "Dennis",
      "lastName": "Schroder",
      "scrubBenchStarter": 07,
      "primarySkill": 60677
    },
    {
      "firstName": "Mike",
      "lastName": "Scott",
      "scrubBenchStarter": 08,
      "primarySkill": 60676
    },
    {
      "firstName": "Thabo",
      "lastName": "Sefolosha",
      "scrubBenchStarter": 0077,
      "primarySkill": 60676
    },
    {
      "firstName": "Wayne",
      "lastName": "Selden",
      "scrubBenchStarter": 6778,
      "primarySkill": 60676
    },
    {
      "firstName": "Ramon",
      "lastName": "Sessions",
      "scrubBenchStarter": 096,
      "primarySkill": 6067
    },
    {
      "firstName": "Iman",
      "lastName": "Shumpert",
      "scrubBenchStarter": 0697,
      "primarySkill": 60679
    },
    {
      "firstName": "Pascal",
      "lastName": "Siakam",
      "scrubBenchStarter": 6778,
      "primarySkill": 60676
    },
    {
      "firstName": "Ben",
      "lastName": "Simmons",
      "scrubBenchStarter": 677,
      "primarySkill": 6067
    },
    {
      "firstName": "Jonathon",
      "lastName": "Simmons",
      "scrubBenchStarter": 06,
      "primarySkill": 6067
    },
    {
      "firstName": "Kobi",
      "lastName": "Simmons",
      "scrubBenchStarter": 68,
      "primarySkill": 60676
    },
    {
      "firstName": "Kyle",
      "lastName": "Singler",
      "scrubBenchStarter": 07,
      "primarySkill": 606760
    },
    {
      "firstName": "Marcus",
      "lastName": "Smart",
      "scrubBenchStarter": 09,
      "primarySkill": 60678
    },
    {
      "firstName": "Ish",
      "lastName": "Smith",
      "scrubBenchStarter": 097,
      "primarySkill": 60676
    },
    {
      "firstName": "JR",
      "lastName": "Smith",
      "scrubBenchStarter": 77,
      "primarySkill": 60679
    },
    {
      "firstName": "Jason",
      "lastName": "Smith",
      "scrubBenchStarter": 060,
      "primarySkill": 60676
    },
    {
      "firstName": "Dennis",
      "lastName": "Smith Jr.",
      "scrubBenchStarter": 687,
      "primarySkill": 6067
    },
    {
      "firstName": "Tony",
      "lastName": "Snell",
      "scrubBenchStarter": 00,
      "primarySkill": 60679
    },
    {
      "firstName": "Marreese",
      "lastName": "Speights",
      "scrubBenchStarter": 078,
      "primarySkill": 6067
    },
    {
      "firstName": "Nik",
      "lastName": "Stauskas",
      "scrubBenchStarter": 097,
      "primarySkill": 6067
    },
    {
      "firstName": "Lance",
      "lastName": "Stephenson",
      "scrubBenchStarter": 06,
      "primarySkill": 6067
    },
    {
      "firstName": "Julyan",
      "lastName": "Stone",
      "scrubBenchStarter": 09,
      "primarySkill": 606766
    },
    {
      "firstName": "Edmond",
      "lastName": "Sumner",
      "scrubBenchStarter": 680,
      "primarySkill": 6067
    },
    {
      "firstName": "Caleb",
      "lastName": "Swanigan",
      "scrubBenchStarter": 680,
      "primarySkill": 60677
    },
    {
      "firstName": "Jayson",
      "lastName": "Tatum",
      "scrubBenchStarter": 6869,
      "primarySkill": 60678
    },
    {
      "firstName": "Isaiah",
      "lastName": "Taylor",
      "scrubBenchStarter": 6789,
      "primarySkill": 60677
    },
    {
      "firstName": "Jeff",
      "lastName": "Teague",
      "scrubBenchStarter": 09,
      "primarySkill": 60670
    },
    {
      "firstName": "Mirza",
      "lastName": "Teletovic",
      "scrubBenchStarter": 0,
      "primarySkill": 60679
    },
    {
      "firstName": "Garrett",
      "lastName": "Temple",
      "scrubBenchStarter": 0066,
      "primarySkill": 60678
    },
    {
      "firstName": "Milos",
      "lastName": "Teodosic",
      "scrubBenchStarter": 686,
      "primarySkill": 60676
    },
    {
      "firstName": "Jason",
      "lastName": "Terry",
      "scrubBenchStarter": 89,
      "primarySkill": 60679
    },
    {
      "firstName": "Daniel",
      "lastName": "Theis",
      "scrubBenchStarter": 686,
      "primarySkill": 60678
    },
    {
      "firstName": "Isaiah",
      "lastName": "Thomas",
      "scrubBenchStarter": 078,
      "primarySkill": 60679
    },
    {
      "firstName": "Lance",
      "lastName": "Thomas",
      "scrubBenchStarter": 098,
      "primarySkill": 6067
    },
    {
      "firstName": "Klay",
      "lastName": "Thompson",
      "scrubBenchStarter": 069,
      "primarySkill": 6067
    },
    {
      "firstName": "Tristan",
      "lastName": "Thompson",
      "scrubBenchStarter": 068,
      "primarySkill": 60679
    },
    {
      "firstName": "Sindarius",
      "lastName": "Thornwell",
      "scrubBenchStarter": 68,
      "primarySkill": 60676
    },
    {
      "firstName": "Anthony",
      "lastName": "Tolliver",
      "scrubBenchStarter": 09,
      "primarySkill": 60676
    },
    {
      "firstName": "Karl-Anthony",
      "lastName": "Towns",
      "scrubBenchStarter": 667,
      "primarySkill": 60670
    },
    {
      "firstName": "PJ",
      "lastName": "Tucker",
      "scrubBenchStarter": 0078,
      "primarySkill": 6067
    },
    {
      "firstName": "Evan",
      "lastName": "Turner",
      "scrubBenchStarter": 0,
      "primarySkill": 60677
    },
    {
      "firstName": "Myles",
      "lastName": "Turner",
      "scrubBenchStarter": 6667,
      "primarySkill": 6067
    },
    {
      "firstName": "Ekpe",
      "lastName": "Udoh",
      "scrubBenchStarter": 07,
      "primarySkill": 60676
    },
    {
      "firstName": "Tyler",
      "lastName": "Ulis",
      "scrubBenchStarter": 677,
      "primarySkill": 60676
    },
    {
      "firstName": "Jonas",
      "lastName": "Valanciunas",
      "scrubBenchStarter": 068,
      "primarySkill": 60676
    },
    {
      "firstName": "Denzel",
      "lastName": "Valentine",
      "scrubBenchStarter": 6776,
      "primarySkill": 6067
    },
    {
      "firstName": "Fred",
      "lastName": "VanVleet",
      "scrubBenchStarter": 678,
      "primarySkill": 60676
    },
    {
      "firstName": "Rashad",
      "lastName": "Vaughn",
      "scrubBenchStarter": 667,
      "primarySkill": 60679
    },
    {
      "firstName": "Noah",
      "lastName": "Vonleh",
      "scrubBenchStarter": 09,
      "primarySkill": 60677
    },
    {
      "firstName": "Nikola",
      "lastName": "Vucevic",
      "scrubBenchStarter": 0696,
      "primarySkill": 6067
    },
    {
      "firstName": "Dwyane",
      "lastName": "Wade",
      "scrubBenchStarter": 8,
      "primarySkill": 60679
    },
    {
      "firstName": "Dion",
      "lastName": "Waiters",
      "scrubBenchStarter": 0079,
      "primarySkill": 60678
    },
    {
      "firstName": "Kemba",
      "lastName": "Walker",
      "scrubBenchStarter": 0689,
      "primarySkill": 606766
    },
    {
      "firstName": "John",
      "lastName": "Wall",
      "scrubBenchStarter": 0,
      "primarySkill": 60676
    },
    {
      "firstName": "Derrick",
      "lastName": "Walton Jr.",
      "scrubBenchStarter": 6876,
      "primarySkill": 60678
    },
    {
      "firstName": "TJ",
      "lastName": "Warren",
      "scrubBenchStarter": 09,
      "primarySkill": 60676
    },
    {
      "firstName": "David",
      "lastName": "West",
      "scrubBenchStarter": 6,
      "primarySkill": 6067
    },
    {
      "firstName": "Russell",
      "lastName": "Westbrook",
      "scrubBenchStarter": 066,
      "primarySkill": 606760
    },
    {
      "firstName": "Derrick",
      "lastName": "White",
      "scrubBenchStarter": 680,
      "primarySkill": 60679
    },
    {
      "firstName": "Okaro",
      "lastName": "White",
      "scrubBenchStarter": 678,
      "primarySkill": 60678
    },
    {
      "firstName": "Isaiah",
      "lastName": "Whitehead",
      "scrubBenchStarter": 6778,
      "primarySkill": 6067
    },
    {
      "firstName": "Hassan",
      "lastName": "Whiteside",
      "scrubBenchStarter": 0,
      "primarySkill": 60678
    },
    {
      "firstName": "Andrew",
      "lastName": "Wiggins",
      "scrubBenchStarter": 09,
      "primarySkill": 60670
    },
    {
      "firstName": "CJ",
      "lastName": "Wilcox",
      "scrubBenchStarter": 09,
      "primarySkill": 60677
    },
    {
      "firstName": "Jacob",
      "lastName": "Wiley",
      "scrubBenchStarter": 68,
      "primarySkill": 6067
    },
    {
      "firstName": "Damien",
      "lastName": "Wilkins",
      "scrubBenchStarter": 86,
      "primarySkill": 6067
    },
    {
      "firstName": "Alan",
      "lastName": "Williams",
      "scrubBenchStarter": 660,
      "primarySkill": 60676
    },
    {
      "firstName": "C.J.",
      "lastName": "Williams",
      "scrubBenchStarter": 070,
      "primarySkill": 60676
    },
    {
      "firstName": "Lou",
      "lastName": "Williams",
      "scrubBenchStarter": 00,
      "primarySkill": 60676
    },
    {
      "firstName": "Marvin",
      "lastName": "Williams",
      "scrubBenchStarter": 007,
      "primarySkill": 606766
    },
    {
      "firstName": "Troy",
      "lastName": "Williams",
      "scrubBenchStarter": 67786,
      "primarySkill": 6067
    },
    {
      "firstName": "Matt",
      "lastName": "Williams Jr.",
      "scrubBenchStarter": 687,
      "primarySkill": 60678
    },
    {
      "firstName": "D.J.",
      "lastName": "Wilson",
      "scrubBenchStarter": 689,
      "primarySkill": 60679
    },
    {
      "firstName": "Jamil",
      "lastName": "Wilson",
      "scrubBenchStarter": 0966,
      "primarySkill": 60676
    },
    {
      "firstName": "Justise",
      "lastName": "Winslow",
      "scrubBenchStarter": 669,
      "primarySkill": 60678
    },
    {
      "firstName": "Jeff",
      "lastName": "Withey",
      "scrubBenchStarter": 08,
      "primarySkill": 6067
    },
    {
      "firstName": "Nate",
      "lastName": "Wolters",
      "scrubBenchStarter": 089,
      "primarySkill": 60676
    },
    {
      "firstName": "Brandan",
      "lastName": "Wright",
      "scrubBenchStarter": 08,
      "primarySkill": 60676
    },
    {
      "firstName": "Delon",
      "lastName": "Wright",
      "scrubBenchStarter": 66,
      "primarySkill": 60676
    },
    {
      "firstName": "Guerschon",
      "lastName": "Yabusele",
      "scrubBenchStarter": 678,
      "primarySkill": 60678
    },
    {
      "firstName": "Joe",
      "lastName": "Young",
      "scrubBenchStarter": 660,
      "primarySkill": 6067
    },
    {
      "firstName": "Mike",
      "lastName": "Young",
      "scrubBenchStarter": 68,
      "primarySkill": 60676
    },
    {
      "firstName": "Nick",
      "lastName": "Young",
      "scrubBenchStarter": 06,
      "primarySkill": 6067
    },
    {
      "firstName": "Thaddeus",
      "lastName": "Young",
      "scrubBenchStarter": 0,
      "primarySkill": 6067
    },
    {
      "firstName": "Cody",
      "lastName": "Zeller",
      "scrubBenchStarter": 069,
      "primarySkill": 606766
    },
    {
      "firstName": "Tyler",
      "lastName": "Zeller",
      "scrubBenchStarter": 009,
      "primarySkill": 6067
    },
    {
      "firstName": "Zhou Qi",
      "lastName": "",
      "scrubBenchStarter": 677,
      "primarySkill": 6067
    },
    {
      "firstName": "Paul",
      "lastName": "Zipser",
      "scrubBenchStarter": 678,
      "primarySkill": 6067
    },
    {
      "firstName": "Ante",
      "lastName": "Zizic",
      "scrubBenchStarter": 67790,
      "primarySkill": 60679
    },
    {
      "firstName": "Ivica",
      "lastName": "Zubac",
      "scrubBenchStarter": 6786,
      "primarySkill": 60677
    }
  ]

  $('button').click(doSomething)

  function doSomething(event) {
    event.preventDefault()
    var thename = document.getElementById("searchTxt").value;
    var namelength = thename.length
    function name(string, count = 0) {
      let str = string.split('')
      if (str.length === 0) {

        return playernames[thename.length * (Math.round(Math.sqrt(count/6.5)))]
      } else {
        let strloc = str[0].toString()
        count += strloc.charCodeAt(0)
        str.shift()
        string = str.join('')
        return name(string, count)
      }
    }

    var personplayer = name(thename)
    var playerId = personplayer.firstName + "+" + personplayer.lastName //something in the json
    var playerskill = personplayer.primarySkill
    var isplayergood = personplayer.scrubBenchStarter
    $.ajax({
        url: "https://api.cognitive.microsoft.com/bing/v7.0/images/search?q="+playerId+"+nba+gif&mkt=en-us/",
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
        var youareLine =  $('<h2>').html(yournamestring)
        var playerImage1 = $('<img>').attr('src', imageUrl1);
        $("#playerinfo").append(youareLine,playerImage1)
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


            var reaction = "And " + personplayer.firstName +" "+ personplayer.lastName + " is good at:" + playerskill
            var imageUrl2 = data2.value[0].contentUrl;1
            var funnyLine =  $('<h2>').html(reaction)
            var playerImage2 = $('<img>').attr('src', imageUrl2);
            $("#playerinfo").append(funnyLine,playerImage2)
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
