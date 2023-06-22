import * as React from 'react'
import * as S from '../../GlobalStyles/GlobalStyles'
import { Theme } from '../../Theme/Theme';

const InputField = ({ label, placeholder, name, id, type, onChange, value, error = false, getIsValidEmail, getState }) => {
    const inputRef = React.useRef();
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <label htmlFor={name}>{label}</label>
                {getIsValidEmail && getState?.trim() !== '' && (
                    <span style={{ color: 'green' }}>valid email</span>
                )}
                {!getIsValidEmail && getState?.trim() !== '' && (
                    <span style={{ color: 'red' }}>invalid email</span>
                )}
            </div>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                name={name}
                ref={inputRef}
                onFocus={() => {
                    inputRef.current.style.borderColor = Theme.primaryLightThemeColors.PurplishBlue;
                }}
                onBlur={() => {
                    inputRef.current.style.borderColor = Theme.primaryLightThemeColors.CoolGray;
                }}
            />
        </div>
    )
}

const Button = ({ name, onclick = () => { } }) => {
    return <S.StyledBtn onclick={onclick}>{name}</S.StyledBtn>
}

export const Form = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const [isValidEmail, setIsValidEmail] = React.useState(false);
    const [fields, setFields] = React.useState({
        name: '',
        email: '',
        phone: '',
    });

    const handleFields = (event) => {
        setFields({ ...fields, [event.target.name]: event.target.value });
    };

    const submit = () => {
        setIsValidEmail(emailRegex.test(fields.email));
    }

    React.useEffect(() => {
        setIsValidEmail(emailRegex.test(fields.email));
    }, [fields]);

    return (
        <S.StyledForm>
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and Phone number.</p>
            <InputField
                label={'Name'}
                placeholder={'e.g. Stephen King'}
                id={'name'}
                name={'name'}
                type={'text'}
                onChange={handleFields}
                value={fields.name}
                getIsValidEmail={isValidEmail}
                getState={fields.email}
            />
            <InputField
                label={'Email Address'}
                placeholder={'e.g. stephenking@lorem.com'}
                id={'email'}
                name={'email'}
                type={'email'}
                onChange={handleFields}
                value={fields.email}
            />
            <InputField
                label={'Phone Number'}
                placeholder={'e.g. +1 234 567 890'}
                id={'phone'}
                name={'phone'}
                type={'number'}
                onChange={handleFields}
                value={fields.phone}
            />
            <Button
                onclick={submit}
                name={'Next Step'}
            />
        </S.StyledForm>
    );
};
