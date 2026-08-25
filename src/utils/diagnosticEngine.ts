import { CONDITIONS_DICTIONARY, DIAGNOSTIC_QUESTIONS, PRACTICAL_REMEDIES, QURAN_VERSES } from '../data/roqyaData';
import { ConditionInfo, DiagnosticResultData, PracticalRemedy, QuranVerse } from '../types/roqya';

export function runDiagnostic(selectedOptionIds: string[]): DiagnosticResultData {
  const conditionScores: Record<string, number> = {};
  const matchingSymptomsMap: Record<string, string[]> = {};
  const matchingDreamsMap: Record<string, string[]> = {};

  // Initialize scores for all known conditions
  Object.keys(CONDITIONS_DICTIONARY).forEach((condId) => {
    conditionScores[condId] = 0;
    matchingSymptomsMap[condId] = [];
    matchingDreamsMap[condId] = [];
  });

  // Analyze all selected options
  DIAGNOSTIC_QUESTIONS.forEach((q) => {
    q.options.forEach((opt) => {
      if (selectedOptionIds.includes(opt.id)) {
        opt.targetConditions.forEach((targetCondId) => {
          if (conditionScores[targetCondId] !== undefined) {
            conditionScores[targetCondId] += opt.severityWeight;

            if (q.category === 'dreams') {
              matchingDreamsMap[targetCondId].push(opt.label);
            } else {
              matchingSymptomsMap[targetCondId].push(opt.label);
            }
          }
        });
      }
    });
  });

  // Calculate total score
  const totalScore = Object.values(conditionScores).reduce((a, b) => a + b, 0);

  // Filter conditions with a score > 0 and sort by score descending
  const identifiedConditionsList = Object.keys(conditionScores)
    .filter((condId) => conditionScores[condId] > 0)
    .map((condId) => {
      const score = conditionScores[condId];
      let confidence: 'faible' | 'modéré' | 'élevé' | 'très élevé' = 'faible';
      if (score >= 8) confidence = 'très élevé';
      else if (score >= 5) confidence = 'élevé';
      else if (score >= 3) confidence = 'modéré';

      return {
        condition: CONDITIONS_DICTIONARY[condId],
        score,
        confidence,
        matchingSymptoms: matchingSymptomsMap[condId],
        matchingDreams: matchingDreamsMap[condId]
      };
    })
    .sort((a, b) => b.score - a.score);

  const dominantCondition = identifiedConditionsList.length > 0 ? identifiedConditionsList[0].condition : undefined;

  // Build the practical remedies list
  const selectedRemedyIds = new Set<string>();
  // General rule for all: Lavage 12 jours is always prescribed
  selectedRemedyIds.add('douche_12_jours');

  identifiedConditionsList.forEach((item) => {
    item.condition.remedyIds.forEach((remId) => selectedRemedyIds.add(remId));
  });

  const practicalRemedies: PracticalRemedy[] = PRACTICAL_REMEDIES.filter((rem) =>
    selectedRemedyIds.has(rem.id)
  );

  // Build the Quranic Audio Playlist
  // Base verses for all
  const customPlaylistMap = new Map<string, QuranVerse>();
  QURAN_VERSES.filter((v) => v.isBaseVerse).forEach((v) => customPlaylistMap.set(v.id, v));

  // Add specific triggered verses from identified conditions
  identifiedConditionsList.forEach((item) => {
    const condId = item.condition.id;
    const specificVerses = QURAN_VERSES.filter((v) => v.triggeredByCondition === condId);
    specificVerses.forEach((v) => {
      customPlaylistMap.set(v.id, v);
    });
  });

  const customPlaylist = Array.from(customPlaylistMap.values());

  // Generate summary message according to Ben Halima Abderraouf
  let summaryMessage = '';
  if (identifiedConditionsList.length === 0) {
    summaryMessage = 'Aucun mal occulte majeur détecté. Vos symptômes ne correspondent pas aux critères orthodoxes de la sorcellerie ou des djinns. Continuez vos invocations de protection quotidiennes (Adhkar) et la prière à l\'heure.';
  } else if (dominantCondition) {
    summaryMessage = `L'analyse méthodique révèle des indices caractéristiques de : ${dominantCondition.name}. Un programme intensif de 12 jours combinant lavage corporel à l'eau chaude coranisée, écoute ciblée en arabe et remèdes prophétiques est vivement prescrit.`;
  }

  let warningAlert: string | undefined = undefined;
  if (totalScore >= 12) {
    warningAlert = 'Présence de symptômes marqués. Ne cédez pas à la peur : le complot du diable est faible face au Coran ("Inna kayda ash-shaytani kana da\'eefa"). La guérison vient d\'Allah seul par la constance des soins et le repentir sincère.';
  }

  return {
    id: `diag_${Date.now()}`,
    date: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }),
    totalScore,
    conditionsFound: identifiedConditionsList,
    dominantCondition,
    practicalRemedies,
    customPlaylist,
    summaryMessage,
    warningAlert
  };
}
