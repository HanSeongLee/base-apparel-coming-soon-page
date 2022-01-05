import React, {useCallback, useState} from 'react';
import styles from './style.module.scss';
import ArrowIcon from '/public/icons/icon-arrow.svg';
import ErrorIcon from '/public/icons/icon-error.svg';
import cn from 'classnames';

const EmailForm = () => {
    const [error, setError] = useState(false);
    const onInvalid = useCallback((e) => {
        const { validationMessage } = e.target;
        setError(!!validationMessage);
        e.preventDefault();
    }, []);

    return (
        <form className={styles.form}>
            <input className={cn(styles.input, {
                [styles.invalid]: error,
            })}
                   name={'email'}
                   type={'email'}
                   placeholder={'Email Address'}
                   required
                   onInvalid={onInvalid}
            />
            {error && (
                <>
                    <div className={styles.error}>
                        Please provide a valid email
                    </div>
                    <div className={styles.errorIcon}>
                        <ErrorIcon />
                    </div>
                </>
            )}
            <button className={styles.submitButton}
                    aria-label={'enter'}
                    type={'submit'}
            >
                <ArrowIcon />
            </button>
        </form>
    );
};

export default EmailForm;
