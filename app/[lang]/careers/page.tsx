import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { MapPin, Clock, Users, Lightbulb, Heart, Trophy, Rocket, Target, TrendingUp, Building2, DollarSign, Gift } from "lucide-react";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { getDictionary } from "../dictionaries";
import { CareersContent } from "@/components/careers-content";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: 'en' | 'pt' | 'es' | 'fr' }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  // Define roles with translations based on language
  const getRoles = (lang: string) => {
    const roles = {
      en: [
        {
          category: "Engineering",
          positions: [
            {
              title: "Senior Full Stack Engineer",
              location: "In-Office",
              type: "Full-time"
            },
            {
              title: "Frontend Developer",
              location: "In-Office",
              type: "Full-time"
            },
            {
              title: "DevOps Engineer",
              location: "In-Office",
              type: "Full-time"
            }
          ]
        },
        {
          category: "Design",
          positions: [
            {
              title: "Product Designer",
              location: "In-Office",
              type: "Full-time"
            },
            {
              title: "UI/UX Designer",
              location: "In-Office",
              type: "Contract"
            }
          ]
        },
        {
          category: "Product",
          positions: [
            {
              title: "Product Manager",
              location: "In-Office",
              type: "Full-time"
            }
          ]
        }
      ],
      pt: [
        {
          category: "Engenharia",
          positions: [
            {
              title: "Engenheiro Full Stack Sênior",
              location: "Presencial",
              type: "Tempo integral"
            },
            {
              title: "Desenvolvedor Frontend",
              location: "Presencial",
              type: "Tempo integral"
            },
            {
              title: "Engenheiro DevOps",
              location: "Presencial",
              type: "Tempo integral"
            }
          ]
        },
        {
          category: "Design",
          positions: [
            {
              title: "Designer de Produto",
              location: "Presencial",
              type: "Tempo integral"
            },
            {
              title: "Designer UI/UX",
              location: "Presencial",
              type: "Contrato"
            }
          ]
        },
        {
          category: "Produto",
          positions: [
            {
              title: "Gerente de Produto",
              location: "Presencial",
              type: "Tempo integral"
            }
          ]
        }
      ],
      es: [
        {
          category: "Ingeniería",
          positions: [
            {
              title: "Ingeniero Full Stack Senior",
              location: "En Oficina",
              type: "Tiempo completo"
            },
            {
              title: "Desarrollador Frontend",
              location: "En Oficina",
              type: "Tiempo completo"
            },
            {
              title: "Ingeniero DevOps",
              location: "En Oficina",
              type: "Tiempo completo"
            }
          ]
        },
        {
          category: "Diseño",
          positions: [
            {
              title: "Diseñador de Producto",
              location: "En Oficina",
              type: "Tiempo completo"
            },
            {
              title: "Diseñador UI/UX",
              location: "En Oficina",
              type: "Contrato"
            }
          ]
        },
        {
          category: "Producto",
          positions: [
            {
              title: "Gerente de Producto",
              location: "En Oficina",
              type: "Tiempo completo"
            }
          ]
        }
      ],
      fr: [
        {
          category: "Ingénierie",
          positions: [
            {
              title: "Ingénieur Full Stack Senior",
              location: "En Bureau",
              type: "Temps plein"
            },
            {
              title: "Développeur Frontend",
              location: "En Bureau",
              type: "Temps plein"
            },
            {
              title: "Ingénieur DevOps",
              location: "En Bureau",
              type: "Temps plein"
            }
          ]
        },
        {
          category: "Design",
          positions: [
            {
              title: "Designer Produit",
              location: "En Bureau",
              type: "Temps plein"
            },
            {
              title: "Designer UI/UX",
              location: "En Bureau",
              type: "Contrat"
            }
          ]
        },
        {
          category: "Produit",
          positions: [
            {
              title: "Chef de Produit",
              location: "En Bureau",
              type: "Temps plein"
            }
          ]
        }
      ]
    };
    return roles[lang as keyof typeof roles] || roles.en;
  };

  const openRoles = getRoles(lang);

  const values = [
    {
      icon: <Lightbulb className="w-5 h-5 text-muted-foreground" />,
      title: dict.careers.values.items[0].title,
      description: dict.careers.values.items[0].description,
    },
    {
      icon: <Users className="w-5 h-5 text-muted-foreground" />,
      title: dict.careers.values.items[1].title,
      description: dict.careers.values.items[1].description,
    },
    {
      icon: <Heart className="w-5 h-5 text-muted-foreground" />,
      title: dict.careers.values.items[2].title,
      description: dict.careers.values.items[2].description,
    },
    {
      icon: <Trophy className="w-5 h-5 text-muted-foreground" />,
      title: dict.careers.values.items[3].title,
      description: dict.careers.values.items[3].description,
    },
    {
      icon: <Rocket className="w-5 h-5 text-muted-foreground" />,
      title: dict.careers.values.items[4].title,
      description: dict.careers.values.items[4].description,
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-muted-foreground" />,
      title: dict.careers.values.items[5].title,
      description: dict.careers.values.items[5].description,
    }
  ];

  const cultureItems = [
    {
      icon: <Building2 className="w-5 h-5 text-muted-foreground" />,
      title: dict.careers.culture.items[0].title,
      description: dict.careers.culture.items[0].description,
    },
    {
      icon: <Target className="w-5 h-5 text-muted-foreground" />,
      title: dict.careers.culture.items[1].title,
      description: dict.careers.culture.items[1].description,
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-muted-foreground" />,
      title: dict.careers.culture.items[2].title,
      description: dict.careers.culture.items[2].description,
    },
    {
      icon: <Clock className="w-5 h-5 text-muted-foreground" />,
      title: dict.careers.culture.items[3].title,
      description: dict.careers.culture.items[3].description,
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-5 h-5 text-brand" />,
      title: dict.careers.benefits.items[0].title,
      description: dict.careers.benefits.items[0].description,
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-brand" />,
      title: dict.careers.benefits.items[1].title,
      description: dict.careers.benefits.items[1].description,
    },
    {
      icon: <Clock className="w-5 h-5 text-brand" />,
      title: dict.careers.benefits.items[2].title,
      description: dict.careers.benefits.items[2].description,
    },
    {
      icon: <Gift className="w-5 h-5 text-brand" />,
      title: dict.careers.benefits.items[3].title,
      description: dict.careers.benefits.items[3].description,
    },
    {
      icon: <Users className="w-5 h-5 text-brand" />,
      title: dict.careers.benefits.items[4].title,
      description: dict.careers.benefits.items[4].description,
    },
    {
      icon: <Target className="w-5 h-5 text-brand" />,
      title: dict.careers.benefits.items[5].title,
      description: dict.careers.benefits.items[5].description,
    }
  ];

  return (
    <div className="bg-background min-h-screen space-y-16">
      <Navbar lang={lang} dict={dict} />
      <main className="max-w-6xl px-4 mx-auto">
        <div className="max-w-3xl mb-10 mt-20">
          <div className="hidden sm:mb-8 sm:flex sm:justify-start">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-foreground ring-1 ring-gray-400/20 hover:ring-gray-400/30">
              {dict.careers.hero.badge}
            </div>
          </div>
          <div className="text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">{dict.careers.hero.title}</h1>
            <p className="mt-6 sm:mt-8 text-base sm:text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">
              {dict.careers.hero.description}
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4">
              <Link href={`/${lang}#projects`}>
                <Button variant="brand">
                  {dict.careers.hero.seeOurWork}
                </Button>
              </Link>
              <CareersContent dict={dict} />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20 sm:mt-32">
          <h2 className="text-base/7 font-semibold text-muted-foreground">{dict.careers.values.section}</h2>
          <p className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-pretty text-foreground">
            {dict.careers.values.title}
          </p>
          <p className="mt-4 text-base sm:text-lg/8 text-muted-foreground max-w-3xl">
            {dict.careers.values.description}
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-primary border border-gray-400/20 rounded-lg p-6 hover:border-gray-400/30 transition-colors duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-background border border-gray-400/20 rounded-md p-2">
                    {value.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{value.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Office Culture Section */}
        <div className="mt-20 sm:mt-32">
          <h2 className="text-base/7 font-semibold text-muted-foreground">{dict.careers.culture.section}</h2>
          <p className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-pretty text-foreground">
            {dict.careers.culture.title}
          </p>
          <p className="mt-4 text-base sm:text-lg/8 text-muted-foreground max-w-3xl">
            {dict.careers.culture.description}
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {cultureItems.map((item, index) => (
              <div key={index} className="bg-primary border border-gray-400/20 rounded-lg p-8">
                <div className="flex items-center gap-3 mb-4">
                  {item.icon}
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20 sm:mt-32">
          <h2 className="text-base/7 font-semibold text-muted-foreground">{dict.careers.benefits.section}</h2>
          <p className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-pretty text-foreground">
            {dict.careers.benefits.title}
          </p>
          <p className="mt-4 text-base sm:text-lg/8 text-muted-foreground max-w-3xl">
            {dict.careers.benefits.description}
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-primary border border-gray-400/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  {benefit.icon}
                  <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions Section */}
        <div id="open-positions" className="mt-20 sm:mt-32 scroll-mt-20 mb-20">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">{dict.careers.openPositions.title}</h2>
            <p className="mt-2 text-base sm:text-lg text-muted-foreground">
              {dict.careers.openPositions.description.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < dict.careers.openPositions.description.split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>

          <div className="space-y-6">
            {openRoles.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-sm font-semibold text-muted-foreground mb-4">{category.category}</h3>
                <div>
                  {category.positions.map((position, positionIndex) => (
                    <div
                      key={positionIndex}
                      className="bg-primary first:border border-gray-400/20 first:border-b-0 border-x last:border-b first:rounded-t-lg last:rounded-b-lg px-4 sm:px-6 py-4 sm:py-5 hover:border-gray-400/30 transition-all duration-200 group cursor-pointer"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div className="flex-1">
                          <h4 className="text-sm sm:text-base font-medium text-foreground">
                            {position.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-2 sm:hidden">
                            <MapPin className="w-3 h-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{position.location}</span>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-8">
                          <div className="hidden sm:flex items-center gap-2">
                            <div className="bg-background border border-gray-400/20 rounded-full px-3 py-1 flex items-center gap-2">
                              <MapPin className="w-3 h-3 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">{position.location}</span>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-xs sm:text-sm bg-neutral-500/10 font-medium hover:bg-neutral-500/5 hover:text-foreground w-full sm:w-auto"
                          >
                            {dict.careers.openPositions.applyButton}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer lang={lang} dict={dict} />
    </div>
  )
}
