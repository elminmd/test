import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    commerceType: Yup.string().required('Commerce type is required'),
    autoType: Yup.string().required('Auto type is required'),
    engineType: Yup.string().required('Engine type is required'),
    price: Yup.number().required('Price is required'),
    transportExpenses: Yup.number().required('Transport expenses are required'),
    otherExpenses: Yup.number().required('Other expenses are required'),
    engine: Yup.number().required('Engine is required'),
    issueDate: Yup.string().required('Issue date is required'),
});