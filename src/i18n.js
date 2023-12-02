import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      navbar: {
        l_2: "How It Works",
        l_3: "Read Today's Issue"
      },
      home: {
        headerLine1: "The News Site",
        headerLine2: "For You!",
        subheader: "A website that displays the news from multiple sources around the world!",
        buttonText: "Read it!",
        howItWorksHeader: "How does it work?",
        card1Header: "Gather The News",
        card1Point1: "—   from different sources",
        card1Point2: "—   covering the top stories",
        card1Point3: "—   using the TheNewsAPI",
        card2Header: "Create a document",
        card2Point1: "—   laid out beautifully",
        card2Point2: "—   using HTML and CSS",    
        card3Header: "Display The News",
        card3Point1: "—   every time you load the page",
      }
    },
    fr: {
      navbar: {
        l_2: "Comment Ça Marche?",
        l_3: "Lire l'édition d'aujourd'hui"
      },
      home: {
        headerLine1: "Le site d'actualités",
        headerLine2: "Pour Vous!",
        subheader: "Un site web qui affiche les actualités provenant de multiples sources à travers le monde !",
        buttonText: "Lis ça !",
        howItWorksHeader: "Comment ça marche ?",
        card1Header: "Rassembler les nouvelles",
        card1Point1: "—   de différentes sources",
        card1Point2: "—   couvrant l'actualité principale",
        card1Point3: "—   en utilisant « TheNewsAPI »",
        card2Header: "Créer un document",
        card2Point1: "—   présenté de manière élégante",
        card2Point2: "—   en utilisant HTML et CSS",
        card3Header: "Afficher les actualités",
        card3Point1: "—   À chaque fois que vous chargez la page."
      },
    },
  },
  lng: 'en',
  fallbackLng: 'fr',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
