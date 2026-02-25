"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navigation from "../../../../../components/Navigation";
import { businessFormDB } from "../../../../../lib/businessFormDB";
import { useTranslation } from "../../../../hooks/useTranslation";
import { MEMBERSHIP_PLANS, PlanCode } from "../../../../constants/plans";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function CreateBusinessStep6Plans() {
  const router = useRouter();
  const { t } = useTranslation();
  const [locale, setLocale] = useState(
    typeof window !== "undefined"
      ? window.location.pathname.split("/")[1]
      : "ar"
  );

  const [selectedPlan, setSelectedPlan] = useState<PlanCode | null>(null);
  const [isLoading, setIsLoading] = useState(false);

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
        } else if (savedData.planCode && ['free', 'basic', 'premium', 'enterprise'].includes(savedData.planCode)) {
          setSelectedPlan(savedData.planCode as PlanCode);
        }
      } catch (error) {
        console.error("Failed to load form data:", error);
      }
    };
    loadData();
  }, [router, locale]);

  const handlePlanSelect = (planCode: PlanCode) => {
    setSelectedPlan(planCode);
  };

  const handleContinue = async () => {
    if (!selectedPlan) return;

    try {
      setIsLoading(true);
      await businessFormDB.saveFormData({
        planCode: selectedPlan,
      });
      router.push(`/${locale}/business/create/step7`);
    } catch (error) {
      console.error("Failed to save plan selection:", error);
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    router.push(`/${locale}/business/create/step6`);
  };

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
              width: "100%",
              maxWidth: "1200px",
              borderRadius: "16px",
              border: "1px solid #E0E0E0",
              padding: "24px",
              bgcolor: "white",
              display: "flex",
              flexDirection: "column",
              gap: "36px",
            }}
          >
            <Box
              sx={{
                textAlign: locale === "ar" ? "right" : "left",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
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
                {t("businessForm.selectPlanTitle") || "اختر خطة الاشتراك"}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#637381",
                  lineHeight: 1.7,
                  fontSize: "0.9375rem",
                }}
              >
                {t("businessForm.selectPlanSubtitle") || "اختر الخطة المناسبة لعملك"}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(4, 1fr)",
                },
                gap: "16px",
                pt: 5,
              }}
            >
              {MEMBERSHIP_PLANS.map((plan) => (
                <Card
                  key={plan.code}
                  onClick={() => handlePlanSelect(plan.code)}
                  sx={{
                    cursor: "pointer",
                    border:
                      selectedPlan === plan.code
                        ? "2px solid #ED614A"
                        : "1px solid #E0E0E0",
                    borderRadius: "12px",
                    position: "relative",
                    transition: "all 0.2s",
                    height: "100%",
                    "&:hover": {
                      borderColor: "#ED614A",
                      boxShadow: "0 4px 12px rgba(237, 97, 74, 0.1)",
                    },
                  }}
                >
                  {plan.isPopular && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: "5px",
                        ...(locale === "ar" 
                          ? { left: "16px", right: "auto" }
                          : { right: "16px", left: "auto" }
                        ),
                        bgcolor: "#ED614A",
                        color: "white",
                        px: 2,
                        py: 0.5,
                        borderRadius: "12px",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        zIndex: 1,
                      }}
                    >
                      {t("businessForm.popular") || "الأكثر شعبية"}
                    </Box>
                  )}
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        mb: 2,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: "#1A1A1A",
                          fontSize: "1.25rem",
                        }}
                      >
                        {plan.displayName}
                      </Typography>
                      {selectedPlan === plan.code && (
                        <Box
                          sx={{
                            width: "24px",
                            top: "10px",
                            position: "relative",
                            height: "24px",
                            borderRadius: "50%",
                            bgcolor: "#ED614A",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            fontSize: "14px",
                          }}
                        >
                          ✓
                        </Box>
                      )}
                    </Box>

                    <Typography
                      sx={{
                        color: "#637381",
                        fontSize: "0.875rem",
                        mb: 3,
                        minHeight: "40px",
                      }}
                    >
                      {plan.description}
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      <Typography
                        sx={{
                          fontSize: "2rem",
                          fontWeight: 700,
                          color: "#1A1A1A",
                        }}
                      >
                        ${plan.priceMonthly}
                        <Typography
                          component="span"
                          sx={{
                            fontSize: "0.875rem",
                            fontWeight: 400,
                            color: "#637381",
                            ml: 0.5,
                          }}
                        >
                          {t("businessForm.perMonth") || "/شهر"}
                        </Typography>
                      </Typography>
                      {plan.trialDays > 0 && (
                        <Typography
                          sx={{
                            fontSize: "0.75rem",
                            color: "#ED614A",
                            mt: 0.5,
                          }}
                        >
                          {t("businessForm.freeTrial") || "تجربة مجانية"} {plan.trialDays} {t("businessForm.days") || "يوم"}
                        </Typography>
                      )}
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                      {plan.features.slice(0, 4).map((feature, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          <Box
                            sx={{
                              width: "16px",
                              height: "16px",
                              borderRadius: "50%",
                              bgcolor: "#4CAF50",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "white",
                              fontSize: "10px",
                              flexShrink: 0,
                            }}
                          >
                            ✓
                          </Box>
                          <Typography
                            sx={{
                              fontSize: "0.75rem",
                              color: "#637381",
                            }}
                          >
                            {t(`plans.features.${feature}`) || feature}
                          </Typography>
                        </Box>
                      ))}
                      {plan.features.length > 4 && (
                        <Typography
                          sx={{
                            fontSize: "0.75rem",
                            color: "#ED614A",
                            mt: 0.5,
                          }}
                        >
                          +{plan.features.length - 4} {t("businessForm.moreFeatures") || "ميزة إضافية"}
                        </Typography>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: "16px",
                width: "100%",
                justifyContent: "space-between",
                marginTop: "24px",
              }}
            >
              <Button
                variant="outlined"
                onClick={handleBack}
                sx={{
                  width: "324px",
                  height: "56px",
                  borderRadius: "8px",
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
                {t("businessForm.back") || "رجوع"}
              </Button>

              <Button
                variant="contained"
                onClick={handleContinue}
                disabled={!selectedPlan || isLoading}
                sx={{
                  width: "324px",
                  height: "56px",
                  borderRadius: "8px",
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
                {isLoading
                  ? t("businessForm.saving") || "جاري الحفظ..."
                  : t("businessForm.continue") || "متابعة"}
              </Button>
            </Box>
          </Box>
        </Box>
      </main>
    </div>
  );
}
