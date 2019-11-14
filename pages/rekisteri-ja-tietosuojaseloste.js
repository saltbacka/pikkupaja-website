import React from "react";
import Head from "next/head";
import Link from "next/link";

import Layout from "../components/layout";

import "../style.css";

const Home = () => (
  <Layout className="add-background">
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
        Tämä on Pikkupajan henkilötietolain (10 ja 24 §) ja EU:n yleisen
        tietosuoja-asetuksen (GDPR) mukainen rekisteri- ja tietosuojaseloste.
        Laadittu 9.11.2019. Viimeisin muutos 9.11.2019.
      </h2>

      <h3>1. Rekisterinpitäjä</h3>
      <p>Pikkupaja, Jasmine Saltbacka, Tuiskunkatu 1 A 12, 33900 Tampere</p>
      <p>+358 45 119 0290</p>
      <p>jasmine@pikkupaja.fi</p>

      <h3>2. Rekisteristä vastaava yhteyshenkilö</h3>
      <p>Jasmine Saltbacka</p>
      <p>+358 45 119 0290</p>
      <p>jasmine@pikkupaja.fi</p>

      <h3>3. Rekisterin nimi</h3>
      <p>
        Yrityksen asiakasrekisteri, markkinointirekisteri, sidosryhmärekisteri,
        verkkopalvelun käyttäjärekisteri ja jäsenrekisteri.
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
        <li>
          rekisterinpitäjän oikeutettu etu (esim. asiakassuhde, työsuhde,
          jäsenyys).
        </li>
      </ul>
      <p>
        Henkilötietojen käsittelyn tarkoitus on yhteydenpito asiakkaisiin,
        asiakassuhteen ylläpito ja markkinointi
      </p>
      <p>
        Tietoja ei käytetä automatisoituun päätöksentekoon tai profilointiin.{" "}
      </p>

      <h3>5. Rekisterin tietosisältö</h3>
      <p>
        Rekisteriin tallennettavia tietoja ovat: henkilön nimi, puhelinnumero ja
        sähköpostiosoite
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
        oikaisua, pyyntö tulee lähettää sähköpostilla tai kirjallisesti
        rekisterinpitäjälle. Rekisterinpitäjä voi pyytää tarvittaessa pyynnön
        esittäjää todistamaan henkilöllisyytensä. Rekisterinpitäjä vastaa
        asiakkaalle EU:n tietosuoja-asetuksessa säädetyssä ajassa
        (pääsääntöisesti kuukauden kuluessa).
      </p>

      <h3>10. Muut henkilötietojen käsittelyyn liittyvät oikeudet</h3>
      <p>
        Rekisterissä olevalla henkilöllä on oikeus pyytää häntä koskevien
        henkilötietojen poistamiseen rekisteristä ("oikeus tulla unohdetuksi").
        Niin ikään rekisteröidyillä on muut EU:n yleisen tietosuoja-asetuksen
        mukaiset oikeudet kuten henkilötietojen käsittelyn rajoittaminen
        tietyissä tilanteissa. Pyynnöt tulee lähettää sähköpostilla tai
        kirjallisesti rekisterinpitäjälle. Rekisterinpitäjä voi pyytää
        tarvittaessa pyynnön esittäjää todistamaan henkilöllisyytensä.
        Rekisterinpitäjä vastaa asiakkaalle EU:n tietosuoja-asetuksessa
        säädetyssä ajassa (pääsääntöisesti kuukauden kuluessa).
      </p>
      <br />
      <br />
    </div>
  </Layout>
);

export default Home;
