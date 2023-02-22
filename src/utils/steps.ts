import { Step } from "../context/interfaces";

export const steps: Step[] = [
  {
    caption: "SELECCIONA TU ORDEN",
    title: "Prodcutos",
    description: "Por favor realiza tu ordén",
    isCompleted: true,
  },
  {
    caption: "REGISTRA TUS DATOS",
    title: "REGISTRA LOS DATOS DE ENTREGA",
    description: "Datos",
    isCompleted: true,
  },
  {
    caption: "FINALIZA TU ORDÉN",
    title: "Revisa Y finaliza tu ordén",
    description: "Revisa que todo este bien",
    isCompleted: true,
  },

  {
    title: "Gracias por tu ordén!",
    description:
      "Pronto nos contactaremos contigo para terminar la ordén de tu pedido",
    isCompleted: true,
  },
];

export const paymentMethods = [
  {
    label: "Transferencia Nequi",
    value: "Transferencia Nequi",
  },
  {
    label: "Transferencia Bancolombia",
    value: "Transferencia Bancolombia",
  },
  {
    label: "Efectivo",
    value: "Efectivo",
  },
];
