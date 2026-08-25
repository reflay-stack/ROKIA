import { SymbolicVerseItem, ListeningReactionType } from '../types/roqya';

export interface ReactionInfo {
  type: ListeningReactionType;
  label: string;
  shortDesc: string;
  icon: string;
  severity: number;
}

export const LISTENING_REACTIONS: ReactionInfo[] = [
  {
    type: 'baillements',
    label: 'Bâillements répétés',
    shortDesc: 'Bâillements incontrôlables ou somnolence subite',
    icon: '🥱',
    severity: 1
  },
  {
    type: 'larmes',
    label: 'Larmes involontaires',
    shortDesc: 'Yeux qui piquent, larmes chaudes sans tristesse consciente',
    icon: '😢',
    severity: 1
  },
  {
    type: 'chaleur',
    label: 'Chaleur / Brûlure',
    shortDesc: 'Bouffée de chaleur vive dans le visage, le dos ou la poitrine',
    icon: '🔥',
    severity: 2
  },
  {
    type: 'froid',
    label: 'Frissons / Froid glacial',
    shortDesc: 'Chair de poule glaciale, sensation de froid dans les membres',
    icon: '❄️',
    severity: 2
  },
  {
    type: 'picotements',
    label: 'Picotements / Fourmillements',
    shortDesc: 'Aiguilles ou fourmis dans les mains, les pieds ou la tête',
    icon: '⚡',
    severity: 2
  },
  {
    type: 'oppression',
    label: 'Oppression thoracique',
    shortDesc: 'Poids sur la poitrine, cœur qui palpite, souffle court',
    icon: '🫁',
    severity: 2
  },
  {
    type: 'maux_tete',
    label: 'Pression à la tête',
    shortDesc: 'Étau sur les tempes, le front ou le sommet du crâne',
    icon: '🧠',
    severity: 2
  },
  {
    type: 'nausees',
    label: 'Nausées / Rots répétés',
    shortDesc: 'Remontées acides, spasmes gastriques, envie de vomir',
    icon: '🤢',
    severity: 3
  },
  {
    type: 'sursauts',
    label: 'Sursauts / Spasmes',
    shortDesc: 'Mouvements involontaires des doigts, des jambes ou paupières',
    icon: '〰️',
    severity: 3
  },
  {
    type: 'angoisse',
    label: 'Angoisse / Peur subite',
    shortDesc: 'Peur irrationnelle, envie de fuir ou d\'arrêter l\'écoute',
    icon: '😨',
    severity: 3
  }
];

export const SYMBOLIC_VERSES_LIST: SymbolicVerseItem[] = [
  // 1. LE CADENAS / FERMETURE
  {
    id: 'symbol_cadenas',
    symbolName: 'Symbole du Cadenas (Le Verrouillage)',
    symbolCategory: 'sorcellerie',
    surahNumber: 21,
    surahNameAr: 'سُورَةُ الأَنْبِيَاء (آية فك الرتق والقفل)',
    surahNameFr: 'Al-Anbiya (Verset 30 - Ouverture de ce qui était scellé)',
    verseRange: '30',
    arabicText: 'أَوَلَمْ يَرَ الَّذِينَ كَفَرُوا أَنَّ السَّمَاوَاتِ وَالْأَرْضَ كَانَتَا رَتْقًا فَفَتَقْنَاهُمَا ۖ وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ ۖ أَفَلَا يُؤْمِنُونَ',
    transliteration: 'Awalam yara alladhīna kafarū anna as-samāwāti wal-arḍa kānatā ratqan fafataqnāhumā wa jaʿalnā mina al-mā\'i kulla shay\'in ḥayyin afalā yu\'minūn.',
    frenchMeaning: 'Ceux qui ont mécru, n\'ont-ils pas vu que les cieux et la terre formaient une masse compacte (fermée) ? Ensuite Nous les avons séparés (ouverts/déverrouillés) et fait de l\'eau toute chose vivante...',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/021030.mp3',
    testedOccultAffliction: 'Sorcellerie du Cadenas / Blocage général de la destinée (Mariage impossible, travail bloqué, démarches systématiquement fermées).',
    benHalimaDiagnosticAdvice: 'Le terme coranique « Fatq » (فَتَقْنَاهُمَا) signifie l\'ouverture explosive de ce qui a été verrouillé. Si vous ressentez une réaction intense sur ce verset, un cadenas occulte scelle vos portes de réussite.',
    expectedReactionsIfAffected: ['Sensation d\'étau au niveau du cœur', 'Chaleur dans la poitrine', 'Lourdeur aux poignets', 'Grand soupir de libération'],
    remedyAction: 'Bain à l\'eau coranisée chaude (12 jours) avec intention d\'ouverture + Récitation 11x de ce verset.',
    badgeLabel: 'Symbole Cadenas'
  },

  // 2. LES NŒUDS / SERPENTS / FILS
  {
    id: 'symbol_noeuds',
    symbolName: 'Symbole des Nœuds & Cordes (Les Nœuds Sorciers)',
    symbolCategory: 'sorcellerie',
    surahNumber: 20,
    surahNameAr: 'سُورَةُ طه (آية فك العقد واللسان)',
    surahNameFr: 'Taha (Versets 25 à 28 - Dénouement des Nœuds)',
    verseRange: '25 - 28',
    arabicText: 'قَالَ رَبِّ اشْرَحْ لِي صَدْرِي ۝ وَيَسِّرْ لِي أَمْرِي ۝ وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي ۝ يَفْقَهُوا قَوْلِي',
    transliteration: 'Qāla rabbi ishrah lī ṣadrī, wa yassir lī amrī, waḥlul ʿuqdatan min lisānī, yafqahū qawlī.',
    frenchMeaning: 'Moïse dit : "Seigneur ! Épanouis ma poitrine, facilite ma tâche, et dénoue le nœud de ma langue, afin qu\'ils comprennent mes paroles".',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/020025.mp3',
    testedOccultAffliction: 'Sorcellerie par Nœuds et fils noués (souvent vue en rêve sous forme de serpents, fils emmêlés ou cordes serrées).',
    benHalimaDiagnosticAdvice: 'Le mot « \'Uqdah » (عُقْدَةً) cible directement les nœuds faits par le sorcier avec des cheveux ou des fils en récitant des incantations. Une réaction indique des nœuds physiques et énergétiques.',
    expectedReactionsIfAffected: ['Tensions nerveuses au cou et aux épaules', 'Gorge serrée ou difficulté à déglutir', 'Picotements le long de la colonne vertébrale'],
    remedyAction: 'Massage des articulations à l\'huile de nigelle coranisée + Récitation de la sourate Al-Falaq en insistant sur le verset 4.',
    badgeLabel: 'Symbole Nœuds'
  },

  // 3. LE CIMETIÈRE / TOMBES / MORTS
  {
    id: 'symbol_cimetiere',
    symbolName: 'Symbole du Cimetière (Sorcellerie Enterrée / Mort)',
    symbolCategory: 'sorcellerie',
    surahNumber: 6,
    surahNameAr: 'سُورَةُ الأَنْعَام (آية إحياء الميت والخروج من الظلمات)',
    surahNameFr: 'Al-An\'am (Verset 122 - Résurrection & Sortie de Tombe)',
    verseRange: '122',
    arabicText: 'أَوَمَن كَانَ مَيْتًا فَأَحْيَيْنَاهُ وَجَعَلْنَا لَهُ نُورًا يَمْشِي بِهِ فِي النَّاسِ كَمَن مَّثَلُهُ فِي الظُّلُمَاتِ لَيْسَ بِخَارِجٍ مِّنْهَا',
    transliteration: 'Awaman kāna maytan fa-aḥyaynāhu wa jaʿalnā lahu nūran yamshī bihi fī an-nāsi kaman mathaluhu fī aẓ-ẓulumāti laysa bikhārijin minhā...',
    frenchMeaning: 'Est-ce que celui qui était mort et que Nous avons ramené à la vie, et à qui Nous avons assigné une lumière avec laquelle il marche parmi les gens, est semblable à celui qui est dans les ténèbres sans pouvoir en sortir ?',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/006122.mp3',
    testedOccultAffliction: 'Sorcellerie enterrée dans un cimetière, sous une tombe ou liée à un cadavre (provoque idées noires, état dépressif lourd, apathie, envie de mourir).',
    benHalimaDiagnosticAdvice: 'Le verset oppose la mort et la vie divine. Si ce verset provoque des frissons froids ou des pleurs inexpliqués, le sortilège a été déposé dans une sépulture.',
    expectedReactionsIfAffected: ['Froid glacial dans le dos ou les jambes', 'Pleurs involontaires ou tristesse subite', 'Lourdeur écrasante sur tout le corps'],
    remedyAction: 'Douche à l\'eau très chaude coranisée + Récitation répétée de la sourate Al-An\'am (v.122) et Al-Hajj (v.7).',
    badgeLabel: 'Symbole Cimetière'
  },

  // 4. L'EAU / LA MER / LES FLEUVES
  {
    id: 'symbol_eau_mer',
    symbolName: 'Symbole de la Mer & des Eaux (Sorcellerie Immergée)',
    symbolCategory: 'sorcellerie',
    surahNumber: 26,
    surahNameAr: 'سُورَةُ الشُّعَرَاء (آية فلق البحر)',
    surahNameFr: 'Ash-Shu\'ara (Verset 63 - Séparation & Assèchement des Flots)',
    verseRange: '63',
    arabicText: 'فَأَوْحَيْنَا إِلَىٰ مُوسَىٰ أَنْ اضْرِب بِّعَصَاكَ الْبَحْرَ ۖ فَانفَلَقَ فَكَانَ كُلُّ فِرْقٍ كَالطَّوْدِ الْعَظِيمِ',
    transliteration: 'Fa-awḥaynā ilā Mūsā an iḍrib biʿaṣāka al-baḥra fanfalaqa fakāna kullu firqin kaṭ-ṭawdi al-ʿaẓīm.',
    frenchMeaning: 'Nous révélâmes à Moïse : "Frappe la mer de ton bâton". Elle se fendit alors, et chaque pan de mer fut semblable à une haute et puissante montagne.',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/026063.mp3',
    testedOccultAffliction: 'Sorcellerie jetée dans la mer, un fleuve, une rivière ou un puits submergé (se manifeste en rêve par des noyades, de l\'eau sale ou des tsunamis).',
    benHalimaDiagnosticAdvice: 'Le bâton de Moïse qui fend les eaux brise la protection aquatique du sortilège immergé. Réaction typique : sensation de flottement ou nausée.',
    expectedReactionsIfAffected: ['Sensation de vertige ou de tournis', 'Nausées légères ou remontées d\'eau', 'Sueurs froides'],
    remedyAction: 'Boire quotidiennement de l\'eau coranisée + lavage au gros sel marin coranisé.',
    badgeLabel: 'Symbole Eau/Mer'
  },

  // 5. LE PUITS / L'ABÎME PROFOND
  {
    id: 'symbol_puits',
    symbolName: 'Symbole du Puits (Sorcellerie en Profondeur / Puits)',
    symbolCategory: 'sorcellerie',
    surahNumber: 22,
    surahNameAr: 'سُورَةُ الحَجّ (آية البئر المعطلة)',
    surahNameFr: 'Al-Hajj (Verset 45 - Le Puits Abandonné)',
    verseRange: '45',
    arabicText: 'فَكَأَيِّن مِّن قَرْيَةٍ أَهْلَكْنَاهَا وَهِيَ ظَالِمَةٌ فَهِيَ خَاوِيَةٌ عَلَىٰ عُرُوشِهَا وَبِئْرٍ مُّعَطَّلَةٍ وَقَصْرٍ مَّشِيدٍ',
    transliteration: 'Faka\'ayyin min qaryatin ahlaknāhā wahiya ẓālimatun fahiya khāwiyatun ‘alā ‘urūshihā wa bi’rin mu‘aṭṭalatin wa qaṣrin mashīd.',
    frenchMeaning: 'Que de cités avons-Nous détruites parce qu\'elles étaient injustes ! Elles sont aujourd\'hui dévastées de fond en comble. Que de puits abandonnés et de palais édifiés !',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/022045.mp3',
    testedOccultAffliction: 'Sorcellerie jetée au fond d\'un puits ou d\'un trou très profond (provoque une claustrophobie étouffante et un sentiment d\'enfermement dans un gouffre).',
    benHalimaDiagnosticAdvice: 'Le terme « Bi\'rin Mu\'attalah » (وَبِئْرٍ مُّعَطَّلَةٍ) neutralise spécifiquement les charmes déposés dans les conduits d\'eau profonde ou les failles.',
    expectedReactionsIfAffected: ['Étouffement respiratoire soudain', 'Sensation de chute dans le vide', 'Pression intense sur le plexus solaire'],
    remedyAction: 'Récitation de la sourate Yusuf (v.15) et Al-Hajj (v.45) sur de l\'eau à asperger.',
    badgeLabel: 'Symbole Puits'
  },

  // 6. L'ARBRE / LE VENT / SUSPENDUE
  {
    id: 'symbol_arbre_vent',
    symbolName: 'Symbole du Vent & des Hauteurs (Sorcellerie Suspendue)',
    symbolCategory: 'sorcellerie',
    surahNumber: 22,
    surahNameAr: 'سُورَةُ الحَجّ (آية الريح وسقوط الطير)',
    surahNameFr: 'Al-Hajj (Verset 31 - Précipité par le Vent)',
    verseRange: '31',
    arabicText: 'حُنَفَاءَ لِلَّهِ غَيْرَ مُشْرِكِينَ بِهِ ۚ وَمَن يُشْرِكْ بِاللَّهِ فَكَأَنَّمَا خَرَّ مِنَ السَّمَاءِ فَتَخْطَفُهُ الطَّيْرُ أَوْ تَهْوِي بِهِ الرِّيحُ فِي مَكَانٍ سَحِيقٍ',
    transliteration: 'Wa man yushrik billāhi faka\'annamā kharra mina as-samā\'i fatakhṭafuhu aṭ-ṭayru aw tahwī bihi ar-rīḥu fī makānin saḥīq.',
    frenchMeaning: 'Quiconque associe à Allah, c\'est comme s\'il tombait du haut du ciel et que les oiseaux le happaient, ou que le vent le précipitait dans un abîme très lointain.',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/022031.mp3',
    testedOccultAffliction: 'Sorcellerie accrochée dans les branches d\'un arbre, sur un toit ou soumise aux courants d\'air (provoque instabilité d\'humeur, crises d\'angoisse au vent, vertiges).',
    benHalimaDiagnosticAdvice: 'Le vent qui souffle sur le sortilège réactive la souffrance de la personne. Ce verset brise le lien éolien du maléfice suspendu.',
    expectedReactionsIfAffected: ['Bourdonnements d\'oreilles', 'Tête qui tourne et instabilité', 'Sensation de courant d\'air froid sur la tête'],
    remedyAction: 'Asperger les rebords de fenêtres et portes d\'eau coranisée + lavage de la tête au Sidr.',
    badgeLabel: 'Symbole Vent/Arbre'
  },

  // 7. LE CANARI / RÉCIPIENT EN TERRE CUITE
  {
    id: 'symbol_canari',
    symbolName: 'Symbole du Canari & Récipients (Enfouissement sous Terre)',
    symbolCategory: 'sorcellerie',
    surahNumber: 25,
    surahNameAr: 'سُورَةُ الفُرْقَان (آية تفتيت الأعمال)',
    surahNameFr: 'Al-Furqan (Verset 23 - Poussière Éparpillée)',
    verseRange: '23',
    arabicText: 'وَقَدِمْنَا إِلَىٰ مَا عَمِلُوا مِنْ عَمَلٍ فَجَعَلْنَاهُ هَبَاءً مَّنثُورًا',
    transliteration: 'Wa qadimnā ilā mā ʿamilū min ʿamalin fajaʿalnāhu habā\'an manthūrā.',
    frenchMeaning: 'Nous avons considéré l\'œuvre qu\'ils ont accomplie et Nous l\'avons réduite en poussière éparpillée au vent.',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/025023.mp3',
    testedOccultAffliction: 'Sorcellerie du Canari (vase en terre cuite rempli d\'ingrédients occultes enterré dans le sol) ou fétichisme de blocage.',
    benHalimaDiagnosticAdvice: '« Haba\'an Manthoora » détruit et pulvérise les matières occultes enfermées dans les récipients magiques.',
    expectedReactionsIfAffected: ['Douleurs lombaires et au bas du dos', 'Lourdeur des cuisses et des genoux', 'Sueur chaude soudaine'],
    remedyAction: 'Récitation de la sourate Az-Zalzalah (7x) sur l\'eau du bain.',
    badgeLabel: 'Symbole Canari'
  },

  // 8. LA NOURRITURE / MANGER / BOIRE
  {
    id: 'symbol_mange_bu',
    symbolName: 'Symbole du Poison & Aliments (Sorcellerie Mangée ou Bue)',
    symbolCategory: 'sorcellerie',
    surahNumber: 56,
    surahNameAr: 'سُورَةُ الوَاقِعَة (آية شجر الزقوم وإبطال السحر المأكول)',
    surahNameFr: 'Al-Waqi\'a (Versets 51 à 54 - Arbre de Zaqqoum)',
    verseRange: '51 - 54',
    arabicText: 'ثُمَّ إِنَّكُمْ أَيُّهَا الضَّالُّونَ الْمُكَذِّبُونَ ۝ لَآكِلُونَ مِن شَجَرٍ مِّن زَقُّومٍ ۝ فَمَالِئُونَ مِنْهَا الْبُطُونَ ۝ فَشَارِبُونَ عَلَيْهِ مِنَ الْحَمِيمِ',
    transliteration: 'Thumma innakum ayyuhā aḍ-ḍāllūna al-mukadhdhibūn. La\'ākilūna min shajarin min zaqqūm. Famāli\'ūna minhā al-buṭūn. Fashāribūna ‘alayhi mina al-ḥamīm.',
    frenchMeaning: 'Puis vous, ô égarés, négateurs ! Vous mangerez certainement d\'un arbre de Zaqqoum. Vous vous en remplirez le ventre, puis vous boirez par-dessus de l\'eau bouillante...',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/056051.mp3',
    testedOccultAffliction: 'Sorcellerie ingérée (mangée ou bue avec boisson, café, gâteau) logée dans les parois de l\'estomac ou des intestins.',
    benHalimaDiagnosticAdvice: 'Le verset stimule violemment la matière magique fixée au tube digestif. Réaction typique : brûlures d\'estomac, salivation excessive, rots ou nausées.',
    expectedReactionsIfAffected: ['Rots continus et répétés', 'Nausées ou envie spontanée de vomir', 'Brûlures ou crampes intestinales'],
    remedyAction: 'Cure de tisane de Sana Makki (Séné) + Sidr pendant 3 à 5 jours à jeun le matin.',
    badgeLabel: 'Symbole Mangé/Bu'
  },

  // 9. LES CHAUSSURES / SEUILS / PIÉTINÉ
  {
    id: 'symbol_pietine_chaussures',
    symbolName: 'Symbole des Chaussures & Pas (Sorcellerie Piétinée / Aspergée)',
    symbolCategory: 'sorcellerie',
    surahNumber: 20,
    surahNameAr: 'سُورَةُ طه (آية خلع النعلين)',
    surahNameFr: 'Taha (Verset 12 - Enlève tes Sandales)',
    verseRange: '12',
    arabicText: 'إِنِّي أَنَا رَبُّكَ فَاخْلَعْ نَعْلَيْكَ ۖ إِنَّكَ بِالْوَادِ الْمُقَدَّسِ طُوًى',
    transliteration: 'Innī anā rabbuka fakhlaʿ naʿlayka innaka bil-wādī al-muqaddasi ṭuwā.',
    frenchMeaning: 'Je suis ton Seigneur. Enlève donc tes sandales, car tu es dans la vallée sacrée de Touwa.',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/020012.mp3',
    testedOccultAffliction: 'Sorcellerie aspergée sur le pas de porte, le seuil, le sol ou sur les chaussures (pénètre par la plante des pieds).',
    benHalimaDiagnosticAdvice: '« Fakhla\' na\'layk » (enlève tes sandales) coupe le venin occulte entré par les pieds et qui monte dans les jambes.',
    expectedReactionsIfAffected: ['Fourmillements et chaleur sous la plante des pieds', 'Douleurs aux chevilles et talons', 'Jambes lourdes et engourdies'],
    remedyAction: 'Bain de pieds à l\'eau tiède coranisée avec sel et feuilles de Sidr pendant 20 minutes.',
    badgeLabel: 'Symbole Piétiné'
  },

  // 10. LES HABITS / TISSUS / TRACES
  {
    id: 'symbol_habits_traces',
    symbolName: 'Symbole des Vêtements (Sorcellerie sur Tissus / Traces)',
    symbolCategory: 'sorcellerie',
    surahNumber: 7,
    surahNameAr: 'سُورَةُ الأَعْرَاف (آية اللباس وستر العورات)',
    surahNameFr: 'Al-A\'raf (Verset 26 - Le Vêtement Protecteur)',
    verseRange: '26',
    arabicText: 'يَا بَنِي آدَمَ قَدْ أَنزَلْنَا عَلَيْكُمْ لِبَاسًا يُوَارِي سَوْآتِكُمْ وَرِيشًا ۖ وَلِبَاسُ التَّقْوَىٰ ذَٰلِكَ خَيْرٌ',
    transliteration: 'Yā banī Ādama qad anzalnā ‘alaykum libāsan yuwārī saw’ātikum wa rīshan wa libāsu at-taqwā dhālika khayr.',
    frenchMeaning: 'Ô enfants d\'Adam ! Nous avons fait descendre sur vous un vêtement pour cacher vos nudités, ainsi que des parures. Mais le vêtement de la piété voilà qui est meilleur.',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/007026.mp3',
    testedOccultAffliction: 'Sorcellerie confectionnée avec un vêtement volé, sous-vêtement, trace de transpiration ou cheveu.',
    benHalimaDiagnosticAdvice: 'Ce verset rétablit le bouclier protecteur du corps face aux sortilèges attachés aux traces vestimentaires.',
    expectedReactionsIfAffected: ['Démangeaisons subites sur la peau', 'Frémissements cutanés', 'Impression d\'avoir des habits trop serrés'],
    remedyAction: 'Laver ses vêtements avec un peu d\'eau coranisée + frictionner le corps à l\'huile d\'olive coranisée.',
    badgeLabel: 'Symbole Habits'
  },

  // 11. LA POUPÉE / AIGUILLES
  {
    id: 'symbol_poupee_aiguilles',
    symbolName: 'Symbole des Aiguilles & Poupées (Douleurs Lancinantes)',
    symbolCategory: 'sorcellerie',
    surahNumber: 33,
    surahNameAr: 'سُورَةُ الأَحْزَاب (آية زلزال القلوب ودفع الطعن)',
    surahNameFr: 'Al-Ahzab (Versets 10 à 11 - Assaut et Secousse)',
    verseRange: '10 - 11',
    arabicText: 'إِذْ جَاءُوكُم مِّن فَوْقِكُمْ وَمِنْ أَسْفَلَ مِنكُمْ وَإِذْ زَاغَتِ الْأَبْصَارُ وَبَلَغَتِ الْقُلُوبُ الْحَنَاجِرَ وَتَظُنُّونَ بِاللَّهِ الظُّنُونَا ۝ هُنَالِكَ ابْتُلِيَ الْمُؤْمِنُونَ وَزُلْزِلُوا زِلْزَالًا شَدِيدًا',
    transliteration: 'Idh jā\'ūkum min fawqikum wa min asfala minkum wa idh zāghati al-abṣāru wa balaghati al-qulūbu al-ḥanājira...',
    frenchMeaning: 'Quand ils vous vinrent d\'en haut et d\'en bas de vous, et que les regards étaient troublés, et que les cœurs remontaient aux gorges... Les croyants furent alors éprouvés et secoués d\'un violent tremblement.',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/033010.mp3',
    testedOccultAffliction: 'Sorcellerie avec effigie, poupée percée d\'aiguilles (provoque des douleurs perçantes et migratoires sans explication médicale).',
    benHalimaDiagnosticAdvice: 'Les piqûres d\'aiguilles sur la poupée se répercutent sur le corps astral du malade. Ce verset brise l\'attaque multidirectionnelle.',
    expectedReactionsIfAffected: ['Coups d\'aiguilles précis dans le dos, la tête ou les hanches', 'Douleurs migratoires vives', 'Spasmes musculaires'],
    remedyAction: 'Séances de Hijama (ventouses) sur les points douloureux précis + huile coranisée.',
    badgeLabel: 'Symbole Aiguilles'
  },

  // 12. LE FEU / CHARBON / BRÛLURES
  {
    id: 'symbol_feu_brulures',
    symbolName: 'Symbole du Feu & Flammes (Sorcellerie par le Feu / Charbon)',
    symbolCategory: 'sorcellerie',
    surahNumber: 2,
    surahNameAr: 'سُورَةُ البَقَرَة (آية الإعصار الناري)',
    surahNameFr: 'Al-Baqara (Verset 266 - Le Tourbillon de Feu)',
    verseRange: '266',
    arabicText: 'فَأَصَابَهَا إِعْصَارٌ فِيهِ نَارٌ فَاحْتَرَقَتْ ۗ كَذَٰلِكَ يُبَيِّنُ اللَّهُ لَكُمُ الْآيَاتِ لَعَلَّكُمْ تَتَفَكَّرُونَ',
    transliteration: 'Fa-aṣābahā iʿṣārun fīhi nārun faḥtaraqat kadhālika yubayyinu Allāhu lakumu al-āyāti laʿallakum tatafakkarūn.',
    frenchMeaning: '... Puis elle est frappée par un tourbillon contenant du feu et la voilà entièrement brûlée. Ainsi Allah vous explique les versets...',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/002266.mp3',
    testedOccultAffliction: 'Sorcellerie brûlée au feu, passée sur les braises ou avec des poudres inflammables (provoque des colères violentes et impulsives subites, chaleur interne).',
    benHalimaDiagnosticAdvice: 'Le feu du sortilège attise le djinn de feu. Ce verset retourne le feu contre la sorcellerie elle-même jusqu\'à carbonisation.',
    expectedReactionsIfAffected: ['Bouffée de chaleur rouge au visage', 'Agitation et énervement soudain', 'Accélération du rythme cardiaque'],
    remedyAction: 'Boire beaucoup d\'eau coranisée fraîche et ablutions régulières pour éteindre le feu satanique.',
    badgeLabel: 'Symbole Feu'
  },

  // 13. LE DJINN AMOUREUX
  {
    id: 'symbol_djinn_amoureux',
    symbolName: 'Symbole de l\'Impureté & Djinn Amoureux (Al-Mass Al-\'Ashiq)',
    symbolCategory: 'djinn',
    surahNumber: 7,
    surahNameAr: 'سُورَةُ الأَعْرَاف (آية كشف وتطهير العورات)',
    surahNameFr: 'Al-A\'raf (Verset 22 - Pudeur & Dévoilement)',
    verseRange: '22',
    arabicText: 'فَلَمَّا ذَاقَا الشَّجَرَةَ بَدَتْ لَهُمَا سَوْآتُهُمَا وَطَفِقَا يَخْصِفَانِ عَلَيْهِمَا مِن وَرَقِ الْجَنَّةِ',
    transliteration: 'Falammā dhāqā ash-shajarata badat lahumā saw\'ātuhumā wa ṭafiqā yakhṣifāni ‘alayhimā min waraqi al-jannah.',
    frenchMeaning: 'Puis lorsqu\'ils eurent goûté de l\'arbre, leurs nudités leur apparurent ; et ils se mirent à se couvrir avec les feuilles du Paradis.',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/007022.mp3',
    testedOccultAffliction: 'Présence d\'un Djinn amoureux (rapports sexuels en rêve, paralysie du sommeil, refus du mariage, dégoût soudain de son conjoint).',
    benHalimaDiagnosticAdvice: 'Le djinn amoureux exploite la nudité et les moments d\'insouciance. Ce verset rétablit le voile de pudeur et le brûle directement dans les zones intimes.',
    expectedReactionsIfAffected: ['Chaleur ou picotements dans le bas-ventre et les cuisses', 'Gêne intime ou palpitations', 'Frisson soudain'],
    remedyAction: 'Application d\'huile d\'olive et de nigelle coranisée sur le bas-ventre le soir + récitation avant de dormir.',
    badgeLabel: 'Djinn Amoureux'
  },

  // 14. LES CHIENS / DJINN DE VENGEANCE
  {
    id: 'symbol_chiens_vengeance',
    symbolName: 'Symbole des Bêtes & Chiens (Djinn de Vengeance / Carnassiers)',
    symbolCategory: 'djinn',
    surahNumber: 5,
    surahNameAr: 'سُورَةُ المَائِدَة (آية تدجين الوحوش)',
    surahNameFr: 'Al-Ma\'idah (Verset 4 - Domptage des Carnassiers)',
    verseRange: '4',
    arabicText: 'وَمَا عَلَّمْتُم مِّنَ الْجَوَارِحِ مُكَلِّبِينَ تُعَلِّمُونَهُنَّ مِمَّا عَلَّمَكُمُ اللَّهُ ۖ فَكُلُوا مِمَّا أَمْسَكْنَ عَلَيْكُمْ وَاذْكُرُوا اسْمَ اللَّهِ عَلَيْهِ',
    transliteration: 'Wa mā ‘allamtum mina al-jawāriḥi mukallibīna tu‘allimūnahunna mimmā ‘allamakumu Allāh...',
    frenchMeaning: '... ainsi que ce que capturent les carnassiers que vous avez dressés (comme les chiens de chasse), en leur apprenant ce qu\'Allah vous a appris...',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/005004.mp3',
    testedOccultAffliction: 'Djinn agressif ou de vengeance (souvent vu en rêve sous forme de chiens noirs agressifs qui mordent ou poursuivent).',
    benHalimaDiagnosticAdvice: '« Mukallibeen » soumet et enchaîne les djinns féroces envoyés pour nuire ou entrés suite à une blessure accidentelle sans Bismillah.',
    expectedReactionsIfAffected: ['Tremblements nerveux des mains ou des genoux', 'Peur soudaine', 'Sensation de morsure ou de pincement'],
    remedyAction: 'Réciter la sourate Al-Jinn et le verset du Trône (Ayat Al-Kursi 7x).',
    badgeLabel: 'Djinn de Vengeance'
  },

  // 15. LE MAUVAIS ŒIL & JALOUSIE INTENSE
  {
    id: 'symbol_mauvais_oeil',
    symbolName: 'Symbole du Mauvais Œil (Al-\'Ayn & Al-Hassad Destructeur)',
    symbolCategory: 'mauvais_oeil',
    surahNumber: 68,
    surahNameAr: 'سُورَةُ القَلَم (آية إزلاق الأبصار والعين الحارة)',
    surahNameFr: 'Al-Qalam (Versets 51 à 52 - Le Regard Percant)',
    verseRange: '51 - 52',
    arabicText: 'وَإِن يَكَادُ الَّذِينَ كَفَرُوا لَيُزْلِقُونَكَ بِأَبْصَارِهِمْ لَمَّا سَمِعُوا الذِّكْرَ وَيَقُولُونَ إِنَّهُ لَمَجْنُونٌ ۝ وَمَا هُوَ إِلَّا ذِكْرٌ لِّلْعَالَمِينَ',
    transliteration: 'Wa in yakādu alladhīna kafarū layuzliqūnaka bi\'abṣārihim lammā sami‘ū adh-dhikra wa yaqūlūna innahu lamajnūn. Wa mā huwa illā dhikrun lil-‘ālamīn.',
    frenchMeaning: 'Peu s\'en faut que les mécréants ne te transpercent par leurs regards (te fassent trébucher par leurs yeux jaloux) lorsqu\'ils entendent le Rappel...',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/068051.mp3',
    testedOccultAffliction: 'Mauvais œil destructeur (Al-\'Ayn) et jalousie empoisonnée (Hassad) ayant frappé la santé, la beauté, le couple ou le commerce.',
    benHalimaDiagnosticAdvice: 'Le mauvais œil pénètre comme une flèche invisible. Le signe infaillible à l\'écoute de ce verset est une série continue de bâillements et des larmes abondantes.',
    expectedReactionsIfAffected: ['Bâillements en cascade sans pouvoir s\'arrêter', 'Larmes chaudes aux yeux', 'Lourdeur subite des paupières'],
    remedyAction: 'Lavage avec l\'eau coranisée + récitation des sourates Al-Falaq et An-Nas (7x) en posant la main sur le front.',
    badgeLabel: 'Mauvais Œil / Hassad'
  },

  // 16. LE DJINN DANS LA TÊTE / WASWAS / OUBLI
  {
    id: 'symbol_tete_waswas',
    symbolName: 'Symbole de la Tête & Mémoire (Djinn du Crâne / Waswas)',
    symbolCategory: 'djinn',
    surahNumber: 18,
    surahNameAr: 'سُورَةُ الكَهْف (آية دفع النسيان والشيطان)',
    surahNameFr: 'Al-Kahf (Verset 24 - Dissipation de l\'Oubli)',
    verseRange: '24',
    arabicText: 'وَاذْكُر رَّبَّكَ إِذَا نَسِيتَ وَقُلْ عَسَىٰ أَن يَهْدِيَنِ رَبِّي لِأَقْرَبَ مِنْ هَٰذَا رَشَدًا',
    transliteration: 'Wadhkur rabbaka idhā nasīta wa qul ‘asā an yahdiyani rabbī li\'aqraba min hādhā rashadā.',
    frenchMeaning: 'Et invoque ton Seigneur quand tu oublies, et dis : "Je souhaite que mon Seigneur me guide vers ce qui est plus proche de la rectitude".',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/018024.mp3',
    testedOccultAffliction: 'Djinn logé dans le cerveau ou le crâne provoquant amnésie inhabituelle, doutes obsessionnels religieux (Waswas), confusion mentale ou insomnies sévères.',
    benHalimaDiagnosticAdvice: 'Le djinn du cerveau se nourrit de l\'oubli d\'Allah. Ce verset rétablit la lucidité et chasse le voile obscur sur le cerveau.',
    expectedReactionsIfAffected: ['Pression ou pulsation sur le front ou les tempes', 'Picotements dans le cuir chevelu', 'Brouillard mental qui se dissipe'],
    remedyAction: 'Massage du cuir chevelu avec de l\'huile de nigelle coranisée avant de dormir.',
    badgeLabel: 'Djinn dans la Tête'
  }
];
