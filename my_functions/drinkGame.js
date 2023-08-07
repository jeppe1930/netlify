exports.handler = async function (event, context) {
  // Lista med drickuppdrag
  const drinks = [
    "Drick en klunk om du har rest utomlands det senaste året.",
    "Drick två gånger om du har en katt som husdjur.",
    "Drick om du har ätit pizza denna vecka.",
    "Drick om du har sett en film den senaste månaden.",
    "Drick om du har dansat under de senaste 24 timmarna.",
    // Lägg till fler drickuppdrag här
  ];

  // Slumpmässigt index för att välja ett drickuppdrag
  const randomIndex = Math.floor(Math.random() * drinks.length);
  const drinkAssignment = drinks[randomIndex];

  // Returnera drickuppdraget som svar till klienten
  return {
    statusCode: 200,
    body: JSON.stringify({ drink: drinkAssignment }),
  };
};
