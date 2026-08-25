import React, { useState } from 'react';
import { 
  Sparkles, Search, BookOpen, ShieldCheck, HelpCircle, 
  ArrowRight, Flame, Droplets, HeartHandshake, Disc3, Stethoscope, Eye, UserCheck, AlertTriangle
} from 'lucide-react';
import { CONDITIONS_DICTIONARY, QURAN_VERSES } from '../data/roqyaData';

interface DreamSymbolEntry {
  symbol: string;
  category: 'Animaux' | 'Objets' | 'Lieux' | 'Sensations' | 'Corps & Matières';
  meaning: string;
  occultTarget: string;
  associatedVerse: string;
  recommendedRemedy: string;
  pageRef?: string;
}

const DREAM_DICTIONARY: DreamSymbolEntry[] = [
  // --- PAGE 132 & PAGES 34-35 CRITERIA ---
  {
    symbol: 'Poursuite en rêve / Bloqué en fuite',
    category: 'Sensations',
    meaning: 'Sensation d\'être poursuivi, emprisonné ou incapable de courir / d\'avancer.',
    occultTarget: 'Blocage de vie / Sorcellerie du Cadenas (Sihr Al-Qufl)',
    associatedVerse: 'Sourate Al-Anbiya (21:30) - "Fafataqnahuma"',
    recommendedRemedy: 'Répéter le verset 21:30 en boucle, lavage 12 jours et vaporisation de la maison.',
    pageRef: 'Page 34, 36 & 132'
  },
  {
    symbol: 'Serpent / Vipère / Cobra',
    category: 'Animaux',
    meaning: 'Symbole direct de la sorcellerie réalisée avec des nœuds (11 nœuds) ou djinn hostile sociopathe.',
    occultTarget: 'Sorcellerie à Nœuds (Sihr Al-\'Uqad) / Djinn Serpent',
    associatedVerse: 'Sourate Taha (20:25-28) & Sourate Al-Falaq',
    recommendedRemedy: 'Lavage 12 jours à l\'eau chaude coranisée et massage à l\'huile de nigelle.',
    pageRef: 'Page 34, 36 & 132'
  },
  {
    symbol: 'Chiens / Hommes en uniforme / Corps habillés',
    category: 'Animaux',
    meaning: 'Rêver de chiens qui aboient ou mordent, ou de personnes vêtues de noir / uniformes.',
    occultTarget: 'Présence de Djinns / Djinns agresseurs',
    associatedVerse: 'Sourate Al-Ma\'idah (5:4) & Sourate Ar-Rahman (55:33-35)',
    recommendedRemedy: 'Écoute des versets brûlant les djinns et vaporisation du domicile.',
    pageRef: 'Page 35, 39 & 132'
  },
  {
    symbol: 'Bœuf / Taureau / Agression par une personne',
    category: 'Animaux',
    meaning: 'Rêver d\'être chargé par un bœuf ou frappé physiquement par un inconnu ou une connaissance.',
    occultTarget: 'Attaque directe de Sorciers / Commanditaires',
    associatedVerse: 'Sourate Yunus (10:81-82) & Sourate As-Saffat (37:177)',
    recommendedRemedy: 'Dou\'a de l\'opprimé la nuit, intention du retour à l\'envoyeur.',
    pageRef: 'Page 132 & Page 43'
  },
  {
    symbol: 'Eau / Mer / Vagues / Rivière / Masse d\'eau',
    category: 'Lieux',
    meaning: 'Rêver d\'étendues d\'eau, de noyade, de rivière tumultueuse ou de flots.',
    occultTarget: 'Sorcellerie immergée dans l\'Eau (Sihr Al-Miyah)',
    associatedVerse: 'Sourate Ash-Shu\'ara (26:63) - "Fanfalaqa fakana kullu firqin kattawdi al-\'adhim"',
    recommendedRemedy: 'Douches très chaudes avec l\'eau coranisée, bains de mer si possible.',
    pageRef: 'Page 34, 36 & 132'
  },
  {
    symbol: 'Monter, descendre, être en hauteur, chute dans le vide / Avion',
    category: 'Sensations',
    meaning: 'Rêver d\'être sur un toit, un arbre, dans un avion, ou faire des chutes vertigineuses interminables.',
    occultTarget: 'Sorcellerie suspendue à un Arbre ou exposée au Vent',
    associatedVerse: 'Sourate Al-An\'am (6:59) & Sourate Al-Hajj (22:31)',
    recommendedRemedy: 'Lavage 12 jours et récitation assidue de Sourate 6:59 et 22:31.',
    pageRef: 'Page 34, 36 & 132'
  },
  {
    symbol: 'Morts / Tombes / Funérailles / Cimetière',
    category: 'Lieux',
    meaning: 'Rêver de cadavres, de proches décédés, de tombes ou de marcher dans un cimetière.',
    occultTarget: 'Sorcellerie Enterrée dans un Cimetière (Sihr Al-Maqabir)',
    associatedVerse: 'Sourate Al-An\'am (6:122) - Verset de la revivification',
    recommendedRemedy: 'Hijama sur le haut du corps, 12 bouteilles d\'eau chaude, tisanes de Sidr.',
    pageRef: 'Page 34, 36 & 132'
  },
  {
    symbol: 'Voitures / Véhicules / Voyage / Chaussures',
    category: 'Objets',
    meaning: 'Rêver de véhicules en panne, de voyages manqués, de chaussures perdues ou abîmées.',
    occultTarget: 'Sorcellerie Piétinée / Trace des Pas',
    associatedVerse: 'Sourate Sad (38:42) - "Urkud birijlik"',
    recommendedRemedy: 'Hijama au bas des mollets/chevilles, massage huile de Habba Sawda.',
    pageRef: 'Page 34, 36 & 132'
  },
  {
    symbol: 'Feu / Braises / Fumée / Flammes',
    category: 'Sensations',
    meaning: 'Rêver d\'incendie, de maison qui brûle, de braises ardentes ou de fumerolles.',
    occultTarget: 'Sorcellerie du Feu / Brûlures occultes',
    associatedVerse: 'Sourate Al-Ma\'idah (5:64) - "Kullama awqadoo naran lilharbi atfa\'aha Allah"',
    recommendedRemedy: 'Bains coranisés froids ou tièdes, récitation de Sourate 5:64.',
    pageRef: 'Page 34, 37 & 132'
  },
  {
    symbol: 'Poisson / Hameçon',
    category: 'Animaux',
    meaning: 'Rêver de poissons capturés, d\'hameçons ou d\'arrêtes dans la bouche.',
    occultTarget: 'Sorcellerie jetée dans un Hameçon / avalée par un poisson',
    associatedVerse: 'Sourate As-Saffat (37:142-144) - Récit de Yunus',
    recommendedRemedy: 'Lavage 12 jours et récitation des versets 37:142-144.',
    pageRef: 'Page 35, 39 & 132'
  },
  {
    symbol: 'Enfants / Bébés (pour les femmes) / Vêtements',
    category: 'Objets',
    meaning: 'Rêver de bébés abandonnés, d\'enfants pleurant, ou de vêtements volés / déchirés.',
    occultTarget: 'Sorcellerie faite sur Habits Intimes ou Tissu personnel',
    associatedVerse: 'Sourate Al-A\'raf (7:26) - "Libas at-taqwa dhalika khayr"',
    recommendedRemedy: 'Lavage 12 jours et vaporisation des penderies et linges.',
    pageRef: 'Page 34, 37 & 132'
  },
  {
    symbol: 'Sang / Menstrues anormales (pour les femmes)',
    category: 'Corps & Matières',
    meaning: 'Rêver de sang qui coule, de taches rouges ou de règles souillées.',
    occultTarget: 'Sorcellerie faite avec le Sang des Règles',
    associatedVerse: 'Sourate Al-Baqara (2:222) - "Fa\'idha tatahharna"',
    recommendedRemedy: 'Tisane de Sidr pur (nettoie les organes et le sang) + Hijama.',
    pageRef: 'Page 35, 38 & 132'
  },
  {
    symbol: 'Rapports sexuels fréquents / Mari de nuit / Boughattat',
    category: 'Sensations',
    meaning: 'Rêves érotiques répétés, sentiment d\'étouffement au lit avec paralysie du sommeil.',
    occultTarget: 'Djinn Amoureux (Mass \'Ashiq) / Blocage du Mariage',
    associatedVerse: 'Sourate Al-A\'raf (7:22) & Sourate At-Tariq (86:5-6)',
    recommendedRemedy: 'Application d\'huile de Nigelle coranisée sur le nombril et les parties intimes avant de dormir.',
    pageRef: 'Page 10, 11, 35 & 132'
  },
  {
    symbol: 'Poupée piquée / Clous / Aiguilles',
    category: 'Objets',
    meaning: 'Douleurs physiques perçantes comme des coups de poignard ou d\'aiguilles.',
    occultTarget: 'Sorcellerie de Poupée piquée (Effigie / Envoûtement)',
    associatedVerse: 'Sourate Al-Ahzab (33:10-11) & Sourate Ash-Shura (42:37)',
    recommendedRemedy: 'Hijama sur les points douloureux précis + douches coranisées chaudes.',
    pageRef: 'Page 34, 38'
  },
  {
    symbol: 'Canari en terre cuite / Poteries enfouies',
    category: 'Objets',
    meaning: 'Sensation de destin écrasé sous une lourde pierre ou une jarre.',
    occultTarget: 'Sorcellerie du Canari / Récipient enfoui',
    associatedVerse: 'Sourate Al-Furqan (25:23) - "Haba\'an manthoora"',
    recommendedRemedy: 'Vaporisation aux 4 coins et récitation de Sourate 25:23.',
    pageRef: 'Page 34, 38'
  },
  {
    symbol: 'Excréments / Eaux d\'égouts / Toilettes sales',
    category: 'Lieux',
    meaning: 'Rêver d\'excréments, de tomber dans une fosse septique ou de saletés répugnantes.',
    occultTarget: 'Sorcellerie d\'Impureté & Déjections',
    associatedVerse: 'Sourate Al-Muddaththir (74:3-5) - "Wa thiyabaka fatahhir"',
    recommendedRemedy: 'Douches coranisées quotidiennes, propreté rituelle constante.',
    pageRef: 'Page 35, 39'
  },
  {
    symbol: 'Termites / Fourmis grouillantes',
    category: 'Animaux',
    meaning: 'Sensations de fourmillements sous la peau ou présence de colonies de djinns.',
    occultTarget: 'Sorcellerie de la Fourmilière / Djinns multiples',
    associatedVerse: 'Sourate Saba (34:14) - "Dabbatu al-ardi"',
    recommendedRemedy: 'Massage intégral du corps à l\'huile de Nigelle et récitation de Sourate 34:14.',
    pageRef: 'Page 35, 42'
  },
  {
    symbol: 'Piment / Brûlure gastrique intense',
    category: 'Corps & Matières',
    meaning: 'Brûlures comme du piment dans le corps, nervosité extrême à fleur de peau.',
    occultTarget: 'Sorcellerie du Piment / Poison de Zaqqoum',
    associatedVerse: 'Sourate Al-Waqi\'a (56:52-54) - Versets du Zaqqoum',
    recommendedRemedy: 'Tisane de Sana Makki + Sidr pendant 2 à 6 matins à jeun.',
    pageRef: 'Page 35, 40'
  },
  {
    symbol: 'Photo déformée / Visage enlaidit / Miroir noir',
    category: 'Objets',
    meaning: 'Sensation de laideur soudaine, regard fuyant dans le miroir, rejet des prétendants.',
    occultTarget: 'Sorcellerie sur Photo / Altération de la Personnalité',
    associatedVerse: 'Sourate Al-Infitar (82:8) & Sourate Al-A\'raf (7:11)',
    recommendedRemedy: 'Lavage du visage avec l\'eau coranisée et récitation de Sourate 7:11.',
    pageRef: 'Page 34, 37'
  },
  {
    symbol: 'Cheveux coupés / Crâne en feu',
    category: 'Corps & Matières',
    meaning: 'Chute brutale de cheveux inexpliquée médicalement, maux de tête accablants.',
    occultTarget: 'Sorcellerie sur Cheveux / Nœuds capillaires',
    associatedVerse: 'Sourate Maryam (19:4) - "Washta\'ala ar-ra\'su shayba"',
    recommendedRemedy: 'Massage du cuir chevelu avec l\'huile de Habba Sawda coranisée + Hijama à la nuque.',
    pageRef: 'Page 34, 37'
  },
  {
    symbol: '3 Os / Squelette / Fragilité osseuse',
    category: 'Corps & Matières',
    meaning: 'Douleurs profondes dans le squelette sans lésion radiologique.',
    occultTarget: 'Sorcellerie sur Ossements d\'animaux',
    associatedVerse: 'Sourate Ya-Sin (36:78-79) - "Man yuhyi al-\'idhama wa hiya ramim"',
    recommendedRemedy: 'Tisane de Sidr pur et récitation de Sourate 36:78-79.',
    pageRef: 'Page 35, 39'
  },
  {
    symbol: 'Âne / Incapacité à comprendre',
    category: 'Animaux',
    meaning: 'Blocage intellectuel soudain, stupidité ressentie lors des examens.',
    occultTarget: 'Sorcellerie de l\'Âne / Blocage des Études',
    associatedVerse: 'Sourate Al-Jumu\'a (62:5) - "Kamathali al-himari yahmilu asfara"',
    recommendedRemedy: 'Lavage de la tête et récitation de Sourate 62:5.',
    pageRef: 'Page 35, 39'
  }
];

// --- ANNEXE IV : ROQYA & MÉDECINE DATA ---
const MEDICAL_COMPARISONS = [
  {
    disease: 'Ulcères & Brûlures Digestives',
    medicalView: 'Attribués à l\'acidité gastrique, au stress ou à l\'alimentation. Traitement médical : antiacides (IPP).',
    roqyaDiagnosis: 'Dans 95% des cas, c\'est de la Sorcellerie Mangée (matière gluante collée aux parois de l\'estomac/intestins).',
    solution: 'Tisane de Sana Makki + Sidr à jeun pour décoller la substance par effet laxatif coranisé (Page 29 & 129).'
  },
  {
    disease: 'Psoriasis, Boutons & Eczéma Migratoire',
    medicalView: 'Maladie auto-immune de la peau sans cause claire. Traitements palliatifs à base de cortisone.',
    roqyaDiagnosis: 'Sorcellerie Piétinée (contact direct des pieds ou du corps avec le produit occulte sur le sol).',
    solution: 'Hijama au bas des mollets + massage quotidien à l\'huile de Nigelle (Habba Sawda) coranisée (Page 33 & 129).'
  },
  {
    disease: 'Plaies Ouvertes Inexpliquées',
    medicalView: 'Plaies résistant aux antibiotiques et cicatrisants, se creusant sans raison physiologique.',
    roqyaDiagnosis: 'Atteinte physique directe par Sorcellerie et Djinn logé dans la chair.',
    solution: 'Hijama locale pour extraire le sang corrompu + application d\'huile coranisée (Page 129).'
  },
  {
    disease: 'Impuissance & Pannes Sexuelles',
    medicalView: 'Attribuée au diabète ou à la dépression si l\'examen clinique est sans anomalie.',
    roqyaDiagnosis: 'Sihr Al-Ribât (Blocage sexuel) : l\'homme perd son érection uniquement à l\'approche de son épouse légitime.',
    solution: 'Hijama au-dessus du pubis + massage à l\'huile de Nigelle coranisée sur les zones intimes (Page 32 & 130).'
  },
  {
    disease: 'Stérilité Féminine Inexpliquée & Fausses Couches',
    medicalView: 'Bilan gynécologique normal, trompes saines, échecs répétés de FIV.',
    roqyaDiagnosis: 'Sorcellerie Déposée dans les Ovaires / Djinn Amoureux qui détruit le fœtus.',
    solution: 'Hijama sur les ovaires + 12 jours de lavage chaud + tisane de Sidr pour purifier les organes (Page 32 & 130).'
  },
  {
    disease: 'Troubles Mentaux & Fausse Folie',
    medicalView: 'Psychose ou dépression sévère, prescription de neuroleptiques lourds sans guérison.',
    roqyaDiagnosis: 'Possession par Djinn collé au système nerveux cérébral ou Sorcellerie de la Folie.',
    solution: 'Décollement du système nerveux (par petits coups tièdes à la tête selon le livre p.47) + Hijama à la nuque + Roqya intensive (Page 47 & 131).'
  }
];

interface RoqyaAdvisorProps {
  onSelectVerseToPlay?: (verseId: string) => void;
}

export const RoqyaAdvisor: React.FC<RoqyaAdvisorProps> = ({ onSelectVerseToPlay }) => {
  const [activeTab, setActiveTab] = useState<'dreams' | 'medicine' | 'captage'>('dreams');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');

  const categories = ['Tous', 'Animaux', 'Objets', 'Lieux', 'Sensations', 'Corps & Matières'];

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
      <div className="bg-gradient-to-r from-slate-900 via-amber-950/60 to-slate-900 rounded-3xl border border-amber-800/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-amber-900/80 text-amber-200 border border-amber-700/60 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Livre de Base de Ben Halima Abderraouf
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Conseiller & Décryptage du Livre
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
          Consultez les critères de diagnostic certains (p. 132), la correspondance Roqya & Médecine (Annexe IV) et les règles de combat spirituel contre les djinns et sorciers.
        </p>

        {/* Sub-Tabs Selector */}
        <div className="flex items-center gap-2 overflow-x-auto mt-6 pt-4 border-t border-slate-800 scrollbar-none">
          <button
            onClick={() => setActiveTab('dreams')}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              activeTab === 'dreams'
                ? 'bg-amber-600 text-white shadow-lg shadow-amber-950/80'
                : 'bg-slate-950/60 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>Dictionnaire des Rêves & Symboles (p. 132)</span>
          </button>

          <button
            onClick={() => setActiveTab('medicine')}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              activeTab === 'medicine'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950/80'
                : 'bg-slate-950/60 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <Stethoscope className="w-4 h-4" />
            <span>Roqya & Médecine Comparée (Annexe IV)</span>
          </button>

          <button
            onClick={() => setActiveTab('captage')}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              activeTab === 'captage'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-950/80'
                : 'bg-slate-950/60 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>Combat, Da'wa & Captage des Djinns (Ch. IV-V)</span>
          </button>
        </div>
      </div>

      {/* TAB 1: DREAMS DICTIONARY */}
      {activeTab === 'dreams' && (
        <div className="space-y-6">
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher un symbole (ex: serpent, cadenas, mer, chien, tombe, aiguilles, sang)..."
                className="w-full bg-slate-900/80 rounded-xl border border-slate-800 pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
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
                      : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Dream Cards */}
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
                    {item.pageRef && (
                      <span className="text-[10px] text-slate-500 font-mono">
                        {item.pageRef}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-white leading-snug">
                    {item.symbol}
                  </h3>

                  <div className="mt-1 text-xs text-emerald-400 font-semibold font-mono">
                    {item.occultTarget}
                  </div>

                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {item.meaning}
                  </p>
                </div>

                <div className="space-y-2 border-t border-slate-800 pt-3 text-xs">
                  <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80">
                    <span className="font-bold text-amber-300 block text-[11px] mb-0.5">
                      Verset Coranique d'Annulation :
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
      )}

      {/* TAB 2: ROQYA & MEDICINE */}
      {activeTab === 'medicine' && (
        <div className="space-y-6">
          <div className="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-800/40 text-xs sm:text-sm text-slate-300 space-y-2">
            <h3 className="text-base font-bold text-emerald-300 flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-emerald-400" />
              Principes d'Analyse (Extrait de l'Annexe IV du Livre de Ben Halima)
            </h3>
            <p className="leading-relaxed">
              La sorcellerie et les djinns occasionnent de multiples affections qui déroutent les analyses médicales. Le critère distinctif fondamental est le suivant : <em>« Si la médecine ne trouve rien alors que la personne souffre, ou si les traitements médicaux restent inefficaces, ou si le déclenchement est inexplicable rationnellement, c'est la marque d'un mal mystique. »</em>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MEDICAL_COMPARISONS.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 rounded-2xl border border-slate-800 p-5 shadow-lg space-y-3"
              >
                <h4 className="text-base font-bold text-white border-b border-slate-800 pb-2">
                  {item.disease}
                </h4>

                <div className="space-y-1.5 text-xs">
                  <div className="text-slate-400">
                    <strong className="text-slate-300">Constat Médical : </strong>
                    {item.medicalView}
                  </div>
                  <div className="text-amber-300/90">
                    <strong className="text-amber-200">Diagnostic Roqya : </strong>
                    {item.roqyaDiagnosis}
                  </div>
                  <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-800/50 text-emerald-200 mt-2">
                    <strong className="text-emerald-300">Protocole de Traitement : </strong>
                    {item.solution}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: CAPTAGE & MONDE DES DJINNS */}
      {activeTab === 'captage' && (
        <div className="bg-slate-900/80 rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-xl space-y-6 text-xs sm:text-sm text-slate-300">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-xl font-bold text-white">
              Comprendre les Djinns & le Combat Spirituel (Chapitres IV & V)
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Synthèse méthodologique du dialogue, de la Da'wa et de la neutralisation des djinns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
              <h4 className="font-bold text-amber-300 text-sm">1. Les 4 Motifs de Présence d'un Djinn :</h4>
              <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                <li><strong>La Sorcellerie (90%) :</strong> Le djinn est contraint par un sortilège de s'installer chez la victime.</li>
                <li><strong>La Vengeance :</strong> Geste brusque sans dire « Bismillah » (eau chaude jetée, coup accidentel).</li>
                <li><strong>L'Amour (Mass 'Ashiq) :</strong> Se déshabiller sans « Bismillah » ; le djinn s'éprend de la personne.</li>
                <li><strong>L'Hébergement :</strong> Djinn errant qui cherche un refuge dans une brèche causée par un ancien choc.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
              <h4 className="font-bold text-emerald-300 text-sm">2. Les Points Faibles des Djinns :</h4>
              <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                <li><strong>Le Feu & les Bougies (p.52) :</strong> Les djinns fondent à la chaleur ; placer deux bougies près des pieds pendant la lecture.</li>
                <li><strong>Le Sel & l'Eau de Mer (p.53) :</strong> L'eau de mer dissout l'emprise des djinns avec rapidité.</li>
                <li><strong>Ayat Al-Kursi & Ar-Rahman (55:33-35) :</strong> Brûlure et foudroiement spirituel des récalcitrants.</li>
                <li><strong>Le Rêve Lucide (p.54) :</strong> Réciter Sourate 2:148 ("Aynama takunoo") pour les attraper en rêve et les neutraliser.</li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-800/40 space-y-2">
            <h4 className="font-bold text-indigo-200 text-sm">3. Règle Fondamentale : Ne jamais attaquer le djinn avant d'enlever la sorcellerie</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Selon le Cheikh Ben Halima (p.47), si le djinn est enchaîné par une sorcellerie, le frapper ne fera que le torturer sans qu'il ne puisse sortir, aggravant les souffrances du malade. Il faut <strong>d'abord dissoudre la sorcellerie</strong> (12 bouteilles, Sana Makki, Hijama), après quoi le djinn sera libéré et partira naturellement par la grâce d'Allah.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
