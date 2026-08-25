import React, { useState } from 'react';
import { 
  BookOpen, Droplets, Flame, ShieldAlert, Sparkles, Home, 
  HelpCircle, AlertTriangle, CheckCircle2, ChevronDown, ChevronUp, 
  ShieldCheck, CupSoda, Footprints, HeartCrack
} from 'lucide-react';

export const PracticalGuide: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('water');

  const sections = [
    { id: 'water', title: '1. Coraniser l\'Eau & l\'Huile', icon: Droplets },
    { id: 'shower', title: '2. Protocole du Lavage Corporel', icon: Sparkles },
    { id: 'sana', title: '3. Tisane Sana Makki & Sidr', icon: CupSoda },
    { id: 'hijama', title: '4. Hijama & Massage Nigelle', icon: Flame },
    { id: 'house', title: '5. Purification de la Maison', icon: Home },
    { id: 'warnings', title: '6. Règles d\'Or & Charlatans', icon: ShieldAlert },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Guide Header */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950/70 to-slate-900 rounded-3xl border border-emerald-800/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-emerald-900/80 text-emerald-200 border border-emerald-700/60 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            Encyclopédie Pratique
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Guide des Remèdes & Recettes Thérapeutiques
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
          Fiches pratiques détaillées pas à pas tirées des enseignements orthodoxes de Ben Halima Abderraouf. Préparation exacte, posologies, précautions et mise en garde contre le shirk.
        </p>

        {/* Quick Nav Chips */}
        <div className="flex items-center gap-2 overflow-x-auto mt-6 pt-4 border-t border-slate-800/80 scrollbar-none">
          {sections.map((sec) => {
            const Icon = sec.icon;
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => setActiveSection(sec.id)}
                className={`whitespace-nowrap px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950/80'
                    : 'bg-slate-950/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{sec.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* SECTION 1 : CORANISER L'EAU ET L'HUILE */}
      {activeSection === 'water' && (
        <div className="bg-slate-900/80 rounded-3xl border border-emerald-800/40 p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-700/50 flex items-center justify-center text-emerald-300">
              <Droplets className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">
                Comment Coraniser l\'Eau, l\'Huile d\'Olive & la Nigelle
              </h2>
              <p className="text-xs text-slate-400">
                La méthode authentique du Nafth (souffle avec fines gouttelettes de salive)
              </p>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-300">
            <p className="leading-relaxed">
              La coranisation consiste à transmettre l\'énergie spirituelle et divine de la Parole d\'Allah (Al-Qur\'an) dans un élément liquide ou gras qui servira de véhicule curatif.
            </p>

            <div className="space-y-3">
              <h3 className="text-sm font-bold text-emerald-300 uppercase tracking-wider">
                Protocole de récitation étape par étape :
              </h3>
              
              <div className="grid grid-cols-1 gap-3">
                <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-900 text-emerald-200 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">1</span>
                  <div>
                    <h4 className="font-bold text-white">Posture et Proximité</h4>
                    <p className="text-slate-400 text-xs mt-0.5">
                      Ouvrir le bidon d\'eau (5 à 10 litres) ou la fiole d\'huile. Approcher la bouche très près du goulot (à 2-3 cm) pour que le souffle et les vibrations atteignent directement le liquide.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-900 text-emerald-200 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">2</span>
                  <div>
                    <h4 className="font-bold text-white">Les Versets Majeurs à Réciter</h4>
                    <p className="text-slate-400 text-xs mt-0.5">
                      Réciter avec ferveur et présence de cœur : <strong>Al-Fatiha (7 fois)</strong>, <strong>Ayat Al-Kursi (7 fois)</strong>, les versets d\'annulation de Moïse (Al-A\'raf 117-122, Yunus 81-82, Taha 68-70) et les <strong>3 dernières Sourates Protectrices (3 fois chacune)</strong>.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-900 text-emerald-200 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">3</span>
                  <div>
                    <h4 className="font-bold text-white">Le Nafth (Le Souffle Béni)</h4>
                    <p className="text-slate-400 text-xs mt-0.5">
                      Après chaque récitation de sourate ou de verset, souffler dans le récipient avec un léger postillon d\'air et de salive (Sunnah prophétique rapportée dans Sahih Al-Bukhari).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-800/40 text-emerald-200 text-xs">
              <strong className="text-emerald-300">Note pratique :</strong> Une seule grande coranisation de 10 à 20 litres peut suffire pour les 12 jours de lavage et la boisson.
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2 : PROTOCOLE DE LAVAGE CORPOREL */}
      {activeSection === 'shower' && (
        <div className="bg-slate-900/80 rounded-3xl border border-emerald-800/40 p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="w-10 h-10 rounded-xl bg-teal-950 border border-teal-700/50 flex items-center justify-center text-teal-300">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">
                Règles du Lavage Corporel à l\'Eau Chaude (12 Jours)
              </h2>
              <p className="text-xs text-slate-400">
                Pourquoi la chaleur et pourquoi l\'usage strict de la bassine
              </p>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
                <h3 className="font-bold text-white text-sm flex items-center gap-2 text-teal-300">
                  <Flame className="w-4 h-4 text-amber-400" />
                  1. Pourquoi l\'Eau Doit Être Chaude ?
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Selon Ben Halima Abderraouf, la sorcellerie et les djinns fuient le Coran mais sont également désintégrés par l\'effet thermique de l\'eau coranisée chaude. L\'eau froide fige la matière sorcière, tandis que l\'eau chaude ouvre les pores et dissout les nœuds magnétiques.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
                <h3 className="font-bold text-white text-sm flex items-center gap-2 text-teal-300">
                  <Droplets className="w-4 h-4 text-teal-400" />
                  2. La Bassine de Récupération
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Il est strictement interdit de laisser couler l\'eau coranisée dans les siphons de douche ou les toilettes par respect pour les Paroles sacrées. Placez-vous entièrement nu dans une grande bassine propre pour récolter 100% de l\'eau usée.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-800/40 text-amber-200 text-xs">
              <strong className="text-amber-300">Où vider l\'eau après la douche ?</strong>
              <p className="mt-1">
                Portez la bassine à l\'extérieur et versez l\'eau dans la terre, au pied d\'un arbre, dans un jardin ou sur des plantes saines. Si vous vivez en appartement sans balcon ni terre, versez-la dans les pots de fleurs ou dans un espace végétal public propre.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 3 : TISANE SANA MAKKI */}
      {activeSection === 'sana' && (
        <div className="bg-slate-900/80 rounded-3xl border border-emerald-800/40 p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-950 border border-amber-700/50 flex items-center justify-center text-amber-300">
              <CupSoda className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">
                Tisane de Séné (Sana Makki) & Feuilles de Sidr
              </h2>
              <p className="text-xs text-slate-400">
                La prescription capitale pour purger la Sorcellerie mangée ou bue
              </p>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-300">
            <p className="leading-relaxed">
              Le Prophète ﷺ a dit : <em>« Utilisez le Séné (Sana) et le Sanout, car il y a en eux une guérison contre tout mal sauf la mort »</em> (Rapporté par Ibn Majah).
            </p>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-3">
              <h3 className="font-bold text-amber-300 text-sm">Recette et Posologie Exacte :</h3>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Dosage :</strong> 2 cuillères à soupe de feuilles séchées de Sana Makki + 1 cuillère à café de feuilles de Sidr (Jujubier).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Cuisson :</strong> Faire bouillir dans 50 cl d\'eau coranisée pendant 10 à 15 minutes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Prise :</strong> Filtrer, ajouter une cuillère de miel pur coranisé, et boire tiède le matin strictement à jeun.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Durée :</strong> 3 à 5 jours consécutifs maximum.</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-800/50 text-rose-200 text-xs">
              <strong className="text-rose-300">Contre-indications strictes :</strong>
              <p className="mt-0.5">
                Ne pas administrer aux femmes enceintes ou allaitantes, aux jeunes enfants de moins de 12 ans, ni aux personnes souffrant d\'occlusion intestinale ou de rectocolite aiguë.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 4 : HIJAMA ET MASSAGE */}
      {activeSection === 'hijama' && (
        <div className="bg-slate-900/80 rounded-3xl border border-emerald-800/40 p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="w-10 h-10 rounded-xl bg-rose-950 border border-rose-700/50 flex items-center justify-center text-rose-300">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">
                Hijama (Ventouses Humides) & Massage à la Nigelle
              </h2>
              <p className="text-xs text-slate-400">
                Extraction des toxines occultes et soulagement des sorcelleries déposées
              </p>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-300">
            <p className="leading-relaxed">
              La Hijama humide permet d\'extraire le sang vicié et d\'affaiblir considérablement l\'ancrage physique du djinn ou de la sorcellerie déposée sur un organe ou une articulation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <h3 className="font-bold text-emerald-300 text-sm mb-2">Points Sunnah Majeurs :</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Le point <strong>Al-Kâhil</strong> (entre les deux épaules à la base du cou) est le carrefour énergétique principal. En cas de migraines rebelles, poser la ventouse au sommet du crâne (Al-Hâmah). En cas de blocage intime ou sorcellerie d\'utérus, poser sur le bas du dos (lombaires) et au-dessus des ovaires.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <h3 className="font-bold text-emerald-300 text-sm mb-2">Massage à la Nigelle (Habba Sawda) :</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  L\'huile de nigelle est un composé que les djinns ne supportent pas. Masser les pieds pour la sorcellerie piétinée, ou la poitrine pour les angoisses et étouffements chaque soir après la douche chaude.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 5 : PURIFICATION MAISON */}
      {activeSection === 'house' && (
        <div className="bg-slate-900/80 rounded-3xl border border-emerald-800/40 p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-700/50 flex items-center justify-center text-indigo-300">
              <Home className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">
                Purification & Protection du Domicile
              </h2>
              <p className="text-xs text-slate-400">
                Vaporisation aux 4 coins et assainissement spirituel du foyer
              </p>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
              <h3 className="font-bold text-indigo-300 text-sm">Méthode du Vaporisateur :</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Mélanger 1 litre d\'eau coranisée avec 3 cuillères à soupe de gros sel marin dissous. Parcourir chaque pièce en vaporisant les 4 angles (hauts et bas), ainsi que les encadrements de fenêtres et le seuil de la porte d\'entrée en disant <em>« Bismillah »</em>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-800/40 text-amber-200 text-xs">
              <strong className="text-amber-300">Interdiction formelle :</strong> Ne jamais vaporiser l\'eau coranisée dans les toilettes ou les conduites d\'eaux usées.
            </div>
          </div>
        </div>
      )}

      {/* SECTION 6 : AVERTISSEMENTS & CHARLATANS */}
      {activeSection === 'warnings' && (
        <div className="bg-slate-900/80 rounded-3xl border border-rose-900/50 p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="w-10 h-10 rounded-xl bg-rose-950 border border-rose-700/50 flex items-center justify-center text-rose-300">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">
                Règles d\'Or & Dénonciation des Charlatans / Sorciers
              </h2>
              <p className="text-xs text-slate-400">
                Les critères orthodoxes pour reconnaître un faux guérisseur (Shirk majeur)
              </p>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-800/60 text-rose-200">
              <h3 className="font-bold text-rose-300 text-sm mb-2">
                Fuyez immédiatement toute personne qui :
              </h3>
              <ul className="space-y-2 text-xs">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✗</span>
                  <span>Vous demande le nom de votre mère ou votre date de naissance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✗</span>
                  <span>Vous donne des talismans (Hijab, Ta\'wiz), des carrés magiques ou des papiers pliés à porter sur vous.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✗</span>
                  <span>Demande le sacrifice d\'un animal (ex: poulet noir) sans prononcer le nom d\'Allah.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✗</span>
                  <span>Prétend connaître l\'invisible (Al-Ghayb) ou vous désigne nommément la personne qui vous a ensorcelé.</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-800/40 text-emerald-200 text-xs">
              <strong className="text-emerald-300">La Roqya Orthodoxe Authentique :</strong>
              <p className="mt-1">
                Elle repose uniquement sur la lecture claire du Coran en arabe, les invocations prophétiques authentiques, l\'eau pure, l\'huile de nigelle, le miel, la Hijama et le Tawheed absolu sans aucune pratique obscure.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
