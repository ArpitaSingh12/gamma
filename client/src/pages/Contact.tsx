import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/contexts/LanguageContext";
import { submitContactForm } from "@/lib/api";

// Country dial codes for phone number selector
const COUNTRY_DIAL_CODES = [
  { code: "TZ", name: "Tanzania", dialCode: "+255" },
  { code: "KE", name: "Kenya", dialCode: "+254" },
  { code: "UG", name: "Uganda", dialCode: "+256" },
  { code: "RW", name: "Rwanda", dialCode: "+250" },
  { code: "BI", name: "Burundi", dialCode: "+257" },
  { code: "ZM", name: "Zambia", dialCode: "+260" },
  { code: "CD", name: "DR Congo", dialCode: "+243" },
  { code: "ET", name: "Ethiopia", dialCode: "+251" },
  { code: "US", name: "United States", dialCode: "+1" },
  { code: "CA", name: "Canada", dialCode: "+1" },
  { code: "GB", name: "United Kingdom", dialCode: "+44" },
  { code: "DE", name: "Germany", dialCode: "+49" },
  { code: "FR", name: "France", dialCode: "+33" },
  { code: "ES", name: "Spain", dialCode: "+34" },
  { code: "IT", name: "Italy", dialCode: "+39" },
  { code: "AE", name: "United Arab Emirates", dialCode: "+971" },
  { code: "IN", name: "India", dialCode: "+91" },
  { code: "CN", name: "China", dialCode: "+86" },
  { code: "JP", name: "Japan", dialCode: "+81" },
  { code: "AU", name: "Australia", dialCode: "+61" },
  { code: "ZA", name: "South Africa", dialCode: "+27" },
  { code: "NG", name: "Nigeria", dialCode: "+234" },
  { code: "BR", name: "Brazil", dialCode: "+55" },
  { code: "SA", name: "Saudi Arabia", dialCode: "+966" },
  { code: "TR", name: "Turkey", dialCode: "+90" },
  { code: "RU", name: "Russia", dialCode: "+7" },
  { code: "NL", name: "Netherlands", dialCode: "+31" },
  { code: "BE", name: "Belgium", dialCode: "+32" },
  { code: "SE", name: "Sweden", dialCode: "+46" },
  { code: "NO", name: "Norway", dialCode: "+47" },
  { code: "DK", name: "Denmark", dialCode: "+45" },
  { code: "FI", name: "Finland", dialCode: "+358" },
  { code: "CH", name: "Switzerland", dialCode: "+41" },
  { code: "PL", name: "Poland", dialCode: "+48" },
  { code: "PT", name: "Portugal", dialCode: "+351" },
  { code: "GR", name: "Greece", dialCode: "+30" },
  { code: "IE", name: "Ireland", dialCode: "+353" },
  { code: "AR", name: "Argentina", dialCode: "+54" },
  { code: "MX", name: "Mexico", dialCode: "+52" },
  { code: "CL", name: "Chile", dialCode: "+56" },
  { code: "CO", name: "Colombia", dialCode: "+57" },
  { code: "PK", name: "Pakistan", dialCode: "+92" },
  { code: "BD", name: "Bangladesh", dialCode: "+880" },
  { code: "LK", name: "Sri Lanka", dialCode: "+94" },
  { code: "MY", name: "Malaysia", dialCode: "+60" },
  { code: "SG", name: "Singapore", dialCode: "+65" },
  { code: "TH", name: "Thailand", dialCode: "+66" },
  { code: "VN", name: "Vietnam", dialCode: "+84" },
  { code: "KR", name: "South Korea", dialCode: "+82" },
];

export default function Contact() {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phoneCountryCode: "+255",
    phoneNumber: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = await submitContactForm({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
        phoneCountryCode: formData.phoneCountryCode,
        phoneNumber: formData.phoneNumber,
      });

      toast({
        title: t("common.contactToastSuccessTitle"),
        description: data.message || t("common.contactToastSuccessDescription"),
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        phoneCountryCode: "+255",
        phoneNumber: "",
        message: "",
      });
    } catch (error: any) {
      toast({
        title: t("common.contactToastErrorTitle"),
        description: error?.message || t("common.contactToastErrorGeneric"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 dark:from-gray-900 dark:via-orange-950/20 dark:to-gray-900">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#CD4F10]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-orange-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-300/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center" data-testid="text-contact-title">
            {t("nav.contact")}
          </h1>
          
          <p className="text-lg text-muted-foreground text-center mb-12" data-testid="text-contact-subtitle">
            {t("common.contactSubtitle")}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card data-testid="card-contact-form">
              <CardHeader>
                <CardTitle>{t("common.contactFormTitle")}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">{t("common.contactNameLabel")}</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      disabled={isSubmitting}
                      data-testid="input-name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">{t("common.contactEmailLabel")}</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      disabled={isSubmitting}
                      data-testid="input-email"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">{t("common.contactPhoneLabel")}</Label>
                    <div className="flex gap-2">
                      <select
                        id="phone-country"
                        className="w-40 rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        value={formData.phoneCountryCode}
                        onChange={(e) =>
                          setFormData({ ...formData, phoneCountryCode: e.target.value })
                        }
                        disabled={isSubmitting}
                        data-testid="select-phone-country"
                      >
                        {COUNTRY_DIAL_CODES.map((country) => (
                          <option key={country.code} value={country.dialCode}>
                            {country.name} ({country.dialCode})
                          </option>
                        ))}
                      </select>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder={t("common.contactPhonePlaceholder") || "Phone number"}
                        value={formData.phoneNumber}
                        onChange={(e) =>
                          setFormData({ ...formData, phoneNumber: e.target.value })
                        }
                        required
                        disabled={isSubmitting}
                        data-testid="input-phone"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="company">{t("common.contactCompanyLabel")}</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      disabled={isSubmitting}
                      data-testid="input-company"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">{t("common.contactMessageLabel")}</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      disabled={isSubmitting}
                      data-testid="input-message"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting} data-testid="button-submit">
                    {isSubmitting ? t("common.contactSubmitSending") : t("common.contactSubmitLabel")}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card data-testid="card-office-info">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    {t("common.contactHeadOfficeTitle")}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2" data-testid="text-office-address">
                    {t("common.contactHeadOfficeName")}
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    {t("common.contactAddressLine1")}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t("common.contactMapCaption")}
                  </p>
                </CardContent>
              </Card>

              <Card data-testid="card-contact-details">
                <CardContent className="pt-6 space-y-4">
                  <div>
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    {t("common.contactPhoneTitle")}
                    </h3>
                    <a href="tel:+255678960061" className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-phone">
                      +255 678 960 061
                    </a>
                  </div>
                  
                  <div>
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    {t("common.contactEmailTitle")}
                    </h3>
                    <a href="mailto:info@gammaimternationaltz.com" className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-email">
                      info@gammaimternationaltz.com
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card data-testid="card-map">
            <CardHeader>
              <CardTitle>{t("common.contactMapTitle")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video rounded-md overflow-hidden">
                <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.60093969994796!2d39.288517522753516!3d-6.816588544859094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4b0fbe35399b%3A0x4640d64bece3dc5a!2sRita%20tower%2C%20Dar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2sin!4v1765275805621!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Gamma International Tanzania Ltd"
/>


              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                {t("common.contactMapCaption")}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
