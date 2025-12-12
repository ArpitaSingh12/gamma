import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Handshake, Globe } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="py-20">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center" data-testid="text-about-title">
            {t("nav.about")}
          </h1>
          
          <div className="prose prose-lg mx-auto mb-12" data-testid="text-about-intro">
            <p className="text-lg text-muted-foreground text-center mb-8">
              {t("common.aboutIntro")}
            </p>
          </div>

          <div className="mb-12">
              <img 
              src="/tower.jpg" 
              alt="Rita Towers, City Center, Dar Es Salaam, Tanzania"
              className="w-full rounded-md shadow-lg"
              data-testid="img-office"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card data-testid="card-vision">
              <CardContent className="pt-6 text-center flex flex-col items-center">
                <Eye className="h-10 w-10 text-primary mb-4 mx-auto" />
                <h2 className="text-2xl font-bold mb-3" data-testid="text-vision-title">
                  {t("common.aboutVisionTitle")}
                </h2>
                <p className="text-muted-foreground max-w-md">
                  {t("common.aboutVisionBody")}
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-mission">
              <CardContent className="pt-6 text-center flex flex-col items-center">
                <Target className="h-10 w-10 text-primary mb-4 mx-auto" />
                <h2 className="text-2xl font-bold mb-3" data-testid="text-mission-title">
                  {t("common.aboutMissionTitle")}
                </h2>
                <p className="text-muted-foreground max-w-md">
                  {t("common.aboutMissionBody")}
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12" data-testid="card-about-company">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4" data-testid="text-company-story-title">
                {t("common.aboutStoryTitle")}
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  {t("common.aboutStoryP1")}
                </p>
                <p>
                  {t("common.aboutStoryP2")}
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card data-testid="card-trusted-expertise">
              <CardContent className="pt-6 text-center">
                <Handshake className="h-10 w-10 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">{t("common.aboutTrustedTitle")}</h3>
                <p className="text-sm text-muted-foreground">
                  {t("common.aboutTrustedBody")}
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-global-reach">
              <CardContent className="pt-6 text-center">
                <Globe className="h-10 w-10 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">{t("common.aboutGlobalTitle")}</h3>
                <p className="text-sm text-muted-foreground">
                  {t("common.aboutGlobalBody")}
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-our-promise">
              <CardContent className="pt-6 text-center">
                <Target className="h-10 w-10 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">{t("common.aboutPromiseTitle")}</h3>
                <p className="text-sm text-muted-foreground">
                  {t("common.aboutPromiseBody")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
