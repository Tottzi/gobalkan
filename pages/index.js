import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Személyautós Kaland Rally</p>
        <span>A Te túrád, ez rólad szól!</span>
      </section>
      <section className={`${utilStyles.padding1px}`}>
        <h3>Amit kapsz:</h3>
        <p>
          Részvételi lehetőséget az egyik legolcsóbb, legfapadosabb és legdilisebb autóskalandhoz.
          <br /> GPS koordinátákat különböző látványos és érdekes helyekkel
          <br /> Új barátokat, egy jó szervezést, felejthetetlen emlékeket (amiket még évekig mutogathatsz a barátaidnak és lehet hogy még álmaidban is visszatérnek 😉).
          <br /> Útvonaltervet, útikönyv a fontosabb tudnivalókkal, matricákat az autóra, meglepetés programok.
        </p>
        <section className={`${utilStyles.padding1px}`}>
          <h3>Amit nem kapsz tölünk:</h3>
          <p>
            Saját autót, szervízautót, pontos útvonalat
            <br />
            (GPS pontok közti útvonalat kedved szerint variálhatod).
            <br />
            Biztositást, szállodát, kaját- piát (enni, innivalót), személyi edzőt, masszőrt, szakácsot.
            <br />
            Babysittert, aki fogja a kezed…
          </p>
        </section>
      </section>
      <section className={`${utilStyles.padding1px}`}>
        <h3>Mennyibe fog kerülni?:</h3>
        <p>
          Nevezési díj: 200 EUR / autó <br />
          Üzemanyag (kb. 2500 km, autó és lábméret függvénye 😉).
          <br />
          Étel, ital. <br />
          Szállás, ha nincs kedved végig vadkempingezni. <br />
          Belépő néhány turista látványosságnál. (Pontosabb infó később)
          <br />
        </p>
      </section>
      <section className={`${utilStyles.padding1px}`}>
        <h3>Alvás:</h3>
        <p>
          Leszünk völgyben, hegytetőn, és kocsmaudvaron is vagy a semmi közepén.
          <br />
          Sátorban, hálózsákban, vagy autóban, vagy mehetsz szállodába, panzióba is önköltségre.
          <br />
        </p>
      </section>
      <section className={`${utilStyles.padding1px}`}>
        <h3>Amit kérünk tőled:</h3>
        <p>
          Legyél normális, használd a fejed és tartsd be az általános és helyi szabályokat.
          <br />
        </p>
      </section>
      <h2>Amit nem tolerálunk: az agressziót!</h2>
      <section className={`${utilStyles.padding1px}`}>
        <h3>Autó:</h3>
        <p>
          Az ideális személyautó vételára nem több, mint 1000 euró. Azt, hogy mennyit költesz az autó felkészitésre, rád bízzuk.
          <br />
          Az 1000 eurós autó egy iránymutatatás, nem fogjuk senki autójának lekérni a taxértékét.
          <br />
          Jöhetsz a már meglévő autóddal is, ha nem nagyértékű és ha nem félted.
          <br />
          Csak személyautók jelentkezését várjuk (nem terepjárós túra) de azért lesz off-road. 😉
          <br />
        </p>
      </section>
      <section className={`${utilStyles.padding1px}`}>
        <h3>Díjazás:</h3>
        <p>
          A legeket értékeljük, és díjazzuk.
          <br />
          Például legalkalmatlanabb, legszarabb állapotú, legegyedibb, legjobban kidekorált, legcukibb autó…
          <br />
          A legjobb jelmezt.
          <br />
          A legelső lerobbanó…és hasonlók.
          <br />
        </p>
      </section>
      <section className={`${utilStyles.padding1px}`}>
        <h3>Ez nem egy verseny!!!</h3>
        <p>A gyors célba éréssel nem nyersz, hanem csak kevesebb időd marad a környék felfedezésére, kalandokban és élményekben gazdagodni.</p>
      </section>
      <section className={`${utilStyles.padding1px}`}>
        <h3>Történet:</h3>
        <p>
          Volt egyszer egy GumBall 3000, majd a csehek megcsinálták ennek a paródiáját
          <br />
          a Gumbalkant, amin mi is részt vettünk már, és kedvet kaptunk egy hasonlót szervezni kicsit magyarosra fűszerezve.
          <br />
          A Gumbalkanról sok videót találtok a neten kedvcsinálónak, és természetesen csak ajánlani tudjuk őket, ha valaki azt választaná.
          <br />
          Mi azért turistásabban nyomjuk majd.
          <br />A miénk jobb, mint az eredeti. 😉
        </p>
      </section>
      <section className={`${utilStyles.padding1px}`}>
        <h3>Magunkról:</h3>
        <p>
          Már több autós túrán részt vettünk, pl.: Budapest - Bamakon, megjártuk Nordcappot és több erdélyi és más autós túrát.
          <br />
          Egy Mongólia kiránduláson gondolkodtunk legutóbb, ami elmaradt covid és háború miatt, így jutottunk el a csehek által szervezett Gumbalkanra, ahol ihletet kaptunk és úgy gondoltuk, hogy kis hazánk is megérett már egy hasonló kis költségvetésű túrára.
          <br />A mi túránkhoz nem kell terepjáró, nem kellenek milliók, hanem kis akarat, kevés pénz és egy autónak látszó szállítóeszköz elegendő. Max busszal jössz haza. 😉
        </p>
      </section>
      <section className={`${utilStyles.padding1px}`}>
        <h3>Adományozás:</h3>
        <p>
          A kis költségvetés ellenére nem kell sok pénz ha az ember kicsit kedveskedni szeretne. Egy hideg sör a nyáját terelgető juhásznak nyáron a 40 fokban, vagy csak egy kis kutyaeledel az éppen hozzánk csapadó kóbor kutyának.
          <br />
          De van ahol egy köszönés és pár jó szó is elég ami még pénzbe sem kerül. 😉
          <br />
          Szemétszedés. Alkalmi táborhelyeinken természetesen nem hagyunk magunk után szemetet, de ha valaki érez magában ambíciót a mások által otthagyott szemét összegyűjtésére is, ehhez szemeteszsákot és gumikesztyűt tudunk biztosítani.
        </p>
      </section>
      <section className={`${utilStyles.padding1px}`}>
        <h3>Lesz:</h3>
        <p>
          Turistáskodás (népszerű turistalátványosságok)
          <br />
          Off-road.
          <br />
          Urbex (elhagyott épületek, épitmények)
          <br />
          Irodalom és népmüvészet
          <br />
          Természet
          <br />
          Érdekességek
          <br />
          <br />
          Ez tényleg rólad szól.
          <br />
          <br />
          “Itt mindeki hülye? Igen, itt mindenki.”
        </p>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
