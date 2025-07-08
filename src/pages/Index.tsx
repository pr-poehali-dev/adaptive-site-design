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
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/10 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <img
                  src="/img/0389b7b0-682d-45bc-9f54-a7bd57033f80.jpg"
                  alt="GPT Manager"
                  className="w-6 h-6 rounded-sm"
                />
              </div>
              <h1 className="text-xl font-bold text-gray-900">
                Скриптогенератор
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#services"
                className="text-gray-600 hover:text-primary transition-colors font-medium"
              >
                Услуги
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-primary transition-colors font-medium"
              >
                О нас
              </a>
              <a
                href="#cases"
                className="text-gray-600 hover:text-primary transition-colors font-medium"
              >
                Кейсы
              </a>
              <a
                href="#blog"
                className="text-gray-600 hover:text-primary transition-colors font-medium"
              >
                Блог
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-primary transition-colors font-medium"
              >
                Контакты
              </a>
            </nav>
            <Button className="hidden md:flex bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white font-medium">
              <Icon name="MessageSquare" size={16} className="mr-2" />
              Заказать бота
            </Button>
            <Button variant="ghost" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 text-center bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-5xl">
          <Badge className="mb-6 animate-fade-in bg-gradient-to-r from-primary/10 to-purple-600/10 text-primary border-primary/20 px-4 py-2">
            🤖 GPT-боты для бизнеса
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up text-gray-900 leading-tight">
            Создаём и внедряем
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              {" "}
              GPT-ботов
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up leading-relaxed">
            Консультанты, продающие системы, аналитики и контент-мейкеры на базе
            искусственного интеллекта.
            <br />
            Интеграция в ваш сайт, CRM и социальные сети.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white font-semibold shadow-lg"
            >
              <Icon name="Rocket" size={20} className="mr-2" />
              Заказать бота
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть демо
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-gray-900">
              Наши GPT-боты
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Специализированные AI-решения для различных бизнес-задач
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <Card className="group hover:shadow-xl transition-all duration-300 animate-fade-in border-0 shadow-lg bg-gradient-to-br from-purple-50 to-indigo-50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Icon name="MessageCircle" size={28} className="text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Консультанты
                </CardTitle>
                <CardDescription className="text-gray-600 font-medium">
                  Отвечают на вопросы клиентов 24/7
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Обучены на ваших данных, знают продукт и могут решить 80%
                  типовых вопросов
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 animate-fade-in border-0 shadow-lg bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Icon name="TrendingUp" size={28} className="text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Продающие
                </CardTitle>
                <CardDescription className="text-gray-600 font-medium">
                  Генерируют лиды и увеличивают продажи
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Квалифицируют лиды, предлагают релевантные решения и ведут к
                  покупке
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 animate-fade-in border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Icon name="BarChart" size={28} className="text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Аналитические
                </CardTitle>
                <CardDescription className="text-gray-600 font-medium">
                  Анализируют данные и дают инсайты
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Обрабатывают большие объёмы данных и предоставляют
                  аналитические отчёты
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 animate-fade-in border-0 shadow-lg bg-gradient-to-br from-orange-50 to-amber-50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Icon name="PenTool" size={28} className="text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Контент-мейкеры
                </CardTitle>
                <CardDescription className="text-gray-600 font-medium">
                  Создают уникальный контент
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Генерируют тексты, статьи, посты для социальных сетей в вашем
                  стиле
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 animate-fade-in border-0 shadow-lg bg-gradient-to-br from-rose-50 to-pink-50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Icon name="Settings" size={28} className="text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Кастомизация
                </CardTitle>
                <CardDescription className="text-gray-600 font-medium">
                  Индивидуальная настройка
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Создаём уникальных ботов под специфику вашего бизнеса
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 animate-fade-in border-0 shadow-lg bg-gradient-to-br from-violet-50 to-purple-50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Icon name="Zap" size={28} className="text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Интеграция
                </CardTitle>
                <CardDescription className="text-gray-600 font-medium">
                  Полный цикл внедрения
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Интегрируем в сайт, CRM, соцсети. Техподдержка 24/7
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section
        id="contact"
        className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-gray-900">
              Заказать GPT-бота
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Расскажите о своих задачах, и мы предложим оптимальное решение
            </p>
          </div>

          <Card className="animate-scale-in border-0 shadow-xl bg-white">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-semibold mb-3 block text-gray-700">
                      Имя
                    </label>
                    <Input
                      placeholder="Ваше имя"
                      className="h-12 border-2 border-gray-200 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-3 block text-gray-700">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="h-12 border-2 border-gray-200 focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold mb-3 block text-gray-700">
                    Тип бота
                  </label>
                  <select className="w-full p-3 border-2 border-gray-200 rounded-lg bg-white focus:border-primary focus:outline-none h-12">
                    <option>Консультант</option>
                    <option>Продающий бот</option>
                    <option>Аналитик</option>
                    <option>Контент-мейкер</option>
                    <option>Кастомный бот</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold mb-3 block text-gray-700">
                    Описание задачи
                  </label>
                  <Textarea
                    placeholder="Расскажите подробнее о ваших задачах и требованиях..."
                    rows={5}
                    className="border-2 border-gray-200 focus:border-primary resize-none"
                  />
                </div>
                <Button
                  size="lg"
                  className="w-full h-14 text-lg bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white font-semibold shadow-lg"
                >
                  <Icon name="Send" size={18} className="mr-3" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-purple-600 rounded-lg flex items-center justify-center">
                  <img
                    src="/img/0389b7b0-682d-45bc-9f54-a7bd57033f80.jpg"
                    alt="Скриптогенератор"
                    className="w-6 h-6 rounded-sm"
                  />
                </div>
                <span className="font-bold text-gray-900">
                  Скриптогенератор
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Создаём и внедряем GPT-ботов для автоматизации бизнес-процессов
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-gray-900">Услуги</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="hover:text-primary transition-colors cursor-pointer">
                  Консультанты
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer">
                  Продающие боты
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer">
                  Аналитика
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer">
                  Контент-мейкеры
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-gray-900">Компания</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="hover:text-primary transition-colors cursor-pointer">
                  О нас
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer">
                  Кейсы
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer">
                  Блог
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer">
                  Поддержка
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-gray-900">Контакты</h4>
              <div className="space-y-3 text-sm text-gray-600">
                <p className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Icon name="Mail" size={16} />
                  info@scriptogenerator.ru
                </p>
                <p className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Icon name="MapPin" size={16} />
                  Москва, Россия
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="text-sm text-gray-500">
              © 2024 Скриптогенератор. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
