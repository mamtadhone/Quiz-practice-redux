export const shuffleAnswers = (question) => {
  const unshuffledAnswers = [
    question.correctAnswer,
    ...question.incorrectAnswer,
  ];

  return unshuffledAnswers
    .map((answer) => ({ sort: Math.random(), value: answer }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};

export const normalizeQuestions = (backendQuestions) => {
  return backendQuestions.map((backendQuestion) => ({
    question: decodeURIComponent(backendQuestion.question),
    correctAnswer: decodeURIComponent(backendQuestion.correct_answer),
    incorrectAnswers: backendQuestion.incorrectAnswers.map((a) =>
      decodeURIComponent(a),
    ),
  }));
};
