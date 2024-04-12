import { Formik, Form, Field } from 'formik';
import { TextField, Grid } from '@mui/material';
import { validationSchema } from './validation';
import { CustomTextField } from './styled';

const initialValues = {
    commerceType: 'nonFree',
    autoType: '0',
    engineType: 'Diesel',
    price: '11',
    transportExpenses: '11',
    otherExpenses: '11',
    engine: '11',
    issueDate: '18.08.2022',
};

export const MyForm = () => {
    const onSubmit = (values) => {
        console.log({ values });
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Formik
                    {...{ initialValues, validationSchema, onSubmit }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <Field
                                as={CustomTextField}
                                name="commerceType"
                                error={touched.commerceType && !!errors.commerceType}
                                helperText={touched.commerceType && errors.commerceType}
                                fullWidth
                            />
                        </Form>
                    )}
                </Formik>
            </Grid>
            <Grid item xs={6}>

            </Grid>
        </Grid>
    );
};

