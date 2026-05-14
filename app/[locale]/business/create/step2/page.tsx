"use client";
import { useState, useEffect, useCallback } from "react";
import { businessFormDB } from "../../../../../lib/businessFormDB";
import { useTranslation } from "../../../../hooks/useTranslation";
import { useLocaleSync } from "../../../../hooks/useLocaleSync";
import { useBusinessFormGuard } from "../../../../hooks/useBusinessFormGuard";
import { BusinessStepLayout, FormCard } from "../../../../components/business";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic";

const TomTomMapPicker = dynamic(
  () => import("../../../../../components/TomTomMapPicker").then((m) => m.default),
  { ssr: false, loading: () => <div style={{ minHeight: 400, background: "#f5f5f5", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", color: "#666" }}>Loading map...</div> }
);

export default function CreateBusinessStep2() {
  const { locale, router } = useLocaleSync();
  const { t } = useTranslation();
  const { savedData } = useBusinessFormGuard(locale, router);

  const [locationData, setLocationData] = useState({
    country: "",
    city: "",
    street: "",
    postalCode: "",
    latitude: "24.7136",
    longitude: "46.6753",
    formattedAddress: "" as string | undefined,
  });

  useEffect(() => {
    if (savedData?.location) {
      setLocationData((prev) => ({
        ...prev,
        ...savedData.location,
        formattedAddress: savedData.location?.formattedAddress ?? prev.formattedAddress,
      }));
    }
  }, [savedData]);

  const handleMapLocationChange = useCallback(
    (result: { latitude: number; longitude: number; formattedAddress: string | null }) => {
      setLocationData((prev) => ({
        ...prev,
        latitude: String(result.latitude),
        longitude: String(result.longitude),
        formattedAddress: result.formattedAddress ?? undefined,
      }));
    },
    []
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setLocationData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = async () => {
    if (!locationData.country || !locationData.city || !locationData.street) {
      alert(t("businessForm.locationValidationError"));
      return;
    }

    try {
      await businessFormDB.updateStep(2, { location: locationData });
      router.push(`/${locale}/business/create/step3`);
    } catch (error) {
      console.error("Failed to save location data:", error);
      alert(t("businessForm.saveError"));
    }
  };

  const handleConfirm = () => {
    // Location is already in locationData; confirm is a no-op (UX affordance).
  };

  const handleEdit = () => {
    // User can drag marker or use search; edit is a no-op (UX affordance).
  };

  return (
    <BusinessStepLayout locale={locale} maxWidth="max-w-7xl">
        <div
          className="flex flex-wrap gap-6"
          style={{
            flexDirection: locale === "ar" ? "row-reverse" : "row",
            marginTop: "60px",
            alignItems: "flex-start",
          }}
        >
          {/* Map Section - responsive */}
          <Box
            sx={{
              flex: "1 1 400px",
              maxWidth: { xs: "100%", md: "690px" },
              height: { xs: "400px", md: "556px" },
              minHeight: 400,
              borderRadius: "16px",
              overflow: "hidden",
              position: "relative",
              bgcolor: "#F5F5F5",
              border: "1px solid #E0E0E0",
            }}
          >
            <TomTomMapPicker
              initialCenter={[parseFloat(locationData.longitude) || 46.6753, parseFloat(locationData.latitude) || 24.7136]}
              initialZoom={14}
              onLocationChange={handleMapLocationChange}
              searchPlaceholder={t("businessForm.searchAddressPlaceholder") || "Search for an address..."}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 16,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: 2,
                zIndex: 10,
              }}
            >
              <Button
                variant="contained"
                onClick={handleConfirm}
                sx={{
                  bgcolor: "#ED614A",
                  color: "white",
                  px: 4,
                  py: 1.5,
                  borderRadius: "8px",
                  textTransform: "none",
                  fontWeight: 600,
                  "&:hover": { bgcolor: "#DC5139" },
                }}
              >
                {t("businessForm.confirmLocation")}
              </Button>
              <Button
                variant="outlined"
                onClick={handleEdit}
                sx={{
                  borderColor: "#E0E0E0",
                  color: "#666",
                  px: 4,
                  py: 1.5,
                  borderRadius: "8px",
                  textTransform: "none",
                  fontWeight: 600,
                  "&:hover": { borderColor: "#666", bgcolor: "rgba(0,0,0,0.04)" },
                }}
              >
                {t("businessForm.editLocation")}
              </Button>
            </Box>
          </Box>

          {/* Form Section - responsive */}
          <FormCard sx={{
            flex: "1 1 350px",
            maxWidth: { xs: "100%", md: "419px" },
            minHeight: { xs: "auto", md: "556px" },
          }}>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: "#1A1A1A",
                  mb: 0.5,
                  fontSize: "1.1rem",
                  textAlign: locale === "ar" ? "right" : "left",
                }}
              >
                {t("businessForm.step2Title")}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#666",
                  lineHeight: 1.4,
                  fontSize: "0.875rem",
                  textAlign: locale === "ar" ? "right" : "left",
                }}
              >
                {t("businessForm.step2Subtitle")}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", flex: 1, overflowY: "auto" }}>
              <TextField
                select
                size="small"
                name="country"
                value={locationData.country}
                onChange={handleInputChange}
                placeholder={t("businessForm.countryPlaceholder")}
                fullWidth
                InputProps={{
                  sx: {
                    borderRadius: "8px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#E0E0E0",
                    },
                  },
                }}
                InputLabelProps={{
                  shrink: false,
                }}
                SelectProps={{
                  displayEmpty: true,
                }}
                sx={{
                  "& .MuiInputBase-input": {
                    textAlign: locale === "ar" ? "right" : "left",
                    color: "#000",
                  },
                  "& .MuiSelect-select": {
                    color: locationData.country ? "#000" : "#999",
                  },
                }}
              >
                <MenuItem value="" disabled>{t("businessForm.countryPlaceholder")}</MenuItem>
                <MenuItem value="saudi">{t("businessForm.countrySaudi")}</MenuItem>
                <MenuItem value="uae">{t("businessForm.countryUAE")}</MenuItem>
                <MenuItem value="kuwait">{t("businessForm.countryKuwait")}</MenuItem>
                <MenuItem value="qatar">{t("businessForm.countryQatar")}</MenuItem>
                <MenuItem value="bahrain">{t("businessForm.countryBahrain")}</MenuItem>
                <MenuItem value="oman">{t("businessForm.countryOman") || "عمان"}</MenuItem>
              </TextField>

              <TextField
                select
                size="small"
                name="city"
                value={locationData.city}
                onChange={handleInputChange}
                placeholder={t("businessForm.cityPlaceholder")}
                fullWidth
                InputProps={{
                  sx: {
                    borderRadius: "8px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#E0E0E0",
                    },
                  },
                }}
                InputLabelProps={{
                  shrink: false,
                }}
                SelectProps={{
                  displayEmpty: true,
                }}
                sx={{
                  "& .MuiInputBase-input": {
                    textAlign: locale === "ar" ? "right" : "left",
                    color: "#000",
                  },
                  "& .MuiSelect-select": {
                    color: locationData.city ? "#000" : "#999",
                  },
                }}
              >
                <MenuItem value="" disabled>{t("businessForm.cityPlaceholder")}</MenuItem>
                <MenuItem value="riyadh">{t("businessForm.cityRiyadh")}</MenuItem>
                <MenuItem value="jeddah">{t("businessForm.cityJeddah")}</MenuItem>
                <MenuItem value="dammam">{t("businessForm.cityDammam")}</MenuItem>
                <MenuItem value="mecca">{t("businessForm.cityMecca")}</MenuItem>
              </TextField>

              <TextField
                size="small"
                name="street"
                value={locationData.street}
                onChange={handleInputChange}
                placeholder={t("businessForm.streetLabel")}
                fullWidth
                InputProps={{
                  sx: {
                    borderRadius: "8px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#E0E0E0",
                    },
                  },
                }}
                sx={{
                  "& .MuiInputBase-input": {
                    textAlign: locale === "ar" ? "right" : "left",
                  },
                }}
              />

              <TextField
                size="small"
                name="postalCode"
                value={locationData.postalCode}
                onChange={handleInputChange}
                placeholder={t("businessForm.postalCodeLabel")}
                fullWidth
                InputProps={{
                  sx: {
                    borderRadius: "8px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#E0E0E0",
                    },
                  },
                }}
                sx={{
                  "& .MuiInputBase-input": {
                    textAlign: locale === "ar" ? "right" : "left",
                  },
                }}
              />
            </Box>

            <Button
              variant="contained"
              onClick={handleNext}
              fullWidth
              size="medium"
              sx={{
                bgcolor: "#ED614A",
                color: "white",
                py: 1.2,
                borderRadius: "8px",
                textTransform: "none",
                fontWeight: 600,
                fontSize: "0.95rem",
                "&:hover": {
                  bgcolor: "#DC5139",
                },
              }}
            >
              {t("businessForm.nextButton")}
            </Button>
          </FormCard>
        </div>
    </BusinessStepLayout>
  );
}
