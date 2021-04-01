export default ({IsAuth, values, errors}) => {
    const rules = {
        email: (errors, value) => {
            if (!value) {
                errors.email = 'Set E-mail'
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                errors.email = "Invalid e-mail address"
            }
        },
        password: (errors, value) => {
            if (!value) {
                errors.password = 'Set password'
            }
            else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/i.test(value)) {
                IsAuth ? errors.password =  'Password invalid' : 
                errors.password = "Password should be stronger"
            }
        }
    }
    Object.keys(values).forEach(key => { console.log(`key:${values[key]}`); rules[key] && rules[key](errors, values[key]) })
}


