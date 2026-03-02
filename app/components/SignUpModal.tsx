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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isFormValid = formData.firstName.trim() !== '' &&
                      formData.lastName.trim() !== '' &&
                      formData.email.trim() !== '' &&
                      formData.phone.trim() !== '' &&
                      formData.password.trim() !== '' &&
                      formData.confirmPassword.trim() !== '';

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    setErrorMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage(t('auth.passwordMismatch'));
      return;
    }

    if (formData.password.length < 8) {
      setErrorMessage(t('auth.passwordTooShort'));
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
                            className={styles.label}
                            placeholder={t('auth.lastName')}
                            value={formData.lastName}
                            onChange={handleInputChange('lastName')}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.textField}>
                      <div className={styles.textField2}>
                        <div className={styles.input}>
                          <input
                            type="text"
                            className={styles.label}
                            placeholder={t('auth.firstName')}
                            value={formData.firstName}
                            onChange={handleInputChange('firstName')}
                            required
                          />
                        </div>
                        <Image className={styles.startAdornmentIcon} src="/assets/elements-1.svg" width={32} height={24} sizes="100vw" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className={styles.textField5}>
                    <div className={styles.textField2}>
                      <div className={styles.input}>
                        <input
                          type="email"
                          className={styles.label}
                          placeholder={t('auth.email')}
                          value={formData.email}
                          onChange={handleInputChange('email')}
                          required
                        />
                      </div>
                      <div className={styles.startAdornment}>
                        <IconCircle size="sm" color="white">
                          <Image src="/assets/email.svg" width={21.5} height={18.5} sizes="100vw" alt="" />
                        </IconCircle>
                      </div>
                    </div>
                  </div>
                  <div className={styles.textField5}>
                    <div className={styles.textField2}>
                      <div className={styles.input}>
                        <input
                          type="tel"
                          className={styles.label}
                          placeholder={t('auth.phoneNumber')}
                          value={formData.phone}
                          onChange={handleInputChange('phone')}
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
                          className={styles.label}
                          placeholder={t('auth.password')}
                          value={formData.password}
                          onChange={handleInputChange('password')}
                          required
                        />
                      </div>
                      <div className={styles.startAdornment}>
                        <IconCircle size="sm" color="white">
                          <Image src="/assets/lock.svg" width={21.5} height={21.5} sizes="100vw" alt="" />
                        </IconCircle>
                      </div>
                    </div>
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
                          className={styles.label}
                          placeholder={t('auth.confirmPassword')}
                          value={formData.confirmPassword}
                          onChange={handleInputChange('confirmPassword')}
                          required
                        />
                      </div>
                      <div className={styles.startAdornment}>
                        <IconCircle size="sm" color="white">
                          <Image src="/assets/lock.svg" width={21.5} height={21.5} sizes="100vw" alt="" />
                        </IconCircle>
                      </div>
                    </div>
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
