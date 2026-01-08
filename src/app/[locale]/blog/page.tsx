import { MajorelleBlogPage } from '@/components/MajorelleBlogPage';
import { SmashyBurgerBlogPage } from '@/components/SmashyBurgerBlogPage';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Blog GDC</h1>
        <div className="space-y-8">
          <div>
            <Link href="/blog/majorelle-centre-affaires" className="block p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900">
              <h2 className="text-2xl font-semibold mb-2">Majorelle Centre Affaires</h2>
              <p className="text-gray-600 dark:text-gray-400">Découvrez notre projet pour Majorelle Centre Affaires</p>
            </Link>
          </div>
          <div>
            <Link href="/blog/smashy-burger" className="block p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900">
              <h2 className="text-2xl font-semibold mb-2">Smashy Burger</h2>
              <p className="text-gray-600 dark:text-gray-400">Le projet Smashy Burger par GDC</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}