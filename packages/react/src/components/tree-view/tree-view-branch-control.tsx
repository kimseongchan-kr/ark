import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { type HTMLArkProps, ark } from '../factory'
import { useTreeViewBranchContext } from './use-tree-view-branch-context'
import { useTreeViewContext } from './use-tree-view-context'

export type TreeViewBranchControlBaseProps = {}
export interface TreeViewBranchControlProps
  extends HTMLArkProps<'div'>,
    TreeViewBranchControlBaseProps {}

export const TreeViewBranchControl = forwardRef<HTMLDivElement, TreeViewBranchControlProps>(
  (props, ref) => {
    const treeView = useTreeViewContext()
    const branchContext = useTreeViewBranchContext()
    const mergedProps = mergeProps(treeView.getBranchControlProps(branchContext), props)

    return <ark.div {...mergedProps} ref={ref} />
  },
)

TreeViewBranchControl.displayName = 'TreeViewBranchControl'
