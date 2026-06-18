import Link from 'next/link'
import { HouseIcon } from 'lucide-react'
import styles from './legal.module.css'

export function Vop() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          <HouseIcon size={18} />
          <span>Návrat na hlavnú stránku</span>
        </Link>

        <h1>Všeobecné obchodné podmienky</h1>

        <div className={styles.card}>
          <p>
            Tieto všeobecné obchodné podmienky upravujú práva a povinnosti
            medzi poskytovateľom služieb a objednávateľom, ktorým je spotrebiteľ.
          </p>

          <h2>1. Všeobecné ustanovenia</h2>

          <p>
            Poskytovateľom služieb je <strong>REKOFIN MR s.r.o.</strong>,
            so sídlom Šustekova 15, 851 04 Bratislava, IČO: 50439707,
            DIČ: 2120336229, zapísaná v Obchodnom registri Mestského súdu
            Bratislava III, oddiel Sro, vložka číslo 113432/B.
          </p>

          <p>
            Kontaktný e-mail poskytovateľa:{' '}
            <a href="mailto:caspredusu@gmail.com">caspredusu@gmail.com</a>.
          </p>

          <p>
            Objednávateľom je fyzická osoba – spotrebiteľ, ktorá pri uzatváraní
            a plnení zmluvy nekoná v rámci svojej podnikateľskej činnosti,
            zamestnania alebo povolania.
          </p>

          <p>
            Orgánom dozoru pre ochranu spotrebiteľa je Slovenská obchodná
            inšpekcia, Inšpektorát SOI pre Bratislavský kraj, Bajkalská 21/A,
            827 99 Bratislava.
          </p>

          <h2>2. Objednávka a uzatvorenie zmluvy</h2>

          <p>
            K uzatvoreniu zmluvy o poskytnutí služby dochádza prostredníctvom
            webovej stránky poskytovateľa, e-mailom alebo telefonicky.
          </p>

          <p>
            Odoslaním objednávky spotrebiteľ potvrdzuje, že sa oboznámil
            s týmito VOP a súhlasí s nimi.
          </p>

          <p>
            Zmluva je uzatvorená momentom, keď poskytovateľ doručí
            spotrebiteľovi záväzné potvrdenie objednávky e-mailom.
          </p>

          <h2>3. Cena služieb a platobné podmienky</h2>

          <p>
            Všetky ceny služieb uvedené na webovej stránke sú konečné.
            Poskytovateľ nie je platcom DPH.
          </p>

          <p>
            Spotrebiteľ je povinný zaplatiť cenu za službu spôsobom, ktorý si
            zvolil v objednávke, a to bankovým prevodom, QR kódom alebo
            v hotovosti.
          </p>

          <p>
            Splatnosť faktúry alebo zálohovej platby je 7 dní od jej vystavenia.
            Služba bude poskytnutá až po pripísaní platby na účet poskytovateľa,
            ak sa strany nedohodli inak.
          </p>

          <h2>4. Poskytovanie služieb</h2>

          <p>
            Poskytovateľ sa zaväzuje dodať službu v dohodnutom termíne
            a v zodpovedajúcej kvalite.
          </p>

          <p>
            Spotrebiteľ je povinný poskytnúť poskytovateľovi potrebnú súčinnosť,
            najmä dostaviť sa na dohodnutý termín a poskytnúť pravdivé vstupné
            informácie.
          </p>

          <h2>5. Odstúpenie od zmluvy a storno podmienky</h2>

          <p>
            Spotrebiteľ má právo odstúpiť od zmluvy bez uvedenia dôvodu do
            14 dní od dňa online rezervácie alebo potvrdenia objednávky.
          </p>

          <p>
            Spotrebiteľ odoslaním objednávky vyhlasuje, že bol riadne poučený
            a súhlasí s tým, aby sa poskytovanie služby začalo pred uplynutím
            14-dňovej lehoty.
          </p>

          <p>
            Spotrebiteľ berie na vedomie, že po úplnom poskytnutí služby stráca
            právo na odstúpenie od zmluvy a vrátenie peňazí.
          </p>

          <p>
            Ak spotrebiteľ zruší dohodnutý termín menej ako 24 hodín pred
            plánovaným začiatkom služby alebo sa na termín nedostaví,
            poskytovateľovi vzniká nárok na storno poplatok vo výške 20 €.
          </p>

          <p>
            Ak spotrebiteľ zaplatil službu vopred, poskytovateľ mu vráti
            uhradenú sumu zníženú o storno poplatok. Ak spotrebiteľ vopred
            neplatil, poskytovateľ mu môže vystaviť faktúru na sumu storno
            poplatku so splatnosťou 7 dní.
          </p>

          <h2>6. Reklamácie a zodpovednosť za služby</h2>

          <p>
            Poskytovateľ zodpovedá za to, že služby budú poskytnuté riadne,
            odborne a v súlade s dohodnutým časovým rozsahom.
          </p>

          <p>
            Objednávateľ berie na vedomie, že techniky uvoľňovania emócií podľa
            Dr. Bradleyho Nelsona sú alternatívnou energetickou metódou.
            Reakcie organizmu sú individuálne.
          </p>

          <p>
            Dočasné emocionálne výkyvy, únava alebo krátkodobé zhoršenie nálady
            sa nepovažujú za vadu služby.
          </p>

          <p>Spotrebiteľ má právo službu reklamovať najmä v prípade, ak:</p>

          <ul>
            <li>služba nebola poskytnutá vôbec,</li>
            <li>služba bola neodôvodnene skrátená,</li>
            <li>služba bola vykonaná v nevhodných hygienických podmienkach,</li>
            <li>
              poskytovateľ nepostupoval v súlade s dohodnutým charakterom služby.
            </li>
          </ul>

          <p>
            Reklamáciu je potrebné uplatniť bezodkladne, ideálne ihneď po
            ukončení služby, prípadne písomne na e-mail{' '}
            <a href="mailto:caspredusu@gmail.com">caspredusu@gmail.com</a>,
            najneskôr do 14 dní.
          </p>

          <p>
            Vybavenie reklamácie nesmie trvať dlhšie ako 30 dní. Ak je
            reklamácia opodstatnená, spotrebiteľ má právo na primeranú zľavu,
            opakovanie služby alebo vrátenie peňazí.
          </p>

          <h2>7. Dôležité upozornenie</h2>

          <p>
            Poskytované služby slúžia ako podpora psychickej pohody, relaxácie,
            osobného rozvoja a skrášľovania.
          </p>

          <p>
            Služby nenahrádzajú odbornú lekársku, psychiatrickú, psychologickú
            ani inú zdravotnú starostlivosť. Poskytovateľ nediagnostikuje
            ochorenia a nezaručuje konkrétne zdravotné výsledky.
          </p>

          <h2>8. Alternatívne riešenie sporov</h2>

          <p>
            Spotrebiteľ má právo obrátiť sa na poskytovateľa so žiadosťou
            o nápravu e-mailom na{' '}
            <a href="mailto:caspredusu@gmail.com">caspredusu@gmail.com</a>,
            ak nie je spokojný so spôsobom vybavenia reklamácie alebo sa domnieva,
            že poskytovateľ porušil jeho práva.
          </p>

          <p>
            Ak poskytovateľ odpovie zamietavo alebo neodpovie do 30 dní,
            spotrebiteľ má právo podať návrh na začatie alternatívneho riešenia
            sporu podľa zákona č. 391/2015 Z. z.
          </p>

          <p>
            Príslušným subjektom alternatívneho riešenia sporov je Slovenská
            obchodná inšpekcia, Ústredný inšpektorát SOI, Odbor pre alternatívne
            riešenie sporov, Bajkalská 21/A, p. p. 29, 827 99 Bratislava.
          </p>

          <p>
            Spotrebiteľ môže využiť aj platformu riešenia sporov online dostupnú
            na stránke Európskej komisie.
          </p>

          <h2>9. Záverečné ustanovenia</h2>

          <p>
            Právne vzťahy medzi poskytovateľom a spotrebiteľom, ktoré nie sú
            upravené týmito VOP, sa riadia príslušnými ustanoveniami Občianskeho
            zákonníka a zákona o ochrane spotrebiteľa.
          </p>

          <p>
            Tieto VOP sú platné a účinné od <strong>12. 6. 2026</strong>.
          </p>
        </div>
      </div>
    </main>
  )
}