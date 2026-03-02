"use client";
import { useState } from "react";
import { businessFormDB } from "../../../../../lib/businessFormDB";
import { useTranslation } from "../../../../hooks/useTranslation";
import { useLocaleSync } from "../../../../hooks/useLocaleSync";
import { useBusinessFormGuard } from "../../../../hooks/useBusinessFormGuard";
import { BusinessStepLayout, FormCard } from "../../../../components/business";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function CreateBusinessStep5() {
  const { locale, router } = useLocaleSync();
  const { t } = useTranslation();
  useBusinessFormGuard(locale, router);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSkip = () => {
    router.push(`/${locale}/business/create/step6`);
  };

  const handleContinue = async () => {
    try {
      if (imageFile) {
        // Here you would upload the image to your server
        // For now, we'll just save a reference
        await businessFormDB.saveFormData({ 
          // Add image data to form
        });
      }
      router.push(`/${locale}/business/create/step6`);
    } catch (error) {
      console.error("Failed to save image:", error);
    }
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
          <FormCard sx={{ width: "712px", minHeight: "546px", gap: "36px" }}>
            <Box 
              sx={{ 
                textAlign: locale === "ar" ? "right" : "left",
                width: "664px",
                height: "84px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                opacity: 1,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: "#1A1A1A",
                  fontSize: "1.5rem",
                }}
              >
                {t("businessForm.step5Title")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#637381",
                  lineHeight: 1.7,
                  fontSize: "0.9375rem",
                }}
              >
                {t("businessForm.step5Subtitle")}
              </Typography>
            </Box>

            <Box>
              <Typography
                sx={{
                  color: "#1A1A1A",
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  mb: 2,
                  textAlign: locale === "ar" ? "right" : "left",
                }}
              >
                {t("businessForm.logoImage")}
              </Typography>

              <Box
                component="label"
                sx={{
                  width: "128px",
                  height: "128px",
                  border: "2px dashed #E0E0E0",
                  borderRadius: "50%",
                  borderRightWidth: "1px",
                  borderLeftWidth: "1px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "#F9FAFB",
                  cursor: "pointer",
                  position: "relative",
                  margin: "0 auto",
                  overflow: "hidden",
                  opacity: 1,
                }}
              >
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Preview"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: "48px",
                        height: "48px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src="/assets/admin-console/primary-shape.png"
                        alt="Upload"
                        style={{
                          width: "48px",
                          height: "48px",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        color: "#637381",
                        fontSize: "0.75rem",
                      }}
                    >
                      {t("businessForm.uploadImage")}
                    </Typography>
                  </Box>
                )}
                <VisuallyHiddenInput
                  type="file"
                  accept="image/jpeg,image/jpg,image/png,image/gif"
                  onChange={handleImageChange}
                />
              </Box>

              <Typography
                sx={{
                  color: "#919EAB",
                  fontSize: "0.75rem",
                  textAlign: "center",
                  mt: 2,
                }}
              >
                {t("businessForm.allowedFormats")}
              </Typography>
              <Typography
                sx={{
                  color: "#919EAB",
                  fontSize: "0.75rem",
                  textAlign: "center",
                }}
              >
                {t("businessForm.maxFileSize")}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: "16px",
                width: "100%",
                justifyContent: "space-between",
                marginTop: "48px",
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
                onClick={handleContinue}
                disabled={!selectedImage}
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
