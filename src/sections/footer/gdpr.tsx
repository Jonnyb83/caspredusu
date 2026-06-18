import Link from 'next/link'
import { HouseIcon } from 'lucide-react'
import styles from './legal.module.css'

export function Gdpr() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          <HouseIcon size={18} />
          <span>Návrat na hlavnú stránku</span>
        </Link>

        <h1>Podmienky ochrany osobných údajov</h1>

        <div className={styles.card}>
          <h2>Prevádzkovateľ</h2>

          <p>
            Prevádzkovateľom webovej stránky je spoločnosť <strong>REKOFIN MR s.r.o.</strong>,
            so sídlom Šustekova 15, 851 04 Bratislava, IČO: 50439707,
            DIČ: 2120336229.
          </p>

          <p>
            V prípade otázok nás môžete kontaktovať na e-mailovej adrese:{' '}
            <a href="mailto:caspredusu@gmail.com">caspredusu@gmail.com</a>.
          </p>

          <p>
            Pri poskytovaní našich služieb cez webové stránky spracúvame niektoré
            osobné údaje v súlade s nariadením GDPR a zákonom č. 18/2018 Z. z.
            o ochrane osobných údajov.
          </p>

          <h2>1. Kontaktný alebo dopytový formulár</h2>

          <p>
            Ak nás kontaktujete prostredníctvom formulára na webovej stránke,
            spracúvame údaje, ktoré nám dobrovoľne poskytnete:
          </p>

          <ul>
            <li>meno a priezvisko,</li>
            <li>e-mailovú adresu,</li>
            <li>telefónne číslo.</li>
          </ul>

          <p>
            Tieto údaje používame za účelom kontaktovania, vybavenia vášho dopytu,
            rezervácie termínu alebo poskytnutia informácií o našich službách.
          </p>

          <p>
            Právnym základom spracúvania je článok 6 ods. 1 písm. b) GDPR –
            vykonanie opatrení pred uzavretím zmluvy na vašu žiadosť.
          </p>

          <p>
            Ak nenadviažeme ďalšiu spoluprácu, údaje z formulára uchovávame
            najdlhšie 1 rok od poslednej komunikácie.
          </p>

          <h2>2. Objednávka a poskytovanie služieb</h2>

          <p>
            V prípade objednávky služby spracúvame údaje potrebné na uzatvorenie
            zmluvy, komunikáciu, poskytnutie služby a vystavenie účtovných dokladov.
          </p>

          <ul>
            <li>meno a priezvisko alebo obchodné meno,</li>
            <li>fakturačnú adresu alebo adresu sídla,</li>
            <li>e-mailovú adresu a telefónne číslo,</li>
            <li>platobné údaje, napríklad číslo účtu alebo IBAN.</li>
          </ul>

          <p>
            Právnym základom je článok 6 ods. 1 písm. b) GDPR – plnenie zmluvy
            a článok 6 ods. 1 písm. c) GDPR – plnenie zákonnej povinnosti
            v oblasti účtovníctva a daní.
          </p>

          <p>
            Účtovné doklady uchovávame po dobu 10 rokov nasledujúcich po roku,
            ktorého sa týkajú, v súlade so zákonom o účtovníctve.
          </p>

          <h2>3. Príjemcovia osobných údajov</h2>

          <p>
            Vaše osobné údaje zostávajú primárne u nás. V nevyhnutnom rozsahu
            k nim môžu mať prístup naši externí dodávatelia:
          </p>

          <ul>
            <li>poskytovateľ hostingu a správy webových stránok,</li>
            <li>externá účtovná spoločnosť alebo daňový poradca,</li>
            <li>orgány finančnej správy alebo štátneho dozoru, ak to vyžaduje zákon.</li>
          </ul>

          <p>Osobné údaje spracúvame výhradne na území Európskej únie.</p>

          <h2>4. Cookies</h2>

          <p>
            Na našej webovej stránke môžeme používať súbory cookies. Ide o malé
            textové súbory, ktoré sa ukladajú vo vašom zariadení.
          </p>

          <ul>
            <li>
              <strong>Nevyhnutné cookies</strong> – potrebné na technickú prevádzku webu.
            </li>
            <li>
              <strong>Analytické cookies</strong> – používame iba s vaším súhlasom.
            </li>
            <li>
              <strong>Reklamné cookies</strong> – používame iba s vaším súhlasom.
            </li>
          </ul>

          <p>
            Cookies môžete kedykoľvek odmietnuť alebo vymazať v nastavení svojho
            internetového prehliadača.
          </p>

          <h2>5. Vaše práva</h2>

          <p>V súvislosti so spracúvaním osobných údajov máte právo:</p>

          <ul>
            <li>požiadať o prístup k osobným údajom,</li>
            <li>požiadať o opravu nesprávnych údajov,</li>
            <li>požiadať o vymazanie údajov,</li>
            <li>požiadať o obmedzenie spracúvania,</li>
            <li>požiadať o prenosnosť údajov,</li>
            <li>namietať proti spracúvaniu na základe oprávneného záujmu.</li>
          </ul>

          <p>
            Ak sa domnievate, že s vašimi údajmi nezaobchádzame v súlade so zákonom,
            môžete podať sťažnosť na Úrad na ochranu osobných údajov SR,
            Galvaniho 7/B, 821 04 Bratislava.
          </p>

          <h2>6. Ďalšie informácie</h2>

          <p>
            V našej spoločnosti nemáme menovanú zodpovednú osobu pre ochranu
            osobných údajov, keďže nespĺňame zákonné podmienky pre jej povinné
            menovanie.
          </p>

          <p>
            Pri spracúvaní osobných údajov nedochádza k automatizovanému
            rozhodovaniu ani profilovaniu.
          </p>

          <p>
            Tieto zásady ochrany osobných údajov sú účinné od <strong>12. 6. 2026</strong>.
          </p>
        </div>
      </div>
    </main>
  )
}