import * as yup from 'yup';

export const timeTrackingValidationSchema = yup.object().shape({
  clock_in: yup.date().required(),
  clock_out: yup.date().required(),
  total_hours: yup.number().integer().required(),
  date: yup.date().required(),
  user_id: yup.string().nullable().required(),
});
