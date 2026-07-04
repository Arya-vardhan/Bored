/**
 * Deduction Validation and Grading Module
 */

window.verifyDeduction = function verifyDeduction(caseData, userChoices, linkedEvidenceIds) {
  const { suspect, method, motive } = userChoices;

  const isSuspectCorrect = suspect === caseData.solution.suspect;
  const isMethodCorrect = method === caseData.solution.method;
  const isMotiveCorrect = motive === caseData.solution.motive;
  
  // Players must link exactly 2 correct evidence items
  const isEvidenceCorrect = linkedEvidenceIds.length === 2 && 
    linkedEvidenceIds.every(id => caseData.solution.evidence.includes(id));

  const isAllCorrect = isSuspectCorrect && isMethodCorrect && isMotiveCorrect && isEvidenceCorrect;

  let feedbackMsg = "Your case filing was reviewed by the Superintendent, but some parameters don't connect:<br><br>";
  
  if (!isSuspectCorrect) {
    feedbackMsg += "• <strong>PRIMARY SUSPECT</strong>: The accused individual's timeline or opportunity doesn't match the crime scene parameters.<br>";
  } else {
    const correctSuspectOpt = caseData.suspectOptions.find(opt => opt.value === caseData.solution.suspect);
    const suspectLabel = correctSuspectOpt ? correctSuspectOpt.label.split(' ')[0] : 'The suspect';
    feedbackMsg += `• <strong>PRIMARY SUSPECT</strong>: Correct accusation. ${suspectLabel} is definitely the culprit.<br>`;
  }
  
  if (!isMethodCorrect) {
    feedbackMsg += "• <strong>EXECUTION METHOD</strong>: The physical mechanics of how the crime was committed contain logical flaws.<br>";
  } else {
    feedbackMsg += "• <strong>EXECUTION METHOD</strong>: Correct execution mechanics deduced.<br>";
  }
  
  if (!isMotiveCorrect) {
    feedbackMsg += "• <strong>CRIMINAL MOTIVE</strong>: The psychological reason driving the perpetrator doesn't align with their records.<br>";
  } else {
    feedbackMsg += "• <strong>CRIMINAL MOTIVE</strong>: Correct culprit motive deduced.<br>";
  }
  
  if (!isEvidenceCorrect) {
    feedbackMsg += "• <strong>LINKED EVIDENCE</strong>: The physical evidence linked does not provide sufficient, irrefutable proof of your theory.<br>";
  } else {
    feedbackMsg += "• <strong>LINKED EVIDENCE</strong>: Valid crime scene clues linked.<br>";
  }

  return {
    isAllCorrect,
    feedbackMsg
  };
}
