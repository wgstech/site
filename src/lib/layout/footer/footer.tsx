import { LogoWithText } from "@/components/logo";
import {
  EnvelopeSimple,
  MapPin,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { ExternalLink } from "./external-link";
import Instagram from "./logos/instagram.svg";
import { LinkedIn } from "./logos/linkedin.svg";

export function Footer() {
  return (
    <footer className="w-full bg-slate-800 text-slate-100">
      <div className="mx-auto flex justify-evenly py-10">
        <div className="flex flex-col self-center">
          <LogoWithText
            className="text-slate-400 brightness-125 saturate-15 transition-all duration-500 hover:saturate-100"
            size={60}
          />
          <p className="px-4 text-sm text-slate-200">
            Excelência e Compromisso <br />
            em Suporte Técnico de TI
          </p>
        </div>
        {/* <ul className="flex flex-col gap-2">
          <h3 className="py-2 text-xl font-bold tracking-wider">Links Úteis</h3>
        </ul> */}
        <ul className="flex flex-col gap-2">
          <h3 className="py-2 text-xl font-bold tracking-wider">Contatos</h3>
          <li>
            <ExternalLink href="mailto:contato@wgstech.com.br">
              <EnvelopeSimple weight="light" className="size-6" />
              <span>contato@wgstech.com.br</span>
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://maps.app.goo.gl/w62PVnwWYQ8wwXGw7">
              <MapPin weight="light" className="size-6" />
              <span>
                Edifício San Marino - R. Heitor de Moura Estevão, 229
                <br /> Sala 220 - Várzea, Teresópolis - RJ, 25953-090
              </span>
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://wa.me/5521978838514">
              <WhatsappLogo weight="light" className="size-6" />
              <span>21 978-838-514</span>
            </ExternalLink>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-evenly border-t border-t-white/15 py-4 text-xs text-slate-200">
        <div className="flex flex-col">
          <span>
            © {new Date().getFullYear()} WGS Tech. Todos os direitos
            reservados.
          </span>
          <span>[Razão Social] - CNPJ 12.345.678/0001-00</span>
        </div>
        <div className="flex items-center gap-5">
          <ExternalLink
            href="https://linkedin.com/"
            className="transition-colors hover:text-white"
          >
            <LinkedIn size="1.25rem" />
          </ExternalLink>
          <ExternalLink
            href="https://instagram.com/wgs.tech/"
            className="transition-colors hover:text-white"
          >
            <Instagram size="1.25rem" />
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
}
