/**
 * Deduction Validation and Grading Module
 * 1940s CID Forensic Evaluation System
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

  const correctSuspectOpt = caseData.suspectOptions.find(opt => opt.value === caseData.solution.suspect);
  const suspectLabel = correctSuspectOpt ? correctSuspectOpt.label.split(' ')[0] : 'The suspect';

  const reviewItems = [
    {
      index: '01',
      id: 'suspect',
      label: 'PRIMARY ACCUSED',
      isCorrect: isSuspectCorrect,
      statusBadge: isSuspectCorrect ? 'SUBSTANTIATED' : 'DEFICIENT',
      detail: isSuspectCorrect
        ? `Accusation substantiated. ${suspectLabel} matches the physical timeline and opportunity window.`
        : "The accused individual's timeline or opportunity contradicts the physical crime scene parameters."
    },
    {
      index: '02',
      id: 'method',
      label: 'EXECUTION METHOD',
      isCorrect: isMethodCorrect,
      statusBadge: isMethodCorrect ? 'SUBSTANTIATED' : 'DEFICIENT',
      detail: isMethodCorrect
        ? "Execution mechanics accurately reconstructed from physical traces."
        : "The deduced mechanics of the crime contain fatal physical or logical flaws."
    },
    {
      index: '03',
      id: 'motive',
      label: 'CRIMINAL MOTIVE',
      isCorrect: isMotiveCorrect,
      statusBadge: isMotiveCorrect ? 'SUBSTANTIATED' : 'DEFICIENT',
      detail: isMotiveCorrect
        ? "Perpetrator motive corroborated by archival financial and personal records."
        : "The psychological driver does not align with the suspect's background or financial profile."
    },
    {
      index: '04',
      id: 'evidence',
      label: 'PHYSICAL EXHIBITS',
      isCorrect: isEvidenceCorrect,
      statusBadge: isEvidenceCorrect ? 'SUBSTANTIATED' : 'DEFICIENT',
      detail: isEvidenceCorrect
        ? "Sealed exhibits provide irrefutable physical proof connecting suspect to crime vector."
        : "The sealed exhibits fail to provide sufficient, conclusive proof to stand trial before the Magistrate."
    }
  ];

  let feedbackMsg = "Your case filing was reviewed by the Superintendent, but some parameters don't connect:<br><br>";
  reviewItems.forEach(item => {
    feedbackMsg += `• <strong>${item.label}</strong>: ${item.detail}<br>`;
  });

  return {
    isAllCorrect,
    feedbackMsg,
    reviewItems
  };
};
