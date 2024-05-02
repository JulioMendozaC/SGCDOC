'use client'
import React, { ReactNode, useState } from 'react'
import { Dialog } from '@headlessui/react'


interface Props {
  children: ReactNode
  isOpen: boolean,
  setIsOpen: (open: boolean) => void
}

export function Modal({ children, isOpen= false, setIsOpen}: Props) {

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative  z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/80" aria-hidden="true" />

      {/* Full-screen scrollable container */}
      <div className="fixed inset-0 w-screen overflow-y-auto">
        {/* Container to center the panel */}
        <div className="flex min-h-full  items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="mx-auto max-w-sm rounded  bg-background">
            <Dialog.Title>Ingresa los datos</Dialog.Title>
            {children}

          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}

export default Modal