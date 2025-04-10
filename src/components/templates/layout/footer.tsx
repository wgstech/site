import {
	EnvelopeSimple,
	MapPin,
	WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { ExternalLink } from "@/components/atoms/external-link";
import { Instagram } from "@/components/atoms/logos/instagram.svg";
import { LinkedIn } from "@/components/atoms/logos/linkedin.svg";
import { LogoWithText } from "@/components/atoms/logos/logo-with-text";

export function Footer() {
	return (
		<footer className="mt-auto w-full bg-slate-800 text-slate-50">
			<div className="mx-auto flex justify-center py-10 sm:justify-evenly">
				<div className="hidden flex-col self-center sm:flex">
					<LogoWithText
						className="text-slate-400 brightness-125 saturate-15 transition-all hover:saturate-100"
						size={75}
					/>
					<p className="px-4 text-slate-200 text-sm">
						Excelência e Compromisso <br />
						em Suporte Técnico de TI
					</p>
				</div>
				<div className="group">
					<h4 className="mb-2 py-2 font-semibold text-xl tracking-wide transition-colors group-hover:text-blue-300 lg:text-2xl">
						Contatos
					</h4>
					<ul className="flex flex-col gap-2">
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
									Rua Edmundo Bitencourt, 59
									<br />
									Várzea, Teresópolis - RJ, 25953-030
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
			</div>
			<div className="flex items-center justify-evenly border-t border-t-white/15 py-4 text-slate-200">
				<div className="flex flex-col text-[0.625rem] sm:text-xs">
					<span>
						© {new Date().getFullYear()} WGS Tech.
						<br className="sm:hidden" /> Todos os direitos reservados.
					</span>
					<span>[Razão Social] - CNPJ 12.345.678/0001-00</span>
				</div>
				<div className="flex items-center gap-5">
					<ExternalLink
						href="https://linkedin.com/"
						className="hover:text-[#0965C0]"
					>
						<LinkedIn size="1.25rem" />
					</ExternalLink>
					<ExternalLink
						href="https://instagram.com/wgs.tech/"
						className="hover:text-[#FF0069]"
					>
						<Instagram size="1.25rem" />
					</ExternalLink>
				</div>
			</div>
		</footer>
	);
}
