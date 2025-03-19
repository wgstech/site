import { ExternalLink } from "@/lib/layout/footer/external-link";

export default function Toolbox() {
  return (
    <main className="container mx-auto flex flex-1 grow grid-cols-3 bg-slate-100">
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
      {/* <ul className="group flex flex-col gap-2">
          <h3 className="py-2 text-xl font-bold tracking-wider transition-colors group-hover:text-sky-300">
            Menu
          </h3>
          <ExternalLink
            href="https://nuvem.wgstech.com.br/index.php/login"
            className="transition-colors hover:text-sky-300"
          >
            Nuvem
          </ExternalLink>
          <ExternalLink
            href="https://www.hdtune.com/files/hdtune_255.exe"
            className="transition-colors hover:text-sky-300"
          >
            HD Tune
          </ExternalLink>
          <ExternalLink
            href="https://nuvem.wgstech.com.br/index.php/s/Xp7kLMfRR8cpJZT"
            className="transition-colors hover:text-sky-300"
          >
            GLPI Padronização
          </ExternalLink>
          <ExternalLink
            href="https://rmm.wgstech.com.br/"
            className="transition-colors hover:text-sky-300"
          >
            RMM
          </ExternalLink>
          <ExternalLink
            href="https://nuvem.wgstech.com.br/index.php/s/3H8STsrQ6HZtM3A"
            className="transition-colors hover:text-sky-300"
          >
            Setup APAC 1.2.5
          </ExternalLink>
          <ExternalLink
            href="https://nuvem.wgstech.com.br/index.php/s/bYCrZr2CzCpsGsw"
            className="transition-colors hover:text-sky-300"
          >
            Reset EPSON
          </ExternalLink>
        </ul> */}
    </main>
  );
}
