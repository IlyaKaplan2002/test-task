import avatar from "@assets/images/avatar.png";

export type Agenda = {
  time: string;
  title: string;
  speakers: { name: string; position: string; avatar: string }[];
};

export const agendaData: Agenda[] = [
  {
    time: "9:30 AM - 10:50 AM GMT +2",
    title: "Statistical Mathods and Machine Learning",
    speakers: [
      { name: "Leon Lee", position: "FOUNDER & CEO OF ONLY1", avatar },
      { name: "Leon Lee", position: "FOUNDER & CEO OF ONLY1", avatar },
    ],
  },
  {
    time: "9:30 AM - 10:50 AM GMT +2",
    title: "Statistical Mathods and Machine Learning",
    speakers: [
      { name: "Leon Lee", position: "FOUNDER & CEO OF ONLY1", avatar },
      { name: "Leon Lee", position: "FOUNDER & CEO OF ONLY1", avatar },
    ],
  },
  {
    time: "9:30 AM - 10:50 AM GMT +2",
    title: "Statistical Mathods and Machine Learning",
    speakers: [
      { name: "Leon Lee", position: "FOUNDER & CEO OF ONLY1", avatar },
      { name: "Leon Lee", position: "FOUNDER & CEO OF ONLY1", avatar },
    ],
  },
  {
    time: "9:30 AM - 10:50 AM GMT +2",
    title: "Statistical Mathods and Machine Learning",
    speakers: [
      { name: "Leon Lee", position: "FOUNDER & CEO OF ONLY1", avatar },
      { name: "Leon Lee", position: "FOUNDER & CEO OF ONLY1", avatar },
    ],
  },
];
