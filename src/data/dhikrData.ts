import { DhikrItem } from '../types/roqya';

export const DHIKR_ITEMS: DhikrItem[] = [
  // ==========================================
  // MATIN & PROTECTION UNIVERSELLE
  // ==========================================
  {
    id: 'matin_ayat_kursi',
    title: 'Ayat Al-Kursi (Verset du Trône)',
    category: 'matin',
    targetCount: 1,
    arabicText: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ',
    transliteration: 'Allāhu lā ilāha illā huwa al-ḥayyu al-qayyūm, lā ta\'khudhuhu sinatun walā nawm, lahu mā fī as-samāwāti wamā fī al-ard, man dhā alladhī yashfa‘u ‘indahu illā bi\'idhnih, ya‘lamu mā bayna aydīhim wamā khalfahum, walā yuḥīṭūna bishay\'in min ‘ilmihi illā bimā shā\', wasi‘a kursiyyuhu as-samāwāti wal-ard, walā ya\'ūduhu ḥifẓuhumā, wahuwa al-‘aliyyu al-‘aẓīm.',
    frenchMeaning: 'Allah ! Point de divinité à part Lui, le Vivant, Celui qui subsiste par Lui-même. Ni somnolence ni sommeil ne Le saisissent. À Lui appartient tout ce qui est dans les cieux et sur la terre. Qui peut intercéder auprès de Lui sans Sa permission ? Il sait leur passé et leur futur...',
    virtue: 'Quiconque le récite le matin est protégé contre les djinns et les démons jusqu\'au soir.',
    reference: 'Rapporté par Al-Hakim (Authentifié par Al-Albani dans Sahih At-Targhib n°655)',
    benHalimaAdvice: 'À réciter avec concentration totale sur la majesté d\'Allah. Aucun djinn ne peut franchir cette forteresse.',
    badgeLabel: 'Forteresse Absolue'
  },
  {
    id: 'matin_muawwidhat',
    title: 'Les 3 Sourates Protectrices (Al-Ikhlas, Al-Falaq, An-Nas)',
    category: 'matin',
    targetCount: 3,
    arabicText: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۝ قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ ۝\n\nبِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۝ قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ ۝\n\nبِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۝ قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ ۝',
    transliteration: 'Qul Huwa Allāhu Aḥad (Sourate 112) + Qul A‘ūdhu bi Rabbi Al-Falaq (Sourate 113) + Qul A‘ūdhu bi Rabbi An-Nās (Sourate 114).',
    frenchMeaning: 'Dis : Il est Allah, Unique... Dis : Je cherche protection auprès du Seigneur de l\'aube naissante, contre le mal des êtres qu\'Il a créés, et contre le mal de l\'obscurité quand elle s\'approfondit, et contre le mal de celles qui soufflent sur les nœuds, et contre le mal de l\'envieux quand il envie... Dis : Je cherche protection auprès du Seigneur des hommes...',
    virtue: 'Le Prophète ﷺ a dit : « Récite-les trois fois le matin et le soir, elles te suffiront contre toute chose (tout mal). »',
    reference: 'Rapporté par Abu Dawud (n°5082) et At-Tirmidhi (n°3575)',
    benHalimaAdvice: 'Le verset « et contre le mal de celles qui soufflent sur les nœuds » coupe directement les fils et liens invisibles de la sorcellerie.',
    badgeLabel: '3x Matin & Soir'
  },
  {
    id: 'matin_bismillah_alladhi',
    title: 'Invocation du Bouclier Terrestre & Céleste',
    category: 'matin',
    targetCount: 3,
    arabicText: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
    transliteration: 'Bismi Allāhi alladhī lā yaḍurru ma‘a ismihi shay’un fī al-arḍi walā fī as-samā’i wahuwa as-samī‘u al-‘alīm.',
    frenchMeaning: 'Au nom d\'Allah, avec le Nom duquel rien ne peut nuire sur la terre ni dans le ciel, et Il est l\'Audient, l\'Omniscient.',
    virtue: 'Quiconque la répète 3 fois le matin ne sera frappé par aucun malheur soudain jusqu\'au soir, et quiconque la répète 3 fois le soir ne sera frappé par aucun malheur soudain jusqu\'au matin.',
    reference: 'Rapporté par Abu Dawud (n°5088) et At-Tirmidhi (n°3388)',
    benHalimaAdvice: 'Neutralise le poison des bêtes venimeuses, les sortilèges et les ondes néfastes.',
    badgeLabel: 'Protection 3x'
  },
  {
    id: 'matin_sayyid_istighfar',
    title: 'Sayyid Al-Istighfâr (Le Maître du Pardon)',
    category: 'matin',
    targetCount: 1,
    arabicText: 'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ ، خَلَقْتَنِي وَأَنَا عَبْدُكَ ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ',
    transliteration: 'Allāhumma Anta Rabbī lā ilāha illā Ant, khalaqtanī wa anā ‘abduk, wa anā ‘alā ‘ahdika wa wa‘dika mā astaṭa‘t, a‘ūdhu bika min sharri mā ṣana‘t, abū\'u laka bini‘matika ‘alayya wa abū\'u bidhanbī, faghfir lī fa\'innahu lā yaghfiru adh-dhunūba illā Ant.',
    frenchMeaning: 'Ô Allah ! Tu es mon Seigneur, nul n\'a le droit d\'être adoré si ce n\'est Toi. C\'est Toi qui m\'as créé et je suis Ton serviteur. Je respecte Ton pacte et Ta promesse autant que je le puis. Je cherche refuge auprès de Toi contre le mal de ce que j\'ai commis...',
    virtue: 'Quiconque la récite le matin avec conviction et meurt dans la journée entrera au Paradis.',
    reference: 'Rapporté par Sahih Al-Bukhari (n°6306)',
    benHalimaAdvice: 'Le péché affaiblit le corps face aux djinns. Le repentir sincere est le premier remède de la Roqya.',
    badgeLabel: 'Maître du Pardon'
  },
  {
    id: 'matin_asbahna',
    title: 'Invocation du Matin (Asbahnâ wa asbaha-l-mulk)',
    category: 'matin',
    targetCount: 1,
    arabicText: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ ، وَالْحَمْدُ لِلَّهِ ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَٰذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَٰذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ',
    transliteration: 'Aṣbaḥnā wa aṣbaḥa al-mulku lillāh, wal-ḥamdu lillāh, lā ilāha illā Allāhu waḥdahu lā sharīka lah, lahu al-mulku walahu al-ḥamdu wahuwa ‘alā kulli shay\'in qadīr...',
    frenchMeaning: 'Nous voici au matin et la royauté appartient à Allah. Louange à Allah. Nulle divinité digne d\'adoration en dehors d\'Allah Seul sans associé. À Lui la royauté et la louange et Il est Tout-Puissant...',
    virtue: 'Consécration de la journée à Allah et bouclier contre l\'angoisse et la paresse causées par les djinns.',
    reference: 'Rapporté par Sahih Muslim (n°2723)',
    benHalimaAdvice: 'Excellente contre l\'apathie et la lourdeur matinale souvent induite par la sorcellerie enterrée.',
    badgeLabel: 'Matin 1x'
  },
  {
    id: 'matin_hasbiya_allah',
    title: 'Hasbiya Allah (La Suffisance Divine)',
    category: 'matin',
    targetCount: 7,
    arabicText: 'حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ ۖ عَلَيْهِ تَوَكَّلْتُ ۖ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',
    transliteration: 'Ḥasbiya Allāhu lā ilāha illā huwa, ‘alayhi tawakkaltu, wahuwa rabbu al-‘arshi al-‘aẓīm.',
    frenchMeaning: 'Allah me suffit, nulle divinité en dehors de Lui, en Lui j\'ai placé ma confiance et Il est le Seigneur du Trône Immense.',
    virtue: 'Quiconque la récite 7 fois le matin et 7 fois le soir, Allah lui suffira contre tout ce qui le soucie dans la vie d\'ici-bas et dans l\'au-delà.',
    reference: 'Rapporté par Abu Dawud (n°5081)',
    benHalimaAdvice: 'Dissipe les crises d\'angoisse subites, la peur injustifiée et le blocage de subsistance.',
    badgeLabel: '7x Matin & Soir'
  },
  {
    id: 'matin_radaytu',
    title: 'Agrément de la Foi & du Prophète ﷺ',
    category: 'matin',
    targetCount: 3,
    arabicText: 'رَضِيتُ بِاللَّهِ رَبًّا ، وَبِالْإِسْلَامِ دِينًا ، وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا',
    transliteration: 'Raḍītu billāhi Rabban, wa bil-Islāmi dīnan, wa bi-Muḥammadin ṣallā Allāhu ‘alayhi wa sallama nabiyyan.',
    frenchMeaning: 'J\'agrée Allah comme Seigneur, l\'Islam comme religion, et Muhammad ﷺ comme Prophète.',
    virtue: 'Celui qui la récite 3 fois le matin et le soir, Allah S\'engage à le satisfaire le Jour du Jugement.',
    reference: 'Rapporté par At-Tirmidhi (n°3389) et Abu Dawud (n°5072)',
    benHalimaAdvice: 'Renforce la sérénité du cœur face aux murmures sataniques (Waswas).',
    badgeLabel: '3x Matin & Soir'
  },
  {
    id: 'matin_tahlil_100',
    title: 'At-Tahlīl (Lâ ilâha illa Allâh 100x)',
    category: 'matin',
    targetCount: 100,
    arabicText: 'لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
    transliteration: 'Lā ilāha illā Allāhu waḥdahu lā sharīka lah, lahu al-mulku wa lahu al-ḥamdu, wahuwa ‘alā kulli shay\'in qadīr.',
    frenchMeaning: 'Il n\'y a de divinité digne d\'adoration qu\'Allah Seul, sans associé. À Lui appartient la royauté, à Lui la louange, et Il est capable de toute chose.',
    virtue: 'Le Prophète ﷺ a dit : « Celui qui la récite 100 fois par jour aura la récompense de l\'affranchissement de 10 esclaves, 100 bonnes actions lui seront inscrites, 100 péchés effacés, et elle sera un bouclier pour lui contre le diable tout au long de la journée jusqu\'au soir. »',
    reference: 'Rapporté par Sahih Al-Bukhari (n°3293) et Sahih Muslim (n°2691)',
    benHalimaAdvice: 'C\'est l\'arme suprême de la Roqya. Les 100 répétitions créent une barrière infranchissable pour les djinns.',
    badgeLabel: '100x Bouclier d\'or'
  },

  // ==========================================
  // SOIR (MASÂ)
  // ==========================================
  {
    id: 'soir_audhu_bikalimatillah',
    title: 'Protection contre les créatures nuisibles & djinns',
    category: 'soir',
    targetCount: 3,
    arabicText: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
    transliteration: 'A‘ūdhu bikalimāti Allāhi at-tāmmāti min sharri mā khalaq.',
    frenchMeaning: 'Je cherche refuge auprès des paroles parfaites d\'Allah contre le mal de ce qu\'Il a créé.',
    virtue: 'Le Prophète ﷺ a dit : « Celui qui dit cela le soir 3 fois, aucune piqûre de bête venimeuse ne lui nuira cette nuit-là. »',
    reference: 'Rapporté par Sahih Muslim (n°2709) et At-Tirmidhi (n°3604)',
    benHalimaAdvice: 'À réciter au coucher du soleil (Maghreb), heure où les djinns et démons se dispersent sur terre.',
    badgeLabel: 'Soir 3x'
  },
  {
    id: 'soir_amsayna',
    title: 'Invocation du Soir (Amsaynâ wa amsa-l-mulk)',
    category: 'soir',
    targetCount: 1,
    arabicText: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ ، وَالْحَمْدُ لِلَّهِ ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَٰذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَٰذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا',
    transliteration: 'Amsaynā wa amsā al-mulku lillāh, wal-ḥamdu lillāh, lā ilāha illā Allāhu waḥdahu lā sharīka lah, lahu al-mulku walahu al-ḥamdu wahuwa ‘alā kulli shay\'in qadīr...',
    frenchMeaning: 'Nous voici au soir et la royauté appartient à Allah. Louange à Allah. Nulle divinité digne d\'adoration en dehors d\'Allah Seul sans associé...',
    virtue: 'Protection pour la nuit entière contre le mal des démons nocturnes et les angoisses du soir.',
    reference: 'Rapporté par Sahih Muslim (n°2723)',
    benHalimaAdvice: 'Idéal à réciter juste après la douche à l\'eau chaude coranisée du soir.',
    badgeLabel: 'Soir 1x'
  },

  // ==========================================
  // SOMMEIL & PROTECTION DE LA NUIT
  // ==========================================
  {
    id: 'sommeil_baqara_last2',
    title: 'Les Deux Derniers Versets d\'Al-Baqara (Amana ar-Rasūl)',
    category: 'sommeil',
    targetCount: 1,
    arabicText: 'آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ ۝ لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ ۖ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا ۚ أَنتَ مَوْلَانَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',
    transliteration: 'Āmana ar-rasūlu bimā unzila ilayhi min rabbihi wal-mu\'minūn... Lā yukallifu Allāhu nafsan illā wus‘ahā...',
    frenchMeaning: 'Le Messager a cru en ce qu\'on a fait descendre vers lui venant de son Seigneur, et aussi les croyants... Seigneur, ne nous châtie point s\'il nous arrive d\'oublier ou de commettre une erreur... Tu es notre Maître, accorde-nous donc la victoire sur le peuple infidèle.',
    virtue: 'Le Prophète ﷺ a dit : « Celui qui récite la nuit les deux derniers versets de la sourate Al-Baqara, ils lui suffiront (contre tout mal et tout diable). »',
    reference: 'Rapporté par Sahih Al-Bukhari (n°5009) et Sahih Muslim (n°808)',
    benHalimaAdvice: 'Empêche les cauchemars provoqués par les djinns et dissout les attaques nocturnes du djinn amoureux.',
    badgeLabel: 'Suffit pour la nuit'
  },
  {
    id: 'sommeil_souffle_mains',
    title: 'Récitation dans les Mains & Friction du Corps (Nafth)',
    category: 'sommeil',
    targetCount: 3,
    arabicText: 'يَجْمَعُ كَفَّيْهِ ثُمَّ يَنْفُثُ فِيهِمَا فَيَقْرَأُ فِيهِمَا : ﴿قُلْ هُوَ اللَّهُ أَحَدٌ﴾ وَ﴿قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ﴾ وَ﴿قُلْ أَعُوذُ بِرَبِّ النَّاسِ﴾ ثُمَّ يَمْسَحُ بِهِمَا مَا اسْتَطَاعَ مِنْ جَسَدِهِ يَبْدَأُ بِهِمَا عَلَى رَأْسِهِ وَوَجْهِهِ وَمَا أَقْبَلَ مِنْ جَسَدِهِ (٣ مَرَّات)',
    transliteration: 'Joindre les deux mains, souffler dedans avec léger postillon (Nafth), réciter Al-Ikhlas, Al-Falaq, An-Nas, puis frictionner tout le corps en partant de la tête et du visage (3 fois de suite).',
    frenchMeaning: 'Pratique de la Sunnah du Prophète ﷺ chaque soir avant de s\'endormir : joindre les paumes, souffler le souffle béni de la récitation, et envelopper tout son corps.',
    virtue: 'Crée une armure énergétique autour de l\'aura corporelle pendant le sommeil profond.',
    reference: 'Rapporté par Sahih Al-Bukhari (n°5017)',
    benHalimaAdvice: 'Essentiel pour les personnes souffrant de paralysie du sommeil (Al-Jathoom / Cauchemar étouffant).',
    badgeLabel: 'Sunnah Prophétique'
  },

  // ==========================================
  // TASBIH & ISTIGHFAR (PURIFICATION CONTINUE)
  // ==========================================
  {
    id: 'tasbih_istighfar_100',
    title: 'Istighfar (Demande de Pardon 100x)',
    category: 'tasbih',
    targetCount: 100,
    arabicText: 'أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ',
    transliteration: 'Astaghfiru Allāha wa atūbu ilayh.',
    frenchMeaning: 'Je demande pardon à Allah et je me repens à Lui.',
    virtue: 'Le Prophète ﷺ a dit : « Par Allah, je demande pardon à Allah et je reviens à Lui plus de soixante-dix fois par jour (et dans une version cent fois). »',
    reference: 'Rapporté par Sahih Al-Bukhari (n°6307) et Sahih Muslim (n°2702)',
    benHalimaAdvice: 'L\'Istighfar continu attire la délivrance d\'Allah, ouvre les portes verrouillées et guérit l\'âme.',
    badgeLabel: '100x Purification'
  },
  {
    id: 'tasbih_subhanallah_bihamdih',
    title: 'Subhanallah wa Bihamdih (100x)',
    category: 'tasbih',
    targetCount: 100,
    arabicText: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ',
    transliteration: 'Subḥāna Allāhi wa biḥamdih.',
    frenchMeaning: 'Gloire et louange à Allah.',
    virtue: '« Celui qui dit 100 fois par jour "Subhanallahi wa bihamdih", ses péchés seront effacés même s\'ils étaient aussi nombreux que l\'écume de la mer. »',
    reference: 'Rapporté par Sahih Al-Bukhari (n°6405) et Sahih Muslim (n°2691)',
    benHalimaAdvice: 'Nettoie les ténèbres accumulées dans le cœur par les ruses de Satan.',
    badgeLabel: '100x Efface les fautes'
  },
  {
    id: 'tasbih_hawqala',
    title: 'Al-Hawqala (Lâ hawla walâ quwwata illâ billâh)',
    category: 'protection',
    targetCount: 100,
    arabicText: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
    transliteration: 'Lā ḥawla walā quwwata illā billāh.',
    frenchMeaning: 'Il n\'y a de force ni de puissance que par Allah.',
    virtue: 'Un des trésors du Paradis. Brise la force des magiciens et anéantit l\'illusion de puissance des djinns.',
    reference: 'Rapporté par Sahih Al-Bukhari (n°4205) et Sahih Muslim (n°2704)',
    benHalimaAdvice: 'À réciter intensivement lorsque l\'on ressent une oppression ou une tentative d\'intimidation occulte.',
    badgeLabel: 'Trésor du Paradis'
  },
  {
    id: 'tasbih_salawat',
    title: 'As-Salât \'alâ An-Nabî (Prières sur le Prophète ﷺ)',
    category: 'protection',
    targetCount: 100,
    arabicText: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ',
    transliteration: 'Allāhumma ṣalli ‘alā Muḥammadin wa ‘alā āli Muḥammad, kamā ṣallayta ‘alā Ibrāhīma wa ‘alā āli Ibrāhīm, innaka Ḥamīdun Majīd.',
    frenchMeaning: 'Ô Allah ! Prie sur Muhammad et sur la famille de Muhammad comme Tu as prié sur Abraham et sur la famille d\'Abraham, Tu es certes Digne de louange et Glorieux.',
    virtue: '« Celui qui prie sur moi une fois, Allah prie sur lui dix fois, lui efface dix péchés et l\'élève de dix degrés. »',
    reference: 'Rapporté par An-Nasa\'i (n°1297)',
    benHalimaAdvice: 'La prière sur le Prophète dissipe tous les soucis et attire la Miséricorde divine indispensable à la guérison.',
    badgeLabel: 'Lumière & Miséricorde'
  }
];
