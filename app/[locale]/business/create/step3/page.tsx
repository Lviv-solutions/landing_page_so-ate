"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navigation from "../../../../../components/Navigation";
import { businessFormDB } from "../../../../../lib/businessFormDB";
import claimRequestService from "../../../../../services/claimRequestService";
import { getCurrentUserId } from "../../../../../lib/auth";
import { useTranslation } from "../../../../hooks/useTranslation";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";

interface DaySchedule {
  isOpen: boolean;
  from: string;
  to: string;
}

interface WeekSchedule {
  [key: string]: DaySchedule;
}

export default function CreateBusinessStep3() {
  const router = useRouter();
  const { t } = useTranslation();
  const [locale, setLocale] = useState(
    typeof window !== "undefined"
      ? window.location.pathname.split("/")[1]
      : "ar"
  );

  const [schedule, setSchedule] = useState<WeekSchedule>({
    saturday: { isOpen: true, from: "09:00", to: "23:00" },
    sunday: { isOpen: true, from: "09:00", to: "23:00" },
    monday: { isOpen: true, from: "09:00", to: "23:00" },
    tuesday: { isOpen: true, from: "09:00", to: "23:00" },
    wednesday: { isOpen: true, from: "09:00", to: "23:00" },
    thursday: { isOpen: true, from: "09:00", to: "23:00" },
    friday: { isOpen: false, from: "09:00", to: "23:00" },
  });

  const [alwaysOpen, setAlwaysOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const dayNames: { [key: string]: string } = {
    saturday: "السبت",
    sunday: "الأحد",
    monday: "الإثنين",
    tuesday: "الثلاثاء",
    wednesday: "الأربعاء",
    thursday: "الخميس",
    friday: "الجمعة",
  };

  useEffect(() => {
    // Check if previous step data exists and load schedule data
    const loadData = async () => {
      try {
        const savedData = await businessFormDB.getFormData();
        if (!savedData || !savedData.arName) {
          router.push(`/${locale}/business/create/step1`);
        } else {
          if (savedData.schedule) {
            setSchedule(savedData.schedule);
          }
          if (savedData.alwaysOpen !== undefined) {
            setAlwaysOpen(savedData.alwaysOpen);
          }
        }
      } catch (error) {
        console.error("Failed to load form data:", error);
      }
    };
    loadData();
  }, [router, locale]);

  const handleDayToggle = (day: string) => {
    setSchedule((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        isOpen: !prev[day].isOpen,
      },
    }));
  };

  const handleTimeChange = (
    day: string,
    field: "from" | "to",
    value: string
  ) => {
    setSchedule((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [field]: value,
      },
    }));
  };

  const handleNext = async () => {
    setLoading(true);
    setError("");

    try {
      // Save schedule data to IndexedDB
      await businessFormDB.updateStep(3, {
        schedule: schedule,
        alwaysOpen: alwaysOpen,
      });

      // Navigate to step 4
      router.push(`/${locale}/business/create/step4`);
    } catch (error) {
      console.error("Failed to save schedule data:", error);
      setError(t("businessForm.saveError") || "حدث خطأ أثناء حفظ البيانات");
    } finally {
      setLoading(false);
    }
  };

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

  return (
    <div
      className="min-h-screen bg-white"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <Navigation locale={locale} />

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-12">
        <Box
          sx={{
            width: "1152px",
            height: "518px",
            marginTop: "60px",
            display: "flex",
            justifyContent: "space-between",
            gap: "24px",
            mx: "auto",
            flexDirection: locale === "ar" ? "row-reverse" : "row",
          }}
        >
          {/* Image Section */}
          <Box
            sx={{
              width: "450px",
              height: "409px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src="/assets/admin-console/waiter.png"
              alt="Restaurant staff"
              width={450}
              height={409}
              style={{ objectFit: "contain" }}
            />
          </Box>

          {/* Form Section */}
          <Box
            sx={{
              width: "617px",
              height: "518px",
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
                {t("businessForm.step3Title") || "حدد أوقات عمل مطعمك"}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#666",
                  lineHeight: 1.6,
                  textAlign: locale === "ar" ? "right" : "left",
                }}
              >
                {t("businessForm.step3Subtitle") || "حل عملائك يعرفون متى تفتح ومتى تكون مشغول او مقفل."}
              </Typography>
            </Box>

            {/* Days Tabs */}
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {Object.keys(schedule).map((day) => (
                <Button
                  key={day}
                  onClick={() => handleDayToggle(day)}
                  sx={{
                    px: 2,
                    py: 1,
                    borderRadius: "8px",
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    bgcolor: schedule[day].isOpen ? "#ED614A" : "#E0E0E0",
                    color: schedule[day].isOpen ? "white" : "#666",
                    "&:hover": {
                      bgcolor: schedule[day].isOpen ? "#DC5139" : "#D0D0D0",
                    },
                  }}
                >
                  {dayNames[day]}
                </Button>
              ))}
            </Box>

            {/* Always Open Toggle */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 2,
                bgcolor: "#F5F5F5",
                borderRadius: "8px",
              }}
            >
              <Typography sx={{ fontWeight: 500, color: "#1A1A1A" }}>
                {t("businessForm.workingDay") || "يوم عمل"}
              </Typography>
              <Switch
                checked={alwaysOpen}
                onChange={(e) => setAlwaysOpen(e.target.checked)}
                sx={{
                  "& .MuiSwitch-switchBase.Mui-checked": {
                    color: "#ED614A",
                  },
                  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                    backgroundColor: "#ED614A",
                  },
                }}
              />
            </Box>

            {/* Time Selection */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, flex: 1, overflowY: "auto" }}>
              {Object.entries(schedule)
                .filter(([_, day]) => day.isOpen)
                .map(([dayKey, day]) => (
                  <Box key={dayKey} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Typography sx={{ fontSize: "0.875rem", fontWeight: 500, minWidth: "60px", textAlign: locale === "ar" ? "right" : "left" }}>
                      {dayNames[dayKey]}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, flex: 1 }}>
                      <Typography sx={{ fontSize: "0.875rem", color: "#666" }}>
                        {locale === "ar" ? "من" : "From"}
                      </Typography>
                      <TextField
                        select
                        value={day.from}
                        onChange={(e) => handleTimeChange(dayKey, "from", e.target.value)}
                        size="small"
                        SelectProps={{
                          MenuProps: {
                            PaperProps: {
                              sx: {
                                maxHeight: 200,
                              },
                            },
                          },
                        }}
                        sx={{
                          flex: 1,
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "8px",
                          },
                        }}
                      >
                        {Array.from({ length: 24 }, (_, i) => {
                          const hour = i.toString().padStart(2, "0");
                          return (
                            <MenuItem key={hour} value={`${hour}:00`}>
                              {hour}:00
                            </MenuItem>
                          );
                        })}
                      </TextField>
                      <Typography sx={{ fontSize: "0.875rem", color: "#666" }}>
                        {locale === "ar" ? "إلى" : "To"}
                      </Typography>
                      <TextField
                        select
                        value={day.to}
                        onChange={(e) => handleTimeChange(dayKey, "to", e.target.value)}
                        size="small"
                        SelectProps={{
                          MenuProps: {
                            PaperProps: {
                              sx: {
                                maxHeight: 200,
                              },
                            },
                          },
                        }}
                        sx={{
                          flex: 1,
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "8px",
                          },
                        }}
                      >
                        {Array.from({ length: 24 }, (_, i) => {
                          const hour = i.toString().padStart(2, "0");
                          return (
                            <MenuItem key={hour} value={`${hour}:00`}>
                              {hour}:00
                            </MenuItem>
                          );
                        })}
                      </TextField>
                    </Box>
                  </Box>
                ))}
            </Box>

            {/* Add Break Time Button */}
            <Button
              variant="outlined"
              sx={{
                borderStyle: "dashed",
                borderColor: "#E0E0E0",
                color: "#ED614A",
                textTransform: "none",
                fontWeight: 600,
                py: 1.5,
                borderRadius: "8px",
                "&:hover": {
                  borderColor: "#ED614A",
                  bgcolor: "rgba(237, 97, 74, 0.04)",
                },
              }}
            >
              + {t("businessForm.addBreak") || "إضافة فترة"}
            </Button>

            {/* Error Message */}
            {error && (
              <Box sx={{ p: 2, bgcolor: "#FEE2E2", borderRadius: "8px", border: "1px solid #FCA5A5" }}>
                <Typography sx={{ color: "#DC2626", fontSize: "0.875rem" }}>{error}</Typography>
              </Box>
            )}

            {/* Submit Button */}
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={loading}
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
                "&:disabled": {
                  bgcolor: "#E0E0E0",
                  color: "#999",
                },
              }}
            >
              {loading ? (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      border: "2px solid",
                      borderColor: "white transparent white transparent",
                      borderRadius: "50%",
                      animation: "spin 1s linear infinite",
                      "@keyframes spin": {
                        "0%": { transform: "rotate(0deg)" },
                        "100%": { transform: "rotate(360deg)" },
                      },
                    }}
                  />
                  {t("businessForm.loading") || "جاري التحميل..."}
                </Box>
              ) : (
                t("businessForm.nextButton") || "التالي"
              )}
            </Button>
          </Box>
        </Box>
      </main>
    </div>
  );
}
