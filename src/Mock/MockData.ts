import { NavBarOption } from "../Types/NavBarOption";

export class NavBarOptions {
  static navBarOptions: NavBarOption[] = [
    {
      id: "1",
      name: "Home",
      path: "/home",
      icon: "home",
      function: () => {
        console.log("Home");
      },
    },
    {
      id: "2",
      name: "Istituto",
      path: "/istituto",
      icon: "school",
      function: () => {
        console.log("Istituto");
      },
    },
    {
      id: "3",
      name: "Attività e Progetti",
      path: "/attivita",

      icon: "work",
      function: () => {
        console.log("Attività e Progetti");
      },
    },
    {
      id: "4",
      name: "Studenti e Genitori",
      path: "/studenti",
      icon: "people",
      function: () => {
        console.log("Studenti e Genitori");
      },
    },
    {
      id: "5",
      name: "Docenti e ATA",
      path: "/docenti",
      icon: "people",
      function: () => {
        console.log("Docenti e ATA");
      },
    },
    {
      id: "6",
      name: "Circolari",
      path: "/circolari",
      icon: "description",
      function: () => {
        console.log("Circolari");
      },
    },
    {
      id: "7",
      name: "Codice disciplinare",
      path: "/codice",
      icon: "description",
      function: () => {
        console.log("Codice disciplinare");
      },
    },
    {
      id: "8",
      name: "News",
      path: "/news",
      icon: "description",
      function: () => {
        console.log("News");
      },
    },
    {
      id: "9",
      name: "Contatti",
      path: "/contatti",
      icon: "contact_mail",
      function: () => {
        console.log("Contatti");
      },
    },
  ];
}
