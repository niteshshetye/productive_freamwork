import * as Yup from 'yup';

export const initialValues = {
    name: '', 
    age: '', 
    email: '', 
    technology: '', 
    experience: ''
}

export const validationShema = Yup.object().shape({
    name: Yup.string().required('Required*'),
    age: Yup.number().required('Required*'),
    email: Yup.string().email('Please Enter Valide Email Id').required('Required*'),
    technology: Yup.string().required('Required*'),
    experience: Yup.number().required('Required*'),
})
