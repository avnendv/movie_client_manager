import Swal from "sweetalert2";

interface SwalOption {
  title: string;
}

const toast = Swal.mixin({
  toast: true,
  icon: "success",
  title: "",
  position: "top-right",
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
});

const toastSuccess = (params: SwalOption) => {
  toast.fire({
    icon: "success",
    ...params,
  });
};

const toastError = (params: SwalOption) => {
  toast.fire({
    icon: "error",
    ...params,
  });
};

const toastWarning = (params: SwalOption) => {
  toast.fire({
    icon: "warning",
    ...params,
  });
};

const toastInfo = (params: SwalOption) => {
  toast.fire({
    icon: "info",
    ...params,
  });
};

const toastQuestion = (params: SwalOption) => {
  toast.fire({
    icon: "question",
    ...params,
  });
};

export function useToast() {
  return {
    toast,
    toastSuccess,
    toastError,
    toastWarning,
    toastInfo,
    toastQuestion,
  };
}
