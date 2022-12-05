export const LOCAL_STORAGE_FIELDS = {
    CHAT:       {
        UNREAD_MESSAGES: 'UnsentMessages',
    },
    ONBOARDING: {
        DONE_STEPS:             'OnboardingDoneSteps',
        CURRENT_STEP_PATH:      'CurrentStepPath',
        CURRENT_QUESTION_INDEX: 'SurveyCurrentQuestionIndex',
    },
};
localStorage.setItem(LOCAL_STORAGE_FIELDS.ONBOARDING.DONE_STEPS, JSON.stringify({name: 'daniel'}));