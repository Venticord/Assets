import { Toasts } from "@webpack/common";

Toasts.show({
  id: Toasts.genId(),
  message: "Hello from Venticord!",
  type: Toasts.Type.MESSAGE
});
