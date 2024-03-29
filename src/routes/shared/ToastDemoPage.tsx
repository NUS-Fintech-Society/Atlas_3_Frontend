import { useState } from "react";
import Toast, { ToastProps, ToastType } from "../../components/shared/Toast";

function ToastDemoPage() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const showToast = (heading: string, message: string, type: ToastType) => {
    const key = Date.now();
    const toast = {
      key,
      heading,
      message,
      type,
      onClose: () => removeToast(key),
    };

    setToasts([toast]);

    setTimeout(() => {
      removeToast(toast.key);
    }, 5000);
  };

  const removeToast = (key: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.key !== key));
  };

  return (
    <>
      <h1>Hello World!</h1>
      <div>
        {/* TOAST DEMO */}
        <button
          onClick={() => {
            showToast("Success Heading", "This is a success text!", "success");
          }}
        >
          Click to Show Success Toast
        </button>
        <br />
        <button
          onClick={() =>
            showToast("Error Heading", "This is a failure text!", "error")
          }
        >
          Click to Show Error Toast
        </button>
        <br />
        <button
          onClick={() =>
            showToast("Information Heading", "This is an info text!", "info")
          }
        >
          Click to Show Info Toast
        </button>
        <br />
        <button
          onClick={() =>
            showToast("Warning Heading", "This is a warning text!", "warning")
          }
        >
          Click to Show Warning Toast
        </button>
      </div>
      {/* END TOAST DEMO */}

      {/* TOASTS */}
      {toasts.map((x) => (
        <Toast {...x} key={x.key} />
      ))}
    </>
  );
}

export default ToastDemoPage