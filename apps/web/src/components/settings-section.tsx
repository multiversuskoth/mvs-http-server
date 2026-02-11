"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import {
  countries,
  languages,
  type TCountryCode,
  type TLanguageCode,
} from "countries-list";
import { type FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { updateUserSettingsFn } from "@/routes/profile";
import { CalendarDOB } from "./ui/dob-picker";

type AccountFrontSettings = {
  birthday: Date | undefined;
  country: string | undefined;
  language: string | undefined;
};

type SettingsSectionProps = {
  data: AccountFrontSettings | null;
};

export const SettingsSection: FC<SettingsSectionProps> = ({ data }) => {
  const updateUserSettings = useMutation({
    mutationFn: useServerFn(updateUserSettingsFn),
  });

  const [birthday, setBirthday] = useState(data?.birthday);
  const [country, setCountry] = useState(data?.country);
  const [language, setLanguage] = useState(data?.language);

  const handleSave = (data: AccountFrontSettings) => {
    updateUserSettings.mutate({
      data,
    });
  };

  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur-sm sticky top-8">
      <CardHeader>
        <CardTitle
          className="text-foreground text-xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Account Settings
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <CalendarDOB
            currentValue={birthday}
            onValueChange={(val) => {
              setBirthday(val);
              handleSave({ birthday: val, country, language });
            }}
          ></CalendarDOB>
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="country"
            className="text-xs uppercase tracking-wider text-muted-foreground w-fit"
          >
            Country
          </Label>
          <Select
            defaultValue={country}
            value={country}
            onValueChange={(val) => {
              setCountry(val);
              handleSave({ birthday, country: val, language });
            }}
          >
            <SelectTrigger
              id="country"
              className="border-border/50 bg-background/50"
            >
              <SelectValue placeholder="Select country">
                {countries[country as TCountryCode].name || "Select Country"}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {Object.entries(countries).map((country) => {
                return (
                  <SelectItem key={country[0]} value={country[0]}>
                    {country[1].name}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="language"
            className="text-xs uppercase tracking-wider text-muted-foreground w-fit"
          >
            Language
          </Label>
          <Select
            value={language}
            onValueChange={(val) => {
              setLanguage(val);
              handleSave({ birthday, country, language: val });
            }}
          >
            <SelectTrigger
              id="language"
              className="border-border/50 bg-background/50"
            >
              <SelectValue defaultValue={"en"} placeholder="Select language">
                {languages[language as TLanguageCode].native ||
                  "Select language"}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Español</SelectItem>
              <SelectItem value="fr">Français</SelectItem>
              <SelectItem value="de">Deutsch</SelectItem>
              <SelectItem value="ja">日本語</SelectItem>
              <SelectItem value="ko">한국어</SelectItem>
              <SelectItem value="pt">Português</SelectItem>
              <SelectItem value="zh">中文</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};
