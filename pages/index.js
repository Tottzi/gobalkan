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
          Részvételi lehetőséget az egyik legolcsóbb, legfapadosabb és legdilisebb autóskalandhoz. <br /> GPS koordinátákat különböző látványos és érdekes helyekkel.
          <br /> Új barátokat. Egy jó szervezést. Felejthetetlen emlékeket (amiket még évekig mutogathatsz a barátaidnak, és még lehet, hogy még álmaidban is visszatérnek 😉). <br /> Útvonaltervet. Utikönyv a fontosabb tudnivalókkal. Matricákat az autóra. Meglepetés programok.
        </p>
        <section className={`${utilStyles.padding1px}`}>
          <h3>Amit nem kapsz tölünk:</h3>
          <p>
            Saját autót, Szervizautót, Pontós utvonalat. <br />( gps pont közti utvonalat kedved szerint variálhatód) <br />
            Biztositást Szállodát Kaját piát ( enni, inni valót) Személyi edzőt, masszőrt, szakácsot. <br />
            Babbysittert aki fogja a kezed……
          </p>
        </section>
      </section>
      <section className={`${utilStyles.padding1px}`}>
        <h3>Mennyibe fog kerülni?:</h3>
        <p>
          Nevezési díj: 200 euró / autó. <br />
          Üzemanyag (kb. 3000 km) (autó és lábméret függvénye 😉).
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
          Leszünk völgyben, hegytetőn, és kocsmaudvaron is, vagy a semmi közepén.
          <br />
          Sátorban, hálózsákban, vagy autóban, vagy mehetsz szállodába, panzióba is önköltségre.
          <br />
        </p>
      </section>
      <section className={`${utilStyles.padding1px}`}>
        <h3>Amit kérünk tőled:</h3>
        <p>
          Legyél normális.
          <br />
          Használd a fejed.
          <br />
          Tartsd be az általános és helyi szabályokat.
          <br />
        </p>
      </section>
      <h2>Amit nem tolerálunk: az agressziót!</h2>
      <section className={`${utilStyles.padding1px}`}>
        <h3>Autó:</h3>
        <p>
          Az ideális személyautó vételára nem több mint 1000 euró. Azt, hogy mennyit költesz az autó felkészítésére, azt rád bízzuk.
          <br />
          Az 1000 eurós autó egy iránymutatás, nem fogjuk senki autójának lekérni a taxértékét.
          <br />
          Jöhetsz a már meglévő autóddal is, ha nem nagyértékű, és ha nem félted.
          <br />
        </p>
      </section>
      <section className={`${utilStyles.padding1px}`}>
        <h3>Díjazás:</h3>
        <p>
          A legesek értékeljük, és díjazzuk.
          <br />
          Pl. legalkalmasabb, legszarabb állapotú, legegyedibb, legjobban kidekorált, ,legcukibb autó…..
          <br />
          Jöhetsz a már meglévő autóddal is, ha nem nagyértékű, és ha nem félted.
          <br />
        </p>
      </section>
      <section className={`${utilStyles.padding1px}`}>
        <h3>Ez nem egy verseny!!!</h3>
        <p>A gyors célba éréssel nem nyersz, hanem csak kevesebb időd marad a környék felfedezésére, kalandokban és élményekben gazdagodásra.</p>
      </section>
      <section className={`${utilStyles.padding1px}`}>
        <h3>Történet:</h3>
        <p>
          Volt egyszer egy GumBall 3000, majd a csehek megcsinálták ennek a paródiáját, a Gum Balkánt, amin mi is részt vettünk már, és kedvet kaptunk egy hasonlót szervezni, kicsit magyarosra fűszerezve. A Gum Balkánról sok videót találhatsz a neten, kedvcsinálónak, és természetesen csak ajánlani
          tudjuk őket, ha valaki őket választaná. Mi azért turistásabban nyomjuk majd. "A mienk jobb, mint az eredeti 😉"
        </p>
      </section>
      <section className={`${utilStyles.padding1px}`}>
        <h3>Magunkról:</h3>
        <p>
          Már több autós túrán vettünk részt, pl. Bamako, Nordcap, és több különböző erdélyi és más autós túrán. Egy Mongólia kiránduláson gondolkodtunk legutóbb, ami elmaradt a Covid és háború miatt. Így jutottunk el a csehek által szervezett Gum Balkánra, ahol ihletet kaptunk, és úgy gondoltuk,
          hogy kis hazánk is megérett már egy hasonló, kis költségvetésű túrára.
          <br />A mi túránkhoz nem kell terepjáró, nem kellenek milliók, hanem kis akarat, kevés pénz, és egy autónak látszó szállítóeszköz elegendő. Maximalizálva busszal jössz haza. 😉
        </p>
      </section>
      <section className={`${utilStyles.padding1px}`}>
        <h3>Adományozás:</h3>
        <p>
          A kis költségvetés ellenére nem kell sok pénz, ha az ember kicsit kedveskedni szeretne. Egy csoki, cukorka, vagy egy nyalóka a gyerekeknek, egy hideg sör a nyáját terelgető juhásznak a 40 fokos nyári melegben, vagy csak egy kis kutyaeledel az éppen hozzánk csapódó kóbor kutyának. De van,
          ahol egy köszönés és pár jó szó is elég, ami még pénzbe sem kerül. 😉
        </p>
      </section>
      <section className={`${utilStyles.padding1px}`}>
        <h3>Lesz:</h3>
        <p>
          Turistáskodás (népszerű turistalátványosságok).
          <br />
          Off-road.
          <br />
          Urbex (elhagyott épületek, építmények).
          <br />
          Irodalom és népművészet.
          <br />
          Természet.
          <br />
          Érdekességek.
          <br />
          <br />
          Ez tényleg rólad szól.
          <br />
          <br />
          "Itt mindeki hülye? Igen, itt mindenki."
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
