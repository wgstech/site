"use client";

import { WhatsappLogo, X } from "@phosphor-icons/react/dist/ssr";
import {
	Close,
	Content,
	Description,
	Overlay,
	Portal,
	Root,
	Title,
	Trigger,
} from "@radix-ui/react-dialog";
import { type PropsWithChildren, useState } from "react";
import { ContactForm } from "./contact-form";

interface ContactFormModalProps extends PropsWithChildren {
	details?: string;
}

export function ContactFormModal({ children, details }: ContactFormModalProps) {
	const [modalOpen, setModalOpen] = useState(false);

	const onSubmit = () => {
		setModalOpen(false);
	};

	return (
		<Root open={modalOpen} onOpenChange={setModalOpen}>
			<Trigger asChild>{children}</Trigger>
			<Portal>
				<Overlay className="data-[state=open]:motion-preset-fade-sm data-[state=closed]:motion-opacity-out fixed inset-0 z-90 bg-black/65">
					<Content className="data-[state=open]:motion-preset-focus-sm data-[state=closed]:motion-blur-out-sm -translate-1/2 fixed top-1/2 left-1/2 z-100 max-h-[85vh] w-[90vw] max-w-2xl rounded-xl bg-slate-50 p-[25px] shadow">
						<Title className="font-medium text-sky-700 text-xl">
							Entraremos em contato com você
						</Title>
						<Description className="text-slate-500 text-xs">
							Não compartilharemos seus dados com ninguém.
						</Description>
						<div className="my-5 flex items-center gap-3 rounded-xl bg-slate-200 p-2 text-slate-700 text-sm">
							<WhatsappLogo className="size-7 text-sky-700" weight="light" />
							<span>
								Ou entre em contato agora no nosso{" "}
								<a
									href="https://wa.me/5521978838514"
									target="_blank"
									rel="noreferrer"
									className="text-sky-700 underline"
								>
									WhatsApp.
								</a>
							</span>
						</div>
						<ContactForm onSubmit={onSubmit} details={details} />
						<Close asChild>
							<button
								type="button"
								className="absolute top-2.5 right-2.5 inline-flex size-7 items-center justify-center rounded-full bg-slate-200 text-sky-700 transition-colors hover:bg-slate-300 hover:text-sky-800"
								aria-label="Close"
							>
								<X className="size-6" />
							</button>
						</Close>
					</Content>
				</Overlay>
			</Portal>
		</Root>
	);
}
