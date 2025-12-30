import { useParams } from 'next/navigation';

export default function PortfolioSlugPage() {
  const params = useParams();
  const slug = params.slug as string;

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Projet: {slug}</h1>
        <div className="prose dark:prose-invert">
          <p>Détails du projet {slug} coming soon...</p>
        </div>
      </div>
    </div>
  );
}