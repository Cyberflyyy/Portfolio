import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import wordanalyticsImg from "@/public/wordanalytics.png";
import ForumTin from "@/public/Forumtin.png";
import Testownik from "@/public/image.png";
export const links = [
  {
    name: "Start",
    hash: "#Start",
  },
  {
    name: "O mnie",
    hash: "#O mnie",
  },

  {
    name: "Umiejętności",
    hash: "#Umiejętności",
  },
  {
    name: "Projekty",
    hash: "#Projekty",
  },

  {
    name: "Doświadczenie",
    hash: "#Doświadczenie",
  },
  {
    name: "Kontakt",
    hash: "#Kontakt",
  },
] as const;

export const experiencesData = [
  {
    title: "Stażysta w dziale IT",
    location: "NASK ",
    description:
      "Nauczyłem się jak naprawdę wygląda praca w firmie programistycznej przy dużym projekcie",
    icon: React.createElement(FaReact),
    date: "kwi 2021 – sie 2021 · 5 mies.",
  },
  {
    title: "Stażysta front-end",
    location: "T-Matic Grupa Computer Plus",
    description:
      "Pracowałem nad programem optymalizującym wybór usługi którą firma sprzedawała używająć HTML, Css, JavaScript, PHP",
    icon: React.createElement(CgWorkAlt),
    date: "maj 2022 – cze 2022 · 2 mies",
  },
  {
    title: "Ukończyłem Technikum Programistyczne  ",
    location: "Infotech",
    description:
      "Ukończyłem technikum ze zdaną Maturą i zawodem Technik Programista",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Jestem na 4 semestrze studiów informatycznych  ",
    location: "Politechnika Wrocławska",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "Now",
  },
] as const;

export const projectsData = [
  {
    title: "Quicktest",
    description:
      "Testownik wykorzystywany przez studentów politechniki do nauki przed egzaminami",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Prisma"],
    imageUrl: Testownik,
  },
  {
    title: "ForumTin",
    description:
      "Forum stworzene dla mojego kierunku na politechnice aby uczyć się i wymieniać doświadczeniami",
    tags: ["React", "Prisma", "Next.js", "Tailwind", "TypeScript"],
    imageUrl: ForumTin,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Python",
  "Framer Motion",
] as const;
