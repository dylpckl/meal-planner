'use client'
import { DndContext, closestCenter } from '@dnd-kit/core'

export default function DndContextProvider({ children }) {
    return (
        <DndContext>
            {children}
        </DndContext>
    )
}