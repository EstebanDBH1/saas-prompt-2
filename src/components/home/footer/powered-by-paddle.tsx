import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export function PoweredByPaddle() {
  return (
    <>
      <Separator className={'footer-border'} />
      <div
        className={
          'flex flex-col justify-center items-center gap-2 text-muted-foreground text-sm leading-[14px] py-[24px]'
        }
      >
        <div className={'flex justify-center items-center gap-2'}>
          <span className={'text-sm leading-[14px]'}>Banco de Prompts © 2026</span>
        </div>
        <div className={'flex justify-center items-center gap-2 flex-wrap md:flex-nowrap'}>
          <Link className={'text-sm leading-[14px]'} href={'#'} target={'_blank'}>
            <span className={'flex items-center gap-1'}>
              Términos
            </span>
          </Link>
          <Link className={'text-sm leading-[14px]'} href={'#'} target={'_blank'}>
            <span className={'flex items-center gap-1'}>
              Privacidad
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
