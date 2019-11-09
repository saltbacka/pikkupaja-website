import React from "react";
import Head from "next/head";
import Link from "next/link";

import "../style.css";

const Home = () => (
  <div className="add-background">
    <div className="page">
      <Head>
        <title>Pikkupaja - Suomalaisen käsityön ja designin kauppapaikan</title>
        <link
          href="https://fonts.googleapis.com/css?family=Caveat+Brush|Lato&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header>
        <div className="logo">Pikkupaja</div>
      </header>

      <h1>Rekisteri- ja tietosuojaseloste</h1>
      <h2>
        Tämä on Yrityksen henkilötietolain (10 ja 24 §) ja EU:n yleisen
        tietosuoja-asetuksen (GDPR) mukainen rekisteri- ja tietosuojaseloste.
        Laadittu pp.kk.vvvv. Viimeisin muutos pp.kk.vvvv.
      </h2>

      <h3>1. Rekisterinpitäjä</h3>
      <p>Yritys, Osoite, 01234 Postitoimipaikka</p>
      <p>Muut yhteystiedot</p>
      <h3>2. Rekisteristä vastaava yhteyshenkilö</h3>
      <p>Etunimi Sukunimi, sähköposti, puhelinnumero</p>
      <p>
        Jos organisaatiossasi on tietosuojavastaava, hänen tietonsa tulevat
        tähän. Muutoin kuka tahansa yhteyshenkilö.
      </p>
      <h3>3. Rekisterin nimi</h3>
      <p>
        Yrityksen asiakasrekisteri, markkinointirekisteri, sidosryhmärekisteri,
        verkkopalvelun käyttäjärekisteri, jäsenrekisteri, työntekijärekisteri
        tms.
      </p>
      <h3>4. Oikeusperuste ja henkilötietojen käsittelyn tarkoitus</h3>
      <p>
        EU:n yleisen tietosuoja-asetuksen mukainen oikeusperuste henkilötietojen
        käsittelylle on
      </p>
      <ul>
        <li>
          henkilön suostumus (dokumentoitu, vapaaehtoinen, yksilöity, tietoinen
          ja yksiselitteinen)
        </li>
        <li>sopimus, jossa rekisteröity on osapuolena</li>
        <li>laki (mikä)</li>
        <li>julkisen tehtävän hoitaminen (mihin perustuu), tai</li>
        <li>
          rekisterinpitäjän oikeutettu etu (esim. asiakassuhde, työsuhde,
          jäsenyys).
        </li>
      </ul>
      <p>
        Henkilötietojen käsittelyn tarkoitus on yhteydenpito asiakkaisiin,
        asiakassuhteen ylläpito, markkinointi tms.
      </p>
      <p>
        Tietoja ei käytetä automatisoituun päätöksentekoon tai profilointiin.{" "}
      </p>
      <h3>5. Rekisterin tietosisältö</h3>
      <p>
        Rekisteriin tallennettavia tietoja ovat: henkilön nimi, asema,
        yritys/organisaatio, yhteystiedot (puhelinnumero, sähköpostiosoite,
        osoite), www-sivustojen osoitteet, verkkoyhteyden IP-osoite,
        tunnukset/profiilit sosiaalisen median palveluissa, tiedot tilatuista
        palveluista ja niiden muutoksista, laskutustiedot, muut
        asiakassuhteeseen ja tilattuihin palveluihin liittyvät tiedot.
      </p>
      <p>
        Kerro tässä myös tietojen säilytysaika, mikäli mahdollista. Kerro myös,
        jos tiedot esimerkiksi anonymisoidaan tietyn ajan kuluttua.
      </p>

      <h3>6. Säännönmukaiset tietolähteet</h3>
      <p>
        Rekisteriin tallennettavat tiedot saadaan asiakkaalta mm.
        www-lomakkeilla lähetetyistä viesteistä, sähköpostitse, puhelimitse,
        sosiaalisen median palvelujen kautta, sopimuksista, asiakastapaamisista
        ja muista tilanteista, joissa asiakas luovuttaa tietojaan.
      </p>

      <h3>
        7. Tietojen säännönmukaiset luovutukset ja tietojen siirto EU:n tai
        ETA:n ulkopuolelle
      </h3>
      <p>
        Tietoja ei luovuteta säännönmukaisesti muille tahoille. Tietoja voidaan
        julkaista siltä osin kuin niin on sovittu asiakkaan kanssa.
      </p>

      <p>
        Tietoja voidaan siirtää rekisterinpitäjän toimesta myös EU:n tai ETA:n
        ulkopuolelle.
      </p>

      <p>
        Mikäli luovutat henkilötietoja eri tahoille, kerro tässä mahdolliset
        vastaanottajat tai vastaanottajaryhmät.
      </p>

      <h3>8. Rekisterin suojauksen periaatteet</h3>
      <p>
        Rekisterin käsittelyssä noudatetaan huolellisuutta ja tietojärjestelmien
        avulla käsiteltävät tiedot suojataan asianmukaisesti. Kun
        rekisteritietoja säilytetään Internet-palvelimilla, niiden laitteiston
        fyysisestä ja digitaalisesta tietoturvasta huolehditaan
        asiaankuuluvasti. Rekisterinpitäjä huolehtii siitä, että tallennettuja
        tietoja sekä palvelimien käyttöoikeuksia ja muita henkilötietojen
        turvallisuuden kannalta kriittisiä tietoja käsitellään
        luottamuksellisesti ja vain niiden työntekijöiden toimesta, joiden
        työnkuvaan se kuuluu.
      </p>

      <h3>9. Tarkastusoikeus ja oikeus vaatia tiedon korjaamista</h3>
      <p>
        Jokaisella rekisterissä olevalla henkilöllä on oikeus tarkistaa
        rekisteriin tallennetut tietonsa ja vaatia mahdollisen virheellisen
        tiedon korjaamista tai puutteellisen tiedon täydentämistä. Mikäli
        henkilö haluaa tarkistaa hänestä tallennetut tiedot tai vaatia niihin
        oikaisua, pyyntö tulee lähettää kirjallisesti rekisterinpitäjälle.
        Rekisterinpitäjä voi pyytää tarvittaessa pyynnön esittäjää todistamaan
        henkilöllisyytensä. Rekisterinpitäjä vastaa asiakkaalle EU:n
        tietosuoja-asetuksessa säädetyssä ajassa (pääsääntöisesti kuukauden
        kuluessa).
      </p>

      <h3>10. Muut henkilötietojen käsittelyyn liittyvät oikeudet</h3>
      <p>
        Rekisterissä olevalla henkilöllä on oikeus pyytää häntä koskevien
        henkilötietojen poistamiseen rekisteristä ("oikeus tulla unohdetuksi").
        Niin ikään rekisteröidyillä on muut EU:n yleisen tietosuoja-asetuksen
        mukaiset oikeudet kuten henkilötietojen käsittelyn rajoittaminen
        tietyissä tilanteissa. Pyynnöt tulee lähettää kirjallisesti
        rekisterinpitäjälle. Rekisterinpitäjä voi pyytää tarvittaessa pyynnön
        esittäjää todistamaan henkilöllisyytensä. Rekisterinpitäjä vastaa
        asiakkaalle EU:n tietosuoja-asetuksessa säädetyssä ajassa
        (pääsääntöisesti kuukauden kuluessa).
      </p>
      <br />
      <br />
      <br />
      <br />
    </div>
  </div>
);

export default Home;
