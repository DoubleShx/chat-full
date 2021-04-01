import { withFormik } from 'formik'
import RegisterForm from '../components/RegisterForm'
import validateFunc from '../../../utilities/helpers/validate'

export default withFormik({  
    enableReinitialize: true,
    mapPropsToValues: () => ({
      email: '',
      password: ''
    }),
    validate: values => {
      const errors = {};
      validateFunc({IsAuth:false, values, errors});     
      return errors;
    },


  
    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    },
  
    displayName: 'RegisterForm',
  })(RegisterForm)