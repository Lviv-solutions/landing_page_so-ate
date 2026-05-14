"use client";
import { useState, useEffect } from "react";
import { businessFormDB } from "../../../../../lib/businessFormDB";
import { useTranslation } from "../../../../hooks/useTranslation";
import { useLocaleSync } from "../../../../hooks/useLocaleSync";
import { useBusinessFormGuard } from "../../../../hooks/useBusinessFormGuard";
import { BusinessStepLayout, FormCard } from "../../../../components/business";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function CreateBusinessStep4() {
  const { locale, router } = useLocaleSync();
  const { t } = useTranslation();
  const { savedData } = useBusinessFormGuard(locale, router);

  const [description, setDescription] = useState("");

  useEffect(() => {
    if (savedData?.arDescription) {
      setDescription(savedData.arDescription);
    }
  }, [savedData]);

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const handleSaveAndContinue = async () => {
    try {
      await businessFormDB.saveFormData({ arDescription: description });
      router.push(`/${locale}/business/create/step5`);
    } catch (error) {
      console.error("Failed to save description:", error);
    }
  };

  const handleSkip = () => {
    router.push(`/${locale}/business/create/step5`);
  };

  return (
    <BusinessStepLayout locale={locale} maxWidth="max-w-7xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "calc(100vh - 200px)",
          }}
        >
          <FormCard sx={{ width: "712px", height: "546px", gap: "36px" }}>
            <Box sx={{ textAlign: locale === "ar" ? "right" : "left" }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: "#1A1A1A",
                  mb: 2,
                  fontSize: "1.5rem",
                }}
              >
                {t("businessForm.step4Title")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#637381",
                  lineHeight: 1.7,
                  fontSize: "0.9375rem",
                  maxWidth: "100%",
                }}
              >
                {t("businessForm.step4Subtitle")}
              </Typography>
            </Box>

            <TextField
              multiline
              rows={8}
              value={description}
              onChange={handleDescriptionChange}
              placeholder={t("businessForm.step4Description")}
              sx={{
                width: "664px",
                height: "250px",
                minHeight: "98px",
                opacity: 1,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  height: "100%",
                  "& fieldset": {
                    borderColor: "#E0E0E0",
                    borderWidth: "1px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#999",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#ED614A",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "#1A1A1A",
                  fontSize: "0.875rem",
                  lineHeight: 1.8,
                },
              }}
            />

            <Box
              sx={{
                display: "flex",
                gap: "16px",
                width: "664px",
                justifyContent: "space-between",
              }}
            >
              <Button
                variant="outlined"
                onClick={handleSkip}
                sx={{
                  width: "324px",
                  height: "56px",
                  minWidth: "64px",
                  minHeight: "56px",
                  borderRadius: "8px",
                  padding: "12px 22px",
                  backgroundColor: "white",
                  border: "1px solid #E0E0E0",
                  color: "#637381",
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#F9FAFB",
                    border: "1px solid #E0E0E0",
                  },
                }}
              >
                {t("businessForm.skipNow")}
              </Button>

              <Button
                variant="contained"
                onClick={handleSaveAndContinue}
                disabled={!description.trim()}
                sx={{
                  width: "324px",
                  height: "56px",
                  minWidth: "64px",
                  minHeight: "56px",
                  borderRadius: "8px",
                  padding: "12px 22px",
                  backgroundColor: "#ED614A",
                  color: "white",
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#D94F39",
                  },
                  "&.Mui-disabled": {
                    backgroundColor: "#919EAB3D",
                    color: "#637381",
                  },
                }}
              >
                {t("businessForm.saveAndContinue")}
              </Button>
            </Box>
          </FormCard>
        </Box>
    </BusinessStepLayout>
  );
}
