import React from "react";

import logo from "../Assets/Images/CollegeMontmorency_Logo.png";

import "./IntroScreen.css";

export default function IntroScreen() {
  const preUni = [
    "Arts et lettres",
    "Arts plastiques",
    "Danse",
    "Sciences humaines",
    "Sciences de la nature",
  ];

  const techniques = [
    "Technologie de l'architecture",
    "Techniques de bureautique: Micro-édition et hypermédia",
    "Techniques de comptabilité et de gestion",
    "Conseil en assurances et en services financiers",
    "Techniques de diététique",
    "Techniques d'éducation à l'enfance",
    "Technologie de l'électronique: Ordinateurs et réseaux",
    "Technologie de l'électronique industrielle",
    "Tech. de l'estimation et de l'évaluation en bâtiment",
    "Technologie du génie civil",
    "Gestion d'un établissement de restauration",
    "Gestion de commerces",
    "Informatique de gestion",
    "Gestion de réseaux informatiques",
    "Techniques de muséologie",
    "Techniques d'orthèses et de prothèses orthopédiques",
    "Paysage et commercialisation en horticulture ornementale",
    "Techniques de réadaptation physique",
    "Techniques de sécurité incendie",
    "Soins infirmiers",
    "Techniques de tourisme",
    "Techniques d'intégration multimédia",
    "Techniques d'éducation spécialisée",
  ];

  const impro = [
    "Claude Legault # 22 (1982-84)",
    "Michel Courtemanche # 32 (1982-84)",
    "Martin Petit # 7 (1986-87, 88-89)",
    "Ken Scott # 9 (1987-90)",
    "Sophie Caron # 29 (1987-91)",
    "Roberto Sierra",
    "Stéphane E. Roy",
    "Guy Lévesque",
    "Réal Bossé Entraîneur",
  ];

  return (
    <div className="intro-body">
      <img alt="Logo Montmorency" src={logo} />

      <h1>Fonctionnalités du site</h1>

      <ul className="gras">
        <li>Voir la liste des professeurs</li>

        <li>Créer de nouveux professeurs</li>

        <li>Assigner un professeur à un cours</li>

        <li>
          Voir la liste des cours de la session présente et des sessions
          antérieures
        </li>

        <li>Créer de nouveaux cours pour la session présente</li>

        <li>Voir les étudiants inscrits à un cours</li>

        <li>Ajouter des étudiants à un cours</li>
      </ul>

      <h1>Histoire</h1>

      <p>
        Le Collège Montmorency est un collège d'enseignement général et
        professionnel situé à Laval, au Québec.
      </p>

      <p>
        Fondé en 1969, il compte aujourd'hui environ 1 000 employés, quelque 8
        300 étudiants à l'enseignement régulier et 850 élèves inscrits dans des
        programmes crédités à la formation continue. Il est le deuxième cégep
        francophone en importance au Québec après le Collège Ahuntsic. La
        station de métro Montmorency se situe à proximité.
      </p>

      <p>
        Ce collège est nommé en l'honneur de François de Montmorency-Laval,
        premier évêque de Québec.
      </p>

      <h1>Programmes offerts</h1>
      <h2>Pré-universitaires</h2>
      {preUni.map((cours) => (
        <p key={cours}>{cours}</p>
      ))}

      <h2>Techniques</h2>
      {techniques.map((cours) => (
        <p key={cours}>{cours}</p>
      ))}

      <h1>Activités parascolaires</h1>

      <h2>Les Nomades</h2>

      <p>
        Les Nomades est le nom des différentes équipes sportives du Collège
        Montmorency. Le Collège Montmorency possède une excellente réputation au
        basketball. Le Collège possède aussi une équipe de football qui fait
        partie de la ligue collégial AAA. Les autres équipes des Nomades
        évoluent dans les sports suivants : volleyball masculin (collegial AAA),
        volleyball féminin (collégial AA), soccer masculin (collegial AAA),
        crosse au champ (collégial A) et flag football féminin (collégial A).
      </p>

      <h2>MIM</h2>

      <p>
        Le MIM est le Mouvement d'Improvisation Montmorency. Il a été fondé à
        l'hiver 1982 par le comédien Claude Legault et l'auteur Benoit Chartier.
        C'est d'ailleurs la toute première équipe de niveau collégial à voir le
        jour. Parmi les plus grands du MIM, on compte :
      </p>

      {impro.map((impro) => (
        <p className="gras">{impro}</p>
      ))}
    </div>
  );
}
