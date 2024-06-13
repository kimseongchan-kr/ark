import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { createSplitProps } from '../../utils/create-split-props'
import { type HTMLArkProps, ark } from '../factory'
import type { UseClipboardReturn } from './use-clipboard'
import { ClipboardProvider } from './use-clipboard-context'

export interface ClipboardRootProviderBaseProps {
  value: UseClipboardReturn
}
export interface ClipboardRootProviderProps
  extends HTMLArkProps<'div'>,
    ClipboardRootProviderBaseProps {}

export const ClipboardRootProvider = forwardRef<HTMLDivElement, ClipboardRootProviderProps>(
  (props, ref) => {
    const [{ value: clipboard }, localProps] = createSplitProps<ClipboardRootProviderBaseProps>()(
      props,
      ['value'],
    )
    const mergedProps = mergeProps(clipboard.getRootProps(), localProps)

    return (
      <ClipboardProvider value={clipboard}>
        <ark.div ref={ref} {...mergedProps} />
      </ClipboardProvider>
    )
  },
)

ClipboardRootProvider.displayName = 'ClipboardRootProvider'
