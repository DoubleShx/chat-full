import { withFormik } from 'formik'
import LoginForm from '../components/LoginForm'
import validateFunc from '../../../utilities/helpers/validate'

export default withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        password: '',
        email: ''
    }),
    validate: values => {
        const errors = {};
        console.log(values)
        const validate = validateFunc({IsAuth:true, values, errors});       
        return errors;
    },
    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 1000);
    },
    
displayName: 'LoginForm',
})(LoginForm)



