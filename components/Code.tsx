import React, { useContext, ReactNode } from 'react';
import classnames from 'classnames';
import { BlockContext, BlockContextValue } from '~/context';

export default function Code({ children }: { children: ReactNode }) {
  const blockContext = useContext(BlockContext);
  return (
    <code
      className={classnames('font-mono rounded px-1.5 py-0.5', {
        'bg-slate-100 dark:bg-slate-900': blockContext === null,
        'bg-amber-200': blockContext === BlockContextValue.Information,
        'text-white': blockContext === BlockContextValue.CodeBlock,
      })}
      data-test='code'
    >
      {children}
    </code>
  );
}
