import { Suspense } from 'react';
import Loading from '@/components/Loading';

export function lazyFC(children: React.ReactNode) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}
