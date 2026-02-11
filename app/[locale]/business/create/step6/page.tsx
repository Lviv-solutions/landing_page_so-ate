"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navigation from "../../../../../components/Navigation";
import { businessFormDB } from "../../../../../lib/businessFormDB";
import { useTranslation } from "../../../../hooks/useTranslation";
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

export default function CreateBusinessStep6() {
  const router = useRouter();
  const { t } = useTranslation();
  const [locale, setLocale] = useState(
    typeof window !== "undefined"
      ? window.location.pathname.split("/")[1]
      : "ar"
  );

  const [selectedImages, setSelectedImages] = useState<(string | null)[]>(
    Array(6).fill(null)
  );

  useEffect(() => {
    const handleRouteChange = () => {
      const newLocale = window.location.pathname.split("/")[1];
      if (newLocale !== locale) {
        setLocale(newLocale);
      }
    };

    window.addEventListener("popstate", handleRouteChange);
    handleRouteChange();

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [router, locale]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedData = await businessFormDB.getFormData();
        if (!savedData || !savedData.arName) {
          router.push(`/${locale}/business/create/step1`);
        }
      } catch (error) {
        console.error("Failed to load form data:", error);
      }
    };
    loadData();
  }, [router, locale]);

  const handleImageChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImages = [...selectedImages];
        newImages[index] = reader.result as string;
        setSelectedImages(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSkip = () => {
    router.push(`/${locale}/business/create/step6-plans`);
  };

  const handleContinue = async () => {
    try {
      // Here you would upload the images to your server
      await businessFormDB.saveFormData({
        // Add images data to form
      });
      router.push(`/${locale}/business/create/step6-plans`);
    } catch (error) {
      console.error("Failed to save images:", error);
    }
  };

  const hasImages = selectedImages.some((img) => img !== null);

  return (
    <div
      className="min-h-screen bg-white"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <Navigation locale={locale} />

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-12">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "calc(100vh - 200px)",
          }}
        >
          <Box
            sx={{
              width: "712px",
              minHeight: "546px",
              borderRadius: "16px",
              border: "1px solid #E0E0E0",
              padding: "24px",
              bgcolor: "white",
              display: "flex",
              flexDirection: "column",
              gap: "36px",
              opacity: 1,
            }}
          >
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
                {t("businessForm.step6Title")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#637381",
                  lineHeight: 1.7,
                  fontSize: "0.9375rem",
                }}
              >
                {t("businessForm.step6Subtitle")}
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
                {t("businessForm.placePhotos")}
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "16px",
                  width: "100%",
                }}
              >
                {selectedImages.map((image, index) => (
                  <Box
                    key={index}
                    component="label"
                    sx={{
                      width: "194.67px",
                      height: "106px",
                      border: "1px dashed #E0E0E0",
                      borderRadius: "12px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: "#F9FAFB",
                      cursor: "pointer",
                      position: "relative",
                      overflow: "hidden",
                      opacity: 1,
                      padding: "10px",
                      gap: "4px",
                    }}
                  >
                    {image ? (
                      <img
                        src={image}
                        alt={`Preview ${index + 1}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "12px",
                        }}
                      />
                    ) : (
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <Box
                          sx={{
                            width: "40px",
                            height: "40px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <img
                            src="/assets/admin-console/primary-shape.png"
                            alt="Upload"
                            style={{
                              width: "40px",
                              height: "40px",
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
                      onChange={handleImageChange(index)}
                    />
                  </Box>
                ))}
              </Box>
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
                disabled={!hasImages}
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
          </Box>
        </Box>
      </main>
    </div>
  );
}
