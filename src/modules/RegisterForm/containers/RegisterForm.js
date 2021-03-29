import { withFormik } from 'formik'
import RegisterForm from '../components/RegisterForm'

export default withFormik({  
    validate: values => {
      const errors = {};
  
      if (!values.email) {
        errors.email = 'Set E-mail';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      
      if (!values.password) {
        errors.password = 'Set Password';
      } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/i.test(values.password)) {
        errors.password = 'Password must be stronger';
      }
      if (!values.passwords) {
          errors.passwords = "Confirm Password"
      }
      else if ((values.passwords === values.password)) {
          errors.paswords = 'Passwords must be same'
      }
      return errors
    },
  
    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    },
  
    displayName: 'RegisterForm',
  })(RegisterForm)