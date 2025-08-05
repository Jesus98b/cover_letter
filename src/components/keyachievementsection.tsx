"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useTranslation } from "@/lib/use-translation";

export function KeyAchievementsSection() {
  const { t } = useTranslation();
  
  // Array actualizado con tus nuevos títulos e iconos
  const achievements = [
    {
      emoji: "🎯",
      title: t('productStrategy'),
      description: t('productStrategyDesc')
    },
    {
      emoji: "📦",
      title: t('projectLeadership'),
      description: t('projectLeadershipDesc')
    },
    {
      emoji: "🤝",
      title: t('techCollaboration'),
      description: t('techCollaborationDesc')
    },
    {
      emoji: "🔗",
      title: t('apiIntegration'),
      description: t('apiIntegrationDesc')
    },
    {
      emoji: "⚙️",
      title: t('automationSystems'),
      description: t('automationSystemsDesc')
    },
    {
      emoji: "📊",
      title: t('dataAnalytics'),
      description: t('dataAnalyticsDesc')
    }
  ];

  return (
    <section className="container mx-auto py-24 px-4">
      {/* Título de la sección actualizado */}
      <h2 className="text-3xl font-bold text-center mb-12">{t('achievementsTitle')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement) => (
          <Card key={achievement.title}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                {/* Ícono y título actualizados */}
                <span>{achievement.emoji}</span>
                {achievement.title}
              </CardTitle>
              <CardDescription className="pt-2 text-base">
                {achievement.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}