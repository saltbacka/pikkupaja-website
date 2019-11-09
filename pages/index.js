import React, { createRef } from "react";
import Head from "next/head";
import Link from "next/link";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import "../style.css";

const url =
  "https://saltbacka.us5.list-manage.com/subscribe/post?u=5b8180698d4c53176170649c8&amp;id=eff4052269";

const Home = () => {
  const nameRef = createRef(undefined);
  const emailRef = createRef(undefined);
  const phoneNumberRef = createRef(undefined);

  return (
    <div className="add-background-fade">
      <div className="page">
        <Head>
          <title>
            Pikkupaja - Suomalaisen käsityön ja designin kauppapaikan
          </title>
          <link
            href="https://fonts.googleapis.com/css?family=Caveat+Brush|Lato&display=swap"
            rel="stylesheet"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>

        <header>
          <div className="logo">Pikkupaja</div>
        </header>

        <h1>
          Avaamme suomalaisen käsityön ja designin kauppapaikan ja etsimme
          mukaamme tekijöitä.
        </h1>
        <h2>
          Kauppapaikka avataan myyjille kesäkuussa 2020.{" "}
          <strong>Täytä yhteystietosi</strong> niin pääset mukaan. Otamme sinuun
          yhteyttä pikkupajalta ja kerromme lisää.
        </h2>

        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => {
            switch (status) {
              case "sending":
                return <h1>Lähetetään...</h1>;
              case "success":
                return <h1>Kiitos!</h1>;
              case "error":
                return (
                  <p>
                    <div dangerouslySetInnerHTML={{ __html: message }} />
                  </p>
                );
              default:
                return (
                  <form
                    onSubmit={event => {
                      event.preventDefault();
                      subscribe({
                        NAME: nameRef.current.value,
                        EMAIL: emailRef.current.value,
                        PHONE: phoneNumberRef.current.value
                      });
                    }}
                  >
                    <div className="control">
                      <input
                        name="fullName"
                        ref={nameRef}
                        placeholder="Nimesi"
                      />
                    </div>
                    <div className="control">
                      <input
                        name="email"
                        ref={emailRef}
                        placeholder="Sähköpostiosoitteesi"
                      />
                    </div>
                    <div className="control">
                      <input
                        name="phoneNumber"
                        ref={phoneNumberRef}
                        placeholder="Puhelinnumerosi"
                      />
                    </div>
                    <button type="submit">Ota minuun yhteyttä</button>
                  </form>
                );
            }
          }}
        />

        <footer>
          <Link href="/rekisteri-ja-tietosuojaseloste">
            <a>Rekisteri- ja tietosuojaseloste</a>
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Home;
