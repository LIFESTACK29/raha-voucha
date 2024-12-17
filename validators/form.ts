import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    sender_name: Yup.string().required('Sender name is required'),
    sender_email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
    sender_business_name: Yup.string(),
    sender_tel: Yup.string()
        .required('Phone number is required')
        .matches(/^[0-9]+$/, 'Phone number must be digits only'),
    recieverPackage: Yup.array()
        .of(
            Yup.object().shape({
                receiver_name: Yup.string().required(
                    'Receiver name is required'
                ),
                receiver_tel: Yup.string()
                    .required('Receiver phone number is required')
                    .matches(/^[0-9]+$/, 'Phone number must be digits only'),
                receiver_address: Yup.string().required(
                    'Receiver address is required'
                ),
                receiver_note: Yup.string().required(
                    'Receiver note is required'
                ),
                package_name: Yup.string().required('Package name is required'),
                package_offer: Yup.string().required(
                    'Package offer is required'
                ),
            })
        )
        .min(1, 'At least one receiver package is required'),
});
