import Link from "next/link";

export default function Commencer() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-10">
      <p className="font-titre text-2xl font-black">Fantômes</p>
      <h1 className="mt-10 font-titre text-4xl font-black leading-tight">On prépare tes trois questions.</h1>
      <p className="mt-4 text-lg leading-relaxed text-gris">
        Cette page sera la première étape de ton audit. Elle arrive très bientôt.
      </p>
      <Link href="/" className="mt-8 flex min-h-[56px] items-center justify-center bg-encre px-6 text-lg font-bold text-white">
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}
