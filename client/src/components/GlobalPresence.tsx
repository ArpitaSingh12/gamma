import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Package, Ship } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";

  
  export default function GlobalPresence() {
  const { t } = useTranslation();
  
  const stats = [
    {
      icon: Users,
      value: t("globalPresence.stat1Value"),
      label: t("globalPresence.stat1Label"),
      desc: t("globalPresence.stat1Desc"),
    },
    {
      icon: MapPin,
      value: t("globalPresence.stat2Value"),
      label: t("globalPresence.stat2Label"),
      desc: t("globalPresence.stat2Desc"),
    },
    {
      icon: Package,
      value: t("globalPresence.stat3Value"),
      label: t("globalPresence.stat3Label"),
      desc: t("globalPresence.stat3Desc"),
    },
    {
      icon: Ship,
      value: t("globalPresence.stat4Value"),
      label: t("globalPresence.stat4Label"),
      desc: t("globalPresence.stat4Desc"),
    },
  ];

  const locations = [
    { name: t("globalPresence.location1"), role: t("globalPresence.location1Role") },
    { name: t("globalPresence.location2"), role: t("globalPresence.location2Role") },
    { name: t("globalPresence.location4"), role: t("globalPresence.location4Role") },
    { name: t("globalPresence.location7"), role: t("globalPresence.location7Role") },
  ];
  
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-global-title">
            {t("globalPresence.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-global-subtitle">
            {t("globalPresence.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <Card key={stat.label} data-testid={`card-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-3">
                  <stat.icon className="h-10 w-10 text-primary" />
                  <div className="text-3xl font-bold" data-testid={`text-stat-value-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium" data-testid={`text-stat-label-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.desc}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card border border-card-border rounded-md p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center" data-testid="text-locations-title">
            {t("globalPresence.locationsTitle")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <div key={location.name} className="flex items-start gap-3" data-testid={`location-${location.name.toLowerCase().replace(/[,\s]+/g, '-')}`}>
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium" data-testid={`text-location-name-${location.name.toLowerCase().replace(/[,\s]+/g, '-')}`}>
                    {location.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {location.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
