const ADD_PERSONAL_INFO = 'ADD_PERSONAL_INFO';
const ADD_PROFESSIONAL_INFO = 'ADD_PROFESSIONAL_INFO';

const addPersonal = (personalInfo) => ({
  type: ADD_PERSONAL_INFO,
  payload: { ...personalInfo },
});

const addProfessional = (professionalInfo) => ({
  type: ADD_PROFESSIONAL_INFO,
  payload: { ...professionalInfo },
});

export { addPersonal, addProfessional, ADD_PERSONAL_INFO, ADD_PROFESSIONAL_INFO };
