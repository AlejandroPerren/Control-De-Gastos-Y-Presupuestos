import { PropsWithChildren } from "react"

export const ErrrorMessage = ({children}: PropsWithChildren) => {
  return (
    <p className="bg-red-600 p-2 text-white font-bold text-sm text-center">
        {children}
    </p>
  )
}
