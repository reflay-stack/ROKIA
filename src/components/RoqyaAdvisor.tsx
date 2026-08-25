import React, { useState } from 'react';
import { 
  Sparkles, Search, BookOpen, ShieldCheck, HelpCircle, 
  ArrowRight, Flame, Droplets, HeartHandshake, Disc3
} from 'lucide-react';
import { CONDITIONS_DICTIONARY, QURAN_VERSES } from '../data/roqyaData';

interface DreamSymbolEntry {
  symbol: string;
  category: 'Animaux' | 'Objets' | 'Lieux' | 'Sensations' | 'Corps';
  meaning: string;
  occultTarget: string;
  associatedVerse: string;
  recommendedRemedy: string;
}

const DREAM_DICTIONARY: DreamSymbolEntry[] = [
  {
    symbol: 'Serpent / Vipère / Cobra',
    category: 'Animaux',
    meaning: 'Symbole direct de la sorcellerie réalisée avec des nœuds et des fils soufflés (11 nœuds).',
    occultTarget: 'Sorcellerie à Nœuds (Sihr Al-\'Uqad)',
    associatedVerse: 'Sourate Taha (20:25-28) & Sourate Al-Falaq',
    recommendedRemedy: 'Lavage 12 jours à l\'eau coranisée et massage à l\'huile de nigelle.'
  },
  {
    symbol: 'Cadenas fermé / Pièce fermée / Poursuite',
    category: 'Objets',
    meaning: 'Symbole du verrouillage de la vie (mariage, travail, argent bloqué).',
    occultTarget: 'Sorcellerie du Cadenas (Sihr Al-Qufl)',
    associatedVerse: 'Sourate Al-Anbiya (21:30) - "Fafataqnahuma"',
    recommendedRemedy: 'Répéter le verset 21:30 en boucle et vaporiser la maison.'
  },
  {
    symbol: 'Cimetière / Tombe / Cercueil / Défunts',
    category: 'Lieux',
    meaning: 'Le sortilège a été enterré dans une fosse ou avec un mort pour causer apathie et dépression.',
    occultTarget: 'Sorcellerie Enterrée (Sihr Al-Maqabir)',
    associatedVerse: 'Sourate Al-An\'am (6:122) - Verset de la résurrection',
    recommendedRemedy: 'Hijama sur le haut du dos et 12 jours de lavage chaud.'
  },
  {
    symbol: 'Mer agitée / Vagues / Rivière / Puits',
    category: 'Lieux',
    meaning: 'Le sortilège a été jeté dans un cours d\'eau ou au fond d\'un puits.',
    occultTarget: 'Sorcellerie jetée dans l\'Eau (Sihr Al-Miyah)',
    associatedVerse: 'Sourate Ash-Shu\'ara (26:63) - "Fanfalaqa"',
    recommendedRemedy: 'Douches chaudes abondantes et écoute de Sourate 26:63.'
  },
  {
    symbol: 'Chien noir agressif / Bêtes sauvages',
    category: 'Animaux',
    meaning: 'Attaque violente d\'un djinn vengeur ou sorcellerie faite avec des poils de bêtes.',
    occultTarget: 'Djinn de Vengeance / Sorcellerie Mukallibeen',
    associatedVerse: 'Sourate Al-Ma\'idah (5:4) & Sourate Ar-Rahman (55:33-35)',
    recommendedRemedy: 'Vaporiser les coins de la maison et écouter les versets brûlant les djinns.'
  },
  {
    symbol: 'Rapports intimes fréquents en rêve',
    category: 'Sensations',
    meaning: 'Présence d\'un djinn amoureux (Mass \'Ashiq) ou sorcellerie sur sous-vêtements / sécrétions.',
    occultTarget: 'Djinn Amoureux & Sorcellerie d\'Impureté',
    associatedVerse: 'Sourate Al-A\'raf (7:22) & Sourate At-Tariq (86:5-7)',
    recommendedRemedy: 'Application d\'huile de nigelle coranisée sur les parties intimes avant le coucher.'
  },
  {
    symbol: 'Poupée piquée d\'aiguilles / Clous',
    category: 'Objets',
    meaning: 'Sorcellerie d\'envoûtement sur effigie provoquant des douleurs physiques aiguës.',
    occultTarget: 'Poupée piquée / Effigie',
    associatedVerse: 'Sourate Al-Ahzab (33:10-11)',
    recommendedRemedy: 'Hijama sur les points de piqûre et massage à l\'huile coranisée.'
  },
  {
    symbol: 'Canari en terre cuite / Marmite brisée',
    category: 'Objets',
    meaning: 'Sorcellerie d\'écrasement enfouie visant à anéantir tous les gains et projets d\'un foyer.',
    occultTarget: 'Sorcellerie du Canari',
    associatedVerse: 'Sourate Al-Furqan (25:23) - "Haba\'an manthoora"',
    recommendedRemedy: 'Vaporisation aux 4 coins et lecture de Sourate Al-Baqara.'
  },
  {
    symbol: 'Chute sans fin dans le vide / Hauteurs',
    category: 'Sensations',
    meaning: 'Sorcellerie suspendue à un arbre ou dans les airs, provoquant vertiges et instabilité.',
    occultTarget: 'Sorcellerie Suspendue au Vent',
    associatedVerse: 'Sourate Al-Hajj (22:31)',
    recommendedRemedy: 'Lavage 12 jours et récitation de Sourate 22:31.'
  }
];

interface RoqyaAdvisorProps {
  onSelectVerseToPlay?: (verseId: string) => void;
}

export const RoqyaAdvisor: React.FC<RoqyaAdvisorProps> = ({ onSelectVerseToPlay }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');

  const categories = ['Tous', 'Animaux', 'Objets', 'Lieux', 'Sensations'];

  const filteredSymbols = DREAM_DICTIONARY.filter((entry) => {
    const matchCat = selectedCategory === 'Tous' || entry.category === selectedCategory;
    const matchQuery =
      entry.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.occultTarget.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-amber-950/50 to-slate-900 rounded-3xl border border-amber-800/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-amber-900/80 text-amber-200 border border-amber-700/60 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Dictionnaire des Symboles & Rêves
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Décryptage Symbolique selon Ben Halima
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
          Dans la méthodologie de Ben Halima Abderraouf, les rêves récurrents ne sont pas de simples illusions : ils révèlent le support matériel précis de la sorcellerie pour appliquer le verset coranique d\'annulation correspondant.
        </p>

        {/* Search Bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un symbole (ex: serpent, cadenas, mer, chien, tombe, aiguilles)..."
              className="w-full bg-slate-950/80 rounded-xl border border-slate-800 pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-600 text-white shadow'
                    : 'bg-slate-950/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Symbol Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSymbols.map((item, idx) => (
          <div
            key={idx}
            className="bg-slate-900/80 rounded-2xl border border-slate-800 hover:border-amber-700/60 p-5 shadow-lg flex flex-col justify-between space-y-4 transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800/60">
                  {item.category}
                </span>
                <span className="text-xs text-emerald-400 font-semibold font-mono">
                  {item.occultTarget}
                </span>
              </div>

              <h3 className="text-base font-bold text-white leading-snug">
                {item.symbol}
              </h3>

              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                {item.meaning}
              </p>
            </div>

            <div className="space-y-2 border-t border-slate-800 pt-3 text-xs">
              <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80">
                <span className="font-bold text-amber-300 block text-[11px] mb-0.5">
                  Verset Coranique d\'Annulation :
                </span>
                <p className="text-slate-200">{item.associatedVerse}</p>
              </div>

              <div className="bg-slate-950/40 p-2.5 rounded-xl border border-slate-800/60">
                <span className="font-bold text-teal-300 block text-[11px] mb-0.5">
                  Soin Pratique Recommandé :
                </span>
                <p className="text-slate-400">{item.recommendedRemedy}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredSymbols.length === 0 && (
        <div className="p-8 text-center bg-slate-900/60 rounded-2xl border border-slate-800">
          <p className="text-slate-400 text-sm">
            Aucun symbole trouvé pour "{searchQuery}". Essayez d'autres termes comme <em>serpent</em>, <em>cadenas</em>, <em>mer</em> ou <em>cimetière</em>.
          </p>
        </div>
      )}
    </div>
  );
};
