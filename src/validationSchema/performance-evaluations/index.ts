import * as yup from 'yup';

export const performanceEvaluationValidationSchema = yup.object().shape({
  evaluation_date: yup.date().required(),
  rating: yup.number().integer().required(),
  comments: yup.string().nullable(),
  goals: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  evaluator_id: yup.string().nullable().required(),
});
