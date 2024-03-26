import { useState } from "react";
import "./assets/css/App.css";
import Toast, { ToastProps, ToastType } from "../../components/toast/Toast";

function TestPage() {
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
      <div className="app-row app-row--group">
        {/* TOAST DEMO */}
        <button
          onClick={() => {
            showToast("Success Heading", "This is a success text!", "success");
          }}
        >
          Show Success Toast
        </button>
        <button
          onClick={() =>
            showToast("Error Heading", "This is a failure text!", "error")
          }
        >
          Show Error Toast
        </button>
        <button
          onClick={() =>
            showToast("Information Heading", "This is an info text!", "info")
          }
        >
          Show Info Toast
        </button>
        <button
          onClick={() =>
            showToast("Warning Heading", "This is a warning text!", "warning")
          }
        >
          Show Warning Toast
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

export default TestPage
