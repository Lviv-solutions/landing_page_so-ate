"use client";

import React from "react";
import { Dialog, DialogContent } from "@mui/material";
import { useTranslation } from "../hooks/useTranslation";

interface SignUpSuccessModalProps {
  open: boolean;
  onClose: () => void;
}

const SignUpSuccessModal: React.FC<SignUpSuccessModalProps> = ({ open, onClose }) => {
  const { t } = useTranslation();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "16px",
          backgroundColor: "#fff",
          boxShadow: "0px 8px 16px rgba(145, 158, 171, 0.16)",
        },
      }}
    >
      <DialogContent sx={{ padding: 3, textAlign: "center" }}>
        <p className="text-lg font-semibold text-[#1c252e] mb-4">
          {t("auth.signUpSuccess")}
        </p>
        <button
          type="button"
          onClick={onClose}
          className="w-full py-3 rounded-lg font-semibold text-white transition-colors"
          style={{ backgroundColor: "#ed614a" }}
        >
          {t("auth.ok")}
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default SignUpSuccessModal;
