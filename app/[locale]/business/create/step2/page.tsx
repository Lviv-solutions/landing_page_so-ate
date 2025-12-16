"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navigation from "../../../../../components/Navigation";
import { businessFormDB } from "../../../../../lib/businessFormDB";
import { useTranslation } from "../../../../hooks/useTranslation";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

export default function CreateBusinessStep2() {
  const router = useRouter();
  const { t } = useTranslation();
  const [locale, setLocale] = useState(
    typeof window !== "undefined"
      ? window.location.pathname.split("/")[1]
      : "ar"
  );

  const [locationData, setLocationData] = useState({
    country: "",
    city: "",
    street: "",
    postalCode: "",
    latitude: "24.7136",
    longitude: "46.6753",
  });

  const [markerPosition, setMarkerPosition] = useState({ lat: 24.7136, lng: 46.6753 });

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
        } else if (savedData.location) {
          setLocationData(savedData.location);
        }
      } catch (error) {
        console.error("Failed to load form data:", error);
      }
    };
    loadData();
  }, [router, locale]);

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
    console.log("Location confirmed:", markerPosition);
  };

  const handleEdit = () => {
    console.log("Edit location");
  };

  return (
    <div
      className="min-h-screen bg-white"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <Navigation locale={locale} />

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-12">
        <div className="flex gap-6" style={{ flexDirection: locale === "ar" ? "row-reverse" : "row", marginTop: "60px" }}>
          {/* Map Section */}
          <Box
            sx={{
              width: "690px",
              height: "556px",
              borderRadius: "16px",
              overflow: "hidden",
              position: "relative",
              bgcolor: "#F5F5F5",
              border: "1px solid #E0E0E0",
            }}
          >
            {/* Map Placeholder */}
            <div className="w-full h-full relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-green-50 to-yellow-50">
                {/* Grid pattern to simulate map */}
                <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="gray" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
                
                {/* Map marker */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#FF5630"/>
                    <circle cx="12" cy="9" r="2.5" fill="white"/>
                  </svg>
                </div>

                {/* Route lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
                  <path d="M 100 150 Q 200 200 350 280" stroke="#4A90E2" strokeWidth="3" fill="none" opacity="0.6"/>
                  <path d="M 450 100 Q 400 250 350 280" stroke="#4A90E2" strokeWidth="3" fill="none" opacity="0.6"/>
                </svg>
              </div>

              {/* Map Controls */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 16,
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  gap: 2,
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
                    "&:hover": {
                      bgcolor: "#DC5139",
                    },
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
                    "&:hover": {
                      borderColor: "#666",
                      bgcolor: "rgba(0,0,0,0.04)",
                    },
                  }}
                >
                  {t("businessForm.editLocation")}
                </Button>
              </Box>

              {/* Map Info */}
              <Box
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  bgcolor: "white",
                  px: 2,
                  py: 1,
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              >
                <Typography variant="body2" sx={{ color: "#666", fontSize: "0.875rem" }}>
                  {t("businessForm.pinLocation")}
                </Typography>
              </Box>
            </div>
          </Box>

          {/* Form Section */}
          <Box
            sx={{
              width: "419px",
              height: "556px",
              borderRadius: "16px",
              border: "1px solid #E0E0E0",
              padding: "24px",
              bgcolor: "white",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: "#1A1A1A",
                  mb: 1,
                  textAlign: locale === "ar" ? "right" : "left",
                }}
              >
                {t("businessForm.step2Title")}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#666",
                  lineHeight: 1.6,
                  textAlign: locale === "ar" ? "right" : "left",
                }}
              >
                {t("businessForm.step2Subtitle")}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", flex: 1 }}>
              <TextField
                select
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
              sx={{
                bgcolor: "#ED614A",
                color: "white",
                py: 1.5,
                borderRadius: "8px",
                textTransform: "none",
                fontWeight: 600,
                fontSize: "1rem",
                "&:hover": {
                  bgcolor: "#DC5139",
                },
              }}
            >
              {t("businessForm.nextButton")}
            </Button>
          </Box>
        </div>
      </main>
    </div>
  );
}
