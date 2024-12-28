// Lista med påståenden och årtal
const statements = [
    { text: "Det var en stor brand i London.", year: 1666 },
    { text: "Den första världskriget började.", year: 1914 },
    { text: "Berlinmuren föll.", year: 1989 },
    { text: "Internet blev kommersiellt tillgängligt.", year: 1991 },
    { text: "Anders Celsius presenterade Celsius-skalan.", year: 1742 },
    { text: "Den svenska regeringen införde kvinnlig rösträtt.", year: 1919 },
    { text: "Första världskriget bröt ut.", year: 1914 },
    { text: "Hubbleteleskopet sköts upp i rymden.", year: 1990 },
    { text: "Människan landade på månen för första gången.", year: 1969 },
    { text: "Auschwitz befriades av sovjetiska trupper.", year: 1945 },
    { text: "Sverige blev medlem i EU.", year: 1995 },
    { text: "Den första iPhone släpptes.", year: 2007 },
    { text: "De första människorna kom till Amerika.", year: -1500 },
    { text: "Nelson Mandela frigavs efter 27 år i fängelse.", year: 1990 },
    { text: "Titanic sjönk.", year: 1912 },
    { text: "Berlinmuren byggdes.", year: 1961 },
    { text: "Den svenska kungafamiljen firade 500-årsjubileum.", year: 1997 },
    { text: "Världshandelsorganisationen (WTO) grundades.", year: 1995 },
    { text: "Facebook lanserades för allmänheten.", year: 2006 },
    { text: "Den första jordbrukssamhället utvecklades i Mesopotamien.", year: -8000 },
    { text: "De första pyramiderna byggdes i Egypten.", year: -2650 },
    { text: "Hammurabis lagar publicerades.", year: -1754 },
    { text: "Trojanerna erövrade Troja.", year: -1184 },
    { text: "Homer skrev Iliaden och Odysséen.", year: -800 },
    { text: "Alexander den store blev kung.", year: -336 },
    { text: "Romarriket grundades.", year: -753 },
    { text: "Julius Caesar blev diktator på livstid.", year: -44 },
    { text: "Kristendomen började spridas.", year: 30 },
    { text: "Kinesiska muren började byggas.", year: -221 },
    { text: "Vikingatiden började.", year: -793 },
    { text: "Kristendomen blev statsreligion i Romarriket.", year: 380 },
    { text: "Karl den store blev kejsare av det heliga romerska riket.", year: 800 },
    { text: "Den första korsfarartåget startade.", year: 1096 },
    { text: "Svarta döden härjade i Europa.", year: 1347 },
    { text: "Johannes Gutenberg uppfann boktryckarkonsten.", year: 1440 },
    { text: "Renässansen inleddes.", year: 1400 },
    { text: "Columbus upptäckte Amerika.", year: 1492 },
    { text: "Martin Luther spikade upp sina 95 teser.", year: 1517 },
    { text: "Den första industriella revolutionen började.", year: 1760 },
    { text: "Franska revolutionen började.", year: 1789 },
    { text: "Svenska järnvägen invigdes mellan Stockholm och Göteborg.", year: 1856 },
    { text: "Det första flygplanet flögs av Wright-bröderna.", year: 1903 },
    { text: "Första världskriget slutade.", year: 1918 },
    { text: "Andra världskriget slutade.", year: 1945 },
    { text: "Den första människan gick på månen.", year: 1969 },
    { text: "Berlinmuren föll.", year: 1989 },
    { text: "Sverige gick med i EU.", year: 1995 },
    { text: "Den första iPhone släpptes.", year: 2007 },
    { text: "COVID-19-pandemin började.", year: 2019 },
    { text: "Den första skrivkonsten utvecklades i Mesopotamien.", year: -3200 },
    { text: "De första städerna började växa fram i Mesopotamien.", year: -3000 },
    { text: "Egyptiska hieroglyfer började användas.", year: -3000 },
    { text: "Sumererna skapade den första kända rättsordningen.", year: -2100 },
    { text: "Kung David enade Israel.", year: -1000 },
    { text: "Babylonierna erövrade Jerusalem och förstörde Templet.", year: -586 },
    { text: "Pythagoras föddes.", year: -570 },
    { text: "Persiska riket grundades av Kyros den store.", year: -550 },
    { text: "Filip II av Makedonien blev kung.", year: -359 },
    { text: "Kristus föddes.", year: 0 },
    { text: "Romarriket delades i öst och väst.", year: 395 },
    { text: "Vikingarna började sina raider i England.", year: -793 },
    { text: "Det byzantinska riket föll.", year: 1453 },
    { text: "Kolumbus upptäckte den nya världen.", year: 1492 },
    { text: "Reformationen började med Martin Luthers teser.", year: 1517 },
    { text: "Den första ångmaskinen uppfanns av Thomas Newcomen.", year: 1712 },
    { text: "Den amerikanska revolutionen började.", year: 1775 },
    { text: "Den franska revolutionen började.", year: 1789 },
    { text: "Napoleon Bonaparte blev kejsare av Frankrike.", year: 1804 },
    { text: "Det moderna vaccinets uppfinnare, Edward Jenner, utvecklade vaccin mot smittkoppor.", year: 1796 },
    { text: "Slaveriet avskaffades i USA med det 13:e tillägget till konstitutionen.", year: 1865 },
    { text: "Första världskriget började.", year: 1914 },
    { text: "Andra världskriget började.", year: 1939 },
    { text: "FN grundades.", year: 1945 },
    { text: "Den första satelliten, Sputnik 1, sköts upp.", year: 1957 },
    { text: "Kubakrisen inträffade.", year: 1962 },
    { text: "Månlandningen av Apollo 11.", year: 1969 },
    { text: "Berlinmuren byggdes.", year: 1961 },
    { text: "Vietnamkriget slutade.", year: 1975 },
    { text: "Sovjetunionen kollapsade.", year: 1991 },
    { text: "Nelson Mandela valdes till president i Sydafrika.", year: 1994 },
    { text: "World Trade Center attackerades den 11 september.", year: 2001 },
    { text: "Smartphones med pekskärm blev vanliga.", year: 2007 },
    { text: "Facebook blev offentligt tillgängligt.", year: 2006 },
    { text: "COVID-19-pandemin startade.", year: 2019 },
    { text: "Ryssland invaderade Ukraina.", year: 2022 }
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
