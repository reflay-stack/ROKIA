export type QuestionCategory = 'blockages' | 'physical' | 'dreams' | 'spiritual';

export interface QuestionOption {
  id: string;
  label: string;
  description?: string;
  targetConditions: string[];
  severityWeight: number; // 1 to 3
  iconName?: string;
}

export interface DiagnosticQuestion {
  id: string;
  category: QuestionCategory;
  title: string;
  subtitle: string;
  explanation: string; // Explication tirée de la méthode Ben Halima
  multiple: boolean;
  options: QuestionOption[];
}

export interface QuranVerse {
  id: string;
  surahNumber: number;
  surahNameAr: string;
  surahNameFr: string;
  verseRange: string;
  arabicText: string;
  transliteration: string;
  frenchMeaning: string;
  audioAyahNumber?: number; // Pour le lecteur audio EveryAyah ou CDN
  audioUrl?: string;
  whyPrescribed: string;
  recommendedReps: number;
  isBaseVerse: boolean;
  triggeredByCondition?: string;
}

export interface PracticalRemedy {
  id: string;
  title: string;
  subtitle: string;
  category: 'lavage' | 'tisane' | 'hijama' | 'massage' | 'spray_maison' | 'spiritualite';
  ingredients?: string[];
  preparationInstructions: string[];
  dosage: string;
  importantNotes: string[];
  recommendedDays: string;
  iconName: string;
}

export interface ConditionInfo {
  id: string;
  name: string;
  nameArabic: string;
  category: 'sorcellerie' | 'djinn' | 'mauvais_oeil';
  description: string;
  benHalimaExplanation: string;
  keySymptoms: string[];
  dreamSymbols: string[];
  remedyIds: string[];
  verseIds: string[];
  cureDuration: string;
  colorScheme: 'emerald' | 'amber' | 'rose' | 'indigo' | 'cyan' | 'purple';
}

export interface DiagnosticResultData {
  id: string;
  date: string;
  totalScore: number;
  conditionsFound: {
    condition: ConditionInfo;
    score: number;
    confidence: 'faible' | 'modéré' | 'élevé' | 'très élevé';
    matchingSymptoms: string[];
    matchingDreams: string[];
  }[];
  dominantCondition?: ConditionInfo;
  practicalRemedies: PracticalRemedy[];
  customPlaylist: QuranVerse[];
  summaryMessage: string;
  warningAlert?: string;
}

export interface DayLogEntry {
  dayNumber: number;
  date: string;
  isCompleted: boolean;
  completedTasks: {
    warmShower: boolean;
    quranAudio: boolean;
    morningDhikr: boolean;
    eveningDhikr: boolean;
    herbalTreatment: boolean;
    hijamaOrMassage: boolean;
  };
  physicalReactions: string[]; // Bâillements, sueurs, nausées, rot, picotements, soulagement
  dreamNotes: string;
  symptomSeverity: number; // 1 (apaisé) à 10 (très lourd)
  notes: string;
}

export type DhikrPeriod = 'matin' | 'soir' | 'sommeil' | 'protection' | 'tasbih';

export interface DhikrItem {
  id: string;
  title: string;
  category: DhikrPeriod;
  targetCount: number;
  arabicText: string;
  transliteration: string;
  frenchMeaning: string;
  virtue: string;
  reference: string;
  benHalimaAdvice?: string;
  badgeLabel?: string;
}

export interface DhikrUserProgress {
  counts: Record<string, number>;
  completedIds: string[];
  lastUpdated: string;
  totalTasbihLifetime: number;
}

export type ListeningReactionType = 
  | 'baillements' 
  | 'larmes' 
  | 'chaleur' 
  | 'froid' 
  | 'picotements' 
  | 'oppression' 
  | 'maux_tete' 
  | 'nausees' 
  | 'sursauts' 
  | 'angoisse';

export interface SymbolicVerseItem {
  id: string;
  symbolName: string;
  symbolCategory: 'sorcellerie' | 'djinn' | 'mauvais_oeil';
  surahNumber: number;
  surahNameAr: string;
  surahNameFr: string;
  verseRange: string;
  arabicText: string;
  transliteration: string;
  frenchMeaning: string;
  audioUrl: string;
  testedOccultAffliction: string;
  benHalimaDiagnosticAdvice: string;
  expectedReactionsIfAffected: string[];
  remedyAction: string;
  badgeLabel: string;
}

export interface AudioDiagnosticSession {
  date: string;
  reactionsByVerse: Record<string, ListeningReactionType[]>;
  notesByVerse?: Record<string, string>;
  detectedAfflictions: {
    verseId: string;
    symbolName: string;
    affliction: string;
    reactions: ListeningReactionType[];
    severityScore: number;
    recommendedRemedies: string[];
  }[];
}

