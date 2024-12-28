// Lista med påståenden och årtal
const statements = [
{ text: "Den första skrivkonsten utvecklades i Mesopotamien.", year: -3200 },
{ text: "Egyptiska hieroglyfer började användas.", year: -3000 },
{ text: "Stonehenge började byggas i England.", year: -3000 },
{ text: "De första pyramiderna byggdes i Egypten.", year: -2650 },
{ text: "Induskulturen började blomstra i dagens Pakistan.", year: -2600 },
{ text: "Cheopspyramiden färdigställdes i Giza.", year: -2560 },
{ text: "Riket Ur grundades i Mesopotamien.", year: -2112 },
{ text: "Sumererna skapade den första kända rättsordningen.", year: -2100 },
{ text: "Hammurabis lagar publicerades.", year: -1754 },
{ text: "Det babyloniska imperiet nådde sin höjdpunkt.", year: -1750 },
{ text: "De första människorna kom till Amerika.", year: -1500 },
{ text: "Järnåldern började i Mellanöstern.", year: -1200 },
{ text: "Trojanerna erövrade Troja.", year: -1184 },
{ text: "Kung David enade Israel.", year: -1000 },
{ text: "Homer skrev Iliaden och Odysséen.", year: -800 },
{ text: "Vikingatiden började.", year: -793 },
{ text: "Den första olympiaden hölls i Grekland.", year: -776 },
{ text: "Romarriket grundades.", year: -753 },
{ text: "Babylonierna erövrade Jerusalem och förstörde Templet.", year: -586 },
{ text: "Pythagoras föddes.", year: -570 },
{ text: "Persiska riket grundades av Kyros den store.", year: -550 },
{ text: "Platon grundade Akademin i Aten.", year: -387 },
{ text: "Filip II av Makedonien blev kung.", year: -359 },
{ text: "Alexander den store blev kung.", year: -336 },
{ text: "Kinesiska muren började byggas.", year: -221 },
{ text: "Hannibal korsade Alperna under det andra puniska kriget.", year: -218 },
{ text: "Julius Caesar blev diktator på livstid.", year: -44 },
{ text: "Kleopatra VII dog och Egypten blev en romersk provins.", year: -30 },
{ text: "Colosseum invigdes i Rom.", year: 80 },
{ text: "Kristendomen spreds snabbt under det romerska imperiet.", year: 100 },
{ text: "Mayakulturen nådde sin guldålder.", year: 250 },
{ text: "Kristendomen blev statsreligion i Romarriket.", year: 380 },
{ text: "Romarriket delades i öst och väst.", year: 395 },
{ text: "Rom förstördes av visigoter under Alarik.", year: 410 },
{ text: "Islam grundades av profeten Muhammed.", year: 610 },
{ text: "Slaget vid Tours stoppade den muslimska expansionen i Europa.", year: 732 },
{ text: "Vikingarna attackerade klostret Lindisfarne.", year: 793 },
{ text: "Karl den store blev kejsare av det heliga romerska riket.", year: 800 },
{ text: "Vikingarna koloniserade Island.", year: 874 },
{ text: "Slaget vid Hastings markerade normandernas erövring av England.", year: 1066 },
{ text: "William Erobraren blev kung av England.", year: 1066 },
{ text: "Korstågen började med påvens uppmaning.", year: 1095 },
{ text: "Djengis Khan enade de mongoliska stammarna.", year: 1206 },
{ text: "Mongolerna intog Bagdad.", year: 1258 },
{ text: "Marco Polo började sin resa till Kina.", year: 1271 },
{ text: "Den svarta döden nådde Europa.", year: 1347 },
{ text: "Renässansen inleddes.", year: 1400 },
{ text: "Johannes Gutenberg uppfann boktryckarkonsten.", year: 1440 },
{ text: "Det byzantinska riket föll.", year: 1453 },
{ text: "Konstantinopel erövrades av osmanerna.", year: 1453 },
{ text: "Hundraårskriget mellan England och Frankrike avslutades.", year: 1453 },
{ text: "Columbus upptäckte Amerika.", year: 1492 },
{ text: "Leonardo da Vinci målade Mona Lisa.", year: 1503 },
{ text: "Michelangelo avslutade freskerna i Sixtinska kapellet.", year: 1512 },
{ text: "Martin Luther spikade upp sina 95 teser.", year: 1517 },
{ text: "Galileo Galilei byggde sitt första teleskop.", year: 1609 },
{ text: "Johannes Kepler publicerade sina lagar om planeternas rörelse.", year: 1609 },
{ text: "Isaac Newton utvecklade gravitationsteorin.", year: 1687 },
{ text: "Franska revolutionen började.", year: 1789 },
{ text: "Washington blev USA:s första president.", year: 1789 },
{ text: "Det moderna vaccinets uppfinnare, Edward Jenner, utvecklade vaccin mot smittkoppor.", year: 1796 },
{ text: "Napoleon Bonaparte blev kejsare av Frankrike.", year: 1804 },
{ text: "Slaget vid Trafalgar ledde till brittisk dominans till sjöss.", year: 1805 },
{ text: "Slaget vid Waterloo ledde till Napoleons fall.", year: 1815 },
{ text: "Svenska järnvägen invigdes mellan Stockholm och Göteborg.", year: 1856 },
{ text: "Darwin publicerade 'Om arternas uppkomst'.", year: 1859 },
{ text: "Slaveriet avskaffades i USA med det 13:e tillägget till konstitutionen.", year: 1865 },
{ text: "Telefonen uppfanns av Alexander Graham Bell.", year: 1876 },
{ text: "Ljuset från Edisons glödlampa tändes för första gången.", year: 1879 },
{ text: "Den första moderna olympiaden hölls i Aten.", year: 1896 },
{ text: "Det första flygplanet flögs av Wright-bröderna.", year: 1903 },
{ text: "Albert Einstein publicerade relativitetsteorin.", year: 1905 },
{ text: "Titanic sjönk.", year: 1912 },
{ text: "Första världskriget började.", year: 1914 },
{ text: "Den svenska regeringen införde kvinnlig rösträtt.", year: 1919 },
{ text: "Mahatma Gandhi startade sin icke-våldsamma kamp för självständighet i Indien.", year: 1919 },
{ text: "Den stora depressionen började.", year: 1929 },
{ text: "Hitler blev Tysklands rikskansler.", year: 1933 },
{ text: "Andra världskriget började med invasionen av Polen.", year: 1939 },
{ text: "Pearl Harbor attackerades av Japan.", year: 1941 },
{ text: "Auschwitz befriades av sovjetiska trupper.", year: 1945 },
{ text: "Andra världskriget slutade.", year: 1945 },
{ text: "FN grundades.", year: 1945 },
{ text: "FN:s allmänna förklaring om de mänskliga rättigheterna antogs.", year: 1948 },
{ text: "Den första satelliten, Sputnik 1, sköts upp.", year: 1957 },
{ text: "Berlinmuren byggdes.", year: 1961 },
{ text: "Kubakrisen inträffade.", year: 1962 },
{ text: "Nelson Mandela dömdes till livstids fängelse.", year: 1964 },
{ text: "Människan landade på månen för första gången.", year: 1969 },
{ text: "Den första människan gick på månen.", year: 1969 },
{ text: "Vietnamkriget slutade.", year: 1975 },
{ text: "Persondatorn lanserades av IBM.", year: 1981 },
{ text: "Tjernobylkatastrofen inträffade.", year: 1986 },
{ text: "Olof Palme mördas.", year: 1986 },
{ text: "Berlinmuren föll.", year: 1989 },
{ text: "Hubbleteleskopet sköts upp i rymden.", year: 1990 },
{ text: "Nelson Mandela frigavs efter 27 år i fängelse.", year: 1990 },
{ text: "Internet blev kommersiellt tillgängligt.", year: 1991 },
{ text: "Sovjetunionen kollapsade.", year: 1991 },
{ text: "Sovjetunionen upplöstes och kalla kriget tog slut.", year: 1991 },
{ text: "Nelson Mandela valdes till president i Sydafrika.", year: 1994 },
{ text: "Estoniakatastrofen.", year: 1994 },
{ text: "Stureplansmorden.", year: 1994 },
{ text: "Sverige blev medlem i EU.", year: 1995 },
{ text: "Världshandelsorganisationen (WTO) grundades.", year: 1995 },
{ text: "Den svenska kungafamiljen firade 500-årsjubileum.", year: 1997 },
{ text: "Den första roboten på Mars, Sojourner, landade.", year: 1997 },
{ text: "Google grundades av Larry Page och Sergey Brin.", year: 1998 },
{ text: "World Trade Center attackerades den 11 september.", year: 2001 },
{ text: "Anna Lindh mördas.", year: 2003 },
{ text: "Tsunamikatastrofen i Thailand.", year: 2004 },
{ text: "Facebook lanserades för allmänheten.", year: 2006 },
{ text: "Twitter lanserades.", year: 2006 },
{ text: "Den första iPhone släpptes.", year: 2007 },
{ text: "COVID-19-pandemin började.", year: 2019 },
{ text: "James Webb-teleskopet sköts upp i rymden.", year: 2021 },
{ text: "Ryssland invaderade Ukraina.", year: 2022 },
{ text: "Forskare tog fram det första fungerande kvantdatorchipet.", year: 2022 }
];

// Håller reda på använda påståenden
let usedStatements = [];

// Funktion för att slumpmässigt välja ett påstående som inte har använts
function generateNewStatement() {
    // Om alla påståenden har använts, återställ listan
    if (usedStatements.length === statements.length) {
        usedStatements = [];
        alert("Alla påståenden har använts. Listan återställs!");
    }

    // Välj ett påstående som inte har använts
    let randomStatement;
    do {
        randomStatement = statements[Math.floor(Math.random() * statements.length)];
    } while (usedStatements.includes(randomStatement));

    // Lägg till det valda påståendet i listan över använda påståenden
    usedStatements.push(randomStatement);

    // Uppdatera påståendet på sidan
    document.getElementById("statement").innerText = randomStatement.text;

    // Sätt årtalet till ett tomt värde tills knappen för att visa årtal trycks
    document.getElementById("year").style.display = 'none';
    document.getElementById("year").innerText = '';

    // Visa "Visa Årtal"-knappen och dölja årtalet om det redan visades
    document.getElementById("showYearBtn").style.display = 'block';

    // Dölja knappen för att generera nytt påstående tills årtalet visas
    document.getElementById("newStatementBtn").disabled = true;  // Inaktivera knappen
    document.getElementById("newStatementBtn").style.backgroundColor = '#b0b0b0';  // Grå färg för inaktiv knapp

    // Spara rätt årtal för att visa senare
    window.correctYear = randomStatement.year;  // Lagras för senare visning
}

// Funktion för att visa årtalet när knappen klickas
function showYear() {
    // Kontrollera om årtalet är negativt (f. Kr.)
    let displayYear = window.correctYear;
    if (displayYear < 0) {
        // Om året är före Kristus, visa "f. Kr." efter året
        displayYear = Math.abs(displayYear) + " f. Kr.";
    }

    // Visa årtalet
    document.getElementById("year").innerText = displayYear;
    document.getElementById("year").style.display = 'block';

    // Visa inte "Visa Årtal"-knappen igen
    document.getElementById("showYearBtn").style.display = 'block';  // Håll knappen synlig

    // Aktivera knappen för att generera nytt påstående
    document.getElementById("newStatementBtn").disabled = false;
    document.getElementById("newStatementBtn").style.backgroundColor = '#007BFF';  // Återställa färgen till blå
}

// Generera ett första påstående när sidan laddas
generateNewStatement();
