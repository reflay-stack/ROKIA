import { ConditionInfo, DiagnosticQuestion, PracticalRemedy, QuranVerse } from '../types/roqya';

export const QURAN_VERSES: QuranVerse[] = [
  // --- BASE VERSES (FOR ALL USERS) ---
  {
    id: 'fatiha',
    surahNumber: 1,
    surahNameAr: 'سُورَةُ الفَاتِحَة',
    surahNameFr: 'Al-Fatiha (L\'Ouverture)',
    verseRange: '1 - 7',
    arabicText: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۝ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ۝ الرَّحْمَٰنِ الرَّحِيمِ ۝ مَالِكِ يَوْمِ الدِّينِ ۝ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ۝ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۝ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
    transliteration: 'Bismi Allāhi ar-raḥmāni ar-raḥīm. Al-ḥamdu lillāhi rabbi al-ʿālamīn. Ar-raḥmāni ar-raḥīm. Māliki yawmi ad-dīn. Iyyāka naʿbudu wa-iyyāka nastaʿīn. Ihdinā aṣ-ṣirāṭa al-mustaqīm. Ṣirāṭa alladhīna anʿamta ʿalayhim ghayri al-maghḍūbi ʿalayhim walā aḍ-ḍāllīn.',
    frenchMeaning: 'Au nom d\'Allah, le Tout Miséricordieux, le Très Miséricordieux. Louange à Allah, Seigneur de l\'univers. Le Tout Miséricordieux, le Très Miséricordieux, Maître du Jour de la rétribution. C\'est Toi [Seul] que nous adorons, et c\'est Toi [Seul] dont nous implorons secours. Guide-nous dans le droit chemin...',
    audioUrl: 'https://server8.mp3quran.net/afs/001.mp3',
    whyPrescribed: 'L\'Ouverture du Livre, la Mère du Coran, nommée "Ash-Chafiya" (la Guérisseuse). Base indispensable de toute Roqya.',
    recommendedReps: 7,
    isBaseVerse: true
  },
  {
    id: 'baqara_start',
    surahNumber: 2,
    surahNameAr: 'سُورَةُ البَقَرَة (البداية)',
    surahNameFr: 'Al-Baqara (Versets 1 à 5)',
    verseRange: '1 - 5',
    arabicText: 'الم ۝ ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ ۝ الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ ۝ وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنزِلَ إِلَيْكَ وَمَا أُنزِلَ مِن قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ ۝ أُولَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ ۖ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ',
    transliteration: 'Alif-Lām-Mīm. Dhālika al-kitābu lā rayba fīhi hudan lil-muttaqīn. Alladhīna yu\'minūna bil-ghaybi wa yuqīmūna aṣ-ṣalāta wa mimmā razaqnāhum yunfiqūn...',
    frenchMeaning: 'Alif, Lam, Mim. C\'est le Livre au sujet duquel il n\'y a aucun doute, c\'est un guide pour les pieux. Qui croient à l\'invisible et accomplissent la Salât et dépensent [dans l\'obéissance à Allah] de ce que Nous leur avons attribué...',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/002001.mp3',
    whyPrescribed: 'Établit la foi en l\'invisible, la victoire spirituelle et la guidée pour les pieux.',
    recommendedReps: 3,
    isBaseVerse: true
  },
  {
    id: 'baqara_102',
    surahNumber: 2,
    surahNameAr: 'سُورَةُ البَقَرَة (آية السحر)',
    surahNameFr: 'Al-Baqara (Verset 102 - Harout & Marout)',
    verseRange: '102',
    arabicText: 'وَاتَّبَعُوا مَا تَتْلُو الشَّيَاطِينُ عَلَىٰ مُلْكِ سُلَيْمَانَ ۖ وَمَا كَفَرَ سُلَيْمَانُ وَلَٰكِنَّ الشَّيَاطِينَ كَفَرُوا يُعَلِّمُونَ النَّاسَ السِّحْرَ وَمَا أُنزِلَ عَلَى الْمَلَكَيْنِ بِبَابِلَ هَارُوتَ وَمَارُوتَ ۚ وَمَا يُعَلِّمَانِ مِنْ أَحَدٍ حَتَّىٰ يَقُولَا إِنَّمَا نَحْنُ فِتْنَةٌ فَلَا تَكْفُرْ ۖ فَيَتَعَلَّمُونَ مِنْهُمَا مَا يُفَرِّقُونَ بِهِ بَيْنَ الْمَرْءِ وَزَوْجِهِ ۚ وَمَا هُم بِضَارِّينَ بِهِ مِنْ أَحَدٍ إِلَّا بِإِذْنِ اللَّهِ ۚ وَيَتَعَلَّمُونَ مَا يَضُرُّهُمْ وَلَا يَنفَعُهُمْ ۚ وَلَقَدْ عَلِمُوا لَمَنِ اشْتَرَاهُ مَا لَهُ فِي الْآخِرَةِ مِنْ خَلَاقٍ ۚ وَلَبِئْسَ مَا شَرَوْا بِهِ أَنفُسَهُمْ ۚ لَوْ كَانُوا يَعْلَمُونَ',
    transliteration: 'Wattaba\'oo ma tatloo ash-shayateenu \'ala mulki sulaymana wa ma kafara sulaymanu wa lakinna ash-shayateena kafaroo yu\'allimoona an-nasa as-sihr...',
    frenchMeaning: 'Et ils suivirent ce que les diables racontaient contre le règne de Salomon... ils apprennent auprès d\'eux ce qui sème la désunion entre l\'homme et son épouse. Or ils ne sont capables de nuire à personne qu\'avec la permission d\'Allah...',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/002102.mp3',
    whyPrescribed: 'Le grand verset de dénonciation et de destruction de la sorcellerie diabolique et des séparations.',
    recommendedReps: 7,
    isBaseVerse: true
  },
  {
    id: 'baqara_163',
    surahNumber: 2,
    surahNameAr: 'سُورَةُ البَقَرَة (التوحيد)',
    surahNameFr: 'Al-Baqara (Versets 163 - 164)',
    verseRange: '163 - 164',
    arabicText: 'وَإِلَٰهُكُمْ إِلَٰهٌ وَاحِدٌ ۖ لَّا إِلَٰهَ إِلَّا هُوَ الرَّحْمَٰنُ الرَّحِيمُ ۝ إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ وَالْفُلْكِ الَّتِي تَجْرِي فِي الْبَحْرِ بِمَا يَنفَعُ النَّاسَ وَمَا أَنزَلَ اللَّهُ مِنَ السَّمَاءِ مِن مَّاءٍ فَأَحْيَا بِهِ الْأَرْضَ بَعْدَ مَوْتِهَا وَبَثَّ فِيهَا مِن كُلِّ دَابَّةٍ وَتَصْرِيفِ الرِّيَاحِ وَالسَّحَابِ الْمُسَخَّرِ بَيْنَ السَّمَاءِ وَالْأَرْضِ لَآيَاتٍ لِّقَوْمٍ يَعْقِلُونَ',
    transliteration: 'Wa ilāhukum ilāhun wāḥidun lā ilāha illā huwa ar-raḥmānu ar-raḥīm...',
    frenchMeaning: 'Et votre Divinité est une Divinité unique. Pas de divinité à part Lui, le Tout Miséricordieux, le Très Miséricordieux...',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/002163.mp3',
    whyPrescribed: 'Proclamation absolue du Tawheed (Unicité) qui foudroie les djinns et anéantit le shirk.',
    recommendedReps: 3,
    isBaseVerse: true
  },
  {
    id: 'ayat_kursi',
    surahNumber: 2,
    surahNameAr: 'آيَةُ الكُرْسِي',
    surahNameFr: 'Ayat Al-Kursi (Verset du Trône)',
    verseRange: '255',
    arabicText: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ',
    transliteration: 'Allāhu lā ilāha illā huwa al-ḥayyu al-qayyūm, lā ta\'khudhuhu sinatun walā nawm, lahu mā fī as-samāwāti wamā fī al-arḍ, man dhā alladhī yashfaʿu ʿindahu illā bi\'idhnih...',
    frenchMeaning: 'Allah! Point de divinité à part Lui, le Vivant, Celui qui subsiste par Lui-même. Ni somnolence ni sommeil ne Le saisissent. À Lui appartient tout ce qui est dans les cieux et sur la terre...',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/002255.mp3',
    whyPrescribed: 'Le plus grand verset du Coran. Bouclier impénétrable contre tout démon et brûlure intense pour les djinns.',
    recommendedReps: 7,
    isBaseVerse: true
  },
  {
    id: 'araf_117',
    surahNumber: 7,
    surahNameAr: 'سُورَةُ الأَعْرَاف (إبطال سحر موسى)',
    surahNameFr: 'Al-A\'raf (Versets 117 à 122)',
    verseRange: '117 - 122',
    arabicText: 'وَأَوْحَيْنَا إِلَىٰ مُوسَىٰ أَنْ أَلْقِ عَصَاكَ ۖ فَإِذَا هِيَ تَلْقَفُ مَا يَأْفِكُونَ ۝ فَوَقَعَ الْحَقُّ وَبَطَلَ مَا كَانُوا يَعْمَلُونَ ۝ فَغُلِبُوا هُنَالِكَ وَانقَلَبُوا صَاغِرِينَ ۝ وَأُلْقِيَ السَّحَرَةُ سَاجِدِينَ ۝ قَالُوا آمَنَّا بِرَبِّ الْعَالَمِينَ ۝ رَبِّ مُوسَىٰ وَهَارُونَ',
    transliteration: 'Wa awḥaynā ilā Mūsā an alqi ʿaṣāka fa\'idhā hiya talqafu mā ya\'fikūn. Fawaqaʿa al-ḥaqqu wa baṭala mā kānū yaʿmalūn. Faghulibū hunālika wanqalabū ṣāghirīn. Wa-ulqiya as-saḥaratu sājidīn...',
    frenchMeaning: 'Et Nous révélâmes à Moïse: "Jette ton bâton". Et voilà qu\'il engloutissait ce qu\'ils avaient fabriqué. Ainsi la vérité se manifesta et ce qu\'ils avaient fait fut vain. Ils furent vaincus et humiliés, et les magiciens tombèrent prosternés...',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/007117.mp3',
    whyPrescribed: 'Versets majeurs d\'annulation de la sorcellerie : "Fawaqa\'a al-haqqu wa batala ma kanoo ya\'maloon" (La vérité triomphe et le faux s\'annule).',
    recommendedReps: 7,
    isBaseVerse: true
  },
  {
    id: 'yunus_81',
    surahNumber: 10,
    surahNameAr: 'سُورَةُ يُونُس (إن الله سيبطله)',
    surahNameFr: 'Yunus (Versets 81 à 82)',
    verseRange: '81 - 82',
    arabicText: 'فَلَمَّا أَلْقَوْا قَالَ مُوسَىٰ مَا جِئْتُم بِهِ السِّحْرُ ۖ إِنَّ اللَّهَ سَيُبْطِلُهُ ۖ إِنَّ اللَّهَ لَا يُصْلِحُ عَمَلَ الْمُفْسِدِينَ ۝ وَيُحِقُّ اللَّهُ الْحَقَّ بِكَلِمَاتِهِ وَلَوْ كَرِهَ الْمُجْرِمُونَ',
    transliteration: 'Falammā alqaw qāla Mūsā mā ji\'tum bihi as-siḥru inna Allāha sayubṭiluhu inna Allāha lā yuṣliḥu ʿamala al-mufsidīn. Wa yuḥiqqu Allāhu al-ḥaqqa bikalimātihi walaw kariha al-mujrimūn.',
    frenchMeaning: 'Lorsqu\'ils eurent jeté, Moïse dit: "Ce que vous avez apporté est la magie. Allah l\'annihilera sûrement! Car Allah ne fait pas prospérer le travail des corrupteurs. Et par Ses paroles, Allah fera triompher la Vérité, quelque répulsion qu\'en aient les criminels".',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/010081.mp3',
    whyPrescribed: 'La formule clé de dissolution : "Inna Allaha sayubtiluh" (Allah va certainement l\'anéantir). Répéter ce verset avec fermeté.',
    recommendedReps: 11,
    isBaseVerse: true
  },
  {
    id: 'taha_68',
    surahNumber: 20,
    surahNameAr: 'سُورَةُ طه (ولا يفلح الساحر)',
    surahNameFr: 'Taha (Versets 68 à 70)',
    verseRange: '68 - 70',
    arabicText: 'قُلْنَا لَا تَخَفْ إِنَّكَ أَنتَ الْأَعْلَىٰ ۝ وَأَلْقِ مَا فِي يَمِينِكَ تَلْقَفْ مَا صَنَعُوا ۖ إِنَّمَا صَنَعُوا كَيْدُ سَاحِرٍ ۖ وَلَا يُفْلِحُ السَّاحِرُ حَيْثُ أَتَىٰ ۝ فَأُلْقِيَ السَّحَرَةُ سُجَّدًا قَالُوا آمَنَّا بِرَبِّ هَارُونَ وَمُوسَىٰ',
    transliteration: 'Qulnā lā takhaf innaka anta al-aʿlā. Wa alqi mā fī yamīnika talqaf mā ṣanaʿū innamā ṣanaʿū kaydu sāḥirin walā yufliḥu as-sāḥiru ḥaythu atā. Fa-ulqiya as-saḥaratu sujjadan qālū āmannā birabbi Hārūna wa Mūsā.',
    frenchMeaning: 'Nous lui dîmes: "N\'aie pas peur, c\'est toi qui auras le dessus! Jette ce qu\'il y a dans ta main droite; cela engloutira ce qu\'ils ont fabriqué. Ce qu\'ils ont fabriqué n\'est qu\'une ruse de magicien; et le magicien ne réussit jamais, où qu\'il aille".',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/020068.mp3',
    whyPrescribed: 'Détruit l\'illusion et brise le pouvoir psychologique et occulte de tout sorcier.',
    recommendedReps: 7,
    isBaseVerse: true
  },
  {
    id: 'rahman_djinns',
    surahNumber: 55,
    surahNameAr: 'سُورَةُ الرَّحْمَٰن (حرق وتكبيل الجن)',
    surahNameFr: 'Ar-Rahman (Versets 33 à 35)',
    verseRange: '33 - 35',
    arabicText: 'يَا مَعْشَرَ الْجِنِّ وَالْإِنسِ إِنِ اسْتَطَعْتُمْ أَن تَنفُذُوا مِنْ أَقْطَارِ السَّمَاوَاتِ وَالْأَرْضِ فَانفُذُوا ۚ لَا تَنفُذُونَ إِلَّا بِسُلْطَانٍ ۝ فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ ۝ يُرْسَلُ عَلَيْكُمَا شُوَاظٌ مِّن نَّارٍ وَنُحَاسٌ فَلَا تَنتَصِرَانِ',
    transliteration: 'Yā maʿshara al-jinni wal-insi ini istaṭaʿtum an tanfudhū min aqṭāri as-samāwāti wal-arḍi fanfudhū, lā tanfudhūna illā bisulṭān. Fabi\'ayyi ālā\'i rabbikumā tukadhdhibān. Yursalu ʿalaykumā shuwāẓun min nārin wa nuḥāsun falā tantaṣirān.',
    frenchMeaning: 'Ô peuple de djinns et d\'hommes! Si vous pouvez sortir des domaines des cieux et de la terre, alors sortez! Mais vous ne pourrez en sortir qu\'avec un pouvoir accordé. Lequel des bienfaits de votre Seigneur nierez-vous? Il sera lancé contre vous un jet de feu et de cuivre fondu, et vous ne pourrez vous défendre.',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/055033.mp3',
    whyPrescribed: 'Verset foudroyant pour brûler, dompter et chasser les djinns rebelles récalcitrants ou agressifs.',
    recommendedReps: 7,
    isBaseVerse: true
  },
  {
    id: 'muawidhat',
    surahNumber: 112,
    surahNameAr: 'المُعَوِّذَات (الإخلاص، الفلق، الناس)',
    surahNameFr: 'Les 3 Protectrices (Ikhlas, Falaq, Nas)',
    verseRange: 'Sourates 112, 113, 114',
    arabicText: 'قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ ۞ قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ ۞ قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ',
    transliteration: 'Qul huwa Allāhu aḥad... Qul aʿūdhu birabbi al-falaq, min sharri mā khalaq... wa min sharri an-naffāthāti fī al-ʿuqad... Qul aʿūdhu birabbi an-nās...',
    frenchMeaning: 'Dis: Il est Allah, Unique... Dis: Je cherche protection auprès du Seigneur de l\'aube naissante, contre le mal de ce qu\'Il a créé... et contre le mal de celles qui soufflent sur les nœuds... Dis: Je cherche protection auprès du Seigneur des hommes, Roi des hommes...',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/113001.mp3',
    whyPrescribed: 'Défaire les nœuds (An-Naffathat fee al-\'uqad), protection contre l\'envie (Hassad) et les chuchotements démoniaques.',
    recommendedReps: 7,
    isBaseVerse: true
  },

  // --- SPECIFIC TRIGGERED VERSES (BY DREAMS & SYMPTOMS) ---
  {
    id: 'verse_cadenas',
    surahNumber: 21,
    surahNameAr: 'سُورَةُ الأَنْبِيَاء (آية فك الكدم/القفل)',
    surahNameFr: 'Al-Anbiya (Verset 30 - Ouverture du Cadenas)',
    verseRange: '30',
    arabicText: 'أَوَلَمْ يَرَ الَّذِينَ كَفَرُوا أَنَّ السَّمَاوَاتِ وَالْأَرْضَ كَانَتَا رَتْقًا فَفَتَقْنَاهُمَا ۖ وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ ۖ أَفَلَا يُؤْمِنُونَ',
    transliteration: 'Awalam yara alladhīna kafarū anna as-samāwāti wal-arḍa kānatā ratqan fafataqnāhumā wa jaʿalnā mina al-mā\'i kulla shay\'in ḥayyin afalā yu\'minūn.',
    frenchMeaning: 'Ceux qui ont mécru, n\'ont-ils pas vu que les cieux et la terre formaient une masse compacte? Ensuite Nous les avons séparés (déverrouillés/ouverts) et fait de l\'eau toute chose vivante. Ne croiront-ils donc pas?',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/021030.mp3',
    whyPrescribed: 'Spécifique pour briser la sorcellerie du Cadenas / Enfermement / Blocage total de vie ("Fafataqnahuma" = Nous les avons ouverts et débloqués).',
    recommendedReps: 11,
    isBaseVerse: false,
    triggeredByCondition: 'sorcellerie_cadenas'
  },
  {
    id: 'verse_noeuds_serpent',
    surahNumber: 20,
    surahNameAr: 'سُورَةُ طه (آية فك العقد واللسان)',
    surahNameFr: 'Taha (Versets 25 à 28 - Dénouement des 11 Nœuds)',
    verseRange: '25 - 28',
    arabicText: 'قَالَ رَبِّ اشْرَحْ لِي صَدْرِي ۝ وَيَسِّرْ لِي أَمْرِي ۝ وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي ۝ يَفْقَهُوا قَوْلِي',
    transliteration: 'Qāla rabbi ishrah lī ṣadrī, wa yassir lī amrī, waḥlul ʿuqdatan min lisānī, yafqahū qawlī.',
    frenchMeaning: 'Moïse dit: "Seigneur! Épanouis ma poitrine, facilite ma tâche, et dénoue le nœud de ma langue, afin qu\'ils comprennent mes paroles".',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/020025.mp3',
    whyPrescribed: 'Spécifique pour trancher la sorcellerie avec fil et nœuds (symbolisée par les serpents en rêve) : "Wahlul \'uqdatan" (Et dénoue le nœud).',
    recommendedReps: 11,
    isBaseVerse: false,
    triggeredByCondition: 'sorcellerie_noeuds'
  },
  {
    id: 'verse_cimetiere',
    surahNumber: 6,
    surahNameAr: 'سُورَةُ الأَنْعَام (آية إحياء الميت والمقابر)',
    surahNameFr: 'Al-An\'am (Verset 122 - Résurrection & Sortie de Tombe)',
    verseRange: '122',
    arabicText: 'أَوَمَن كَانَ مَيْتًا فَأَحْيَيْنَاهُ وَجَعَلْنَا لَهُ نُورًا يَمْشِي بِهِ فِي النَّاسِ كَمَن مَّثَلُهُ فِي الظُّلُمَاتِ لَيْسَ بِخَارِجٍ مِّنْهَا ۚ كَذَٰلِكَ زُيِّنَ لِلْكَافِرِينَ مَا كَانُوا يَعْمَلُونَ',
    transliteration: 'Awa man kāna maytan fa-aḥyaynāhu wa jaʿalnā lahu nūran yamshī bihi fī an-nāsi kaman mathaluhu fī aẓ-ẓulumāti laysa bikhārijin minhā...',
    frenchMeaning: 'Est-ce que celui qui était mort et que Nous avons ramené à la vie (ressuscité) et à qui Nous avons assigné une lumière grâce à laquelle il marche parmi les gens, est semblable à celui qui est dans les ténèbres sans pouvoir en sortir?...',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/006122.mp3',
    whyPrescribed: 'Spécifique pour la sorcellerie enterrée dans un cimetière, une tombe ou avec des morts (redonne vie et extrait des ténèbres de la sépulture).',
    recommendedReps: 11,
    isBaseVerse: false,
    triggeredByCondition: 'sorcellerie_cimetiere'
  },
  {
    id: 'verse_eau',
    surahNumber: 26,
    surahNameAr: 'سُورَةُ الشُّعَرَاء (آية فلق البحر والماء)',
    surahNameFr: 'Ash-Shu\'ara (Verset 63 - Séparation des Eaux)',
    verseRange: '63',
    arabicText: 'فَأَوْحَيْنَا إِلَىٰ مُوسَىٰ أَنْ اضْرِب بِّعَصَاكَ الْبَحْرَ ۖ فَانفَلَقَ فَكَانَ كُلُّ فِرْقٍ كَالطَّوْدِ الْعَظِيمِ',
    transliteration: 'Fa-awḥaynā ilā Mūsā an iḍrib biʿaṣāka al-baḥra fanfalaqa fakāna kullu firqin kaṭ-ṭawdi al-ʿaẓīm.',
    frenchMeaning: 'Nous révélâmes à Moïse: "Frappe la mer de ton bâton". Elle se fendit alors, et chaque pan de mer fut semblable à une haute et puissante montagne.',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/026063.mp3',
    whyPrescribed: 'Spécifique pour la sorcellerie jetée dans l\'eau, une rivière, un fleuve ou la mer (fend et assèche le sortilège immergé).',
    recommendedReps: 11,
    isBaseVerse: false,
    triggeredByCondition: 'sorcellerie_eau'
  },
  {
    id: 'verse_chiens_betes',
    surahNumber: 5,
    surahNameAr: 'سُورَةُ المَائِدَة (آية تدجين وكسر الوحوش)',
    surahNameFr: 'Al-Ma\'idah (Verset 4 - Domptage des Bêtes Sauvages)',
    verseRange: '4',
    arabicText: 'يَسْأَلُونَكَ مَاذَا أُحِلَّ لَهُمْ ۖ قُلْ أُحِلَّ لَكُمُ الطَّيِّبَاتُ ۙ وَمَا عَلَّمْتُم مِّنَ الْجَوَارِحِ مُكَلِّبِينَ تُعَلِّمُونَهُنَّ مِمَّا عَلَّمَكُمُ اللَّهُ ۖ فَكُلُوا مِمَّا أَمْسَكْنَ عَلَيْكُمْ وَاذْكُرُوا اسْمَ اللَّهِ عَلَيْهِ ۖ وَاتَّقُوا اللَّهَ ۚ إِنَّ اللَّهَ سَرِيعُ الْحِسَابِ',
    transliteration: 'Yas\'alūnaka mādhā uḥilla lahum qul uḥilla lakumu aṭ-ṭayyibātu wa mā ʿallamtum mina al-jawāriḥi mukallibīna tuʿallimūnahunna mimmā ʿallamakumu Allāhu...',
    frenchMeaning: 'Ils te demandent ce qui leur est permis. Dis: "Vous sont permises les bonnes nourritures, ainsi que ce que capturent les carnassiers que vous avez dressés (chiens de chasse), en leur apprenant ce qu\'Allah vous a appris...',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/005004.mp3',
    whyPrescribed: 'Spécifique pour les attaques de djinns féroces sous forme de chiens / sorcellerie confectionnée avec des poils de chien ("Mukallibeen").',
    recommendedReps: 7,
    isBaseVerse: false,
    triggeredByCondition: 'djinn_vengeance'
  },
  {
    id: 'verse_canari_blocage',
    surahNumber: 25,
    surahNameAr: 'سُورَةُ الفُرْقَان (آية تفتيت الأعمال)',
    surahNameFr: 'Al-Furqan (Verset 23 - Poussière Éparpillée)',
    verseRange: '23',
    arabicText: 'وَقَدِمْنَا إِلَىٰ مَا عَمِلُوا مِنْ عَمَلٍ فَجَعَلْنَاهُ هَبَاءً مَّنثُورًا',
    transliteration: 'Wa qadimnā ilā mā ʿamilū min ʿamalin fajaʿalnāhu habā\'an manthūrā.',
    frenchMeaning: 'Nous avons considéré l\'œuvre qu\'ils ont accomplie et Nous l\'avons réduite en poussière éparpillée au vent.',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/025023.mp3',
    whyPrescribed: 'Spécifique pour anéantir la sorcellerie du Canari (terre cuite enfouie avec mixture de blocage) et réduire à néant les complots occultes.',
    recommendedReps: 11,
    isBaseVerse: false,
    triggeredByCondition: 'sorcellerie_canari'
  },
  {
    id: 'verse_djinn_amoureux_impurete',
    surahNumber: 7,
    surahNameAr: 'سُورَةُ الأَعْرَاف (آية ستر العورات)',
    surahNameFr: 'Al-A\'raf (Verset 22) & At-Tariq (Versets 5 à 7)',
    verseRange: '7:22 & 86:5-7',
    arabicText: 'فَدَلَّاهُمَا بِغُرُورٍ ۚ فَلَمَّا ذَاقَا الشَّجَرَةَ بَدَتْ لَهُمَا سَوْآتُهُمَا وَطَفِقَا يَخْصِفَانِ عَلَيْهِمَا مِن وَرَقِ الْجَنَّةِ ۞ فَلْيَنظُرِ الْإِنسَانُ مِمَّ خُلِقَ ۝ خُلِقَ مِن مَّاءٍ دَافِقٍ ۝ يَخْرُجُ مِن بَيْنِ الصُّلْبِ وَالتَّرَائِبِ',
    transliteration: 'Badat lahumā saw\'ātuhumā wa ṭafiqā yakhṣifāni ʿalayhimā min waraqi al-jannah... Falyanẓuri al-insānu mimma khuliq, khuliqa min mā\'in dāfiq, yakhruju min bayni aṣ-ṣulbi wat-tarā\'ib.',
    frenchMeaning: 'Puis lorsqu\'ils eurent goûté de l\'arbre, leurs nudités leur apparurent; et ils se mirent à se couvrir avec des feuilles du Paradis... Que l\'homme considère donc de quoi il a été créé! Il a été créé d\'une giclée d\'eau sortie d\'entre les lombes et les côtes.',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/007022.mp3',
    whyPrescribed: 'Spécifique pour chasser le djinn amoureux (Rapport en rêve) et détruire la sorcellerie intime ou d\'impureté corporelle.',
    recommendedReps: 11,
    isBaseVerse: false,
    triggeredByCondition: 'djinn_amoureux'
  },
  {
    id: 'verse_poupee_piquee',
    surahNumber: 33,
    surahNameAr: 'سُورَةُ الأَحْزَاب (آية دفع الحصار والطعن)',
    surahNameFr: 'Al-Ahzab (Versets 10 à 11 - Poupée piquée / Aiguilles)',
    verseRange: '10 - 11',
    arabicText: 'إِذْ جَاءُوكُم مِّن فَوْقِكُمْ وَمِنْ أَسْفَلَ مِنكُمْ وَإِذْ زَاغَتِ الْأَبْصَارُ وَبَلَغَتِ الْقُلُوبُ الْحَنَاجِرَ وَتَظُنُّونَ بِاللَّهِ الظُّنُونَا ۝ هُنَالِكَ ابْتُلِيَ الْمُؤْمِنُونَ وَزُلْزِلُوا زِلْزَالًا شَدِيدًا',
    transliteration: 'Idh jā\'ūkum min fawqikum wa min asfala minkum wa idh zāghati al-abṣāru wa balaghati al-qulūbu al-ḥanājira wa taẓunnūna billāhi aẓ-ẓunūnā. Hunālika ibtuliya al-mu\'minūna wa zulzilū zilzālan shadīdā.',
    frenchMeaning: 'Quand ils vous vinrent d\'en haut et d\'en bas de vous, et que les regards étaient troublés, et que les cœurs remontaient aux gorges... Les croyants furent alors éprouvés et secoués d\'un violent tremblement.',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/033010.mp3',
    whyPrescribed: 'Spécifique pour la sorcellerie faite sur effigie ou poupée piquée d\'aiguilles (douleurs physiques perçantes et migratoires).',
    recommendedReps: 7,
    isBaseVerse: false,
    triggeredByCondition: 'poupee_piquee'
  },
  {
    id: 'verse_suspendue',
    surahNumber: 22,
    surahNameAr: 'سُورَةُ الحَجّ (آية الريح وسقوط الطير)',
    surahNameFr: 'Al-Hajj (Verset 31 - Sorcellerie suspendue au vent)',
    verseRange: '31',
    arabicText: 'حُنَفَاءَ لِلَّهِ غَيْرَ مُشْرِكِينَ بِهِ ۚ وَمَن يُشْرِكْ بِاللَّهِ فَكَأَنَّمَا خَرَّ مِنَ السَّمَاءِ فَتَخْطَفُهُ الطَّيْرُ أَوْ تَهْوِي بِهِ الرِّيحُ فِي مَكَانٍ سَحِيقٍ',
    transliteration: 'Wa man yushrik billāhi faka\'annamā kharra mina as-samā\'i fatakhṭafuhu aṭ-ṭayru aw tahwī bihi ar-rīḥu fī makānin saḥīq.',
    frenchMeaning: 'Quiconque associe à Allah, c\'est comme s\'il tombait du haut du ciel et que les oiseaux le happaient, ou que le vent le précipitait dans un abîme très lointain.',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/022031.mp3',
    whyPrescribed: 'Spécifique pour la sorcellerie accrochée dans les arbres, suspendue au vent ou jetée dans les hauteurs.',
    recommendedReps: 7,
    isBaseVerse: false,
    triggeredByCondition: 'sorcellerie_suspendue'
  },
  {
    id: 'verse_puits',
    surahNumber: 22,
    surahNameAr: 'سُورَةُ الحَجّ (آية البئر المعطلة)',
    surahNameFr: 'Al-Hajj (Verset 45 - Le Puits Délaissé)',
    verseRange: '45',
    arabicText: 'فَكَأَيِّن مِّن قَرْيَةٍ أَهْلَكْنَاهَا وَهِيَ ظَالِمَةٌ فَهِيَ خَاوِيَةٌ عَلَىٰ عُرُوشِهَا وَبِئْرٍ مُّعَطَّلَةٍ وَقَصْرٍ مَّشِيدٍ',
    transliteration: 'Faka\'ayyin min qaryatin ahlaknāhā wahiya ẓālimatun fahiya khāwiyatun ‘alā ‘urūshihā wa bi’rin mu‘aṭṭalatin wa qaṣrin mashīd.',
    frenchMeaning: 'Que de cités avons-Nous détruites parce qu\'elles étaient injustes ! Elles sont aujourd\'hui dévastées de fond en comble. Que de puits abandonnés et de palais édifiés !',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/022045.mp3',
    whyPrescribed: 'Spécifique pour la sorcellerie jetée au fond d\'un puits ou d\'un gouffre profond.',
    recommendedReps: 7,
    isBaseVerse: false,
    triggeredByCondition: 'sorcellerie_puits'
  },
  {
    id: 'verse_mange_bu',
    surahNumber: 56,
    surahNameAr: 'سُورَةُ الوَاقِعَة (آية شجر الزقوم والسحر المأكول)',
    surahNameFr: 'Al-Waqi\'a (Versets 51 à 54 - Arbre de Zaqqoum)',
    verseRange: '51 - 54',
    arabicText: 'ثُمَّ إِنَّكُمْ أَيُّهَا الضَّالُّونَ الْمُكَذِّبُونَ ۝ لَآكِلُونَ مِن شَجَرٍ مِّن زَقُّومٍ ۝ فَمَالِئُونَ مِنْهَا الْبُطُونَ ۝ فَشَارِبُونَ عَلَيْهِ مِنَ الْحَمِيمِ',
    transliteration: 'Thumma innakum ayyuhā aḍ-ḍāllūna al-mukadhdhibūn. La\'ākilūna min shajarin min zaqqūm. Famāli\'ūna minhā al-buṭūn. Fashāribūna ‘alayhi mina al-ḥamīm.',
    frenchMeaning: 'Puis vous, ô égarés, négateurs ! Vous mangerez certainement d\'un arbre de Zaqqoum. Vous vous en remplirez le ventre, puis vous boirez par-dessus de l\'eau bouillante...',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/056051.mp3',
    whyPrescribed: 'Spécifique pour dissoudre la sorcellerie mangée ou bue ancrée dans le tube digestif.',
    recommendedReps: 7,
    isBaseVerse: false,
    triggeredByCondition: 'sorcellerie_mangee'
  },
  {
    id: 'verse_pietine_chaussures',
    surahNumber: 20,
    surahNameAr: 'سُورَةُ طه (آية خلع النعلين والسحر الموطوء)',
    surahNameFr: 'Taha (Verset 12 - Enlève tes Sandales)',
    verseRange: '12',
    arabicText: 'إِنِّي أَنَا رَبُّكَ فَاخْلَعْ نَعْلَيْكَ ۖ إِنَّكَ بِالْوَادِ الْمُقَدَّسِ طُوًى',
    transliteration: 'Innī anā rabbuka fakhlaʿ naʿlayka innaka bil-wādī al-muqaddasi ṭuwā.',
    frenchMeaning: 'Je suis ton Seigneur. Enlève donc tes sandales, car tu es dans la vallée sacrée de Touwa.',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/020012.mp3',
    whyPrescribed: 'Spécifique pour la sorcellerie piétinée, aspergée sur le pas de porte ou déposée dans les chaussures.',
    recommendedReps: 7,
    isBaseVerse: false,
    triggeredByCondition: 'sorcellerie_pietinee'
  },
  {
    id: 'verse_habits_traces',
    surahNumber: 7,
    surahNameAr: 'سُورَةُ الأَعْرَاف (آية اللباس وستر العورات)',
    surahNameFr: 'Al-A\'raf (Verset 26 - Le Vêtement de Piété)',
    verseRange: '26',
    arabicText: 'يَا بَنِي آدَمَ قَدْ أَنزَلْنَا عَلَيْكُمْ لِبَاسًا يُوَارِي سَوْآتِكُمْ وَرِيشًا ۖ وَلِبَاسُ التَّقْوَىٰ ذَٰلِكَ خَيْرٌ',
    transliteration: 'Yā banī Ādama qad anzalnā ‘alaykum libāsan yuwārī saw’ātikum wa rīshan wa libāsu at-taqwā dhālika khayr.',
    frenchMeaning: 'Ô enfants d\'Adam ! Nous avons fait descendre sur vous un vêtement pour cacher vos nudités, ainsi que des parures...',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/007026.mp3',
    whyPrescribed: 'Spécifique pour la sorcellerie confectionnée avec des vêtements volés, traces ou sueur.',
    recommendedReps: 7,
    isBaseVerse: false,
    triggeredByCondition: 'sorcellerie_habits'
  },
  {
    id: 'verse_feu_brulures',
    surahNumber: 2,
    surahNameAr: 'سُورَةُ البَقَرَة (آية الإعصار الناري)',
    surahNameFr: 'Al-Baqara (Verset 266 - Le Tourbillon de Feu)',
    verseRange: '266',
    arabicText: 'فَأَصَابَهَا إِعْصَارٌ فِيهِ نَارٌ فَاحْتَرَقَتْ ۗ كَذَٰلِكَ يُبَيِّنُ اللَّهُ لَكُمُ الْآيَاتِ لَعَلَّكُمْ تَتَفَكَّرُونَ',
    transliteration: 'Fa-aṣābahā iʿṣārun fīhi nārun faḥtaraqat kadhālika yubayyinu Allāhu lakumu al-āyāti laʿallakum tatafakkarūn.',
    frenchMeaning: '... Puis elle est frappée par un tourbillon contenant du feu et la voilà entièrement brûlée.',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/002266.mp3',
    whyPrescribed: 'Spécifique pour la sorcellerie brûlée au feu, passée sur les braises.',
    recommendedReps: 7,
    isBaseVerse: false,
    triggeredByCondition: 'sorcellerie_feu'
  },
  {
    id: 'verse_mauvais_oeil',
    surahNumber: 68,
    surahNameAr: 'سُورَةُ القَلَم (آية إزلاق الأبصار والعين)',
    surahNameFr: 'Al-Qalam (Versets 51 à 52 - Le Regard Percant)',
    verseRange: '51 - 52',
    arabicText: 'وَإِن يَكَادُ الَّذِينَ كَفَرُوا لَيُزْلِقُونَكَ بِأَبْصَارِهِمْ لَمَّا سَمِعُوا الذِّكْرَ وَيَقُولُونَ إِنَّهُ لَمَجْنُونٌ ۝ وَمَا هُوَ إِلَّا ذِكْرٌ لِّلْعَالَمِينَ',
    transliteration: 'Wa in yakādu alladhīna kafarū layuzliqūnaka bi\'abṣārihim lammā sami‘ū adh-dhikra wa yaqūlūna innahu lamajnūn. Wa mā huwa illā dhikrun lil-‘ālamīn.',
    frenchMeaning: 'Peu s\'en faut que les mécréants ne te transpercent par leurs regards (yeux jaloux) lorsqu\'ils entendent le Rappel...',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/068051.mp3',
    whyPrescribed: 'Spécifique pour dissiper le mauvais œil destructeur (Al-\'Ayn) et la jalousie empoisonnée (Hassad).',
    recommendedReps: 7,
    isBaseVerse: false,
    triggeredByCondition: 'mauvais_oeil'
  },
  {
    id: 'verse_tete_waswas',
    surahNumber: 18,
    surahNameAr: 'سُورَةُ الكَهْف (آية دفع النسيان والوسواس)',
    surahNameFr: 'Al-Kahf (Verset 24 - Dissipation de l\'Oubli & Clarté)',
    verseRange: '24',
    arabicText: 'وَاذْكُر رَّبَّكَ إِذَا نَسِيتَ وَقُلْ عَسَىٰ أَن يَهْدِيَنِ رَبِّي لِأَقْرَبَ مِنْ هَٰذَا رَشَدًا',
    transliteration: 'Wadhkur rabbaka idhā nasīta wa qul ‘asā an yahdiyani rabbī li\'aqraba min hādhā rashadā.',
    frenchMeaning: 'Et invoque ton Seigneur quand tu oublies, et dis : "Je souhaite que mon Seigneur me guide vers ce qui est plus proche de la rectitude".',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/018024.mp3',
    whyPrescribed: 'Spécifique pour le djinn logé dans le crâne, pertes de mémoire, doutes obsessionnels religieux (Waswas).',
    recommendedReps: 7,
    isBaseVerse: false,
    triggeredByCondition: 'djinn_tete'
  }
];

export const PRACTICAL_REMEDIES: PracticalRemedy[] = [
  {
    id: 'douche_12_jours',
    title: 'Lavage Corporel à l\'Eau Coranisée Chaude (12 Jours)',
    subtitle: 'Règle générale fondamentale pour tous les cas de sorcellerie et djinns',
    category: 'lavage',
    ingredients: [
      'Grande bouteille ou bidon de 5L d\'eau propre',
      'Feuilles de Sidr (Jujubier) moulues ou sel de mer (optionnel recommandé)',
      'Une grande bassine propre pour se tenir dedans'
    ],
    preparationInstructions: [
      'Approcher la bouche très près du goulot de la bouteille d\'eau.',
      'Réciter avec intention sincère et foi : Al-Fatiha (7x), Ayat Al-Kursi (7x), les versets d\'annulation (Al-A\'raf 117-122, Yunus 81-82, Taha 68-70) et les 3 protectrices (3x chacune).',
      'Souffler légèrement avec de fins postillons d\'air et de salive (Nafth) après chaque récitation dans l\'eau.',
      'Chauffer une partie de cette eau coranisée afin que la douche soit bien chaude (la chaleur affaiblit et désintègre la sorcellerie et les djinns).',
      'Se placer nu dans une bassine dans la salle de bain, puis verser l\'eau chaude sur tout le corps de la tête aux pieds en frictionnant.',
      'IMPORTANT : Récupérer toute l\'eau dans la bassine et la jeter dehors dans la terre, au pied d\'un arbre ou de plantes propres (ne JAMAIS jeter l\'eau coranisée dans les toilettes ou égouts).'
    ],
    dosage: '1 douche chaude par jour pendant 12 jours consécutifs, de préférence le soir au moment du Maghreb ou avant de dormir.',
    importantNotes: [
      'Le soir est le moment où les djinns s\'activent, la douche à cette heure les paralyse et les brûle.',
      'En cas de règles chez la femme, le lavage peut continuer car il s\'agit d\'un soin de guérison.'
    ],
    recommendedDays: '12 jours consécutifs',
    iconName: 'Droplets'
  },
  {
    id: 'sana_makki_sidr',
    title: 'Tisane de Séné (Sana Makki) & Feuilles de Sidr',
    subtitle: 'Prescription capitale pour la Sorcellerie mangée ou bue',
    category: 'tisane',
    ingredients: [
      'Feuilles de Sana Makki (Séné d\'Alexandrie séché) - 2 cuillères à soupe',
      'Feuilles de Sidr (Jujubier séché) - 1 cuillère à café',
      '1 cuillère de Miel pur coranisé',
      '1 pincée de gingembre ou graine de nigelle moulue (pour adoucir l\'estomac)',
      '1/2 litre d\'eau coranisée'
    ],
    preparationInstructions: [
      'Faire bouillir l\'eau coranisée dans une casserole.',
      'Ajouter les feuilles de Sana Makki et de Sidr dès le début de l\'ébullition.',
      'Laisser frémir à feu doux pendant 10 à 15 minutes jusqu\'à coloration foncée.',
      'Filtrer la décoction dans une tasse et ajouter une cuillère de miel coranisé.',
      'Boire tiède le matin strictement à jeun.',
      'Attendre au moins 1 à 2 heures avant de prendre un petit-déjeuner léger.'
    ],
    dosage: 'Boire un grand verre le matin à jeun pendant 3 à 5 jours consécutifs. Provoque une évacuation intestinale (diarrhée nettoyante) qui extrait la matière sorcière.',
    importantNotes: [
      'Contre-indiqué chez la femme enceinte, allaitante, ou les personnes souffrant d\'occlusion intestinale aiguë.',
      'Bien s\'hydrater avec de l\'eau coranisée tout au long de la journée pour compenser l\'effet laxatif.'
    ],
    recommendedDays: '3 à 5 jours',
    iconName: 'CupSoda'
  },
  {
    id: 'hijama_ventouses',
    title: 'Hijama Thérapeutique (Ventouses Humides)',
    subtitle: 'Indispensable pour la Sorcellerie déposée et les Djinns localisés',
    category: 'hijama',
    ingredients: [
      'Kit de ventouses stériles à usage unique',
      'Huile de nigelle ou d\'olive coranisée pour désinfecter et apaiser',
      'Praticien certifié et hygiène rigoureuse'
    ],
    preparationInstructions: [
      'Pratiquer la Hijama sur les points Sunnah (entre les deux épaules / al-Kâhil) et directement sur la zone corporelle douloureuse identifiée (bas du dos, ovaires, nuque, sommet du crâne).',
      'Faire lire les versets de Roqya ou écouter le Coran pendant l\'aspiration des ventouses.',
      'Appliquer de l\'huile de Habba Sawda coranisée sur les micro-incisions après la séance.'
    ],
    dosage: '1 à 2 séances espacées de 10 à 15 jours selon la persistance des douleurs localisées.',
    importantNotes: [
      'Idéalement les 17, 19 ou 21 du mois hégirien, mais possible à tout moment en cas d\'urgence thérapeutique.',
      'La Hijama aspire les toxines magnétiques de la sorcellerie déposée et affaiblit le point d\'ancrage du djinn.'
    ],
    recommendedDays: 'Jours 1 et 12 du protocole',
    iconName: 'ShieldAlert'
  },
  {
    id: 'huile_nigelle_massage',
    title: 'Massage à l\'Huile de Nigelle (Habba Sawda) Coranisée',
    subtitle: 'Recommandé pour la Sorcellerie piétinée, cutanée et douleurs articulaires',
    category: 'massage',
    ingredients: [
      'Huile de Nigelle pure vierge (Habba Sawda)',
      'Huile d\'Olive extra vierge coranisée (50/50 si peau sensible)'
    ],
    preparationInstructions: [
      'Réciter sur la fiole d\'huile ouverte : Al-Fatiha (7x), Ayat Al-Kursi (7x) et les 3 Protectrices en soufflant dedans.',
      'Masser vigoureusement les zones touchées (pieds, jambes, articulations, bas du ventre, poitrine).',
      'Pour la sorcellerie piétinée : masser des orteils jusqu\'aux genoux en descendant pour évacuer l\'énergie négative.',
      'Faire ce massage de préférence après la douche chaude du soir avant de se coucher.'
    ],
    dosage: 'Application quotidienne chaque soir avant le sommeil durant les 12 jours.',
    importantNotes: [
      'L\'huile de nigelle est un poison brûlant pour les djinns et un réparateur puissant pour les vaisseaux et la peau.',
      'Le Prophète ﷺ a dit : "Dans la graine noire se trouve un remède contre tout mal sauf la mort".'
    ],
    recommendedDays: 'Tous les soirs (12 jours)',
    iconName: 'Flame'
  },
  {
    id: 'spray_maison',
    title: 'Purification du Logement (Vaporisation d\'Eau Coranisée)',
    subtitle: 'Assainir l\'atmosphère contre les blocages de foyer et présences occultes',
    category: 'spray_maison',
    ingredients: [
      'Vaporisateur propre',
      'Eau coranisée',
      'Gros sel marin et quelques gouttes d\'eau de fleur d\'oranger ou d\'eau de rose'
    ],
    preparationInstructions: [
      'Remplir le vaporisateur d\'eau coranisée mélangée à du gros sel dissous.',
      'Parcourir la maison en partant de l\'entrée.',
      'Vaporiser les 4 coins hauts et bas de chaque pièce, les cadres de portes et de fenêtres en disant "Bismillah".',
      'INTERDICTION : Ne jamais vaporiser l\'intérieur des toilettes ou de la salle d\'eau.'
    ],
    dosage: 'Vaporiser 1 fois tous les 3 jours ou dès qu\'une tension anormale se fait ressentir dans le foyer.',
    importantNotes: [
      'Faire tourner la récitation de Sourate Al-Baqara en continu dans la maison.',
      'Retirer les images d\'êtres animés ou statues qui empêchent les anges d\'entrer.'
    ],
    recommendedDays: 'Jours 1, 4, 8 et 12',
    iconName: 'Home'
  }
];

export const CONDITIONS_DICTIONARY: Record<string, ConditionInfo> = {
  sorcellerie_mangee: {
    id: 'sorcellerie_mangee',
    name: 'Sorcellerie Mangée ou Bue (Sihr Ma\'kool / Mashroob)',
    nameArabic: 'السِّحْرُ المَأْكُول وَالمَشْرُوب',
    category: 'sorcellerie',
    description: 'Une substance maléfique a été introduite dans de la nourriture ou une boisson et s\'est logée dans les parois de l\'estomac ou des intestins.',
    benHalimaExplanation: 'Selon Ben Halima Abderraouf, la sorcellerie avalée agit comme un aimant dans le ventre qui retient le djinn et cause des brûlures, des nausées chroniques ou une boule mobile dans l\'abdomen. Elle doit être expulsée physiquement par le Sana Makki.',
    keySymptoms: [
      'Brûlures d\'estomac persistantes et inexpliquées médicalement',
      'Sensation de boule ou de nœud qui se déplace dans le ventre',
      'Nausées fréquentes, dégoût soudain de certains aliments sains',
      'Gaz excessifs, ballonnements anormaux sans cause biologique',
      'Constipation chronique alternée avec des crampes'
    ],
    dreamSymbols: [
      'Manger de la viande avariée ou crue en rêve',
      'Être forcé à avaler des objets bizarres, cheveux ou liquides sales',
      'Vomir des matières noires, fils ou cailloux en rêve'
    ],
    remedyIds: ['sana_makki_sidr', 'douche_12_jours'],
    verseIds: ['fatiha', 'baqara_102', 'araf_117', 'yunus_81', 'taha_68', 'muawidhat'],
    cureDuration: '12 jours avec cure de tisane de 3 à 5 jours',
    colorScheme: 'amber'
  },
  sorcellerie_pietinee: {
    id: 'sorcellerie_pietinee',
    name: 'Sorcellerie Piétinée ou Marchée (Sihr Mawtoo)',
    nameArabic: 'السِّحْرُ المَوْطُوء / المَدْعُوس',
    category: 'sorcellerie',
    description: 'Un liquide ou une poudre maléfique a été versé sur un seuil de porte, un passage ou des vêtements et a été piétiné.',
    benHalimaExplanation: 'Ce type de sorcellerie pénètre par la plante des pieds et monte le long des jambes. Il provoque de l\'eczéma, des démangeaisons intenses, des plaies cutanées et une sensation de lourdeur écrasante aux membres inférieurs.',
    keySymptoms: [
      'Plaies ou eczéma soudain aux pieds, chevilles ou jambes sans allergie',
      'Sensations de brûlure sous la plante des pieds, surtout le soir',
      'Lourdeurs et fourmillements dans les jambes empêchant la marche fluide',
      'Chaleur anormale ou froid glacial localisé aux extrémités'
    ],
    dreamSymbols: [
      'Marcher pieds nus dans de la boue, excréments ou flaques souillées',
      'Pieds mordus par des bêtes ou piqués par des épines',
      'Perdre ses chaussures ou chaussures déchirées en rêve'
    ],
    remedyIds: ['douche_12_jours', 'huile_nigelle_massage'],
    verseIds: ['fatiha', 'baqara_102', 'araf_117', 'yunus_81', 'muawidhat'],
    cureDuration: '12 jours de lavage et massages aux pieds',
    colorScheme: 'rose'
  },
  sorcellerie_cadenas: {
    id: 'sorcellerie_cadenas',
    name: 'Sorcellerie du Cadenas (Sihr Al-Qufl / Blocage Total)',
    nameArabic: 'سِحْرُ القُفْلِ وَالتَّعْطِيل',
    category: 'sorcellerie',
    description: 'Sorcellerie confectionnée avec un cadenas fermé à clé, visant à verrouiller le destin de la personne (mariage, travail, fertilité, finances).',
    benHalimaExplanation: 'La personne se heurte à des portes fermées systématiques : les contrats échouent à la dernière seconde, les prétendants s\'enfuient sans explication, les démarches sont paralysées de façon irrationnelle.',
    keySymptoms: [
      'Blocage systématique et répété du mariage ou des relations sérieuses',
      'Échec inexpliqué aux examens ou entretiens malgré une excellente préparation',
      'Argent qui disparaît sans profit ou blocage commercial brutal',
      'Impression d\'être prisonnier d\'une cage invisible'
    ],
    dreamSymbols: [
      'Cadenas fermés, clés perdues ou cassées',
      'Être poursuivi et incapable de courir, jambes paralysées',
      'Être enfermé dans une cellule, une pièce sans porte ou un labyrinthe',
      'Bagarres et blocages corporels violents en rêve'
    ],
    remedyIds: ['douche_12_jours', 'spray_maison'],
    verseIds: ['fatiha', 'baqara_102', 'verse_cadenas', 'araf_117', 'yunus_81', 'muawidhat'],
    cureDuration: '12 jours avec récitation appuyée de Sourate 21:30',
    colorScheme: 'indigo'
  },
  sorcellerie_noeuds: {
    id: 'sorcellerie_noeuds',
    name: 'Sorcellerie à Nœuds et Serpents (Sihr Al-\'Uqad)',
    nameArabic: 'سِحْرُ العُقَدِ وَالخَيْط',
    category: 'sorcellerie',
    description: 'Sorcellerie réalisée avec des fils tressés sur lesquels des nœuds ont été soufflés avec des malédictions (souvent 11 nœuds comme lors du sortilège fait au Prophète ﷺ).',
    benHalimaExplanation: 'Chaque nœud représente un lien qui emprisonne un aspect de la santé ou du mental. En rêve, cette sorcellerie se manifeste invariablement sous l\'apparence de serpents, vipères ou cordes mouvantes.',
    keySymptoms: [
      'Migraines pulsatiles en étau autour de la tête',
      'Nœuds musculaires intenses dans le haut du dos et les épaules',
      'Difficulté à s\'exprimer, bégaiement ou perte de mémoire soudaine',
      'Sensation d\'étouffement au niveau de la gorge'
    ],
    dreamSymbols: [
      'Voir des serpents, couleuvres, cobras menaçants ou qui mordent',
      'Voir des cordes nouées, des fils entremêlés impossibles à défaire',
      'Se faire étrangler par un serpent ou une corde en rêve'
    ],
    remedyIds: ['douche_12_jours', 'huile_nigelle_massage'],
    verseIds: ['fatiha', 'baqara_102', 'verse_noeuds_serpent', 'muawidhat'],
    cureDuration: '12 jours avec récitation de Sourate 20:25-28 et Sourate Al-Falaq',
    colorScheme: 'emerald'
  },
  sorcellerie_cimetiere: {
    id: 'sorcellerie_cimetiere',
    name: 'Sorcellerie Enterrée en Cimetière (Sihr Al-Maqabir)',
    nameArabic: 'سِحْرُ المَقَابِرِ وَالمَدْفُون',
    category: 'sorcellerie',
    description: 'Le sortilège a été enfoui sous terre, dans une tombe, un linceul ou un cimetière afin d\'infliger une lente agonie, une dépression mortelle ou l\'invisibilité sociale.',
    benHalimaExplanation: 'La personne se sent "morte-vivante", coupée de ses émotions, apathique, avec une pâleur cadavérique et des idées morbides récurrentes.',
    keySymptoms: [
      'Apathie profonde, fatigue extrême dès le réveil, perte totale de joie de vivre',
      'Pensées obsessionnelles de mort, d\'enterrement ou de suicide',
      'Pâleur du visage, cernes noirs profonds sans cause médicale',
      'Sensation de froid glacial dans les os et le dos'
    ],
    dreamSymbols: [
      'Visiter des cimetières, marcher sur des tombes en rêve',
      'Parler avec des personnes décédées, cadavres, cercueils',
      'Être enterré vivant ou tomber dans une fosse sombre'
    ],
    remedyIds: ['douche_12_jours', 'hijama_ventouses'],
    verseIds: ['fatiha', 'baqara_102', 'verse_cimetiere', 'araf_117', 'yunus_81', 'muawidhat'],
    cureDuration: '12 jours avec récitation intensive de Sourate 6:122',
    colorScheme: 'purple'
  },
  sorcellerie_eau: {
    id: 'sorcellerie_eau',
    name: 'Sorcellerie Jetée dans l\'Eau / Rivière / Mer (Sihr Al-Miyāh)',
    nameArabic: 'سِحْرُ المَاءِ وَالبِحَار',
    category: 'sorcellerie',
    description: 'Le sortilège a été jeté dans un puits, une rivière, un fleuve ou au fond de l\'océan pour que son effet soit perpétuel et insaisissable.',
    benHalimaExplanation: 'L\'esprit de la victime devient instable, changeant comme les vagues, avec des sautes d\'humeur incontrôlables, des crises de larmes inexpliquées et une peur phobique de l\'eau.',
    keySymptoms: [
      'Instabilité émotionnelle aiguë, larmes soudaines sans tristesse consciente',
      'Sensation de noyade ou d\'oppression respiratoire sous la douche',
      'Perturbation du sommeil avec sueurs nocturnes abondantes',
      'Perte de concentration comme si la pensée s\'évaporait'
    ],
    dreamSymbols: [
      'Se noyer dans la mer, un lac ou une rivière tumultueuse',
      'Vagues géantes, tsunamis ou inondations submergeant la maison',
      'Puits profonds avec de l\'eau croupie ou sombre'
    ],
    remedyIds: ['douche_12_jours', 'spray_maison'],
    verseIds: ['fatiha', 'baqara_102', 'verse_eau', 'araf_117', 'yunus_81', 'muawidhat'],
    cureDuration: '12 jours avec récitation de Sourate 26:63',
    colorScheme: 'cyan'
  },
  djinn_amoureux: {
    id: 'djinn_amoureux',
    name: 'Djinn Amoureux & Sorcellerie d\'Impureté (Al-Mass Al-\'Ashiq)',
    nameArabic: 'الجِنُّ العَاشِق وَسِحْرُ النَّجَاسَة',
    category: 'djinn',
    description: 'Présence d\'un djinn lié à la personne par attirance charnelle ou par une sorcellerie faite sur des sous-vêtements ou des sécrétions corporelles.',
    benHalimaExplanation: 'Le djinn amoureux cherche l\'exclusivité : il sabote tout projet de mariage, provoque un dégoût intime envers le conjoint légitime, et se manifeste par des rêves érotiques intenses avec des sensations physiques réelles.',
    keySymptoms: [
      'Répulsion physique et dégoût inexplicable pour le conjoint ou les prétendants',
      'Douleurs pelviennes, brûlures intimes ou lourdeur dans le bas-ventre',
      'Isolement excessif, envie de rester dénudé(e) ou de passer des heures dans la salle de bain',
      'Fatigue intense au réveil comme après un effort physique nocturne'
    ],
    dreamSymbols: [
      'Rapports sexuels fréquents, lucides et intenses en rêve avec des inconnus ou des proches',
      'Sensation de présence physique dans le lit, caresses ou poids sur le corps au réveil',
      'Voir des personnes nues, des sous-vêtements souillés ou des lieux impurs'
    ],
    remedyIds: ['douche_12_jours', 'huile_nigelle_massage'],
    verseIds: ['fatiha', 'ayat_kursi', 'verse_djinn_amoureux_impurete', 'rahman_djinns', 'muawidhat'],
    cureDuration: '12 jours avec application d\'huile de nigelle intime et versets 7:22 et 86:5-7',
    colorScheme: 'rose'
  },
  djinn_vengeance: {
    id: 'djinn_vengeance',
    name: 'Attaque de Djinns / Vengeance & Ombre Agressives',
    nameArabic: 'المَسُّ الانْتِقَامِيّ وَالأَذَى',
    category: 'djinn',
    description: 'Agression spirituelle consécutive à une nuisance involontaire (ex: jeter de l\'eau bouillante sans Bismillah, blesser un animal hôte) ou envoyé par sorcellerie.',
    benHalimaExplanation: 'Le djinn attaque par des cauchemars terrifiants avec des bêtes féroces (chiens noirs, taureaux, créatures monstrueuses) et provoque des colères destructrices et incontrôlables.',
    keySymptoms: [
      'Crises de colère noire fulgurantes pour des futilités, regard noir et menaçant',
      'Sensations d\'être observé en permanence ou d\'avoir une présence dans le dos',
      'Bleus et ecchymoses inexpliqués sur les cuisses ou bras au réveil',
      'Peur panique la nuit et sursauts constants à l\'endormissement'
    ],
    dreamSymbols: [
      'Chiens noirs agressifs qui mordent ou poursuivent',
      'Bêtes sauvages, monstres, ombres difformes essayant d\'attaquer',
      'Être jeté du haut d\'un toit par une force invisible'
    ],
    remedyIds: ['douche_12_jours', 'spray_maison', 'hijama_ventouses'],
    verseIds: ['fatiha', 'ayat_kursi', 'verse_chiens_betes', 'rahman_djinns', 'muawidhat'],
    cureDuration: '12 jours avec récitation de Sourate 5:4 et Sourate 55:33-35',
    colorScheme: 'rose'
  },
  sorcellerie_canari: {
    id: 'sorcellerie_canari',
    name: 'Sorcellerie du Canari / Enfouissement & Écrasement',
    nameArabic: 'سِحْرُ القِدْرِ وَالفَخَّار (الكَانَارِي)',
    category: 'sorcellerie',
    description: 'Mélange occulte scellé dans une poterie de terre cuite enfouie pour détruire complètement le commerce, les richesses ou la paix d\'un foyer.',
    benHalimaExplanation: 'Provoque l\'anéantissement des efforts ("Haba\'an manthoora") : tout ce que la personne bâtit s\'effondre brutalement, perte d\'argent mystérieuse, faillite soudaine.',
    keySymptoms: [
      'Faillites financières soudaines et inexplicables à répétition',
      'Disputes familiales destructrices éclatant instantanément à l\'entrée dans la maison',
      'Pertes de mémoire massives lors des moments décisifs'
    ],
    dreamSymbols: [
      'Objets en terre cuite, canaris, marmites qui se brisent en morceaux',
      'Maison qui s\'écroule, toits qui tombent',
      'Argent qui se transforme en poussière ou feuilles mortes en rêve'
    ],
    remedyIds: ['douche_12_jours', 'spray_maison'],
    verseIds: ['fatiha', 'baqara_102', 'verse_canari_blocage', 'araf_117', 'yunus_81', 'muawidhat'],
    cureDuration: '12 jours avec récitation intensive de Sourate 25:23',
    colorScheme: 'amber'
  },
  poupee_piquee: {
    id: 'poupee_piquee',
    name: 'Sorcellerie sur Effigie / Poupée Piquée d\'Aiguilles',
    nameArabic: 'سِحْرُ الدُّمْيَةِ وَالإِبَر (الوُودُو)',
    category: 'sorcellerie',
    description: 'Sorcellerie effectuée sur un objet symbolique ou une poupée piquée d\'aiguilles pour infliger des douleurs physiques aiguës ciblées.',
    benHalimaExplanation: 'La personne ressent des piqûres soudaines comme des aiguilles qui transpercent le cœur, les tempes, le ventre ou les articulations sans aucune anomalie aux radios médicales.',
    keySymptoms: [
      'Sensations aiguës de coups d\'aiguilles ou de couteaux dans le corps',
      'Douleurs corporelles très vives mais migratoires et imprévisibles',
      'Picotements violents au niveau de la poitrine ou de la tête'
    ],
    dreamSymbols: [
      'Voir des poupées, des mannequins, des visages cousus ou percés',
      'Se faire piquer par des seringues, aiguilles ou clous en rêve',
      'Voir des gens coudre des vêtements ou planter des épingles'
    ],
    remedyIds: ['douche_12_jours', 'hijama_ventouses', 'huile_nigelle_massage'],
    verseIds: ['fatiha', 'baqara_102', 'verse_poupee_piquee', 'araf_117', 'yunus_81', 'muawidhat'],
    cureDuration: '12 jours avec récitation de Sourate 33:10-11',
    colorScheme: 'indigo'
  },
  sorcellerie_suspendue: {
    id: 'sorcellerie_suspendue',
    name: 'Sorcellerie Suspendue dans les Arbres ou au Vent',
    nameArabic: 'سِحْرُ المُعَلَّقِ فِي الرِّيَاح',
    category: 'sorcellerie',
    description: 'Le talisman a été accroché à une branche d\'arbre ou en hauteur pour que chaque coup de vent réactive le sortilège et l\'agitation.',
    benHalimaExplanation: 'La victime est prise d\'angoisses intenses dès que le vent souffle, elle est hyperactive, instable, incapable de rester en place avec une impression constante de vertige.',
    keySymptoms: [
      'Angoisses et palpitations qui augmentent les jours de grand vent ou d\'orage',
      'Sensations de vertige, perte d\'équilibre ou lévitation',
      'Agitation perpétuelle et impossibilité de se poser calmement'
    ],
    dreamSymbols: [
      'Voler sans contrôle dans les airs, être emporté par une tornade',
      'Être perché en haut d\'un grand arbre ou d\'un poteau instable',
      'Voir des oiseaux de proie agressifs ou des objets flottant au vent'
    ],
    remedyIds: ['douche_12_jours', 'huile_nigelle_massage'],
    verseIds: ['fatiha', 'baqara_102', 'verse_suspendue', 'araf_117', 'yunus_81', 'muawidhat'],
    cureDuration: '12 jours avec récitation de Sourate 22:31',
    colorScheme: 'cyan'
  },
  mauvais_oeil: {
    id: 'mauvais_oeil',
    name: 'Mauvais Œil & Jalousie Dévorante (Al-\'Ayn wal-Ḥasad)',
    nameArabic: 'العَيْنُ وَالحَسَد',
    category: 'mauvais_oeil',
    description: 'Regard d\'admiration dépourvu de bénédiction (Tabrik) ou regard de jalousie haineuse ayant projeté une flèche spirituelle néfaste.',
    benHalimaExplanation: 'Le mauvais œil brise les bénédictions : perte soudaine de beauté, d\'énergie, d\'éloquence ou de prospérité, accompagné de bâillements incessants et de soupirs profonds lors de l\'écoute du Coran.',
    keySymptoms: [
      'Bâillements continus et larmes abondantes dès qu\'on écoute le Coran ou qu\'on prie',
      'Poids lourd et oppressant entre les deux omoplates',
      'Changement soudain d\'éclat du visage (teint terne, boutons subits, chute de cheveux)',
      'Fainéantise extrême et apathie survenant après un succès ou une réussite'
    ],
    dreamSymbols: [
      'Yeux géants qui vous fixent en rêve',
      'Caméras, appareils photos ou regards insistants de personnes connues',
      'Puits ou trous profonds avec un œil au fond'
    ],
    remedyIds: ['douche_12_jours', 'hijama_ventouses'],
    verseIds: ['fatiha', 'ayat_kursi', 'muawidhat'],
    cureDuration: '7 à 12 jours de lavage corporel et récitation de Sourate Al-Falaq',
    colorScheme: 'emerald'
  }
};

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  // --- SECTION 1 : BLOCAGES DE VIE (SORCELLERIE GÉNÉRALE) ---
  {
    id: 'q_blockages',
    category: 'blockages',
    title: '1. Les Blocages Inhabituels de la Vie',
    subtitle: 'Vérification de la présence d\'une sorcellerie de blocage ou d\'empêchement',
    explanation: 'Dans l\'orthodoxie de la Roqya selon Ben Halima, la sorcellerie se caractérise d\'abord par des blocages irrationnels et anormaux qui défient toute logique humaine.',
    multiple: true,
    options: [
      {
        id: 'block_mariage',
        label: 'Blocage du mariage ou ruptures systématiques',
        description: 'Les fiançailles ou relations échouent brutalement au dernier moment sans raison valable, ou angoisse incontrôlable à l\'idée de s\'engager.',
        targetConditions: ['sorcellerie_cadenas', 'djinn_amoureux', 'sorcellerie_mangee'],
        severityWeight: 3,
        iconName: 'HeartCrack'
      },
      {
        id: 'block_travail',
        label: 'Blocage professionnel / financier brutal',
        description: 'Refus systématique d\'embauche malgré les qualifications, argent gagné qui s\'évapore sans profit, pertes financières inexplicables.',
        targetConditions: ['sorcellerie_cadenas', 'sorcellerie_canari', 'mauvais_oeil'],
        severityWeight: 3,
        iconName: 'Briefcase'
      },
      {
        id: 'block_disputes',
        label: 'Disputes conjugales explosives & haine soudaine',
        description: 'Disputes violentes pour des futilités dès qu\'on est ensemble, mais sentiment de manque dès qu\'on est séparé (Sihr At-Tafreeq).',
        targetConditions: ['sorcellerie_mangee', 'sorcellerie_cadenas', 'djinn_amoureux'],
        severityWeight: 3,
        iconName: 'Users'
      },
      {
        id: 'block_apathy',
        label: 'Apathie soudaine, paresse paralysante & abandon de soi',
        description: 'Incapacité à se lever, perte de toute motivation, envie irrésistible de rester couché dans le noir.',
        targetConditions: ['sorcellerie_cimetiere', 'mauvais_oeil', 'djinn_vengeance'],
        severityWeight: 2,
        iconName: 'BedDouble'
      },
      {
        id: 'block_etudes',
        label: 'Blocage des études / Perte brutale de mémoire',
        description: 'Trous noirs pendant les examens, incapacité à retenir une leçon malgré un travail assidu.',
        targetConditions: ['sorcellerie_cadenas', 'mauvais_oeil', 'sorcellerie_noeuds'],
        severityWeight: 2,
        iconName: 'GraduationCap'
      },
      {
        id: 'block_aucun',
        label: 'Aucun blocage majeur dans ma vie quotidienne',
        description: 'Mes projets avancent normalement, je n\'ai pas de blocage systématique.',
        targetConditions: [],
        severityWeight: 0,
        iconName: 'CheckCircle'
      }
    ]
  },

  // --- SECTION 2 : SYMPTÔMES PHYSIQUES & SOMATIQUES ---
  {
    id: 'q_physical_stomach',
    category: 'physical',
    title: '2. Symptômes de l\'Appareil Digestif & Ventre',
    subtitle: 'Ciblage de la Sorcellerie mangée ou bue (Sihr Ma\'kool)',
    explanation: 'La substance ingurgitée se concentre dans l\'estomac ou les intestins, provoquant des réactions physiques très distinctes.',
    multiple: true,
    options: [
      {
        id: 'phys_stomach_burn',
        label: 'Brûlures d\'estomac, gastrites chroniques inexpliquées',
        description: 'Sensations d\'acidité permanente même après des traitements médicaux réguliers.',
        targetConditions: ['sorcellerie_mangee'],
        severityWeight: 3,
        iconName: 'Flame'
      },
      {
        id: 'phys_stomach_ball',
        label: 'Sensation de boule ou nœud mobile dans le ventre',
        description: 'Une masse palpable qui bouge ou pulse, surtout lors de l\'écoute du Coran ou à jeun.',
        targetConditions: ['sorcellerie_mangee'],
        severityWeight: 3,
        iconName: 'CircleDot'
      },
      {
        id: 'phys_stomach_nausea',
        label: 'Nausées fréquentes et vomissements spontanés',
        description: 'Envie de vomir le matin ou après avoir bu de l\'eau, dégoût soudain de viandes.',
        targetConditions: ['sorcellerie_mangee'],
        severityWeight: 2,
        iconName: 'AlertTriangle'
      },
      {
        id: 'phys_stomach_none',
        label: 'Aucun symptôme digestif particulier',
        description: 'Mon estomac et mes intestins fonctionnent normalement.',
        targetConditions: [],
        severityWeight: 0,
        iconName: 'Check'
      }
    ]
  },
  {
    id: 'q_physical_body_localized',
    category: 'physical',
    title: '3. Douleurs Corporelles Localisées',
    subtitle: 'Ciblage de la Sorcellerie déposée, piétinée ou des piqûres',
    explanation: 'Une douleur persistante sans lésion médicale indique un djinn localisé ou une sorcellerie déposée sur un membre précis.',
    multiple: true,
    options: [
      {
        id: 'phys_feet_skin',
        label: 'Pieds brûlants, eczéma cutané, lourdeur des jambes',
        description: 'Brûlures sous la plante des pieds, démangeaisons aux chevilles, difficultés à marcher.',
        targetConditions: ['sorcellerie_pietinee'],
        severityWeight: 3,
        iconName: 'Footprints'
      },
      {
        id: 'phys_intimate_pelvis',
        label: 'Douleurs pelviennes / ovaires / blocages intimes',
        description: 'Règles très douloureuses et irrégulières, impuissance soudaine ou brûlures intimes inexpliquées.',
        targetConditions: ['djinn_amoureux', 'sorcellerie_deposee'],
        severityWeight: 3,
        iconName: 'ShieldAlert'
      },
      {
        id: 'phys_head_migraine',
        label: 'Migraines violentes en étau / Douleurs nuque et dos',
        description: 'Maux de tête continus qui résistent aux antalgiques, tête lourde comme serrée par un bandeau.',
        targetConditions: ['sorcellerie_noeuds', 'sorcellerie_deposee', 'mauvais_oeil'],
        severityWeight: 2,
        iconName: 'Activity'
      },
      {
        id: 'phys_sharp_stabbing',
        label: 'Sensations de piqûres d\'aiguilles aiguës migratoires',
        description: 'Coups d\'aiguille soudains dans la poitrine, le dos, les tempes ou les membres.',
        targetConditions: ['poupee_piquee'],
        severityWeight: 3,
        iconName: 'Zap'
      },
      {
        id: 'phys_body_none',
        label: 'Aucune douleur corporelle ciblée',
        description: 'Pas de douleur spécifique récurrente.',
        targetConditions: [],
        severityWeight: 0,
        iconName: 'Check'
      }
    ]
  },

  // --- SECTION 3 : ANALYSE DES RÊVES RÉCURRENTS (LE CŒUR DE LA MÉTHODE BEN HALIMA) ---
  {
    id: 'q_dreams_symbols',
    category: 'dreams',
    title: '4. Les Rêves Récurrents & Symbolisme Spirituel',
    subtitle: 'Identification précise de la nature et du lieu du sortilège',
    explanation: 'Pour Ben Halima Abderraouf, les rêves récurrents sont le miroir exact du symbole de la sorcellerie : un serpent = des nœuds, un cadenas = un blocage, un mort = un cimetière.',
    multiple: true,
    options: [
      {
        id: 'dream_snakes',
        label: 'Serpents, vipères, cobras menaçants ou morsures',
        description: 'Voir des serpents qui attaquent, s\'enroulent ou rampent dans la maison.',
        targetConditions: ['sorcellerie_noeuds'],
        severityWeight: 3,
        iconName: 'Workflow'
      },
      {
        id: 'dream_padlock_pursuit',
        label: 'Être poursuivi, bagarres, cadenas ou paralysie',
        description: 'Courir au ralenti, être enfermé dans une pièce sans issue, portes closes à clé.',
        targetConditions: ['sorcellerie_cadenas'],
        severityWeight: 3,
        iconName: 'Lock'
      },
      {
        id: 'dream_falling_pits',
        label: 'Chutes dans le vide, puits profonds, ravins',
        description: 'Tomber sans fin, glisser d\'un pont ou être coincé au fond d\'un trou sombre.',
        targetConditions: ['sorcellerie_puits', 'sorcellerie_suspendue'],
        severityWeight: 2,
        iconName: 'ArrowDownCircle'
      },
      {
        id: 'dream_water_sea',
        label: 'Eau trouble, mer agitée, fleuve ou noyade',
        description: 'Nager avec angoisse, être submergé par des vagues, marcher sous une pluie de boue.',
        targetConditions: ['sorcellerie_eau'],
        severityWeight: 3,
        iconName: 'Waves'
      },
      {
        id: 'dream_graveyard_dead',
        label: 'Cimetières, tombes, cercueils ou défunts',
        description: 'Marcher parmi les sépultures, parler à des morts qui appellent ou voir des cadavres.',
        targetConditions: ['sorcellerie_cimetiere'],
        severityWeight: 3,
        iconName: 'Skull'
      },
      {
        id: 'dream_dogs_beasts',
        label: 'Chiens agressifs (souvent noirs), monstres ou félins',
        description: 'Se faire mordre ou traquer par des bêtes sauvages ou des ombres noires.',
        targetConditions: ['djinn_vengeance'],
        severityWeight: 3,
        iconName: 'ShieldAlert'
      },
      {
        id: 'dream_sexual_intimate',
        label: 'Rapports intimes fréquents et lucides en rêve',
        description: 'Rêves érotiques répétés avec des personnes connues ou sans visage, sensation de présence au lit.',
        targetConditions: ['djinn_amoureux'],
        severityWeight: 3,
        iconName: 'HeartCrack'
      },
      {
        id: 'dream_canary_pots',
        label: 'Poteries, canaris en terre cuite, vaisselle brisée',
        description: 'Voir des marmites enfouies ou des récipients cassés avec de la terre.',
        targetConditions: ['sorcellerie_canari'],
        severityWeight: 3,
        iconName: 'Package'
      },
      {
        id: 'dream_dolls_needles',
        label: 'Poupées percées d\'aiguilles, coutures, clous',
        description: 'Voir des effigies, des visages cousus ou être piqué par des objets pointus.',
        targetConditions: ['poupee_piquee'],
        severityWeight: 3,
        iconName: 'Crosshair'
      },
      {
        id: 'dream_none',
        label: 'Je ne fais aucun de ces rêves récurrents',
        description: 'Mon sommeil est paisible ou sans ces symboles particuliers.',
        targetConditions: [],
        severityWeight: 0,
        iconName: 'Check'
      }
    ]
  },

  // --- SECTION 4 : RÉACTIONS SPIRITUELLES LORS DU CORAN & PRIÈRE ---
  {
    id: 'q_spiritual_reactions',
    category: 'spiritual',
    title: '5. Réactions lors des Actes d\'Adoration & Coran',
    subtitle: 'Signes révélateurs de la présence d\'un djinn ou d\'un mauvais œil',
    explanation: 'Le Coran agit comme une lumière brûlante sur les djinns et le mal occulte. Les réactions involontaires témoignent du conflit spirituel.',
    multiple: true,
    options: [
      {
        id: 'spirit_yawning_tears',
        label: 'Bâillements incessants et larmes abondantes à l\'écoute du Coran',
        description: 'Bâiller en continu dès que le Coran commence, avec soupirs profonds et yeux qui coulent.',
        targetConditions: ['mauvais_oeil', 'sorcellerie_noeuds'],
        severityWeight: 3,
        iconName: 'Eye'
      },
      {
        id: 'spirit_suffocation_chest',
        label: 'Oppression thoracique aiguë et envie de fuir la récitation',
        description: 'Poids écrasant sur la poitrine, étouffement, palpitations et irritabilité extrême.',
        targetConditions: ['djinn_vengeance', 'djinn_amoureux', 'sorcellerie_cadenas'],
        severityWeight: 3,
        iconName: 'HeartCrack'
      },
      {
        id: 'spirit_twitching_heat',
        label: 'Tremblements involontaires, sursauts ou bouffées de chaleur',
        description: 'Membres qui tressaillent tout seuls, frissons intenses dans le dos ou chaleur extrême.',
        targetConditions: ['djinn_vengeance', 'sorcellerie_mangee', 'djinn_amoureux'],
        severityWeight: 3,
        iconName: 'Flame'
      },
      {
        id: 'spirit_waswas_prayer',
        label: 'Oublis massifs dans la prière et doutes obsessionnels',
        description: 'Ne plus savoir à quelle rakat on en est, pensées blasphématoires involontaires lors de la prosternation.',
        targetConditions: ['djinn_vengeance', 'mauvais_oeil'],
        severityWeight: 2,
        iconName: 'HelpCircle'
      },
      {
        id: 'spirit_none',
        label: 'Je ressens une totale sérénité sans réaction anormale',
        description: 'L\'écoute du Coran m\'apaise sans aucun de ces symptômes.',
        targetConditions: [],
        severityWeight: 0,
        iconName: 'Smile'
      }
    ]
  }
];
