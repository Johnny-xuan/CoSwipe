import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import { DEMO_STEPS } from '@/data/mockDemoData'
import type { WalkthroughStep } from '@/data/mockDemoData'
import type { TabKey } from '@/types/schemas'

interface DemoContextType {
  currentStepIndex: number
  currentStep: WalkthroughStep
  steps: WalkthroughStep[]
  activeTab: TabKey
  setActiveTab: (tab: TabKey) => void
  setStep: (index: number) => void
  nextStep: () => void
  backStep: () => void
}

const DemoContext = createContext<DemoContextType | undefined>(undefined)

export function DemoProvider({ children }: { children: ReactNode }) {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0)
  const [activeTab, setActiveTabState] = useState<TabKey>('home')

  const setStep = (index: number) => {
    if (index >= 0 && index < DEMO_STEPS.length) {
      setCurrentStepIndex(index)
      // 如果跳转到某些步骤，自动强制重设手机底部 Tab 为 'home'
      setActiveTabState('home')
    }
  }

  const nextStep = () => {
    if (currentStepIndex < DEMO_STEPS.length - 1) {
      setStep(currentStepIndex + 1)
    }
  }

  const backStep = () => {
    if (currentStepIndex > 0) {
      setStep(currentStepIndex - 1)
    }
  }

  const setActiveTab = (tab: TabKey) => {
    setActiveTabState(tab)
  }

  const currentStep = DEMO_STEPS[currentStepIndex]

  return (
    <DemoContext.Provider
      value={{
        currentStepIndex,
        currentStep,
        steps: DEMO_STEPS,
        activeTab,
        setActiveTab,
        setStep,
        nextStep,
        backStep,
      }}
    >
      {children}
    </DemoContext.Provider>
  )
}

export function useDemo() {
  const context = useContext(DemoContext)
  if (!context) {
    throw new Error('useDemo must be used within a DemoProvider')
  }
  return context
}
