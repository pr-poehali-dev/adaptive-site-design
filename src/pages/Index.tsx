import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      {/* Header */}
      <header className="border-b border-border/20 backdrop-blur-sm bg-background/95 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <img
                  src="/img/1933dbec-e145-4cd9-97eb-389b8c7ec875.jpg"
                  alt="AI GPT Studio"
                  className="w-8 h-8 rounded-md"
                />
              </div>
              <h1 className="text-xl font-montserrat font-bold text-foreground">
                AI GPT Studio
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#services"
                className="text-foreground/80 hover:text-primary transition-colors font-open-sans"
              >
                Услуги
              </a>
              <a
                href="#about"
                className="text-foreground/80 hover:text-primary transition-colors font-open-sans"
              >
                О нас
              </a>
              <a
                href="#cases"
                className="text-foreground/80 hover:text-primary transition-colors font-open-sans"
              >
                Кейсы
              </a>
              <a
                href="#blog"
                className="text-foreground/80 hover:text-primary transition-colors font-open-sans"
              >
                Блог
              </a>
              <a
                href="#contact"
                className="text-foreground/80 hover:text-primary transition-colors font-open-sans"
              >
                Контакты
              </a>
            </nav>
            <Button className="hidden md:flex">
              <Icon name="UserPlus" size={16} className="mr-2" />
              Регистрация
            </Button>
            <Button variant="ghost" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <Badge className="mb-6 animate-fade-in" variant="secondary">
            🤖 Революция в автоматизации бизнеса
          </Badge>
          <h2 className="text-5xl md:text-6xl font-montserrat font-bold mb-6 animate-slide-up">
            Создаём и внедряем
            <span className="text-primary"> GPT агентов</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up font-open-sans">
            Консультанты, продающие системы, аналитики и контент-мейкеры на базе
            искусственного интеллекта. Интеграция в ваш сайт и социальные сети.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button size="lg" className="text-lg px-8 py-6">
              <Icon name="Rocket" size={20} className="mr-2" />
              Заказать агента
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть демо
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-montserrat font-bold mb-4">
              Наши GPT агенты
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto font-open-sans">
              Специализированные AI-решения для различных бизнес-задач
            </p>
          </div>

          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card className="hover:shadow-lg transition-all duration-300 animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon
                    name="MessageCircle"
                    size={24}
                    className="text-primary"
                  />
                </div>
                <CardTitle className="font-montserrat">Консультанты</CardTitle>
                <CardDescription className="font-open-sans">
                  Отвечают на вопросы клиентов 24/7
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-open-sans">
                  Обучены на ваших данных, знают продукт и могут решить 80%
                  типовых вопросов
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" size={24} className="text-primary" />
                </div>
                <CardTitle className="font-montserrat">Продающие</CardTitle>
                <CardDescription className="font-open-sans">
                  Генерируют лиды и увеличивают продажи
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-open-sans">
                  Квалифицируют лиды, предлагают релевантные решения и ведут к
                  покупке
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BarChart" size={24} className="text-primary" />
                </div>
                <CardTitle className="font-montserrat">Аналитические</CardTitle>
                <CardDescription className="font-open-sans">
                  Анализируют данные и дают инсайты
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-open-sans">
                  Обрабатывают большие объёмы данных и предоставляют
                  аналитические отчёты
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Second row - 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="hover:shadow-lg transition-all duration-300 animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="PenTool" size={24} className="text-primary" />
                </div>
                <CardTitle className="font-montserrat">
                  Контент-мейкеры
                </CardTitle>
                <CardDescription className="font-open-sans">
                  Создают уникальный контент для вашего бренда
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-open-sans">
                  Генерируют тексты, статьи, посты для социальных сетей в вашем
                  стиле
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Settings" size={24} className="text-primary" />
                </div>
                <CardTitle className="font-montserrat">Кастомизация</CardTitle>
                <CardDescription className="font-open-sans">
                  Индивидуальная настройка под ваши задачи
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-open-sans">
                  Создаём уникальных агентов под специфику вашего бизнеса
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Third row - 1 large card */}
          <div className="grid grid-cols-1 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300 animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" size={24} className="text-primary" />
                </div>
                <CardTitle className="font-montserrat">
                  Интеграция и поддержка
                </CardTitle>
                <CardDescription className="font-open-sans">
                  Полный цикл внедрения в ваш бизнес
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-open-sans">
                  Интегрируем агентов в ваш сайт, CRM, социальные сети.
                  Обеспечиваем техническую поддержку 24/7
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section id="contact" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-montserrat font-bold mb-4">
              Заказать GPT агента
            </h3>
            <p className="text-muted-foreground font-open-sans">
              Расскажите о своих задачах, и мы предложим оптимальное решение
            </p>
          </div>

          <Card className="animate-scale-in">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block font-open-sans">
                      Имя
                    </label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block font-open-sans">
                      Email
                    </label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block font-open-sans">
                    Тип агента
                  </label>
                  <select className="w-full p-2 border border-border rounded-md bg-background">
                    <option>Консультант</option>
                    <option>Продающий агент</option>
                    <option>Аналитик</option>
                    <option>Контент-мейкер</option>
                    <option>Кастомный агент</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block font-open-sans">
                    Описание задачи
                  </label>
                  <Textarea
                    placeholder="Расскажите подробнее о ваших задачах и требованиях..."
                    rows={4}
                  />
                </div>
                <Button size="lg" className="w-full">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/20 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                  <img
                    src="/img/1933dbec-e145-4cd9-97eb-389b8c7ec875.jpg"
                    alt="AI GPT Studio"
                    className="w-6 h-6 rounded-sm"
                  />
                </div>
                <span className="font-montserrat font-bold">AI GPT Studio</span>
              </div>
              <p className="text-sm text-muted-foreground font-open-sans">
                Создаём и внедряем GPT агентов для автоматизации
                бизнес-процессов
              </p>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground font-open-sans">
                <li>Консультанты</li>
                <li>Продающие агенты</li>
                <li>Аналитика</li>
                <li>Контент-мейкеры</li>
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground font-open-sans">
                <li>О нас</li>
                <li>Кейсы</li>
                <li>Блог</li>
                <li>Поддержка</li>
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground font-open-sans">
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@aigptstudio.com
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, Россия
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-border/20 mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground font-open-sans">
              © 2024 AI GPT Studio. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
