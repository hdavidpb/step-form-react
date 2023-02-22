import { Step } from "../context/interfaces";

export const steps: Step[] = [
  {
    caption: "SELECCIONA TU ORDEN",
    title: "Productos",
    description: "Por favor realiza tu orden",
    isCompleted: false,
  },
  {
    caption: "REGISTRA TUS DATOS",
    title: "REGISTRA LOS DATOS DE ENTREGA",
    description: "",
    isCompleted: false,
  },
  {
    caption: "FINALIZA TU ORDEN",
    title: "Revisa Y finaliza tu orden",
    description: "Verifica que todo este en bien",
    isCompleted: true,
  },

  {
    title: "Gracias por tu orden!",
    description:
      "Pronto nos contactaremos contigo para terminar la orden de tu pedido",
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
