import { Card } from "@/components/ui/card";
import Image from "next/image";
import * as React from "react";

export default function AboutUsComponent() {
  return (
    <section className="flex flex-col relative shrink-0 box-border items-center justify-center p-8">
      <Card className="items-center flex flex-col max-w-[1100px] p-8">
        <h2 className="text-3xl mb-6">Sobre a Amazônia Online</h2>
        <div className="gap-x-6 flex flex-wrap gap-6 justify-center gap-y-6 mt-8">
          <Image
            loading="lazy"
            src="/aon.png"
            alt="Sobre a Amazônia Online"
            className="object-cover object-center w-[400px] h-[300px] rounded-lg"
            width={400}
            height={400}
          />
          <span className="basis-[300px] grow leading-7">
            A Amazônia Online é uma iniciativa inovadora focada em superar o
            desafio de conectividade na região da Amazônia. Nossa missão é
            garantir que milhões de indivíduos na região, que atualmente
            enfrentam barreiras ao acesso à internet, tenham a oportunidade de
            conectar-se, aprender e crescer em uma era digital.
            <p className="mt-4">
              <strong>O Problema:</strong> A ausência de acesso à internet na
              Amazônia vai além de uma mera limitação tecnológica. Representa
              uma restrição ao pleno exercício da cidadania, limitando serviços
              essenciais em áreas como saúde, educação e segurança pública. De
              acordo com a Pesquisa Nacional por Amostra de Domicílios (Pnad),
              enquanto a média nacional de acesso à internet banda larga é de
              77,9%, na Amazônia essa média cai para 68,7%.
            </p>
          </span>

          <p>
            <strong>Nossa Solução:</strong> Através da implementação de antenas
            Starlink e da criação de uma rede de pontos de acesso via satélite
            de baixa órbita, buscamos fornecer uma conectividade de alta
            qualidade para as comunidades da Amazônia. Essa tecnologia,
            complementada por nossa plataforma integrada de gerenciamento de
            acesso e segurança, garante uma experiência de usuário otimizada e
            segura.
          </p>

          <p>
            <strong>Modelo de Negócios:</strong> Utilizamos a metodologia Lean
            Business Canvas para desenvolver e escalar nossa solução. Nossa
            proposta de valor é um aumento significativo da conectividade na
            região, colaborando estrategicamente com organizações governamentais
            e formando parcerias exclusivas com provedores locais de serviços de
            internet.
          </p>

          <p>
            <strong>Vantagem Competitiva:</strong> Ao contrário de outras
            soluções de conectividade disponíveis, nossa abordagem combina a
            eficácia dos satélites de baixa órbita com uma plataforma web
            robusta, proporcionando uma conectividade estável mesmo em condições
            climáticas adversas. Com o plano inicial de implementar pelo menos
            um ponto de acesso em cada município do Amazonas, pretendemos
            demonstrar a viabilidade e o impacto significativo do nosso projeto.
          </p>
          <p>
            <strong>Equipe:</strong> A equipe da Amazônia Online é composta por
            profissionais dedicados nas áreas de desenvolvimento, UX, design,
            negócios e marketing, todos comprometidos em trazer a transformação
            digital para a região da Amazônia.
          </p>
          <p>
            <strong>Impacto:</strong> Acreditamos que ao democratizar o acesso à
            informação, estamos abrindo portas para oportunidades educacionais,
            facilitando a telemedicina, melhorando a segurança pública e, no
            geral, elevando a qualidade de vida das comunidades da Amazônia.
          </p>
          <p>
            <strong>
              Conecte-se conosco e faça parte dessa revolução digital na
              Amazônia!
            </strong>
          </p>
        </div>
      </Card>
    </section>
  );
}
