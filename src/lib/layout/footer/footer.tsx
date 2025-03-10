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
		<div className="w-full bg-gradient-to-br from-sky-700 to-cyan-700 text-white">
			<footer className="container mx-auto ">
				<div className="flex justify-evenly py-10">
					<ul className="flex flex-col gap-2">
						<h3 className="text-xl font-bold tracking-wider py-2">Menu</h3>
						<ExternalLink href="https://nuvem.wgstech.com.br/index.php/login">
							Nuvem
						</ExternalLink>
						<ExternalLink href="https://www.hdtune.com/files/hdtune_255.exe">
							HD Tune
						</ExternalLink>
						<ExternalLink href="https://nuvem.wgstech.com.br/index.php/s/Xp7kLMfRR8cpJZT">
							GLPI Padronização
						</ExternalLink>
						<ExternalLink href="https://rmm.wgstech.com.br/">RMM</ExternalLink>
						<ExternalLink href="https://nuvem.wgstech.com.br/index.php/s/3H8STsrQ6HZtM3A">
							Setup APAC 1.2.5
						</ExternalLink>
						<ExternalLink href="https://nuvem.wgstech.com.br/index.php/s/bYCrZr2CzCpsGsw">
							Reset EPSON
						</ExternalLink>
					</ul>
					<ul className="flex flex-col gap-2">
						<h3 className="text-xl font-bold tracking-wider py-2">
							Links Úteis
						</h3>
					</ul>
					<ul className="flex flex-col gap-2">
						<h3 className="text-xl font-bold tracking-wider py-2">Contatos</h3>
						<li>
							<ExternalLink href="mailto:contato@wgstech.com.br">
								<EnvelopeSimple weight="light" size={24} />
								<span>contato@wgstech.com.br</span>
							</ExternalLink>
						</li>
						<li>
							<ExternalLink href="https://maps.app.goo.gl/w62PVnwWYQ8wwXGw7">
								<MapPin weight="light" size={24} />
								<span>
									Edifício San Marino - R. Heitor de Moura Estevão, 229
									<br /> Sala 220 - Várzea, Teresópolis - RJ, 25953-090
								</span>
							</ExternalLink>
						</li>
						<li>
							<ExternalLink href="https://wa.me/5521978838514">
								<WhatsappLogo weight="light" size={24} />
								<span>21 978-838-514</span>
							</ExternalLink>
						</li>
					</ul>
				</div>
				<div className="flex items-center justify-evenly p-2 text-neutral-300 text-xs">
					<div className="flex-col flex">
						<span>
							© {new Date().getFullYear()} WGS Tech. Todos os direitos
							reservados.
						</span>
						<span>[Razão Social] - CNPJ 12.345.678/0001-00</span>
					</div>
					<div className="flex items-center gap-5">
						<ExternalLink href="https://linkedin.com/">
							<LinkedIn size={20} />
						</ExternalLink>
						<ExternalLink href="https://instagram.com/wgs.tech/">
							<Instagram size={20} />
						</ExternalLink>
					</div>
				</div>
			</footer>
		</div>
	);
}
