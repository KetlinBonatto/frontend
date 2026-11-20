
import { Resend } from "resend";
import type { Config } from "@netlify/functions";

declare const process: {
    env: {
        RESEND_API_KEY?: string;
        CONTACT_TO_EMAIL?: string;
    };
};

const handler = async (req: Request) => {
    if (req.method !== "POST") {
        return Response.json(
            { error: "Método não permitido." },
            { status: 405 }
        );
    }

    try {
        const { nome, email, mensagem } = await req.json();

        if (!nome || !email || !mensagem) {
            return Response.json(
                { error: "Preencha todos os campos." },
                { status: 400 }
            );
        }

        const apiKey = process.env.RESEND_API_KEY;
        const destino = process.env.CONTACT_TO_EMAIL;

        if (!apiKey || !destino) {
            return Response.json(
                { error: "Configuração de e-mail não encontrada." },
                { status: 500 }
            );
        }

        const resend = new Resend(apiKey);

        const { error } = await resend.emails.send({
            from: "DonaFrost <onboarding@resend.dev>",
            to: destino,
            replyTo: email,
            subject: `Contato pelo site - ${nome}`,
            text: `Nome: ${nome}\nE-mail: ${email}\n\nMensagem:\n${mensagem}`
        });

        if (error) {
            console.error(error);

            return Response.json(
                { error: "Não foi possível enviar o e-mail." },
                { status: 500 }
            );
        }

        return Response.json({
            message: "Mensagem enviada com sucesso!"
        });

    } catch (error) {
        console.error(error);

        return Response.json(
            { error: "Erro ao processar a mensagem." },
            { status: 500 }
        );
    }
};

export default handler;

export const config: Config = {
    path: "/api/send-email"
};
