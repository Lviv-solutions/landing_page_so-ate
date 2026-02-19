'use client';

import React, { useState } from 'react';
import Image from "next/image";
import { Dialog, DialogContent, Alert } from "@mui/material";
import { useTranslation } from "../hooks/useTranslation";
import { webClientAuthService } from "../../lib/auth-service";
import styles from './SignInModal.module.css';

interface SignInModalProps {
  open: boolean;
  onClose: () => void;
  onSwitchToSignUp: () => void;
  onLoginSuccess?: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ open, onClose, onSwitchToSignUp, onLoginSuccess }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isFormValid = formData.email.trim() !== '' && formData.password.trim() !== '';

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    setErrorMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const result = await webClientAuthService.login({
        email: formData.email,
        password: formData.password,
      });

      if (result.success) {
        setFormData({ email: '', password: '' });
        if (onLoginSuccess) {
          onLoginSuccess();
        } else {
          onClose();
        }
      } else {
        setErrorMessage(result.message || t('auth.loginFailed'));
      }
    } catch (error) {
      setErrorMessage(t('auth.networkError'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
              <b className={styles.b}>{t('auth.signInTitle')}</b>

              {errorMessage && (
                <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
                  {errorMessage}
                </Alert>
              )}

              <div className={styles.content}>
                <div className={styles.textFieldParent}>
                  <div className={styles.textField}>
                    <div className={styles.textField2}>
                      <div className={styles.input}>
                        <input
                          type="email"
                          className={styles.label}
                          placeholder={t('auth.email')}
                          value={formData.email}
                          onChange={handleInputChange('email')}
                          autoComplete="off"
                          required
                        />
                      </div>
                      <div className={styles.startAdornment}>
                        <div className={styles.startAdornment2}>
                          <div className={styles.view}>
                            <Image
                              className={styles.elementsIcon}
                              src="/assets/email.svg"
                              width={15.5}
                              height={21.5}
                              sizes="100vw"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.textField}>
                    <div className={styles.textField2}>
                      <div className={styles.endAdornment} onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer' }}>
                        <div className={styles.endAdornment2}>
                          <div className={styles.endAdornment}>
                            <div className={styles.view}>
                              <Image
                                className={styles.elementsIcon2}
                                src="/assets/eye.svg"
                                width={21.5}
                                height={15.5}
                                sizes="100vw"
                                alt=""
                              />
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
                        <div className={styles.startAdornment4}>
                          <div className={styles.secondaryShape} />
                          <Image
                            className={styles.primaryShapeIcon}
                            src="/assets/lock.svg"
                            width={21.5}
                            height={21.5}
                            sizes="100vw"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.formhelpertext}>
                      <div className={styles.helperText}>{t('auth.forgotPassword')}</div>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className={`${styles.button} ${isFormValid && !isSubmitting ? styles.buttonActive : ''}`}
                  disabled={isSubmitting || !isFormValid}
                >
                  <b className={styles.label3}>
                    {isSubmitting ? t('auth.signingIn') : t('auth.signIn')}
                  </b>
                </button>
                <div className={styles.div}>
                  <span>
                    <span>{t('auth.noAccount')}</span>
                    <span className={styles.span} onClick={onSwitchToSignUp} style={{ cursor: 'pointer' }}>
                      {t('auth.createAccount')}
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
  );
};

export default SignInModal;
