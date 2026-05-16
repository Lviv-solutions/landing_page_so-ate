'use client';

import React, { useState } from 'react';
import Image from "next/image";
import { Dialog, DialogContent, Alert } from "@mui/material";
import { useTranslation } from "../hooks/useTranslation";
import { webClientAuthService } from "../../lib/auth-service";
import SignUpSuccessModal from "./SignUpSuccessModal";
import { IconCircle } from "./ui/IconCircle";
import styles from './SignUpModal.module.css';

interface SignUpModalProps {
  open: boolean;
  onClose: () => void;
  onSwitchToSignIn: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ open, onClose, onSwitchToSignIn }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateField = (field: string, value: string): string => {
    switch (field) {
      case 'firstName':
      case 'lastName':
        if (value.trim().length < 2) return t('auth.nameTooShort');
        if (value.trim().length > 50) return t('auth.nameTooLong');
        if (!/^[\p{L}\s'-]+$/u.test(value.trim())) return t('auth.nameInvalid');
        return '';
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return t('auth.emailInvalid');
        return '';
      case 'phone':
        if (!/^\+?[0-9]{8,15}$/.test(value.replace(/[\s()-]/g, ''))) return t('auth.phoneInvalid');
        return '';
      case 'password':
        if (value.length < 8) return t('auth.passwordTooShort');
        if (!/[A-Z]/.test(value)) return t('auth.passwordNoUppercase');
        if (!/[a-z]/.test(value)) return t('auth.passwordNoLowercase');
        if (!/[0-9]/.test(value)) return t('auth.passwordNoNumber');
        return '';
      case 'confirmPassword':
        if (value !== formData.password) return t('auth.passwordMismatch');
        return '';
      default:
        return '';
    }
  };

  const isFormValid = formData.firstName.trim() !== '' &&
                      formData.lastName.trim() !== '' &&
                      formData.email.trim() !== '' &&
                      formData.phone.trim() !== '' &&
                      formData.password.trim() !== '' &&
                      formData.confirmPassword.trim() !== '' &&
                      Object.values(fieldErrors).every(err => err === '');

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrorMessage('');
  };

  const handleBlur = (field: string) => () => {
    const value = formData[field as keyof typeof formData];
    if (value.trim() !== '') {
      const error = validateField(field, value);
      setFieldErrors(prev => ({ ...prev, [field]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields before submit
    const errors: Record<string, string> = {};
    for (const [field, value] of Object.entries(formData)) {
      errors[field] = validateField(field, value);
    }
    setFieldErrors(errors);

    const hasErrors = Object.values(errors).some(err => err !== '');
    if (hasErrors) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const result = await webClientAuthService.register({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      });

      if (result.success) {
        onClose();
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: ''
        });
        setShowSuccessModal(true);
      } else {
        setErrorMessage(result.message || t('auth.registrationFailed'));
      }
    } catch (error) {
      setErrorMessage(t('auth.networkError'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '16px',
          backgroundColor: '#fff',
          boxShadow: '0px 8px 16px rgba(145, 158, 171, 0.16)',
        }
      }}
    >
      <DialogContent sx={{ padding: 0 }}>
        <form onSubmit={handleSubmit}>
          <div className={styles.dialogtitle}>
            <div className={styles.icon} />
            <div className={styles.authformsignin}>
              <div className={styles.stack}>
                <div className={styles.logo} />
              </div>
              <b className={styles.b}>{t('auth.signUpTitle')}</b>

              {errorMessage && (
                <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
                  {errorMessage}
                </Alert>
              )}

              <div className={styles.content}>
                <div className={styles.frameParent}>
                  <div className={styles.textFieldParent}>
                    <div className={styles.textField}>
                      <div className={styles.textField2}>
                        <div className={styles.input}>
                          <input
                            type="text"
                            className={`${styles.label} ${fieldErrors.lastName ? styles.inputError : ''}`}
                            placeholder={t('auth.lastName')}
                            value={formData.lastName}
                            onChange={handleInputChange('lastName')}
                            onBlur={handleBlur('lastName')}
                            required
                          />
                        </div>
                      </div>
                      {fieldErrors.lastName && <span className={styles.fieldError}>{fieldErrors.lastName}</span>}
                    </div>
                    <div className={styles.textField}>
                      <div className={styles.textField2}>
                        <div className={styles.input}>
                          <input
                            type="text"
                            className={`${styles.label} ${fieldErrors.firstName ? styles.inputError : ''}`}
                            placeholder={t('auth.firstName')}
                            value={formData.firstName}
                            onChange={handleInputChange('firstName')}
                            onBlur={handleBlur('firstName')}
                            required
                          />
                        </div>
                        <Image className={styles.startAdornmentIcon} src="/assets/elements-1.svg" width={32} height={24} sizes="100vw" alt="" />
                      </div>
                      {fieldErrors.firstName && <span className={styles.fieldError}>{fieldErrors.firstName}</span>}
                    </div>
                  </div>
                  <div className={styles.textField5}>
                    <div className={styles.textField2}>
                      <div className={styles.input}>
                        <input
                          type="email"
                          className={`${styles.label} ${fieldErrors.email ? styles.inputError : ''}`}
                          placeholder={t('auth.email')}
                          value={formData.email}
                          onChange={handleInputChange('email')}
                          onBlur={handleBlur('email')}
                          required
                        />
                      </div>
                      <div className={styles.startAdornment}>
                        <IconCircle size="sm" color="white">
                          <Image src="/assets/email.svg" width={21.5} height={18.5} sizes="100vw" alt="" />
                        </IconCircle>
                      </div>
                    </div>
                    {fieldErrors.email && <span className={styles.fieldError}>{fieldErrors.email}</span>}
                  </div>
                  <div className={styles.textField5}>
                    <div className={styles.textField2}>
                      <div className={styles.input}>
                        <input
                          type="tel"
                          className={`${styles.label} ${fieldErrors.phone ? styles.inputError : ''}`}
                          placeholder={t('auth.phoneNumber')}
                          value={formData.phone}
                          onChange={handleInputChange('phone')}
                          onBlur={handleBlur('phone')}
                          autoComplete="off"
                          required
                        />
                      </div>
                      <div className={styles.startAdornment}>
                        <IconCircle size="sm" color="white">
                          <Image src="/assets/phone.svg" width={15.5} height={21.5} sizes="100vw" alt="" />
                        </IconCircle>
                      </div>
                    </div>
                    {fieldErrors.phone && <span className={styles.fieldError}>{fieldErrors.phone}</span>}
                  </div>
                  <div className={styles.textField5}>
                    <div className={styles.textField2}>
                      <div className={styles.endAdornment} onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer' }}>
                        <div className={styles.endAdornment2}>
                          <div className={styles.endAdornment}>
                            <div className={styles.view}>
                              <Image className={styles.elementsIcon3} src="/assets/eye.svg" width={21.5} height={15.5} sizes="100vw" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.input}>
                        <input
                          type={showPassword ? "text" : "password"}
                          className={`${styles.label} ${fieldErrors.password ? styles.inputError : ''}`}
                          placeholder={t('auth.password')}
                          value={formData.password}
                          onChange={handleInputChange('password')}
                          onBlur={handleBlur('password')}
                          required
                        />
                      </div>
                      <div className={styles.startAdornment}>
                        <IconCircle size="sm" color="white">
                          <Image src="/assets/lock.svg" width={21.5} height={21.5} sizes="100vw" alt="" />
                        </IconCircle>
                      </div>
                    </div>
                    {fieldErrors.password && <span className={styles.fieldError}>{fieldErrors.password}</span>}
                  </div>
                  <div className={styles.textField5}>
                    <div className={styles.textField2}>
                      <div className={styles.endAdornment} onClick={() => setShowConfirmPassword(!showConfirmPassword)} style={{ cursor: 'pointer' }}>
                        <div className={styles.endAdornment2}>
                          <div className={styles.endAdornment}>
                            <div className={styles.view}>
                              <Image className={styles.elementsIcon3} src="/assets/eye.svg" width={21.5} height={15.5} sizes="100vw" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.input}>
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          className={`${styles.label} ${fieldErrors.confirmPassword ? styles.inputError : ''}`}
                          placeholder={t('auth.confirmPassword')}
                          value={formData.confirmPassword}
                          onChange={handleInputChange('confirmPassword')}
                          onBlur={handleBlur('confirmPassword')}
                          required
                        />
                      </div>
                      <div className={styles.startAdornment}>
                        <IconCircle size="sm" color="white">
                          <Image src="/assets/lock.svg" width={21.5} height={21.5} sizes="100vw" alt="" />
                        </IconCircle>
                      </div>
                    </div>
                    {fieldErrors.confirmPassword && <span className={styles.fieldError}>{fieldErrors.confirmPassword}</span>}
                  </div>
                </div>
                <button
                  type="submit"
                  className={`${styles.button} ${isFormValid && !isSubmitting ? styles.buttonActive : ''}`}
                  disabled={isSubmitting || !isFormValid}
                >
                  <b className={styles.label7}>
                    {isSubmitting ? t('auth.creating') : t('auth.createAccount')}
                  </b>
                </button>
                <div className={styles.div}>
                  <span>
                    <span>{t('auth.alreadyHaveAccount')}</span>
                    <span className={styles.span} onClick={onSwitchToSignIn} style={{ cursor: 'pointer' }}>
                      {t('auth.signIn')}
                    </span>
                  </span>
                </div>
                <div className={styles.stack2}>
                  <div className={styles.divider} />
                  <b className={styles.or}>{t('auth.or')}</b>
                  <div className={styles.divider} />
                </div>
                <div className={styles.stack3}>
                  <div className={styles.iconbutton} />
                  <div className={styles.iconbutton} />
                  <div className={styles.iconbutton} />
                </div>
              </div>
            </div>
            <div className={styles.action} />
          </div>
        </form>
      </DialogContent>
    </Dialog>
    <SignUpSuccessModal
      open={showSuccessModal}
      onClose={() => setShowSuccessModal(false)}
    />
    </>
  );
};

export default SignUpModal;
