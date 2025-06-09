"use client"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"

export function ToastExample() {
  const showSuccessToast = () => {
    toast.success("Success! Your action was completed successfully.")
  }

  const showErrorToast = () => {
    toast.error("Error! Something went wrong.")
  }

  const showInfoToast = () => {
    toast.info("Info: Here's some information for you.")
  }

  const showWarningToast = () => {
    toast.warning("Warning: Please be careful with this action.")
  }

  const showPromiseToast = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.5 ? resolve("Success!") : reject("Failed!")
      }, 2000)
    })

    toast.promise(promise, {
      loading: "Loading...",
      success: "Promise resolved!",
      error: "Promise rejected!",
    })
  }

  return (
    <div className="flex flex-col gap-4 p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Toast Examples</h2>
      
      <Button onClick={showSuccessToast} variant="default">
        Show Success Toast
      </Button>
      
      <Button onClick={showErrorToast} variant="destructive">
        Show Error Toast
      </Button>
      
      <Button onClick={showInfoToast} variant="outline">
        Show Info Toast
      </Button>
      
      <Button onClick={showWarningToast} variant="secondary">
        Show Warning Toast
      </Button>
      
      <Button onClick={showPromiseToast} variant="default">
        Show Promise Toast
      </Button>
    </div>
  )
} 