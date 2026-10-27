import Link from "next/link";

const lignes = [
  { nom: "Essai vidéo jamais résilié", mois: "9,99 €", an: "119,88 €" },
  { nom: "Application remplacée par une autre", mois: "5,99 €", an: "71,88 €" },
  { nom: "Option activée une seule fois", mois: "3,00 €", an: "36,00 €" },
];

const benefices = [
  {
    titre: "Classé par ce que ça te coûte par an",
    texte: "Un prélèvement de 6 € par mois semble léger. À 72 € par an, il l'est moins. On te montre le vrai chiffre, du plus lourd au plus léger.",
  },
  {
    titre: "Une lettre de résiliation prête",
    texte: "Pour chaque abonnement trouvé, une lettre déjà rédigée. Tu la copies, tu l'envoies, c'est terminé.",
  },
  {
    titre: "Ton relevé reste chez toi",
    texte: "Le fichier est lu sur ton téléphone. Il n'est jamais envoyé sur un serveur. On garde seulement la liste des abonnements trouvés.",
  },
];

function Bouton({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/commencer"
      className={`flex min-h-[56px] items-center justify-center bg-tampon px-6 text-lg font-bold text-white active:bg-[#a52b22] ${className}`}
    >
      Commencer, c&apos;est gratuit
    </Link>
  );
}

export default function Accueil() {
  return (
    <main className="mx-auto max-w-2xl px-5 pb-32 pt-6 sm:pb-16">
      <p className="font-titre text-2xl font-black">Fantômes</p>

      <section className="pt-10">
        <h1 className="font-titre text-[2.35rem] font-black leading-[1.05] sm:text-5xl">
          Tu paies sûrement un abonnement dont tu ne te sers plus. Trouve-le en 2 minutes.
        </h1>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-gris">
          Dépose ton relevé : on débusque les prélèvements oubliés, et on te dit combien ils te coûtent par an.
        </p>
        <Bouton className="mt-7 sm:max-w-sm" />
        <p className="mt-3 text-sm text-gris">Sans carte bancaire. Sans compte pour commencer.</p>
      </section>

      <section className="mt-14" aria-labelledby="exemple">
        <h2 id="exemple" className="font-titre text-2xl font-black">
          Ce que ça donne sur un relevé
        </h2>
        <p className="mt-1 text-sm text-gris">Exemple pour illustrer. Les montants de ton relevé seront les tiens.</p>
        <div className="mt-4 border-y-2 border-encre">
          {lignes.map((l) => (
            <div key={l.nom} className="flex items-baseline justify-between gap-4 border-b border-trait py-3 last:border-b-0">
              <div>
                <p className="font-semibold">{l.nom}</p>
                <p className="text-sm text-gris">{l.mois} par mois</p>
              </div>
              <p className="font-titre text-xl font-black tabular-nums">{l.an}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-baseline justify-between gap-4">
          <p className="font-semibold">Perdu en un an</p>
          <p className="font-titre text-5xl font-black tabular-nums text-tampon">227,76 €</p>
        </div>
      </section>

      <section className="mt-14" aria-labelledby="benefices">
        <h2 id="benefices" className="sr-only">
          Ce que tu obtiens
        </h2>
        <ul className="space-y-8">
          {benefices.map((b) => (
            <li key={b.titre} className="border-l-4 border-encre pl-4">
              <h3 className="font-titre text-xl font-black">{b.titre}</h3>
              <p className="mt-1 leading-relaxed text-gris">{b.texte}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <p className="font-titre text-2xl font-black leading-tight">
          Deux minutes pour savoir. Rien à payer pour voir ce que tu perds.
        </p>
        <Bouton className="mt-6 sm:max-w-sm" />
      </section>

      <div className="fixed inset-x-0 bottom-0 z-10 border-t border-trait bg-papier p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:hidden">
        <Bouton />
      </div>
    </main>
  );
}
