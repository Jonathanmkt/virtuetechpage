
import { ArrowRight, Lightbulb, Zap, Users, Target, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "@/components/Logo";

const Index = () => {
  const whatsappNumber = "+551151951015";
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os serviços da VirtueTech.";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`;

  const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Logo size="md" />
            <span className="text-2xl font-bold text-white">VirtueTech</span>
          </div>
          <Button 
            className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2"
            onClick={() => window.open(whatsappUrl, '_blank')}
          >
            <WhatsAppIcon className="w-4 h-4" />
            Fale Conosco
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Virtue<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Tech</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">
            As virtudes de sempre impulsionadas pelas tecnologias do futuro
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 flex items-center gap-2"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              <WhatsAppIcon className="w-5 h-5" />
              Transforme seu Negócio
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3"
            >
              Conheça Nossas Soluções
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Inovação que Transforma
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Combinamos valores tradicionais com tecnologias de ponta para entregar soluções que realmente fazem a diferença
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white text-xl">Inteligência Artificial</CardTitle>
              <CardDescription className="text-gray-300">
                Soluções de IA personalizadas que otimizam processos e impulsionam resultados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300">
                <li>• Machine Learning Avançado</li>
                <li>• Automação Inteligente</li>
                <li>• Análise Preditiva</li>
                <li>• Processamento de Linguagem Natural</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white text-xl">Desenvolvimento Ágil</CardTitle>
              <CardDescription className="text-gray-300">
                Metodologias modernas para entregar soluções rápidas e eficientes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300">
                <li>• Aplicações Web Modernas</li>
                <li>• Sistemas Mobile</li>
                <li>• APIs Robustas</li>
                <li>• Cloud Computing</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white text-xl">Consultoria Estratégica</CardTitle>
              <CardDescription className="text-gray-300">
                Orientação especializada para sua transformação digital
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300">
                <li>• Diagnóstico Tecnológico</li>
                <li>• Planejamento Digital</li>
                <li>• Otimização de Processos</li>
                <li>• Treinamento de Equipes</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* AI Emphasis Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 backdrop-blur-sm border border-purple-500/20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Brain className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Inteligência Artificial é Nosso Diferencial
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Na VirtueTech, a Inteligência Artificial não é apenas uma ferramenta, é o coração de nossas soluções. 
              Desenvolvemos sistemas inteligentes que aprendem, se adaptam e evoluem com seu negócio, 
              proporcionando insights valiosos e automatizando processos complexos.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
                <div className="text-gray-300">Redução de Erros</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">3x</div>
                <div className="text-gray-300">Aumento de Produtividade</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-gray-300">Operação Contínua</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Valores Tradicionais, Tecnologia de Ponta
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                A VirtueTech nasceu da união entre princípios sólidos de negócio e as mais avançadas tecnologias disponíveis. 
                Acreditamos que a inovação deve ser construída sobre uma base de confiança, ética e excelência.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Target className="w-6 h-6 text-blue-400" />
                  <span className="text-gray-300">Foco em resultados mensuráveis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-purple-400" />
                  <span className="text-gray-300">Parceria de longo prazo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Lightbulb className="w-6 h-6 text-pink-400" />
                  <span className="text-gray-300">Inovação responsável</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl backdrop-blur-sm border border-purple-500/20 flex items-center justify-center">
                <div className="text-center">
                  <Brain className="w-24 h-24 text-purple-400 mx-auto mb-4" />
                  <p className="text-gray-300 text-lg">O Futuro é Inteligente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para Transformar seu Negócio?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como nossas soluções de IA podem revolucionar sua empresa
          </p>
          <Button 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold flex items-center gap-2 mx-auto"
            onClick={() => window.open(whatsappUrl, '_blank')}
          >
            <WhatsAppIcon className="w-5 h-5" />
            Falar no WhatsApp
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-purple-500/20">
        <div className="text-center">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <Logo size="sm" />
            <span className="text-xl font-bold text-white">VirtueTech</span>
          </div>
          <p className="text-gray-400 mb-2">As virtudes de sempre impulsionadas pelas tecnologias do futuro</p>
          <p className="text-gray-500 text-sm">© 2024 VirtueTech. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-2xl animate-pulse"
          onClick={() => window.open(whatsappUrl, '_blank')}
        >
          <WhatsAppIcon className="w-8 h-8" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
