import { Toasts } from "@webpack/common";

Toasts.show({
  id: Toasts.genId(),
  message: "Did you forget to pass a URL in?",
  type: Toasts.Type.FALIURE
});
