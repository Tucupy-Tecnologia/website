"use server";

import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

interface WorkWithUsFormType {
  name: string;
  email: string;
  address: string;
  birthDate: string;
  whereDoYouKnowUs: string;
  areaOfInterest: string;
  linkedin: string;
  github: string;
  cv: string;
  message: string;
}

export async function notionService(data: WorkWithUsFormType) {
  const now = new Date().toLocaleDateString("pt-BR");

  try {
    const res = await notion.pages.create({
      parent: { database_id: process.env.NOTION_DATABASE_ID! },
      properties: {
        "Nome Completo": {
          title: [
            {
              type: "text",
              text: {
                content: data.name,
              },
            },
          ],
        },
        "Email": {
          email: data.email ?? "Não informado",
        },
        "Endereço": {
          rich_text: [
            {
              type: "text",
              text: {
                content: data.address,
              },
            },
          ],
        },
        "Data de Nascimento": {
          rich_text: [
            {
              type: "text",
              text: {
                content: data.birthDate,
              },
            },
          ],
        },
        "De onde nos conheceu": {
          rich_text: [
            {
              type: "text",
              text: {
                content: data.whereDoYouKnowUs,
              },
            },
          ],
        },
        "Área de Interesse": {
          rich_text: [
            {
              type: "text",
              text: {
                content: data.areaOfInterest,
              },
            },
          ],
        },
        "LinkedIn": {
          url: data.linkedin ?? "Não informado",
        },
        "Github": {
          url: data.github ?? "Não informado",
        },
        "Currículo": {
          files: [
            {
              name: "Currículo",
              type: "external",
              external: {
                url: data.cv,
              },
            },
          ],
        },
        "Carta de Apresentação": {
          rich_text: [
            {
              type: "text",
              text: {
                content: data.message,
              },
            },
          ],
        },
        "Data de Inscrição": {
          rich_text: [
            {
              type: "text",
              text: {
                content: now,
              },
            },
          ],
        },
      },
    });

    console.log(res);
  } catch (error) {
    console.error("Erro ao criar página no Notion:", error);
  }
}
